import "server-only";

import { db } from "~/server/db";
import { tba, type TbaMatch } from "~/server/lib/tba";
import {
  awardPoints,
  PLAYOFF_POINTS_PER_WIN,
  pickingPoints,
  seedingPoints,
  type ScoreContext,
} from "~/server/lib/scoring";

// TBA event_type: 0=regional, 1=district, 2=district_cmp, 3=cmp_division,
// 4=cmp_finals, 5=district_cmp_division, 6=foc, 7=remote.
const isChampsEvent = (t: number) => t === 3 || t === 4;
const isCmpFinals = (t: number) => t === 4;
const isQualifying = (t: number) => t === 0 || t === 1; // "first 2 events" pool
const isDcmp = (t: number) => t === 2 || t === 5;
const contextFor = (t: number): ScoreContext =>
  isChampsEvent(t) ? "champs" : "regular";

const teamNum = (key: string) => Number(key.replace(/^frc/, ""));

// Bounded-concurrency map (mirrors sync.ts pool) so the many small per-team
// upserts run in parallel instead of one Atlas round-trip at a time.
async function pool<T>(
  items: T[],
  concurrency: number,
  worker: (item: T) => Promise<void>,
): Promise<void> {
  const queue = [...items];
  const runners = Array.from(
    { length: Math.min(concurrency, queue.length) },
    async () => {
      while (queue.length) {
        const item = queue.shift()!;
        try {
          await worker(item);
        } catch (err) {
          console.error("[scoring] item failed:", err);
        }
      }
    },
  );
  await Promise.all(runners);
}

// ---- ETag cursor helpers (mirror sync.ts) ----
async function getEtag(path: string): Promise<string | undefined> {
  const cur = await db.syncCursor.findUnique({
    where: { path },
    select: { etag: true },
  });
  return cur?.etag;
}
async function setEtag(path: string, etag: string | null) {
  if (!etag) return;
  await db.syncCursor.upsert({
    where: { path },
    create: { path, etag },
    update: { etag },
  });
}

// Parse a team's elim participation, elim wins, and co-competitors from an
// event's match list.
function parseTeamMatches(matches: TbaMatch[], teamKey: string) {
  let elimPlayed = 0;
  let elimWins = 0;
  const opponents = new Set<number>();
  for (const m of matches) {
    const red = m.alliances.red.team_keys;
    const blue = m.alliances.blue.team_keys;
    const inRed = red.includes(teamKey);
    const inBlue = blue.includes(teamKey);
    if (!inRed && !inBlue) continue;
    for (const k of [...red, ...blue]) {
      if (k === teamKey) continue;
      const n = teamNum(k);
      if (Number.isFinite(n)) opponents.add(n);
    }
    if (m.comp_level !== "qm") {
      elimPlayed++;
      const myColor = inRed ? "red" : "blue";
      if (m.winning_alliance === myColor) elimWins++;
    }
  }
  return { elimPlayed, elimWins, opponents: [...opponents] };
}

type EventLite = {
  key: string;
  eventType: number;
  year: number;
  startDate: string | null;
};

/**
 * Pull rankings + alliances + matches for one event (ETag-conditional) and
 * upsert a TeamEventResult per team. Returns false when nothing changed.
 */
export async function syncEventResults(ev: EventLite): Promise<boolean> {
  const rPath = `/event/${ev.key}/rankings`;
  const aPath = `/event/${ev.key}/alliances`;
  const mPath = `/event/${ev.key}/matches`;

  const [rankRes, allyRes, matchRes] = await Promise.all([
    tba.eventRankingsConditional(ev.key, await getEtag(rPath)),
    tba.eventAlliancesConditional(ev.key, await getEtag(aPath)),
    tba.eventMatchesConditional(ev.key, await getEtag(mPath)),
  ]);

  // If everything is unchanged, skip.
  if (rankRes.notModified && allyRes.notModified && matchRes.notModified) {
    return false;
  }

  // Rankings → rank + field size.
  const rankByTeam = new Map<number, number>();
  const rankings = rankRes.notModified ? null : rankRes.data;
  const numTeams = rankings?.rankings.length ?? null;
  for (const r of rankings?.rankings ?? []) {
    rankByTeam.set(teamNum(r.team_key), r.rank);
  }

  // Alliances → seed + pick role.
  const ROLES = ["captain", "pick1", "pick2", "pick3"] as const;
  const allyByTeam = new Map<number, { seed: number; role: string }>();
  const alliances = allyRes.notModified ? null : allyRes.data;
  (alliances ?? []).forEach((a, i) => {
    a.picks.forEach((k, idx) => {
      if (idx < ROLES.length) allyByTeam.set(teamNum(k), { seed: i + 1, role: ROLES[idx]! });
    });
  });

  // Matches → elim played/wins + co-competitors, per team.
  const matches = matchRes.notModified ? [] : (matchRes.data ?? []);
  const matchTeams = new Set<number>();
  for (const m of matches) {
    for (const k of [...m.alliances.red.team_keys, ...m.alliances.blue.team_keys]) {
      matchTeams.add(teamNum(k));
    }
  }

  // Union of every team we have data for this event.
  const link = await db.eventTeam.findUnique({
    where: { eventKey: ev.key },
    select: { teamNumbers: true },
  });
  const allTeams = new Set<number>([
    ...(link?.teamNumbers ?? []),
    ...rankByTeam.keys(),
    ...allyByTeam.keys(),
    ...matchTeams,
  ]);

  // Only overwrite fields whose source was actually re-fetched, so a partial
  // sync (e.g. matches changed but rankings returned 304) never wipes rank/seed.
  const rankFetched = !rankRes.notModified;
  const allyFetched = !allyRes.notModified;
  const matchFetched = !matchRes.notModified;

  await pool([...allTeams], 16, async (number) => {
    const key = `frc${number}`;
    const mm = parseTeamMatches(matches, key);
    const ally = allyByTeam.get(number);

    const update: Record<string, unknown> = {
      eventType: ev.eventType,
      startDate: ev.startDate,
    };
    if (rankFetched) {
      update.qualRank = rankByTeam.get(number) ?? null;
      update.numTeams = numTeams;
    }
    if (allyFetched) {
      update.allianceSeed = ally?.seed ?? null;
      update.pickRole = ally?.role ?? null;
    }
    if (matchFetched) {
      update.elimMatchesPlayed = mm.elimPlayed;
      update.elimWins = mm.elimWins;
      update.einsteinWins = isCmpFinals(ev.eventType) ? mm.elimWins : 0;
      update.opponents = mm.opponents;
    }

    await db.teamEventResult.upsert({
      where: { teamNumber_eventKey: { teamNumber: number, eventKey: ev.key } },
      create: {
        teamNumber: number,
        eventKey: ev.key,
        year: ev.year,
        eventType: ev.eventType,
        startDate: ev.startDate,
        qualRank: rankByTeam.get(number) ?? null,
        numTeams,
        allianceSeed: ally?.seed ?? null,
        pickRole: ally?.role ?? null,
        elimMatchesPlayed: mm.elimPlayed,
        elimWins: mm.elimWins,
        einsteinWins: isCmpFinals(ev.eventType) ? mm.elimWins : 0,
        opponents: mm.opponents,
      },
      update,
    });
  });

  await Promise.all([
    setEtag(rPath, rankRes.etag),
    setEtag(aPath, allyRes.etag),
    setEtag(mPath, matchRes.etag),
  ]);
  return true;
}

// ---- Per-event points from a stored TeamEventResult + its awards ----
export type ResultRow = {
  eventKey: string;
  eventType: number;
  startDate: string | null;
  qualRank: number | null;
  numTeams: number | null;
  allianceSeed: number | null;
  pickRole: string | null;
  elimWins: number;
  opponents: number[];
};

// Per-event points broken into their components (for scoring verification).
export function eventBreakdown(
  r: ResultRow,
  awards: { awardType: number; name: string }[],
) {
  const ctx = contextFor(r.eventType);
  const seeding =
    r.qualRank && r.numTeams ? seedingPoints(r.qualRank, r.numTeams) : 0;
  const picking =
    r.allianceSeed && r.pickRole
      ? pickingPoints(ctx, r.allianceSeed, r.pickRole as never)
      : 0;
  const playoff = PLAYOFF_POINTS_PER_WIN * r.elimWins;
  const awardPts = awards.reduce(
    (s, a) => s + awardPoints(a.awardType, a.name, ctx),
    0,
  );
  const xrobot = seeding + picking + playoff;
  return { seeding, picking, playoff, awards: awardPts, xrobot, xawards: awardPts };
}

export function eventPoints(
  r: ResultRow,
  awards: { awardType: number; name: string }[],
) {
  const b = eventBreakdown(r, awards);
  return { xrobot: b.xrobot, xawards: b.xawards, xval: b.xrobot + b.xawards };
}

/**
 * Recompute TeamScore for every team with results in `year`. Reads
 * TeamEventResult + Award + TeamEpa. Diff-before-write: only touches changed
 * teams. Computes three windows (std = first 2, dct = first 2 + dcmp, full =
 * all events) and the global XSOS percentile per window.
 */
export async function computeYearScores(year: number) {
  const [results, awardDocs, epaDocs, eventDocs, districtDocs, districtLinks] =
    await Promise.all([
      db.teamEventResult.findMany({ where: { year } }),
      db.award.findMany({ select: { teamNumber: true, awards: true } }),
      db.teamEpa.findMany({ select: { teamNumber: true, epas: true } }),
      db.event.findMany({ where: { year }, select: { key: true, districtKey: true } }),
      db.district.findMany({ where: { year }, select: { key: true } }),
      db.districtTeam.findMany({
        where: { districtKey: { startsWith: String(year) } },
        select: { districtKey: true, teamNumbers: true },
      }),
    ]);

  // event -> its districtKey, and each team -> its OWN official district (the
  // District-backed roster it's on). District windows only count events in that
  // district, so a team's guest appearance at another district's event doesn't
  // leak into its district-board value.
  const eventDistrict = new Map(eventDocs.map((e) => [e.key, e.districtKey]));
  const officialKeys = new Set(districtDocs.map((d) => d.key));
  const officialDistrictByTeam = new Map<number, string>();
  for (const link of districtLinks) {
    if (!officialKeys.has(link.districtKey)) continue;
    for (const n of link.teamNumbers) {
      if (!officialDistrictByTeam.has(n)) officialDistrictByTeam.set(n, link.districtKey);
    }
  }

  // team -> epa (this year), for XSOS.
  const epaByTeam = new Map<number, number>();
  for (const row of epaDocs) {
    const e = row.epas.find((x) => x.year === year);
    if (e) epaByTeam.set(row.teamNumber, e.epaUnitless);
  }
  // team -> awards at (eventKey) this year.
  const awardsByTeamEvent = new Map<string, { awardType: number; name: string }[]>();
  for (const row of awardDocs) {
    for (const a of row.awards) {
      if (a.year !== year) continue;
      const k = `${row.teamNumber}:${a.eventKey}`;
      const list = awardsByTeamEvent.get(k) ?? [];
      list.push({ awardType: a.awardType, name: a.name });
      awardsByTeamEvent.set(k, list);
    }
  }
  // Group results by team.
  const byTeam = new Map<number, ResultRow[]>();
  for (const r of results) {
    const list = byTeam.get(r.teamNumber) ?? [];
    list.push(r);
    byTeam.set(r.teamNumber, list);
  }

  // Mean EPA of every co-competitor over a set of events (schedule difficulty).
  const difficultyOf = (
    events: { r: ResultRow }[],
  ): number | null => {
    const opps = new Set<number>();
    for (const e of events) for (const o of e.r.opponents) opps.add(o);
    const epas = [...opps]
      .map((o) => epaByTeam.get(o))
      .filter((v): v is number => v != null);
    return epas.length > 0 ? epas.reduce((a, b) => a + b, 0) / epas.length : null;
  };

  // First pass: raw scores (four windows) + schedule difficulty per team.
  //   std  = first 2 events (any type)        → global leaderboard
  //   reg  = regional events (one-play), or 50% of first-2 district events
  //          (one-play) for a district team with no regional → regional regions
  //          (west/central/…) and single-regional event boards
  //   dct  = first 2 DISTRICT events + dcmp    → official district boards
  //   full = every event                       → champs-division event pages
  type Computed = {
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
  const computed = new Map<number, Computed>();

  const sumR = (arr: { pts: { xrobot: number } }[]) =>
    arr.reduce((s, e) => s + e.pts.xrobot, 0);
  const sumA = (arr: { pts: { xawards: number } }[]) =>
    arr.reduce((s, e) => s + e.pts.xawards, 0);
  const byDate = (a: { r: ResultRow }, b: { r: ResultRow }) =>
    (a.r.startDate ?? "").localeCompare(b.r.startDate ?? "");
  // One-play projection of a base: full 1.6× + 14 on both components.
  const onePlay = (baseR: number, baseA: number) => ({
    r: 1.6 * baseR + 14,
    a: 1.6 * baseA + 14,
  });

  for (const [team, rows] of byTeam) {
    const scored = rows.map((r) => ({
      r,
      pts: eventPoints(r, awardsByTeamEvent.get(`${team}:${r.eventKey}`) ?? []),
    }));

    // full window: sum everything.
    const full = scored.reduce(
      (acc, s) => ({
        xrobot: acc.xrobot + s.pts.xrobot,
        xawards: acc.xawards + s.pts.xawards,
      }),
      { xrobot: 0, xawards: 0 },
    );

    const first2 = scored
      .filter((s) => isQualifying(s.r.eventType))
      .sort(byDate)
      .slice(0, 2);
    const regional2 = scored
      .filter((s) => s.r.eventType === 0)
      .sort(byDate)
      .slice(0, 2);
    // District windows: only this team's OWN official-district events (not a
    // guest appearance at another district's event).
    const teamDistrict = officialDistrictByTeam.get(team);
    const inOwnDistrict = (s: { r: ResultRow }) =>
      teamDistrict != null && eventDistrict.get(s.r.eventKey) === teamDistrict;
    const district2 = scored
      .filter((s) => inOwnDistrict(s) && s.r.eventType === 1)
      .sort(byDate)
      .slice(0, 2);
    const dcmp = scored.filter((s) => inOwnDistrict(s) && isDcmp(s.r.eventType));

    // std window (global): first 2 events, one-play for a single-event season.
    let stdXrobot = sumR(first2);
    let stdXawards = sumA(first2);
    if (first2.length === 1 && dcmp.length === 0) {
      stdXrobot = 1.6 * first2[0]!.pts.xrobot + 14;
      stdXawards = 1.6 * first2[0]!.pts.xawards;
    }

    // dct window: first 2 DISTRICT events + dcmp (regionals excluded).
    let dctBaseR = sumR(district2);
    let dctBaseA = sumA(district2);
    if (district2.length === 1 && dcmp.length === 0) {
      const op = onePlay(district2[0]!.pts.xrobot, district2[0]!.pts.xawards);
      dctBaseR = op.r;
      dctBaseA = op.a;
    }
    const dctXrobot = dctBaseR + sumR(dcmp);
    const dctXawards = dctBaseA + sumA(dcmp);

    // reg window: regional events; 2+ regionals sum, 1 regional gets the
    // one-play projection, and a district team with no regional falls back to
    // one-play of 50% of its first 2 district events.
    let regXrobot: number;
    let regXawards: number;
    let regEvents: typeof first2;
    if (regional2.length >= 2) {
      regXrobot = sumR(regional2);
      regXawards = sumA(regional2);
      regEvents = regional2;
    } else if (regional2.length === 1) {
      const op = onePlay(regional2[0]!.pts.xrobot, regional2[0]!.pts.xawards);
      regXrobot = op.r;
      regXawards = op.a;
      regEvents = regional2;
    } else {
      const op = onePlay(0.5 * sumR(district2), 0.5 * sumA(district2));
      regXrobot = op.r;
      regXawards = op.a;
      regEvents = district2;
    }

    // Region→district transition: in a season when the team had no official
    // district (its region wasn't a district yet), the district window falls
    // back to that season's regional value, so a region that just became a
    // district (e.g. California/Wisconsin in 2026) still has usable history on
    // its new district board's prediction and year columns.
    const noDistrict = teamDistrict == null;
    const finalDctR = noDistrict ? regXrobot : dctXrobot;
    const finalDctA = noDistrict ? regXawards : dctXawards;
    const dctDiffEvents = noDistrict ? regEvents : [...district2, ...dcmp];

    computed.set(team, {
      stdXrobot,
      stdXawards,
      stdXval: stdXrobot + stdXawards,
      regXrobot,
      regXawards,
      regXval: regXrobot + regXawards,
      dctXrobot: finalDctR,
      dctXawards: finalDctA,
      dctXval: finalDctR + finalDctA,
      fullXrobot: full.xrobot,
      fullXawards: full.xawards,
      fullXval: full.xrobot + full.xawards,
      diffStd: difficultyOf(first2),
      diffReg: difficultyOf(regEvents),
      diffDct: difficultyOf(dctDiffEvents),
    });
  }

  // XSOS itself (the percentile) is computed at read time within the board's
  // pool — a district, an event's field, or the global list — so a team's
  // strength-of-schedule is ranked against its actual competition, not the
  // world. Here we only persist the raw difficulty per window.
  const roundNull = (v: number | null) =>
    v == null ? null : Math.round(v * 100) / 100;

  // Diff-before-write: only upsert changed teams.
  const existing = new Map(
    (
      await db.teamScore.findMany({ where: { year } })
    ).map((s) => [s.teamNumber, s]),
  );

  await pool([...computed.entries()], 24, async ([team, c]) => {
    const diffStd = roundNull(c.diffStd);
    const diffReg = roundNull(c.diffReg);
    const diffDct = roundNull(c.diffDct);
    const prev = existing.get(team);
    const rounded = round(c);
    const same =
      prev &&
      prev.stdXval === rounded.stdXval &&
      prev.regXval === rounded.regXval &&
      prev.dctXval === rounded.dctXval &&
      prev.fullXval === rounded.fullXval &&
      prev.regXrobot === rounded.regXrobot &&
      prev.regXawards === rounded.regXawards &&
      prev.diffStd === diffStd &&
      prev.diffReg === diffReg &&
      prev.diffDct === diffDct;
    if (same) return;
    await db.teamScore.upsert({
      where: { teamNumber_year: { teamNumber: team, year } },
      create: { teamNumber: team, year, ...rounded, diffStd, diffReg, diffDct },
      update: { ...rounded, diffStd, diffReg, diffDct },
    });
  });
}

// Round stored floats to 2 dp for stable diffing.
function round(c: {
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
}) {
  const r = (n: number) => Math.round(n * 100) / 100;
  return {
    stdXrobot: r(c.stdXrobot),
    stdXawards: r(c.stdXawards),
    stdXval: r(c.stdXval),
    regXrobot: r(c.regXrobot),
    regXawards: r(c.regXawards),
    regXval: r(c.regXval),
    dctXrobot: r(c.dctXrobot),
    dctXawards: r(c.dctXawards),
    dctXval: r(c.dctXval),
    fullXrobot: r(c.fullXrobot),
    fullXawards: r(c.fullXawards),
    fullXval: r(c.fullXval),
  };
}
