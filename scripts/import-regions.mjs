// Import SLFF regional groupings for a season from the "Regions" sheet export.
//
//   node --env-file=.env scripts/import-regions.mjs data/regions/2027.csv 2027
//
// CSV: one column per region; header = region name ("West/Pacific"), cells =
// event codes without the year ("nybu"). Upserts one RegionGroup per column and
// removes that season's groupings that are no longer in the file. Team lists are
// then built from the event rosters by the sync — run it right away with
//   GET /api/cron/sync?task=regions&years=2027   (Bearer CRON_SECRET)
// or wait for the daily cron.
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { PrismaClient } = require("../generated/prisma");

const [csvPath, yearArg] = process.argv.slice(2);
const year = Number(yearArg);
if (!csvPath || !Number.isInteger(year)) {
  console.error("usage: node --env-file=.env scripts/import-regions.mjs <regions.csv> <year>");
  process.exit(1);
}

// "West/Pacific" -> "west"; "Northeast" -> "northeast".
const abbreviationOf = (name) =>
  name.split("/")[0].toLowerCase().replace(/[^a-z0-9]/g, "");

const rows = readFileSync(csvPath, "utf8")
  .replace(/^﻿/, "")
  .trim()
  .split(/\r?\n/)
  .map((line) => line.split(",").map((c) => c.trim()));
const regions = rows[0]
  .map((name, i) => ({
    name,
    abbreviation: abbreviationOf(name),
    eventKeys: rows
      .slice(1)
      .map((r) => (r[i] ?? "").toLowerCase())
      .filter(Boolean)
      .map((code) => `${year}${code}`),
  }))
  .filter((r) => r.name && r.abbreviation);

const dupAbbr = regions.map((r) => r.abbreviation).filter((a, i, all) => all.indexOf(a) !== i);
if (dupAbbr.length) throw new Error(`duplicate region abbreviations: ${dupAbbr.join(", ")}`);
const seen = new Map();
for (const r of regions)
  for (const k of r.eventKeys) {
    if (seen.has(k)) throw new Error(`${k} is in both ${seen.get(k)} and ${r.name}`);
    seen.set(k, r.name);
  }

const url = process.env.DATABASE_URL;
const db = new PrismaClient({
  datasources: { db: { url: `${url}${url.includes("?") ? "&" : "?"}maxPoolSize=2` } },
});

try {
  const official = new Set(
    (await db.district.findMany({ where: { year }, select: { key: true } })).map((d) => d.key),
  );
  const known = new Set(
    (await db.event.findMany({ where: { year }, select: { key: true } })).map((e) => e.key),
  );

  for (const r of regions) {
    const key = `${year}${r.abbreviation}`;
    if (official.has(key)) throw new Error(`${key} is an official FIRST district key`);
    const missing = r.eventKeys.filter((k) => !known.has(k));
    if (missing.length) console.warn(`  ! ${r.name}: not in DB yet: ${missing.join(", ")}`);
    await db.regionGroup.upsert({
      where: { key },
      create: { key, year, abbreviation: r.abbreviation, displayName: r.name, eventKeys: r.eventKeys },
      update: { abbreviation: r.abbreviation, displayName: r.name, eventKeys: r.eventKeys },
    });
    console.log(`${key.padEnd(18)} ${r.name.padEnd(14)} ${r.eventKeys.length} events`);
  }

  // Drop this season's groupings that were removed from the sheet, with their
  // team lists (never touching an official district's roster).
  const keep = new Set(regions.map((r) => `${year}${r.abbreviation}`));
  const stale = (await db.regionGroup.findMany({ where: { year }, select: { key: true } }))
    .map((g) => g.key)
    .filter((k) => !keep.has(k));
  for (const key of stale) {
    await db.regionGroup.delete({ where: { key } });
    if (!official.has(key)) await db.districtTeam.deleteMany({ where: { districtKey: key } });
    console.log(`removed ${key}`);
  }
} finally {
  await db.$disconnect();
}
