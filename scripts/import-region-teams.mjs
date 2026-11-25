// Import the official SLFF region team lists for a season (the "region team
// list" sheet export) and write them to the region boards.
//
//   node --env-file=.env scripts/import-region-teams.mjs data/regions/2027-teams.csv 2027
//
// CSV: two columns per region, "<Region> 1-Play" and "<Region> 2-Play"; cells
// are team numbers. Each region's list = its 1-play + 2-play columns. Region
// names map to the RegionGroups imported by scripts/import-regions.mjs
// ("West/Pacific" -> "west"), so import the region -> events sheet first.
//
// The sheet is a snapshot: re-run this with a fresh export whenever it
// changes. Between imports the sync keeps the list as-is and only adds teams
// that register later and aren't on any list (see region-groups.ts).
//
// Only the region membership is taken from the sheet. The 1-play / 2-play
// split is NOT stored: the board's Plays column and the scoring always follow
// the TBA registrations, and this script just reports where the sheet differs.
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { PrismaClient } = require("../generated/prisma");

const [csvPath, yearArg] = process.argv.slice(2);
const year = Number(yearArg);
if (!csvPath || !Number.isInteger(year)) {
  console.error(
    "usage: node --env-file=.env scripts/import-region-teams.mjs <teams.csv> <year>",
  );
  process.exit(1);
}

// Same rule as import-regions.mjs: "West/Pacific" -> "west".
const abbreviationOf = (name) =>
  name.split("/")[0].toLowerCase().replace(/[^a-z0-9]/g, "");

const rows = readFileSync(csvPath, "utf8")
  .replace(/^﻿/, "")
  .trim()
  .split(/\r?\n/)
  .map((line) => line.split(",").map((c) => c.trim()));

// region abbreviation -> { name, plays: Map<team, 1|2> }
const regions = new Map();
const regionOfTeam = new Map();
rows[0].forEach((header, col) => {
  if (!header) return;
  const m = header.match(/^(.*?)\s+(\d)\s*-\s*play$/i);
  if (!m) throw new Error(`unexpected column header "${header}" (want "<Region> 1-Play")`);
  const [, name, playsStr] = m;
  const abbreviation = abbreviationOf(name);
  const plays = Number(playsStr);
  const region = regions.get(abbreviation) ?? { name, plays: new Map() };
  regions.set(abbreviation, region);
  for (const row of rows.slice(1)) {
    const cell = row[col];
    if (!cell) continue;
    const n = Number(cell);
    if (!Number.isInteger(n) || n <= 0) throw new Error(`${header}: bad team number "${cell}"`);
    const prev = regionOfTeam.get(n);
    if (prev && prev !== abbreviation) {
      throw new Error(`team ${n} is in both ${regions.get(prev).name} and ${name}`);
    }
    if (region.plays.has(n)) throw new Error(`team ${n} is listed twice in ${name}`);
    regionOfTeam.set(n, abbreviation);
    region.plays.set(n, plays);
  }
});

const url = process.env.DATABASE_URL;
const db = new PrismaClient({
  datasources: { db: { url: `${url}${url.includes("?") ? "&" : "?"}maxPoolSize=2` } },
});

try {
  const groups = await db.regionGroup.findMany({ where: { year } });
  const groupByAbbr = new Map(groups.map((g) => [g.abbreviation, g]));
  const unknown = [...regions.keys()].filter((a) => !groupByAbbr.has(a));
  if (unknown.length) {
    throw new Error(
      `no ${year} RegionGroup for: ${unknown.join(", ")} — import the region -> events sheet first`,
    );
  }
  const unlisted = groups.filter((g) => !regions.has(g.abbreviation));
  if (unlisted.length) {
    console.warn(
      `  ! not in this sheet (keeps its roster-built list): ${unlisted.map((g) => g.displayName).join(", ")}`,
    );
  }
  const official = new Set(
    (await db.district.findMany({ where: { year }, select: { key: true } })).map((d) => d.key),
  );

  // Registrations, for the 1-play / 2-play cross-check (regionals only — the
  // region boards' scoring window).
  const regionals = await db.event.findMany({
    where: { year, eventType: 0 },
    select: { key: true },
  });
  const rosters = await db.eventTeam.findMany({
    where: { eventKey: { in: regionals.map((e) => e.key) } },
    select: { teamNumbers: true },
  });
  const regionalCount = new Map();
  for (const r of rosters) {
    for (const n of r.teamNumbers) regionalCount.set(n, (regionalCount.get(n) ?? 0) + 1);
  }

  const now = new Date();
  for (const [abbreviation, region] of regions) {
    const g = groupByAbbr.get(abbreviation);
    if (official.has(g.key)) throw new Error(`${g.key} is an official FIRST district key`);
    const teamNumbers = [...region.plays.keys()].sort((a, b) => a - b);
    await db.regionGroup.update({
      where: { key: g.key },
      data: { teamNumbers, teamsListedAt: now },
    });
    // Write the board's list now; the next sync adds any later registrations.
    await db.districtTeam.upsert({
      where: { districtKey: g.key },
      create: { districtKey: g.key, teamNumbers },
      update: { teamNumbers },
    });

    const ones = [...region.plays.values()].filter((p) => p === 1).length;
    console.log(
      `${g.key.padEnd(16)} ${g.displayName.padEnd(14)} ${String(teamNumbers.length).padStart(4)} teams  (1-play ${ones}, 2-play ${teamNumbers.length - ones})`,
    );
    const disagree = [...region.plays]
      .map(([n, plays]) => ({ n, plays, registered: Math.min(regionalCount.get(n) ?? 0, 2) }))
      .filter((x) => x.plays !== x.registered);
    for (const x of disagree) {
      console.log(
        `    ${x.n}: sheet says ${x.plays}-play; board follows registrations: ${regionalCount.get(x.n) ?? 0} regional(s)`,
      );
    }
  }
} finally {
  await db.$disconnect();
}
