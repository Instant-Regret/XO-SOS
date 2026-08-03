import "server-only";

import { z } from "zod";

import { env } from "~/env";

const TBA_BASE = "https://www.thebluealliance.com/api/v3";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

// Fetch with retry/backoff on 429 (rate limit) and 5xx. Does NOT throw on 304
// so conditional callers can detect "not modified".
async function tbaFetchRaw(
  path: string,
  ifNoneMatch?: string,
  attempts = 4,
): Promise<Response> {
  const headers: Record<string, string> = {
    "X-TBA-Auth-Key": env.TBA_AUTH_KEY,
    Accept: "application/json",
  };
  if (ifNoneMatch) headers["If-None-Match"] = ifNoneMatch;

  for (let i = 0; i < attempts; i++) {
    const res = await fetch(`${TBA_BASE}${path}`, { headers, cache: "no-store" });
    if (res.status === 304 || res.ok) return res;
    if ((res.status === 429 || res.status >= 500) && i < attempts - 1) {
      const retryAfter = Number(res.headers.get("retry-after"));
      const wait =
        Number.isFinite(retryAfter) && retryAfter > 0
          ? retryAfter * 1000
          : 400 * 2 ** i;
      await sleep(wait);
      continue;
    }
    throw new Error(`TBA ${path} → ${res.status} ${res.statusText}`);
  }
  throw new Error(`TBA ${path} failed after ${attempts} attempts`);
}

async function tbaFetch<T>(path: string, schema: z.ZodSchema<T>): Promise<T> {
  const res = await tbaFetchRaw(path);
  return schema.parse(await res.json());
}

export type TbaConditional<T> = {
  notModified: boolean;
  data: T | null;
  etag: string | null;
};

// Conditional GET: pass the stored ETag; a 304 comes back as
// { notModified: true, data: null }. On 200, `etag` is the new value to store.
async function tbaGet<T>(
  path: string,
  schema: z.ZodSchema<T>,
  ifNoneMatch?: string,
): Promise<TbaConditional<T>> {
  const res = await tbaFetchRaw(path, ifNoneMatch);
  if (res.status === 304) {
    return { notModified: true, data: null, etag: ifNoneMatch ?? null };
  }
  return {
    notModified: false,
    data: schema.parse(await res.json()),
    etag: res.headers.get("etag"),
  };
}

const districtSchema = z.object({
  key: z.string(),
  abbreviation: z.string(),
  display_name: z.string(),
  year: z.number().int(),
});
export type TbaDistrict = z.infer<typeof districtSchema>;

const eventSchema = z.object({
  key: z.string(),
  name: z.string(),
  event_type: z.number().int(),
  event_type_string: z.string(),
  year: z.number().int(),
  // 0-indexed competition week; null for championships/offseason events.
  week: z.number().int().nullish(),
  start_date: z.string().nullish(),
  end_date: z.string().nullish(),
  district: z.object({ key: z.string() }).nullish(),
});
export type TbaEvent = z.infer<typeof eventSchema>;

const teamSchema = z.object({
  key: z.string(), // "frc{number}"
  team_number: z.number().int(),
  name: z.string().nullish(), // full sponsor name
  nickname: z.string().nullish(),
  city: z.string().nullish(),
  state_prov: z.string().nullish(),
  country: z.string().nullish(),
});
export type TbaTeam = z.infer<typeof teamSchema>;

const mediaSchema = z.object({
  type: z.string(),
  details: z.record(z.string(), z.unknown()).nullish(),
  foreign_key: z.string().nullish(),
  direct_url: z.string().nullish(),
});
export type TbaMedia = z.infer<typeof mediaSchema>;

const awardRecipientSchema = z.object({
  team_key: z.string().nullish(),
  awardee: z.string().nullish(),
});
const awardSchema = z.object({
  name: z.string(),
  award_type: z.number().int(),
  event_key: z.string(),
  recipient_list: z.array(awardRecipientSchema),
  year: z.number().int(),
});
export type TbaAward = z.infer<typeof awardSchema>;

// /event/{key}/rankings — team ranks; count is the field size for seeding.
const rankingsSchema = z.object({
  rankings: z.array(
    z.object({ team_key: z.string(), rank: z.number().int() }),
  ),
});
export type TbaRankings = z.infer<typeof rankingsSchema>;

// /event/{key}/alliances — ordered by seed; picks[0]=captain, [1]=1st pick,
// [2]=2nd pick, [3]=3rd pick/backup.
const allianceSchema = z.object({ picks: z.array(z.string()) });
const alliancesSchema = z.array(allianceSchema);
export type TbaAlliances = z.infer<typeof alliancesSchema>;

// /event/{key}/matches — only the bits needed for elim/Einstein points.
const matchSchema = z.object({
  comp_level: z.string(), // "qm" | "ef" | "qf" | "sf" | "f"
  winning_alliance: z.string().nullish(), // "red" | "blue" | ""
  alliances: z.object({
    red: z.object({ team_keys: z.array(z.string()) }),
    blue: z.object({ team_keys: z.array(z.string()) }),
  }),
});
const matchesSchema = z.array(matchSchema);
export type TbaMatch = z.infer<typeof matchSchema>;

export const tba = {
  districts: (year: number) =>
    tbaFetch(`/districts/${year}`, z.array(districtSchema)),

  districtEvents: (districtKey: string) =>
    tbaFetch(`/district/${districtKey}/events`, z.array(eventSchema)),

  districtTeams: (districtKey: string) =>
    tbaFetch(`/district/${districtKey}/teams`, z.array(teamSchema)),

  events: (year: number) =>
    tbaFetch(`/events/${year}`, z.array(eventSchema)),

  eventTeams: (eventKey: string) =>
    tbaFetch(`/event/${eventKey}/teams`, z.array(teamSchema)),

  teamAwards: (teamKey: string, year: number) =>
    tbaFetch(`/team/${teamKey}/awards/${year}`, z.array(awardSchema)),

  teamMedia: (teamKey: string, year: number) =>
    tbaFetch(`/team/${teamKey}/media/${year}`, z.array(mediaSchema)),

  // Conditional variants — skip work when the endpoint hasn't changed since
  // the stored ETag.
  districtsConditional: (year: number, etag?: string) =>
    tbaGet(`/districts/${year}`, z.array(districtSchema), etag),

  districtEventsConditional: (districtKey: string, etag?: string) =>
    tbaGet(`/district/${districtKey}/events`, z.array(eventSchema), etag),

  districtTeamsConditional: (districtKey: string, etag?: string) =>
    tbaGet(`/district/${districtKey}/teams`, z.array(teamSchema), etag),

  eventsConditional: (year: number, etag?: string) =>
    tbaGet(`/events/${year}`, z.array(eventSchema), etag),

  eventTeamsConditional: (eventKey: string, etag?: string) =>
    tbaGet(`/event/${eventKey}/teams`, z.array(teamSchema), etag),

  eventAwardsConditional: (eventKey: string, etag?: string) =>
    tbaGet(`/event/${eventKey}/awards`, z.array(awardSchema), etag),

  teamMediaConditional: (teamKey: string, year: number, etag?: string) =>
    tbaGet(`/team/${teamKey}/media/${year}`, z.array(mediaSchema), etag),

  eventRankingsConditional: (eventKey: string, etag?: string) =>
    tbaGet(`/event/${eventKey}/rankings`, rankingsSchema.nullable(), etag),

  eventAlliancesConditional: (eventKey: string, etag?: string) =>
    tbaGet(`/event/${eventKey}/alliances`, alliancesSchema.nullable(), etag),

  eventMatchesConditional: (eventKey: string, etag?: string) =>
    tbaGet(`/event/${eventKey}/matches`, matchesSchema, etag),
};

// TBA event_type constants (https://github.com/the-blue-alliance/the-blue-alliance/blob/master/consts/event_type.py)
export const EVENT_TYPE = {
  REGIONAL: 0,
  DISTRICT: 1,
  DISTRICT_CMP: 2,
  CMP_DIVISION: 3,
  CMP_FINALS: 4,
  DISTRICT_CMP_DIVISION: 5,
  FOC: 6,
  REMOTE: 7,
} as const;
