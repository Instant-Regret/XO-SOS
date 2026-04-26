import "server-only";

import { db } from "~/server/db";
import { env } from "~/env";
import { getTeamYear } from "~/server/lib/statbotics";
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

export async function syncDistricts(year: number) {
  const districts = await tba.districts(year);
  for (const d of districts) {
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
  return districts;
}

export async function syncDistrictEvents(districtKey: string) {
  const events = await tba.districtEvents(districtKey);
  for (const e of events) await upsertEvent(e);
  return events;
}

export async function syncDistrictTeams(districtKey: string) {
  const teams = await tba.districtTeams(districtKey);
  for (const t of teams) await upsertTeamFromTba(t);
  const teamNumbers = teams.map((t) => t.team_number);
  await db.districtTeam.upsert({
    where: { districtKey },
    create: { districtKey, teamNumbers },
    update: { teamNumbers },
  });
  return teams;
}

export async function syncRegionalEvents(year: number) {
  const events = await tba.events(year);
  const regionals = events.filter((e) => e.event_type === EVENT_TYPE.REGIONAL);
  for (const e of regionals) await upsertEvent(e);
  return regionals;
}

export async function syncEventTeams(eventKey: string) {
  const teams = await tba.eventTeams(eventKey);
  for (const t of teams) await upsertTeamFromTba(t);
  const teamNumbers = teams.map((t) => t.team_number);
  await db.eventTeam.upsert({
    where: { eventKey },
    create: { eventKey, teamNumbers },
    update: { teamNumbers },
  });
  return teams;
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

  const media = await tba.teamMedia(teamKey, year);
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
    const existing = await db.teamEpa.findUnique({
      where: { teamNumber },
      select: { epas: true },
    });
    const others = existing?.epas.filter((e) => e.year !== year) ?? [];
    const epas = [...others, { year, epaUnitless: result.epaUnitless }].sort(
      (a, b) => a.year - b.year,
    );
    await db.teamEpa.upsert({
      where: { teamNumber },
      create: { teamNumber, epas },
      update: { epas },
    });
  }
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

export async function syncAll() {
  const year = syncYear();
  return logSync(`syncAll:${year}`, async () => {
    const districts = await syncDistricts(year);

    for (const d of districts) {
      await syncDistrictEvents(d.key);
      await syncDistrictTeams(d.key);
    }

    await syncRegionalEvents(year);

    // Pull every event we now know about for this year so we cover regional
    // teams plus district-event-level rosters.
    const events = await db.event.findMany({
      where: { year },
      select: { key: true },
    });
    await pool(events, 4, async (e) => {
      await syncEventTeams(e.key);
    });

    const teams = await db.team.findMany({ select: { number: true, key: true } });

    await pool(teams, 4, async (t) => {
      await syncTeamAwards(t.key, year);
    });

    await pool(teams, 6, async (t) => {
      await syncTeamEpa(t.number, year);
    });

    await pool(teams, 4, async (t) => {
      await syncTeamAvatar(t.key, t.number, year);
    });

    return { year, districts: districts.length, teams: teams.length, events: events.length };
  });
}
