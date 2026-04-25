import "server-only";

import { z } from "zod";

import { env } from "~/env";

const TBA_BASE = "https://www.thebluealliance.com/api/v3";

async function tbaFetch<T>(path: string, schema: z.ZodSchema<T>): Promise<T> {
  const res = await fetch(`${TBA_BASE}${path}`, {
    headers: {
      "X-TBA-Auth-Key": env.TBA_AUTH_KEY,
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`TBA ${path} → ${res.status} ${res.statusText}`);
  }

  return schema.parse(await res.json());
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
