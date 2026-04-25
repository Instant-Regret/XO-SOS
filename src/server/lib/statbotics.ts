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

export async function getTeamYear(
  teamNumber: number,
  year: number,
): Promise<StatboticsTeamYear | null> {
  const res = await fetch(
    `${STATBOTICS_BASE}/team_year/${teamNumber}/${year}`,
    { cache: "no-store" },
  );

  if (res.status === 404) return null;
  if (!res.ok) {
    throw new Error(
      `Statbotics team_year/${teamNumber}/${year} → ${res.status} ${res.statusText}`,
    );
  }

  const parsed = teamYearSchema.parse(await res.json());
  return {
    team: parsed.team,
    name: parsed.name ?? null,
    epaUnitless: coerceUnitless(parsed.epa?.unitless),
  };
}
