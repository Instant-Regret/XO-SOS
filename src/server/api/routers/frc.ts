import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { getActiveWeights, predict, type Weights4 } from "~/server/lib/scoring-fit";
import { eventBreakdown } from "~/server/lib/scoring-sync";

// ---- Score columns (XVAL / XROBOT / XAWARDS / XSOS + per-year history) ----

type ScoreRow = {
  teamNumber: number;
  year: number;
  stdXrobot: number;
  stdXawards: number;
  stdXval: number;
  regXrobot: number;
  regXawards: number;
  regXval: number;
  dctXrobot: number;
  dctXawards: number;
  dctXval: number;
  fullXrobot: number;
  fullXawards: number;
  fullXval: number;
  diffStd: number | null;
  diffReg: number | null;
  diffDct: number | null;
};

export type TeamScoreColumns = {
  // Main columns. On reg/dct boards these are the weighted-4-year predictions;
  // on champs-division boards ("full") they're the actual full-season values.
  xval: number;
  xrobot: number;
  xawards: number;
  xsos: number | null;
  // Raw XVAL per season for the 5 per-year columns (window-dependent).
  yearVals: Record<number, number | null>;
  // Human-readable calculation per column, surfaced by debug mode.
  debug: {
    window: string;
    xrobot: string;
    xawards: string;
    xval: string;
    xsos: string;
    yearVals: Record<number, string>;
  };
};

// Score window: "std" = first 2 events any type (global leaderboard), "reg" =
// regional groupings (regionals one-play, or 50% district), "dct" = official
// district (first 2 district + dcmp), "full" = every event (champs pages).
type ScoreWindow = "std" | "reg" | "dct" | "full";

// Turn stored TeamScore rows into per-team display columns. Pure so each board
// query can fetch the rows however it likes and share this shaping.
function buildScoreColumns(
  scores: ScoreRow[],
  weights: { robot: Weights4; awards: Weights4 },
  numbers: number[],
  year: number,
  window: ScoreWindow,
): Map<number, TeamScoreColumns> {
  // Per-window field accessors.
  const valOf = (s: ScoreRow) =>
    window === "full"
      ? s.fullXval
      : window === "dct"
        ? s.dctXval
        : window === "reg"
          ? s.regXval
          : s.stdXval;
  const robotOf = (s: ScoreRow) =>
    window === "full"
      ? s.fullXrobot
      : window === "dct"
        ? s.dctXrobot
        : window === "reg"
          ? s.regXrobot
          : s.stdXrobot;
  const awardsOf = (s: ScoreRow) =>
    window === "full"
      ? s.fullXawards
      : window === "dct"
        ? s.dctXawards
        : window === "reg"
          ? s.regXawards
          : s.stdXawards;
  const diffOf = (s: ScoreRow) =>
    window === "dct" ? s.diffDct : window === "reg" ? s.diffReg : s.diffStd;

  const byTeam = new Map<number, Map<number, ScoreRow>>();
  for (const s of scores) {
    const m = byTeam.get(s.teamNumber) ?? new Map<number, ScoreRow>();
    m.set(s.year, s);
    byTeam.set(s.teamNumber, m);
  }

  // XSOS = percentile of schedule difficulty WITHIN this board's pool (the teams
  // in `numbers`), so it's relative to the district / event / global list shown.
  const poolDiffs: number[] = [];
  for (const n of numbers) {
    const d = byTeam.get(n)?.get(year);
    const v = d ? diffOf(d) : null;
    if (v != null) poolDiffs.push(v);
  }
  poolDiffs.sort((a, b) => a - b);
  const xsosPct = (v: number | null): number | null => {
    if (v == null || poolDiffs.length < 2) return null;
    let below = 0;
    for (const x of poolDiffs) if (x < v) below++;
    return Math.round((below / (poolDiffs.length - 1)) * 100);
  };

  const out = new Map<number, TeamScoreColumns>();
  for (const n of numbers) {
    const ys = byTeam.get(n) ?? new Map<number, ScoreRow>();
    const cur = ys.get(year);

    const yearVals: Record<number, number | null> = {};
    for (let y = year - 4; y <= year; y++) {
      const s = ys.get(y);
      yearVals[y] = s ? valOf(s) : null;
    }

    const f1 = (x: number) => (Math.round(x * 10) / 10).toFixed(1);
    const windowName =
      window === "full"
        ? "full season"
        : window === "dct"
          ? "district (+dcmp)"
          : window === "reg"
            ? "regional grouping"
            : "global (first 2)";

    let xval: number;
    let xrobot: number;
    let xawards: number;
    let robotCalc: string;
    let awardsCalc: string;
    if (window === "full") {
      xrobot = cur?.fullXrobot ?? 0;
      xawards = cur?.fullXawards ?? 0;
      xval = cur?.fullXval ?? 0;
      robotCalc = `full-season XROBOT = ${f1(xrobot)}`;
      awardsCalc = `full-season XAWARDS = ${f1(xawards)}`;
    } else {
      // Predict from the same window's prior-year values.
      const priorsR = [1, 2, 3, 4].map((k) => {
        const s = ys.get(year - k);
        return s ? robotOf(s) : 0;
      }) as [number, number, number, number];
      const priorsA = [1, 2, 3, 4].map((k) => {
        const s = ys.get(year - k);
        return s ? awardsOf(s) : 0;
      }) as [number, number, number, number];
      xrobot = predict(weights.robot, priorsR);
      xawards = predict(weights.awards, priorsA);
      xval = xrobot + xawards;
      const term = (w: Weights4, p: number[], k: number) =>
        `${w[k]!.toFixed(2)}×${f1(p[k]!)}[${year - 1 - k}]`;
      robotCalc = `${[0, 1, 2, 3].map((k) => term(weights.robot, priorsR, k)).join(" + ")} = ${f1(xrobot)}`;
      awardsCalc = `${[0, 1, 2, 3].map((k) => term(weights.awards, priorsA, k)).join(" + ")} = ${f1(xawards)}`;
    }

    const curDiff = cur ? diffOf(cur) : null;
    const xsos = xsosPct(curDiff);
    const xsosCalc =
      curDiff == null
        ? "no schedule data"
        : `sched strength ${Math.round(curDiff)} → ${xsos ?? "—"} pctile of ${poolDiffs.length}-team pool`;

    const yearDebug: Record<number, string> = {};
    for (let y = year - 4; y <= year; y++) {
      const v = yearVals[y];
      yearDebug[y] = v == null ? `${y}: no data` : `${y} ${windowName} XVAL = ${f1(v)}`;
    }

    out.set(n, {
      xval: Math.round(xval * 10) / 10,
      xrobot: Math.round(xrobot * 10) / 10,
      xawards: Math.round(xawards * 10) / 10,
      xsos,
      yearVals,
      debug: {
        window: windowName,
        xrobot: `XROBOT (${windowName}): ${robotCalc}`,
        xawards: `XAWARDS (${windowName}): ${awardsCalc}`,
        xval: `XVAL = XROBOT ${f1(xrobot)} + XAWARDS ${f1(xawards)} = ${f1(xval)}`,
        xsos: `XSOS: ${xsosCalc}`,
        yearVals: yearDebug,
      },
    });
  }
  return out;
}

// Current-year TeamEventResult shape used for the debug scoring breakdown.
type YearResult = {
  teamNumber: number;
  eventKey: string;
  eventType: number;
  startDate: string | null;
  qualRank: number | null;
  numTeams: number | null;
  allianceSeed: number | null;
  pickRole: string | null;
  elimWins: number;
};

// Replace the current-year entry of each team's debug.yearVals with a full
// per-event breakdown (seeding + picking + playoff + awards per event) so debug
// mode can verify the scoring. Only the board's year is detailed; switch the
// season to inspect a different year.
function mergeYearBreakdown(
  scoreByTeam: Map<number, TeamScoreColumns>,
  results: YearResult[],
  awardsByTeam: Map<
    number,
    { eventKey: string; awardType: number; name: string; year: number }[]
  >,
  year: number,
  window: ScoreWindow,
  // For district windows: event -> districtKey and the board's district, so the
  // breakdown counts only that district's events (matching the stored value).
  eventDistrict?: Map<string, string | null>,
  boardDistrict?: string | null,
) {
  const isQual = (t: number) => t === 0 || t === 1;
  const isDcmp = (t: number) => t === 2 || t === 5;
  const inDistrict = (key: string) =>
    boardDistrict == null || eventDistrict?.get(key) === boardDistrict;
  const byTeam = new Map<number, YearResult[]>();
  for (const r of results) {
    const list = byTeam.get(r.teamNumber) ?? [];
    list.push(r);
    byTeam.set(r.teamNumber, list);
  }
  for (const [team, evs] of byTeam) {
    const col = scoreByTeam.get(team);
    if (!col) continue;
    const scored = evs.map((r) => {
      const aw = (awardsByTeam.get(team) ?? [])
        .filter((a) => a.eventKey === r.eventKey && a.year === year)
        .map((a) => ({ awardType: a.awardType, name: a.name }));
      return { r, b: eventBreakdown({ ...r, opponents: [] }, aw) };
    });
    const byDate = (a: { r: YearResult }, b: { r: YearResult }) =>
      (a.r.startDate ?? "").localeCompare(b.r.startDate ?? "");
    const first2 = scored.filter((s) => isQual(s.r.eventType)).sort(byDate).slice(0, 2);
    const district2 = scored
      .filter((s) => s.r.eventType === 1 && inDistrict(s.r.eventKey))
      .sort(byDate)
      .slice(0, 2);
    const regional2 = scored.filter((s) => s.r.eventType === 0).sort(byDate).slice(0, 2);
    const dcmp = scored.filter((s) => isDcmp(s.r.eventType) && inDistrict(s.r.eventKey));

    let windowEvents: typeof scored;
    let note = "";
    if (window === "full") {
      windowEvents = scored;
    } else if (window === "dct") {
      windowEvents = [...district2, ...dcmp];
      if (district2.length === 1 && dcmp.length === 0) note = " · one-play → ×1.6 +14";
    } else if (window === "reg") {
      if (regional2.length >= 2) {
        windowEvents = regional2;
      } else if (regional2.length === 1) {
        windowEvents = regional2;
        note = " · one-play → ×1.6 +14";
      } else {
        windowEvents = district2;
        note = " · 50% of district, then ×1.6 +14";
      }
    } else {
      // std
      windowEvents = first2;
      if (first2.length === 1 && dcmp.length === 0) note = " · one-play → ×1.6 +14";
    }
    if (windowEvents.length === 0) continue;

    const parts = windowEvents.map(
      (s) =>
        `${s.r.eventKey}: seed ${s.b.seeding} + pick ${s.b.picking} + play ${s.b.playoff} + aw ${s.b.awards} = ${s.b.xrobot + s.b.xawards}`,
    );
    const total = windowEvents.reduce((t, s) => t + s.b.xrobot + s.b.xawards, 0);
    col.debug.yearVals[year] = `${year} [${window}]  ${parts.join("   |   ")}   →  Σ ${total}${note}`;
  }
}

// Attach each award's event start date (for chronological ordering in the
// awards tooltip). Awards only store the event key, so we look the dates up.
type AwardRow = { eventKey: string; awardType: number; name: string; year: number };
function attachAwardDates(
  awards: AwardRow[],
  dateByEvent: Map<string, string | null>,
): (AwardRow & { startDate: string | null })[] {
  return awards.map((a) => ({ ...a, startDate: dateByEvent.get(a.eventKey) ?? null }));
}

// Per-team alliance selection by event, for the event-wins tooltip.
function buildPickMap(
  results: {
    teamNumber: number;
    eventKey: string;
    allianceSeed: number | null;
    pickRole: string | null;
  }[],
): Map<number, Record<string, { seed: number; role: string }>> {
  const m = new Map<number, Record<string, { seed: number; role: string }>>();
  for (const r of results) {
    if (r.allianceSeed == null || r.pickRole == null) continue;
    const rec = m.get(r.teamNumber) ?? {};
    rec[r.eventKey] = { seed: r.allianceSeed, role: r.pickRole };
    m.set(r.teamNumber, rec);
  }
  return m;
}

const yearInput = z.object({ year: z.number().int() });
const districtInput = z.object({ districtKey: z.string().min(1) });
const eventInput = z.object({ eventKey: z.string().min(1) });
const teamInput = z.object({ teamNumber: z.number().int() });
const scopeInput = z.object({ scopeKey: z.string().min(1) });

// Default drafter handles used when a year has no Draft document yet.
const DEFAULT_DRAFTERS = ["@kai", "@rho", "@mira", "@vex", "@juno", "@pax"];

export const frcRouter = createTRPCRouter({
  districts: publicProcedure
    .input(yearInput)
    .query(({ ctx, input }) =>
      ctx.db.district.findMany({
        where: { year: input.year },
        orderBy: { displayName: "asc" },
      }),
    ),

  // Every region across every year, deduped by abbreviation. The search bar
  // uses this so users can find a region whose abbreviation isn't in the
  // currently-selected season. The District collection isn't always
  // comprehensive — DistrictTeam is the source of truth for which regions
  // exist — so we union both: prefer District rows (they have a displayName)
  // and fall back to parsing the districtKey ("{year}{abbr}") for any
  // DistrictTeam without a matching District row.
  allDistricts: publicProcedure.query(async ({ ctx }) => {
    const [districts, links] = await Promise.all([
      ctx.db.district.findMany({ orderBy: [{ year: "desc" }] }),
      ctx.db.districtTeam.findMany({ select: { districtKey: true } }),
    ]);

    type Entry = {
      key: string;
      abbreviation: string;
      displayName: string;
      year: number;
      years: Set<number>; // seasons this region actually has a roster for
    };
    const byAbbr = new Map<string, Entry>();
    const districtAbbrs = new Set(districts.map((d) => d.abbreviation));

    // District rows provide clean display names + newest-year metadata.
    for (const d of districts) {
      const cur = byAbbr.get(d.abbreviation);
      if (!cur) {
        byAbbr.set(d.abbreviation, {
          key: d.key,
          abbreviation: d.abbreviation,
          displayName: d.displayName,
          year: d.year,
          years: new Set(),
        });
      } else if (d.year > cur.year) {
        cur.key = d.key;
        cur.displayName = d.displayName;
        cur.year = d.year;
      }
    }

    // DistrictTeam keys ("{year}{abbr}") are the source of truth for which
    // (season, region) pairs actually have teams — this both fills in regions
    // missing from the District collection and records per-year availability.
    for (const link of links) {
      const year = parseInt(link.districtKey.slice(0, 4), 10);
      const abbr = link.districtKey.slice(4);
      if (!Number.isFinite(year) || !abbr) continue;
      let cur = byAbbr.get(abbr);
      if (!cur) {
        cur = {
          key: link.districtKey,
          abbreviation: abbr,
          displayName: abbr.toUpperCase(),
          year,
          years: new Set(),
        };
        byAbbr.set(abbr, cur);
      } else if (year > cur.year && !districtAbbrs.has(abbr)) {
        cur.key = link.districtKey;
        cur.year = year;
      }
      cur.years.add(year);
    }

    return [...byAbbr.values()]
      .map((e) => ({
        key: e.key,
        abbreviation: e.abbreviation,
        displayName: e.displayName,
        year: e.year,
        years: [...e.years].sort((a, b) => b - a),
      }))
      .sort((a, b) => a.displayName.localeCompare(b.displayName));
  }),

  districtEvents: publicProcedure
    .input(districtInput)
    .query(({ ctx, input }) =>
      ctx.db.event.findMany({
        where: { districtKey: input.districtKey },
        orderBy: { startDate: "asc" },
      }),
    ),

  districtTeams: publicProcedure
    .input(districtInput)
    .query(async ({ ctx, input }) => {
      const link = await ctx.db.districtTeam.findUnique({
        where: { districtKey: input.districtKey },
        select: { teamNumbers: true },
      });
      if (!link) return [];
      return ctx.db.team.findMany({
        where: { number: { in: link.teamNumbers } },
        orderBy: { number: "asc" },
      });
    }),

  regionalEvents: publicProcedure
    .input(yearInput)
    .query(({ ctx, input }) =>
      ctx.db.event.findMany({
        where: { year: input.year, eventType: 0 },
        orderBy: { startDate: "asc" },
      }),
    ),

  eventTeams: publicProcedure
    .input(eventInput)
    .query(async ({ ctx, input }) => {
      const link = await ctx.db.eventTeam.findUnique({
        where: { eventKey: input.eventKey },
        select: { teamNumbers: true },
      });
      if (!link) return [];
      return ctx.db.team.findMany({
        where: { number: { in: link.teamNumbers } },
        orderBy: { number: "asc" },
      });
    }),

  teamAwards: publicProcedure
    .input(teamInput)
    .query(async ({ ctx, input }) => {
      const doc = await ctx.db.award.findUnique({
        where: { teamNumber: input.teamNumber },
        select: { awards: true },
      });
      return (doc?.awards ?? [])
        .slice()
        .sort(
          (a, b) => b.year - a.year || a.eventKey.localeCompare(b.eventKey),
        );
    }),

  team: publicProcedure
    .input(teamInput)
    .query(({ ctx, input }) =>
      ctx.db.team.findUnique({ where: { number: input.teamNumber } }),
    ),

  // Bulk fetch for the leaderboard: every team in a district, with their EPA
  // for the year derived from the districtKey, plus their full award history.
  boardForDistrict: publicProcedure
    .input(districtInput)
    .query(async ({ ctx, input }) => {
      const year = parseInt(input.districtKey.slice(0, 4), 10);
      const link = await ctx.db.districtTeam.findUnique({
        where: { districtKey: input.districtKey },
        select: { teamNumbers: true },
      });
      if (!link || link.teamNumbers.length === 0) {
        return { year, districtKey: input.districtKey, teams: [] };
      }
      const numbers = link.teamNumbers;

      const [teams, epaDocs, awardDocs, avatarDocs, scoreRows, weights, resultRows] =
        await Promise.all([
          ctx.db.team.findMany({
            where: { number: { in: numbers } },
            orderBy: { number: "asc" },
          }),
          ctx.db.teamEpa.findMany({
            where: { teamNumber: { in: numbers } },
            select: { teamNumber: true, epas: true },
          }),
          ctx.db.award.findMany({
            where: { teamNumber: { in: numbers } },
            select: { teamNumber: true, awards: true },
          }),
          ctx.db.teamAvatar.findMany({
            where: { teamNumber: { in: numbers } },
            select: { teamNumber: true, avatars: true },
          }),
          ctx.db.teamScore.findMany({
            where: { teamNumber: { in: numbers }, year: { gte: year - 4, lte: year } },
          }),
          getActiveWeights(),
          ctx.db.teamEventResult.findMany({
            where: { teamNumber: { in: numbers }, allianceSeed: { not: null } },
            select: {
              teamNumber: true,
              eventKey: true,
              allianceSeed: true,
              pickRole: true,
            },
          }),
        ]);

      const epaByTeam = new Map<number, number | null>();
      for (const row of epaDocs) {
        const entry = row.epas.find((e) => e.year === year);
        epaByTeam.set(row.teamNumber, entry?.epaUnitless ?? null);
      }

      const awardsByTeam = new Map<
        number,
        { eventKey: string; awardType: number; name: string; year: number }[]
      >();
      for (const row of awardDocs) {
        awardsByTeam.set(row.teamNumber, row.awards);
      }
      const awardEventKeys = new Set<string>();
      for (const row of awardDocs)
        for (const a of row.awards) awardEventKeys.add(a.eventKey);
      const dateByEvent = new Map(
        (
          await ctx.db.event.findMany({
            where: { key: { in: [...awardEventKeys] } },
            select: { key: true, startDate: true },
          })
        ).map((e) => [e.key, e.startDate] as const),
      );

      const avatarByTeam = new Map<number, string | null>();
      for (const row of avatarDocs) {
        const exact = row.avatars.find((a) => a.year === year);
        const fallback =
          exact ??
          [...row.avatars]
            .sort((a, b) => b.year - a.year)
            .find((a) => a.year <= year) ??
          null;
        avatarByTeam.set(row.teamNumber, fallback?.base64 ?? null);
      }

      // Official districts (a District row exists) score the district window
      // (first 2 district events + dcmp). Regional groupings like "west" have no
      // District row → the regional window (regionals one-play / 50% district).
      const districtMeta = await ctx.db.district.findUnique({
        where: { key: input.districtKey },
        select: { key: true },
      });
      const window: ScoreWindow = districtMeta ? "dct" : "reg";
      const scoreByTeam = buildScoreColumns(scoreRows, weights, numbers, year, window);
      const yearResults = await ctx.db.teamEventResult.findMany({
        where: { teamNumber: { in: numbers }, year },
        select: {
          teamNumber: true,
          eventKey: true,
          eventType: true,
          startDate: true,
          qualRank: true,
          numTeams: true,
          allianceSeed: true,
          pickRole: true,
          elimWins: true,
        },
      });
      const resultDistrict = new Map(
        (
          await ctx.db.event.findMany({
            where: { key: { in: [...new Set(yearResults.map((r) => r.eventKey))] } },
            select: { key: true, districtKey: true },
          })
        ).map((e) => [e.key, e.districtKey] as const),
      );
      mergeYearBreakdown(
        scoreByTeam,
        yearResults,
        awardsByTeam,
        year,
        window,
        resultDistrict,
        window === "dct" ? input.districtKey : null,
      );
      const pickByTeam = buildPickMap(resultRows);

      return {
        year,
        districtKey: input.districtKey,
        teams: teams.map((t) => ({
          number: t.number,
          key: t.key,
          nickname: t.nickname,
          name: t.name,
          city: t.city,
          stateProv: t.stateProv,
          country: t.country,
          epa: epaByTeam.get(t.number) ?? null,
          avatarB64: avatarByTeam.get(t.number) ?? null,
          awards: attachAwardDates(awardsByTeam.get(t.number) ?? [], dateByEvent),
          score: scoreByTeam.get(t.number) ?? null,
          picks: pickByTeam.get(t.number) ?? {},
        })),
      };
    }),

  // Global top-100 leaderboard for a season — drives the default landing view
  // when no district has been searched.
  topTeamsByYear: publicProcedure
    .input(z.object({ year: z.number().int(), limit: z.number().int().min(1).max(500).optional() }))
    .query(async ({ ctx, input }) => {
      const limit = input.limit ?? 100;
      const epaDocs = await ctx.db.teamEpa.findMany({
        select: { teamNumber: true, epas: true },
      });

      const ranked = epaDocs
        .map((row) => {
          const entry = row.epas.find((e) => e.year === input.year);
          return entry ? { teamNumber: row.teamNumber, epa: entry.epaUnitless } : null;
        })
        .filter((x): x is { teamNumber: number; epa: number } => x !== null)
        .sort((a, b) => b.epa - a.epa)
        .slice(0, limit);

      const numbers = ranked.map((r) => r.teamNumber);
      if (numbers.length === 0) {
        return { year: input.year, teams: [] };
      }

      const [teams, awardDocs, avatarDocs, districtLinks, scoreRows, weights, resultRows] =
        await Promise.all([
          ctx.db.team.findMany({ where: { number: { in: numbers } } }),
          ctx.db.award.findMany({
            where: { teamNumber: { in: numbers } },
            select: { teamNumber: true, awards: true },
          }),
          ctx.db.teamAvatar.findMany({
            where: { teamNumber: { in: numbers } },
            select: { teamNumber: true, avatars: true },
          }),
          ctx.db.districtTeam.findMany({
            where: { districtKey: { startsWith: String(input.year) } },
            select: { districtKey: true, teamNumbers: true },
          }),
          ctx.db.teamScore.findMany({
            where: {
              teamNumber: { in: numbers },
              year: { gte: input.year - 4, lte: input.year },
            },
          }),
          getActiveWeights(),
          ctx.db.teamEventResult.findMany({
            where: { teamNumber: { in: numbers }, allianceSeed: { not: null } },
            select: {
              teamNumber: true,
              eventKey: true,
              allianceSeed: true,
              pickRole: true,
            },
          }),
        ]);

      // The districtKey is "{year}{abbr}" (e.g. "2024chs"); strip the year
      // prefix to get the chip text. Scoping the findMany above to the year
      // means each team appears in at most one entry.
      const districtByTeam = new Map<number, string>();
      for (const link of districtLinks) {
        const abbr = link.districtKey.slice(4);
        for (const n of link.teamNumbers) {
          if (numbers.includes(n)) districtByTeam.set(n, abbr);
        }
      }

      const teamByNumber = new Map(teams.map((t) => [t.number, t]));
      const awardsByTeam = new Map<
        number,
        { eventKey: string; awardType: number; name: string; year: number }[]
      >();
      for (const row of awardDocs) {
        awardsByTeam.set(row.teamNumber, row.awards);
      }
      const awardEventKeys = new Set<string>();
      for (const row of awardDocs)
        for (const a of row.awards) awardEventKeys.add(a.eventKey);
      const dateByEvent = new Map(
        (
          await ctx.db.event.findMany({
            where: { key: { in: [...awardEventKeys] } },
            select: { key: true, startDate: true },
          })
        ).map((e) => [e.key, e.startDate] as const),
      );
      const avatarByTeam = new Map<number, string | null>();
      for (const row of avatarDocs) {
        const exact = row.avatars.find((a) => a.year === input.year);
        const fallback =
          exact ??
          [...row.avatars]
            .sort((a, b) => b.year - a.year)
            .find((a) => a.year <= input.year) ??
          null;
        avatarByTeam.set(row.teamNumber, fallback?.base64 ?? null);
      }

      const scoreByTeam = buildScoreColumns(
        scoreRows,
        weights,
        numbers,
        input.year,
        "std",
      );
      const yearResults = await ctx.db.teamEventResult.findMany({
        where: { teamNumber: { in: numbers }, year: input.year },
        select: {
          teamNumber: true,
          eventKey: true,
          eventType: true,
          startDate: true,
          qualRank: true,
          numTeams: true,
          allianceSeed: true,
          pickRole: true,
          elimWins: true,
        },
      });
      mergeYearBreakdown(scoreByTeam, yearResults, awardsByTeam, input.year, "std");
      const pickByTeam = buildPickMap(resultRows);

      return {
        year: input.year,
        teams: ranked.map((r) => {
          const t = teamByNumber.get(r.teamNumber);
          return {
            number: r.teamNumber,
            key: t?.key ?? `frc${r.teamNumber}`,
            nickname: t?.nickname ?? null,
            name: t?.name ?? null,
            city: t?.city ?? null,
            stateProv: t?.stateProv ?? null,
            country: t?.country ?? null,
            districtAbbr: districtByTeam.get(r.teamNumber) ?? null,
            epa: r.epa,
            avatarB64: avatarByTeam.get(r.teamNumber) ?? null,
            awards: attachAwardDates(awardsByTeam.get(r.teamNumber) ?? [], dateByEvent),
            score: scoreByTeam.get(r.teamNumber) ?? null,
            picks: pickByTeam.get(r.teamNumber) ?? {},
          };
        }),
      };
    }),

  // Timestamp of the last successful full data sync, for the freshness
  // indicator. Data is refreshed by a daily cron, so this drives a
  // "synced Nh ago" badge.
  lastSync: publicProcedure.query(async ({ ctx }) => {
    const log = await ctx.db.syncLog.findFirst({
      where: { status: "success" },
      orderBy: { finishedAt: "desc" },
      select: { finishedAt: true },
    });
    return { finishedAt: log?.finishedAt ?? null };
  }),

  // Every event we know about, minimal fields, for the search bar. Newest
  // first so the current season surfaces at the top of the suggestions.
  allEvents: publicProcedure.query(async ({ ctx }) => {
    const events = await ctx.db.event.findMany({
      orderBy: [{ year: "desc" }, { startDate: "asc" }],
      select: {
        key: true,
        name: true,
        year: true,
        week: true,
        eventTypeString: true,
        districtKey: true,
      },
    });
    return events;
  }),

  // Bulk fetch for the leaderboard, scoped to a single event's roster. Mirrors
  // boardForDistrict but resolves teams through the EventTeam link.
  boardForEvent: publicProcedure
    .input(eventInput)
    .query(async ({ ctx, input }) => {
      const year = parseInt(input.eventKey.slice(0, 4), 10);
      const link = await ctx.db.eventTeam.findUnique({
        where: { eventKey: input.eventKey },
        select: { teamNumbers: true },
      });
      if (!link || link.teamNumbers.length === 0) {
        return { year, eventKey: input.eventKey, teams: [] };
      }
      const numbers = link.teamNumbers;

      const [teams, epaDocs, awardDocs, avatarDocs, scoreRows, weights, event, resultRows] =
        await Promise.all([
          ctx.db.team.findMany({
            where: { number: { in: numbers } },
            orderBy: { number: "asc" },
          }),
          ctx.db.teamEpa.findMany({
            where: { teamNumber: { in: numbers } },
            select: { teamNumber: true, epas: true },
          }),
          ctx.db.award.findMany({
            where: { teamNumber: { in: numbers } },
            select: { teamNumber: true, awards: true },
          }),
          ctx.db.teamAvatar.findMany({
            where: { teamNumber: { in: numbers } },
            select: { teamNumber: true, avatars: true },
          }),
          ctx.db.teamScore.findMany({
            where: { teamNumber: { in: numbers }, year: { gte: year - 4, lte: year } },
          }),
          getActiveWeights(),
          ctx.db.event.findUnique({
            where: { key: input.eventKey },
            select: { eventType: true, districtKey: true },
          }),
          ctx.db.teamEventResult.findMany({
            where: { teamNumber: { in: numbers }, allianceSeed: { not: null } },
            select: {
              teamNumber: true,
              eventKey: true,
              allianceSeed: true,
              pickRole: true,
            },
          }),
        ]);

      // Window by event kind: champs divisions/Einstein (3/4) → full season;
      // regionals (0) → regional window; district events + dcmps (1/2/5) → the
      // district window.
      const et = event?.eventType;
      const window: ScoreWindow =
        et === 3 || et === 4 ? "full" : et === 0 ? "reg" : "dct";

      const epaByTeam = new Map<number, number | null>();
      for (const row of epaDocs) {
        const entry = row.epas.find((e) => e.year === year);
        epaByTeam.set(row.teamNumber, entry?.epaUnitless ?? null);
      }
      const awardsByTeam = new Map<
        number,
        { eventKey: string; awardType: number; name: string; year: number }[]
      >();
      for (const row of awardDocs) {
        awardsByTeam.set(row.teamNumber, row.awards);
      }
      const awardEventKeys = new Set<string>();
      for (const row of awardDocs)
        for (const a of row.awards) awardEventKeys.add(a.eventKey);
      const dateByEvent = new Map(
        (
          await ctx.db.event.findMany({
            where: { key: { in: [...awardEventKeys] } },
            select: { key: true, startDate: true },
          })
        ).map((e) => [e.key, e.startDate] as const),
      );
      const avatarByTeam = new Map<number, string | null>();
      for (const row of avatarDocs) {
        const exact = row.avatars.find((a) => a.year === year);
        const fallback =
          exact ??
          [...row.avatars]
            .sort((a, b) => b.year - a.year)
            .find((a) => a.year <= year) ??
          null;
        avatarByTeam.set(row.teamNumber, fallback?.base64 ?? null);
      }

      const scoreByTeam = buildScoreColumns(scoreRows, weights, numbers, year, window);
      const yearResults = await ctx.db.teamEventResult.findMany({
        where: { teamNumber: { in: numbers }, year },
        select: {
          teamNumber: true,
          eventKey: true,
          eventType: true,
          startDate: true,
          qualRank: true,
          numTeams: true,
          allianceSeed: true,
          pickRole: true,
          elimWins: true,
        },
      });
      const resultDistrict = new Map(
        (
          await ctx.db.event.findMany({
            where: { key: { in: [...new Set(yearResults.map((r) => r.eventKey))] } },
            select: { key: true, districtKey: true },
          })
        ).map((e) => [e.key, e.districtKey] as const),
      );
      mergeYearBreakdown(
        scoreByTeam,
        yearResults,
        awardsByTeam,
        year,
        window,
        resultDistrict,
        window === "dct" ? event?.districtKey ?? null : null,
      );
      const pickByTeam = buildPickMap(resultRows);

      return {
        year,
        eventKey: input.eventKey,
        teams: teams.map((t) => ({
          number: t.number,
          key: t.key,
          nickname: t.nickname,
          name: t.name,
          city: t.city,
          stateProv: t.stateProv,
          country: t.country,
          epa: epaByTeam.get(t.number) ?? null,
          avatarB64: avatarByTeam.get(t.number) ?? null,
          awards: attachAwardDates(awardsByTeam.get(t.number) ?? [], dateByEvent),
          score: scoreByTeam.get(t.number) ?? null,
          picks: pickByTeam.get(t.number) ?? {},
        })),
      };
    }),

  // Schedule: every event where at least one team in this district is on the
  // roster, restricted to the district's year. Returns full rosters with an
  // inDistrict flag so the UI can highlight or chip the visiting teams.
  scheduleForDistrict: publicProcedure
    .input(districtInput)
    .query(async ({ ctx, input }) => {
      const year = parseInt(input.districtKey.slice(0, 4), 10);
      if (!Number.isFinite(year)) return [];

      const link = await ctx.db.districtTeam.findUnique({
        where: { districtKey: input.districtKey },
        select: { teamNumbers: true },
      });
      if (!link || link.teamNumbers.length === 0) return [];
      const districtNumbers = link.teamNumbers;

      const eventTeams = await ctx.db.eventTeam.findMany({
        where: { teamNumbers: { hasSome: districtNumbers } },
      });
      if (eventTeams.length === 0) return [];

      const events = await ctx.db.event.findMany({
        where: {
          key: { in: eventTeams.map((et) => et.eventKey) },
          year,
        },
        orderBy: { startDate: "asc" },
      });

      const rosterByEvent = new Map<string, number[]>();
      const rosterNumberSet = new Set<number>();
      for (const et of eventTeams) {
        rosterByEvent.set(et.eventKey, et.teamNumbers);
        for (const n of et.teamNumbers) rosterNumberSet.add(n);
      }

      const rosterNumbers = [...rosterNumberSet];
      const [teams, epaDocs] = await Promise.all([
        ctx.db.team.findMany({
          where: { number: { in: rosterNumbers } },
          select: { number: true, nickname: true },
        }),
        ctx.db.teamEpa.findMany({
          where: { teamNumber: { in: rosterNumbers } },
          select: { teamNumber: true, epas: true },
        }),
      ]);
      const nicknameByNumber = new Map<number, string | null>();
      for (const t of teams) nicknameByNumber.set(t.number, t.nickname);
      const epaByNumber = new Map<number, number>();
      for (const row of epaDocs) {
        const entry = row.epas.find((e) => e.year === year);
        if (entry) epaByNumber.set(row.teamNumber, entry.epaUnitless);
      }

      const districtSet = new Set(districtNumbers);

      return events.map((ev) => {
        const roster = (rosterByEvent.get(ev.key) ?? [])
          .map((n) => ({
            number: n,
            nickname: nicknameByNumber.get(n) ?? null,
            inDistrict: districtSet.has(n),
            epa: epaByNumber.get(n) ?? null,
          }))
          .sort((a, b) => (b.epa ?? -Infinity) - (a.epa ?? -Infinity));
        return {
          key: ev.key,
          name: ev.name,
          year: ev.year,
          week: ev.week,
          startDate: ev.startDate,
          endDate: ev.endDate,
          roster,
        };
      });
    }),

  // ---- Collaborative draft state ----

  // All picks for a board (district/event/global). The client polls this so
  // every signed-in scout converges on the same draft state.
  picksForScope: publicProcedure
    .input(scopeInput)
    .query(({ ctx, input }) =>
      ctx.db.pick.findMany({
        where: { scopeKey: input.scopeKey },
        select: { teamNumber: true, status: true, by: true },
      }),
    ),

  // Per-year drafter handles; falls back to the defaults until one is saved.
  drafters: publicProcedure
    .input(yearInput)
    .query(async ({ ctx, input }) => {
      const doc = await ctx.db.draft.findUnique({
        where: { year: input.year },
        select: { drafters: true },
      });
      return doc?.drafters ?? DEFAULT_DRAFTERS;
    }),

  setPick: protectedProcedure
    .input(
      z.object({
        scopeKey: z.string().min(1),
        year: z.number().int(),
        teamNumber: z.number().int(),
        status: z.enum(["available", "ours", "taken"]),
        by: z.string().nullish(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const updatedBy =
        ctx.session.user.name ?? ctx.session.user.email ?? ctx.session.user.id;
      const by = input.status === "taken" ? (input.by ?? null) : null;
      return ctx.db.pick.upsert({
        where: {
          scopeKey_teamNumber: {
            scopeKey: input.scopeKey,
            teamNumber: input.teamNumber,
          },
        },
        create: {
          scopeKey: input.scopeKey,
          year: input.year,
          teamNumber: input.teamNumber,
          status: input.status,
          by,
          updatedBy,
        },
        update: { status: input.status, by, updatedBy },
      });
    }),

  setDrafters: protectedProcedure
    .input(z.object({ year: z.number().int(), drafters: z.array(z.string()) }))
    .mutation(({ ctx, input }) =>
      ctx.db.draft.upsert({
        where: { year: input.year },
        create: { year: input.year, drafters: input.drafters },
        update: { drafters: input.drafters },
      }),
    ),

  // Aggregate of every owner of each team across all boards for a season.
  // Drives the read-only pick column on the top-100 / event views, where a
  // team can be owned in more than one region. "ours" collapses to "Ours";
  // taken picks contribute their drafter handle.
  pickOwnersForYear: publicProcedure
    .input(yearInput)
    .query(async ({ ctx, input }) => {
      const picks = await ctx.db.pick.findMany({
        where: { year: input.year, status: { not: "available" } },
        select: { teamNumber: true, status: true, by: true },
      });
      const byTeam = new Map<number, Set<string>>();
      for (const p of picks) {
        const owner = p.status === "ours" ? "Ours" : (p.by ?? "Taken");
        const set = byTeam.get(p.teamNumber) ?? new Set<string>();
        set.add(owner);
        byTeam.set(p.teamNumber, set);
      }
      return [...byTeam.entries()].map(([teamNumber, owners]) => ({
        teamNumber,
        owners: [...owners].sort(),
      }));
    }),

  // All star ratings for a season, polled like picks so ratings stay shared.
  ratingsForYear: publicProcedure
    .input(yearInput)
    .query(({ ctx, input }) =>
      ctx.db.rating.findMany({
        where: { year: input.year },
        select: { teamNumber: true, stars: true },
      }),
    ),

  setRating: protectedProcedure
    .input(
      z.object({
        year: z.number().int(),
        teamNumber: z.number().int(),
        stars: z.number().int().min(0).max(5),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const updatedBy =
        ctx.session.user.name ?? ctx.session.user.email ?? ctx.session.user.id;
      return ctx.db.rating.upsert({
        where: {
          year_teamNumber: { year: input.year, teamNumber: input.teamNumber },
        },
        create: {
          year: input.year,
          teamNumber: input.teamNumber,
          stars: input.stars,
          updatedBy,
        },
        update: { stars: input.stars, updatedBy },
      });
    }),

  // ---- Prediction weights (editable, with reset-to-optimal) ----

  // Current optimal + active weights for the weighted-4-year prediction.
  weights: publicProcedure.query(async ({ ctx }) => {
    const w = await ctx.db.scoreWeights.findUnique({ where: { key: "default" } });
    const fb = [0.5, 0.3, 0.15, 0.05];
    return {
      optRobot: w?.optRobot?.length === 4 ? w.optRobot : fb,
      optAwards: w?.optAwards?.length === 4 ? w.optAwards : fb,
      actRobot: w?.actRobot?.length === 4 ? w.actRobot : fb,
      actAwards: w?.actAwards?.length === 4 ? w.actAwards : fb,
    };
  }),

  // Save edited active weights (opt* untouched, so "reset" can restore them).
  setWeights: protectedProcedure
    .input(
      z.object({
        robot: z.array(z.number()).length(4),
        awards: z.array(z.number()).length(4),
      }),
    )
    .mutation(({ ctx, input }) =>
      ctx.db.scoreWeights.upsert({
        where: { key: "default" },
        create: {
          key: "default",
          optRobot: input.robot,
          optAwards: input.awards,
          actRobot: input.robot,
          actAwards: input.awards,
        },
        update: { actRobot: input.robot, actAwards: input.awards },
      }),
    ),

  // Reset active weights to the fitted optimum.
  resetWeights: protectedProcedure.mutation(async ({ ctx }) => {
    const w = await ctx.db.scoreWeights.findUnique({ where: { key: "default" } });
    if (!w) return null;
    return ctx.db.scoreWeights.update({
      where: { key: "default" },
      data: { actRobot: w.optRobot, actAwards: w.optAwards },
    });
  }),
});
