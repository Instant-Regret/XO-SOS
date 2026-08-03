import "server-only";

import { db } from "~/server/db";
import { env } from "~/env";
import { getAllTeamYears, getTeamYear } from "~/server/lib/statbotics";
import { computeYearScores, syncEventResults } from "~/server/lib/scoring-sync";
import { EVENT_TYPE, tba, type TbaEvent, type TbaTeam } from "~/server/lib/tba";

// Process N items concurrently; resolve when all are done. Failures are logged
// per-item so one bad request doesn't abort the whole sync.
async function pool<T>(
  items: T[],
  concurrency: number,
  worker: (item: T) => Promise<void>,
): Promise<void> {
  const queue = [...items];
  const runners = Array.from({ length: Math.min(concurrency, queue.length) }, async () => {
    while (queue.length) {
      const item = queue.shift()!;
      try {
        await worker(item);
      } catch (err) {
        console.error("[sync] item failed:", err);
      }
    }
  });
  await Promise.all(runners);
}

function syncYear() {
  return env.SYNC_YEAR ?? new Date().getUTCFullYear();
}

async function upsertTeamFromTba(team: TbaTeam) {
  await db.team.upsert({
    where: { number: team.team_number },
    create: {
      number: team.team_number,
      key: team.key,
      name: team.name ?? null,
      nickname: team.nickname ?? null,
      city: team.city ?? null,
      stateProv: team.state_prov ?? null,
      country: team.country ?? null,
    },
    update: {
      key: team.key,
      name: team.name ?? null,
      nickname: team.nickname ?? null,
      city: team.city ?? null,
      stateProv: team.state_prov ?? null,
      country: team.country ?? null,
    },
  });
}

async function upsertEvent(event: TbaEvent) {
  const data = {
    name: event.name,
    eventType: event.event_type,
    eventTypeString: event.event_type_string,
    year: event.year,
    week: event.week ?? null,
    startDate: event.start_date ?? null,
    endDate: event.end_date ?? null,
    districtKey: event.district?.key ?? null,
  };
  await db.event.upsert({
    where: { key: event.key },
    create: { key: event.key, ...data },
    update: data,
  });
}

// Returns the district keys for the year (from TBA when changed, else from the
// DB so the caller can still iterate on an unchanged 304).
export async function syncDistricts(year: number): Promise<{ key: string }[]> {
  const path = `/districts/${year}`;
  const { notModified, data, etag } = await tba.districtsConditional(
    year,
    await getEtag(path),
  );
  if (notModified || !data) {
    return db.district.findMany({ where: { year }, select: { key: true } });
  }
  for (const d of data) {
    await db.district.upsert({
      where: { key: d.key },
      create: {
        key: d.key,
        abbreviation: d.abbreviation,
        displayName: d.display_name,
        year: d.year,
      },
      update: {
        abbreviation: d.abbreviation,
        displayName: d.display_name,
        year: d.year,
      },
    });
  }
  await setEtag(path, etag);
  return data.map((d) => ({ key: d.key }));
}

export async function syncDistrictEvents(districtKey: string) {
  const path = `/district/${districtKey}/events`;
  const { notModified, data, etag } = await tba.districtEventsConditional(
    districtKey,
    await getEtag(path),
  );
  if (notModified || !data) return;
  for (const e of data) await upsertEvent(e);
  await setEtag(path, etag);
}

export async function syncDistrictTeams(districtKey: string) {
  const path = `/district/${districtKey}/teams`;
  const { notModified, data, etag } = await tba.districtTeamsConditional(
    districtKey,
    await getEtag(path),
  );
  if (notModified || !data) return;
  for (const t of data) await upsertTeamFromTba(t);
  const teamNumbers = data.map((t) => t.team_number);
  await db.districtTeam.upsert({
    where: { districtKey },
    create: { districtKey, teamNumbers },
    update: { teamNumbers },
  });
  await setEtag(path, etag);
}

export async function syncRegionalEvents(year: number) {
  const path = `/events/${year}`;
  const { notModified, data, etag } = await tba.eventsConditional(
    year,
    await getEtag(path),
  );
  if (notModified || !data) return;
  // Non-district events: regionals + championship divisions + Einstein. (District
  // events and dcmps come from syncDistrictEvents.) Champs events must be here so
  // they're searchable and get rosters/awards/results like any other event.
  const KEEP = new Set<number>([
    EVENT_TYPE.REGIONAL,
    EVENT_TYPE.CMP_DIVISION,
    EVENT_TYPE.CMP_FINALS,
  ]);
  const events = data.filter((e) => KEEP.has(e.event_type));
  for (const e of events) await upsertEvent(e);
  await setEtag(path, etag);
}

// Add champs division/Einstein events to an already-synced season and pull
// their rosters, awards, and results. Busts the /events cache so the broadened
// filter actually re-runs. Run offline after changing the event filter.
export async function syncChampsEvents(years: number[]) {
  const out: Array<{ year: number; champs: number }> = [];
  for (const year of years) {
    const r = await logSync(`champs:${year}`, async () => {
      await db.syncCursor.deleteMany({ where: { path: `/events/${year}` } });
      await syncRegionalEvents(year);
      const champs = await db.event.findMany({
        where: { year, eventType: { in: [EVENT_TYPE.CMP_DIVISION, EVENT_TYPE.CMP_FINALS] } },
        select: { key: true, eventType: true, startDate: true },
      });
      await pool(champs, 8, async (e) => {
        await syncEventTeams(e.key);
        await syncEventAwards(e.key);
      });
      await pool(champs, 6, async (e) => {
        await syncEventResults({
          key: e.key,
          year,
          eventType: e.eventType,
          startDate: e.startDate,
        });
      });
      await computeYearScores(year);
      return { year, champs: champs.length };
    });
    out.push(r);
  }
  return out;
}

// Read/write the stored TBA ETag for a path.
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

export async function syncEventTeams(eventKey: string) {
  const path = `/event/${eventKey}/teams`;
  const { notModified, data, etag } = await tba.eventTeamsConditional(
    eventKey,
    await getEtag(path),
  );
  if (notModified || !data) return; // unchanged since last sync
  const teamNumbers = data.map((t) => t.team_number);
  // Team metadata is nearly static and maintained by the district sync, so
  // only create teams we don't already have. Re-upserting every roster team
  // (many shared across events) is what made changed-event syncs slow on the
  // free-tier DB.
  const existing = new Set(
    (
      await db.team.findMany({
        where: { number: { in: teamNumbers } },
        select: { number: true },
      })
    ).map((t) => t.number),
  );
  for (const t of data) {
    if (!existing.has(t.team_number)) await upsertTeamFromTba(t);
  }
  // Only rewrite the roster link when it actually changed.
  const link = await db.eventTeam.findUnique({
    where: { eventKey },
    select: { teamNumbers: true },
  });
  const sortedNew = JSON.stringify([...teamNumbers].sort((a, b) => a - b));
  const sortedOld = link
    ? JSON.stringify([...link.teamNumbers].sort((a, b) => a - b))
    : null;
  if (sortedOld !== sortedNew) {
    await db.eventTeam.upsert({
      where: { eventKey },
      create: { eventKey, teamNumbers },
      update: { teamNumbers },
    });
  }
  await setEtag(path, etag);
}

// Pull one event's awards and fan them out into each recipient team's Award
// document, replacing that team's awards *for this event* while keeping awards
// from other events. Far fewer requests than the per-team endpoint, and
// conditional so unchanged events are skipped.
export async function syncEventAwards(eventKey: string) {
  const path = `/event/${eventKey}/awards`;
  const { notModified, data, etag } = await tba.eventAwardsConditional(
    eventKey,
    await getEtag(path),
  );
  if (notModified || !data) return;

  const byTeam = new Map<
    number,
    { eventKey: string; awardType: number; name: string; year: number }[]
  >();
  for (const award of data) {
    for (const recipient of award.recipient_list) {
      if (!recipient.team_key) continue; // individual award, no team
      const teamNumber = Number(recipient.team_key.replace(/^frc/, ""));
      if (!Number.isFinite(teamNumber)) continue;
      const list = byTeam.get(teamNumber) ?? [];
      list.push({
        eventKey: award.event_key,
        awardType: award.award_type,
        name: award.name,
        year: award.year,
      });
      byTeam.set(teamNumber, list);
    }
  }

  const cmp = (
    a: { year: number; eventKey: string; awardType: number },
    b: { year: number; eventKey: string; awardType: number },
  ) =>
    a.year - b.year ||
    a.eventKey.localeCompare(b.eventKey) ||
    a.awardType - b.awardType;

  const existingByTeam = new Map(
    (
      await db.award.findMany({
        where: { teamNumber: { in: [...byTeam.keys()] } },
        select: { teamNumber: true, awards: true },
      })
    ).map((d) => [d.teamNumber, d.awards]),
  );
  for (const [teamNumber, eventAwards] of byTeam) {
    const existingAwards = existingByTeam.get(teamNumber) ?? [];
    const kept = existingAwards.filter((a) => a.eventKey !== eventKey);
    const merged = [...kept, ...eventAwards].sort(cmp);
    // Skip the write when nothing actually changed (e.g. TBA re-issued an ETag
    // without changing the data).
    const before = JSON.stringify([...existingAwards].sort(cmp));
    if (before === JSON.stringify(merged)) continue;
    await db.award.upsert({
      where: { teamNumber },
      create: { teamNumber, awards: merged },
      update: { awards: merged },
    });
  }
  await setEtag(path, etag);
}

export async function syncTeamAwards(teamKey: string, year: number) {
  const awards = await tba.teamAwards(teamKey, year);
  const incoming = new Map<number, typeof awards extends never ? never : { eventKey: string; awardType: number; name: string; year: number }[]>();
  for (const award of awards) {
    for (const recipient of award.recipient_list) {
      const tk = recipient.team_key ?? teamKey;
      const teamNumber = Number(tk.replace(/^frc/, ""));
      if (!Number.isFinite(teamNumber)) continue;
      const list = incoming.get(teamNumber) ?? [];
      list.push({
        eventKey: award.event_key,
        awardType: award.award_type,
        name: award.name,
        year: award.year,
      });
      incoming.set(teamNumber, list);
    }
  }

  for (const [teamNumber, newAwards] of incoming) {
    const existing = await db.award.findUnique({
      where: { teamNumber },
      select: { awards: true },
    });
    const kept =
      existing?.awards.filter(
        (a) =>
          !newAwards.some(
            (n) => n.eventKey === a.eventKey && n.awardType === a.awardType,
          ),
      ) ?? [];
    const merged = [...kept, ...newAwards].sort(
      (a, b) =>
        a.year - b.year ||
        a.eventKey.localeCompare(b.eventKey) ||
        a.awardType - b.awardType,
    );
    await db.award.upsert({
      where: { teamNumber },
      create: { teamNumber, awards: merged },
      update: { awards: merged },
    });
  }
}

// TBA serves avatar PNGs via the media endpoint as base64 in
// `details.base64Image`. We cache them per (team, year) so the leaderboard
// doesn't depend on TBA at render time and missing avatars don't trigger 404
// images for every empty cell.
export async function syncTeamAvatar(
  teamKey: string,
  teamNumber: number,
  year: number,
  { force = false }: { force?: boolean } = {},
) {
  if (!force) {
    const existing = await db.teamAvatar.findUnique({
      where: { teamNumber },
      select: { avatars: true },
    });
    if (existing?.avatars.some((a) => a.year === year)) return;
  }

  // Conditional fetch: teams TBA has no avatar for otherwise get re-fetched
  // every run; the ETag lets those come back as a fast 304 and skip.
  const path = `/team/${teamKey}/media/${year}`;
  const {
    notModified,
    data: media,
    etag,
  } = await tba.teamMediaConditional(teamKey, year, force ? undefined : await getEtag(path));
  if (notModified || !media) return;
  await setEtag(path, etag);

  const avatar = media.find((m) => m.type === "avatar");
  const base64Raw =
    (avatar?.details && (avatar.details as { base64Image?: unknown }).base64Image) ?? null;
  const base64 = typeof base64Raw === "string" ? base64Raw : null;
  if (!base64) return;

  const existing = await db.teamAvatar.findUnique({
    where: { teamNumber },
    select: { avatars: true },
  });
  const others = existing?.avatars.filter((a) => a.year !== year) ?? [];
  const next = [...others, { year, base64 }].sort((a, b) => a.year - b.year);
  await db.teamAvatar.upsert({
    where: { teamNumber },
    create: { teamNumber, avatars: next },
    update: { avatars: next },
  });
}

// One-shot helper: walk every team in Mongo and pull their avatar for `year`
// from TBA. Skips teams that already have an entry unless `force` is set.
export async function seedAvatars(
  year: number,
  { force = false, concurrency = 4 }: { force?: boolean; concurrency?: number } = {},
) {
  const teams = await db.team.findMany({ select: { number: true, key: true } });
  let saved = 0;
  let skipped = 0;
  let missing = 0;

  await pool(teams, concurrency, async (t) => {
    if (!force) {
      const existing = await db.teamAvatar.findUnique({
        where: { teamNumber: t.number },
        select: { avatars: true },
      });
      if (existing?.avatars.some((a) => a.year === year)) {
        skipped++;
        return;
      }
    }
    const before = await db.teamAvatar.findUnique({
      where: { teamNumber: t.number },
      select: { avatars: true },
    });
    await syncTeamAvatar(t.key, t.number, year, { force });
    const after = await db.teamAvatar.findUnique({
      where: { teamNumber: t.number },
      select: { avatars: true },
    });
    const had = before?.avatars.some((a) => a.year === year) ?? false;
    const has = after?.avatars.some((a) => a.year === year) ?? false;
    if (!had && has) saved++;
    else if (!has) missing++;
  });

  return { year, total: teams.length, saved, skipped, missing };
}

// Merge a single (year, epa) entry into a team's TeamEpa document.
async function upsertTeamEpa(
  teamNumber: number,
  year: number,
  epaUnitless: number,
) {
  const existing = await db.teamEpa.findUnique({
    where: { teamNumber },
    select: { epas: true },
  });
  const others = existing?.epas.filter((e) => e.year !== year) ?? [];
  const epas = [...others, { year, epaUnitless }].sort((a, b) => a.year - b.year);
  await db.teamEpa.upsert({
    where: { teamNumber },
    create: { teamNumber, epas },
    update: { epas },
  });
}

// Write only the EPA values that actually changed for the year — one bulk read
// to diff, then upsert just the differences. On an unchanged day this writes
// nothing.
async function writeChangedEpas(
  year: number,
  teamYears: { team: number; epaUnitless: number | null }[],
) {
  const existing = new Map<number, number>();
  for (const row of await db.teamEpa.findMany({
    select: { teamNumber: true, epas: true },
  })) {
    const e = row.epas.find((x) => x.year === year);
    if (e) existing.set(row.teamNumber, e.epaUnitless);
  }
  const changed = teamYears.filter(
    (t) => t.epaUnitless !== null && existing.get(t.team) !== t.epaUnitless,
  );
  await pool(changed, 10, async (t) => upsertTeamEpa(t.team, year, t.epaUnitless!));
  return changed.length;
}

export async function syncTeamEpa(teamNumber: number, year: number) {
  const result = await getTeamYear(teamNumber, year);
  if (!result) return;
  // Statbotics' name field tends to be cleaner than TBA's `name`; prefer it.
  if (result.name) {
    await db.team.update({
      where: { number: teamNumber },
      data: { name: result.name },
    });
  }
  if (result.epaUnitless !== null) {
    await upsertTeamEpa(teamNumber, year, result.epaUnitless);
  }
}

// Targeted re-pull of just the EPA values for every known team — far cheaper
// than a full syncAll, used to repair stale EPAs left behind when Statbotics
// 500s during a big sync. Tracks how many teams failed even after retries.
export async function syncAllEpas() {
  const year = syncYear();
  return logSync(`syncEpas:${year}`, async () => {
    const teamYears = await getAllTeamYears(year);
    const updated = await writeChangedEpas(year, teamYears);
    return { year, fetched: teamYears.length, updated };
  });
}

async function logSync<T>(task: string, fn: () => Promise<T>): Promise<T> {
  const startedAt = new Date();
  try {
    const result = await fn();
    await db.syncLog.create({
      data: {
        task,
        status: "success",
        startedAt,
        finishedAt: new Date(),
      },
    });
    return result;
  } catch (err) {
    await db.syncLog.create({
      data: {
        task,
        status: "error",
        message: err instanceof Error ? err.message : String(err),
        startedAt,
        finishedAt: new Date(),
      },
    });
    throw err;
  }
}

// Full data pull + score compute for one season. Reused by the daily sync
// (current year) and the offline backfill (each of the prior years).
export async function syncYearData(year: number) {
  const phase = async <T>(label: string, fn: () => Promise<T>): Promise<T> => {
    const t = Date.now();
    const r = await fn();
    console.log(`[sync] ${year} ${label}: ${Date.now() - t}ms`);
    return r;
  };

  const districts = await phase("districts+districtData", async () => {
    const ds = await syncDistricts(year);
    await Promise.all([
      pool(ds, 8, async (d) => {
        await syncDistrictEvents(d.key);
        await syncDistrictTeams(d.key);
      }),
      syncRegionalEvents(year),
    ]);
    return ds;
  });

  const events = await db.event.findMany({
    where: { year },
    select: { key: true, eventType: true, startDate: true },
  });

  await phase("eventTeams", () =>
    pool(events, 12, async (e) => {
      await syncEventTeams(e.key);
    }),
  );

  await phase("eventAwards", () =>
    pool(events, 12, async (e) => {
      await syncEventAwards(e.key);
    }),
  );

  await phase("epas", async () => {
    const teamYears = await getAllTeamYears(year);
    await writeChangedEpas(year, teamYears);
  });

  // Per-event results (rankings/alliances/matches) feeding the SLFF scores.
  // Matches payloads are large, so keep concurrency lower than the metadata
  // phases. Conditional/diff logic inside makes daily re-runs cheap.
  await phase("results", () =>
    pool(events, 8, async (e) => {
      await syncEventResults({
        key: e.key,
        year,
        eventType: e.eventType,
        startDate: e.startDate,
      });
    }),
  );

  await phase("scores", () => computeYearScores(year));

  const teamCount = await db.team.count();

  // Avatars are intentionally NOT synced here: they change rarely and the UI
  // falls back to TBA's avatar URL when there's no cached copy, so keeping
  // them out of the daily sync keeps it well under the serverless timeout.
  // Refresh them occasionally via /api/cron/avatars (seedAvatars).

  return { year, districts: districts.length, teams: teamCount, events: events.length };
}

export async function syncAll() {
  const year = syncYear();
  return logSync(`syncAll:${year}`, () => syncYearData(year));
}

// Re-pull only match results (to repopulate elimWins after the 5-pts-per-WIN
// fix) and recompute scores, without re-fetching teams/awards/epas. Clears the
// per-event /matches ETags so they re-fetch; rankings/alliances stay 304 and
// their stored fields are preserved. Run offline.
export async function rescoreYears(years: number[]) {
  const results: Array<{ year: number; events: number }> = [];
  for (const year of years) {
    const r = await logSync(`rescore:${year}`, async () => {
      await db.syncCursor.deleteMany({
        where: { path: { startsWith: `/event/${year}`, endsWith: "/matches" } },
      });
      const events = await db.event.findMany({
        where: { year },
        select: { key: true, eventType: true, startDate: true },
      });
      await pool(events, 8, async (e) => {
        await syncEventResults({
          key: e.key,
          year,
          eventType: e.eventType,
          startDate: e.startDate,
        });
      });
      await computeYearScores(year);
      return { year, events: events.length };
    });
    results.push(r);
  }
  return results;
}

// Recompute TeamScore for a range of years from already-synced results — no
// TBA fetch. Use after a change to the scoring/compute logic. Run offline.
export async function recomputeYears(years: number[]) {
  const out: Array<{ year: number }> = [];
  for (const year of years) {
    await logSync(`recompute:${year}`, async () => {
      await computeYearScores(year);
      return { year };
    });
    out.push({ year });
  }
  return out;
}

// One-time offline backfill: pull + score a range of prior seasons so the
// weighted-4-year predictions have history. Run locally (no Vercel timeout).
export async function backfillYears(years: number[]) {
  const results: Array<Awaited<ReturnType<typeof syncYearData>>> = [];
  for (const year of years) {
    const r = await logSync(`backfill:${year}`, () => syncYearData(year));
    results.push(r);
  }
  return results;
}
