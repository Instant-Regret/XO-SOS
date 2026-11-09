import "server-only";

import { z } from "zod";

const STATBOTICS_BASE = "https://api.statbotics.io/v3";

// Statbotics v3 team_year response is large; we only parse the bits we need.
// `epa.unitless` is documented as a number, but Statbotics has historically
// returned an object like { mean, sd }. Accept either.
const unitlessSchema = z.union([
  z.number(),
  z.object({ mean: z.number().nullish() }).passthrough(),
  z.null(),
]);

const teamYearSchema = z
  .object({
    team: z.number().int(),
    name: z.string().nullish(),
    epa: z
      .object({ unitless: unitlessSchema.optional() })
      .passthrough()
      .nullish(),
  })
  .passthrough();

function coerceUnitless(value: z.infer<typeof unitlessSchema> | undefined) {
  if (value == null) return null;
  if (typeof value === "number") return value;
  return value.mean ?? null;
}

export type StatboticsTeamYear = {
  team: number;
  name: string | null;
  epaUnitless: number | null;
};

// A Statbotics response we should not retry (4xx other than 404). E.g. 422 for
// a season Statbotics doesn't have yet — retrying can never succeed.
export class StatboticsClientError extends Error {
  constructor(
    readonly url: string,
    readonly status: number,
    statusText: string,
  ) {
    super(`Statbotics ${url} → ${status} ${statusText}`);
  }
}

const REQUEST_TIMEOUT_MS = 20_000;

// Statbotics intermittently returns 500s under load. Retry 5xx, timeouts, and
// network errors with backoff so a transient blip doesn't leave us with stale
// data. 4xx responses are returned/thrown immediately.
async function fetchWithRetry(url: string, attempts = 4): Promise<Response> {
  let lastErr: unknown = null;
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(url, {
        cache: "no-store",
        signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      });
      if (res.status === 404 || res.ok) return res;
      if (res.status < 500) {
        throw new StatboticsClientError(url, res.status, res.statusText);
      }
      lastErr = new Error(`Statbotics ${url} → ${res.status} ${res.statusText}`);
    } catch (err) {
      if (err instanceof StatboticsClientError) throw err;
      lastErr = err;
    }
    if (i < attempts - 1) {
      await new Promise((r) => setTimeout(r, 400 * 2 ** i));
    }
  }
  throw lastErr instanceof Error ? lastErr : new Error(`Statbotics ${url} failed`);
}

export async function getTeamYear(
  teamNumber: number,
  year: number,
): Promise<StatboticsTeamYear | null> {
  const res = await fetchWithRetry(
    `${STATBOTICS_BASE}/team_year/${teamNumber}/${year}`,
  );

  if (res.status === 404) return null;

  const parsed = teamYearSchema.parse(await res.json());
  return {
    team: parsed.team,
    name: parsed.name ?? null,
    epaUnitless: coerceUnitless(parsed.epa?.unitless),
  };
}

// Bulk EPA fetch via the paginated team_years endpoint. One request per ~1000
// teams instead of one per team, which avoids the rate-limiting that leaves
// per-team syncs with stale data.
export async function getAllTeamYears(
  year: number,
): Promise<StatboticsTeamYear[]> {
  const pageSize = 1000;
  const out: StatboticsTeamYear[] = [];
  for (let offset = 0; ; offset += pageSize) {
    const res = await fetchWithRetry(
      `${STATBOTICS_BASE}/team_years?year=${year}&limit=${pageSize}&offset=${offset}`,
    );
    const page = z.array(teamYearSchema).parse(await res.json());
    for (const ty of page) {
      out.push({
        team: ty.team,
        name: ty.name ?? null,
        epaUnitless: coerceUnitless(ty.epa?.unitless),
      });
    }
    if (page.length < pageSize) break;
  }
  return out;
}
