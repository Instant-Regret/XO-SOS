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
type ResultRow = {
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

function eventPoints(
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
  const xrobot = seeding + picking + playoff;
  const xawards = awards.reduce(
    (s, a) => s + awardPoints(a.awardType, a.name, ctx),
    0,
  );
  return { xrobot, xawards, xval: xrobot + xawards };
}

/**
 * Recompute TeamScore for every team with results in `year`. Reads
 * TeamEventResult + Award + TeamEpa. Diff-before-write: only touches changed
 * teams. Computes three windows (std = first 2, dct = first 2 + dcmp, full =
 * all events) and the global XSOS percentile per window.
 */
export async function computeYearScores(year: number) {
  const [results, awardDocs, epaDocs] = await Promise.all([
    db.teamEventResult.findMany({ where: { year } }),
    db.award.findMany({ select: { teamNumber: true, awards: true } }),
    db.teamEpa.findMany({ select: { teamNumber: true, epas: true } }),
  ]);

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

  // First pass: raw scores (three windows) + schedule difficulty per team.
  //   reg  = a team's first 2 events (region / global / event boards)
  //   dct  = first 2 events + dcmp   (district boards only)
  //   full = every event             (champs-division event pages)
  type Computed = {
    regXrobot: number;
    regXawards: number;
    regXval: number;
    dctXrobot: number;
    dctXawards: number;
    dctXval: number;
    fullXrobot: number;
    fullXawards: number;
    fullXval: number;
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

    const qualifying = scored
      .filter((s) => isQualifying(s.r.eventType))
      .sort(byDate);
    const first2 = qualifying.slice(0, 2);
    const dcmp = scored.filter((s) => isDcmp(s.r.eventType));

    // dct window: first 2 (district) events + dcmp, with a one-play projection
    // when a team played a single event and no dcmp.
    let dctBaseR = sumR(first2);
    let dctBaseA = sumA(first2);
    if (first2.length === 1 && dcmp.length === 0) {
      dctBaseR = 1.6 * first2[0]!.pts.xrobot + 14; // 0.6*first + first + flat 14
      dctBaseA = 1.6 * first2[0]!.pts.xawards;
    }
    const dctXrobot = dctBaseR + sumR(dcmp);
    const dctXawards = dctBaseA + sumA(dcmp);

    // reg window: a team's first 2 events (region / global / event boards),
    // with a one-play projection for a single-event season.
    let regXrobot = sumR(first2);
    let regXawards = sumA(first2);
    if (first2.length === 1 && dcmp.length === 0) {
      regXrobot = 1.6 * first2[0]!.pts.xrobot + 14;
      regXawards = 1.6 * first2[0]!.pts.xawards;
    }
    const regEvents = first2;

    computed.set(team, {
      regXrobot,
      regXawards,
      regXval: regXrobot + regXawards,
      dctXrobot,
      dctXawards,
      dctXval: dctXrobot + dctXawards,
      fullXrobot: full.xrobot,
      fullXawards: full.xawards,
      fullXval: full.xrobot + full.xawards,
      diffReg: difficultyOf(regEvents),
      diffDct: difficultyOf([...first2, ...dcmp]),
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
    const diffReg = roundNull(c.diffReg);
    const diffDct = roundNull(c.diffDct);
    const prev = existing.get(team);
    const rounded = round(c);
    const same =
      prev &&
      prev.regXval === rounded.regXval &&
      prev.dctXval === rounded.dctXval &&
      prev.fullXval === rounded.fullXval &&
      prev.regXrobot === rounded.regXrobot &&
      prev.regXawards === rounded.regXawards &&
      prev.diffReg === diffReg &&
      prev.diffDct === diffDct;
    if (same) return;
    await db.teamScore.upsert({
      where: { teamNumber_year: { teamNumber: team, year } },
      create: { teamNumber: team, year, ...rounded, diffReg, diffDct },
      update: { ...rounded, diffReg, diffDct },
    });
  });
}

// Round stored floats to 2 dp for stable diffing.
function round(c: {
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
