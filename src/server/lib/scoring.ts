import "server-only";

/**
 * SLFF scoring rubric (from the team's scoring doc).
 *
 * Two contexts:
 *  - "regular": regionals, district events, and district championships (dcmp).
 *  - "champs":  world-championship divisions + Einstein.
 *
 * A team's XVAL = XROBOT + XAWARDS, where
 *  - XROBOT  = non-award points  (seeding + elim + picking + Einstein bonus)
 *  - XAWARDS = award points      (the award tables below)
 * Event WIN gives no points (it lives in the event-wins tooltip only).
 * Winner / Finalist are excluded from award points.
 */

export type ScoreContext = "regular" | "champs";

// Selection role on an alliance. Regular events use captain/pick1/pick2;
// championship alliances add a 3rd pick.
export type PickRole = "captain" | "pick1" | "pick2" | "pick3";

// ---------------------------------------------------------------------------
// Picking points — indexed by alliance seed (1..8) and selection role.
// ---------------------------------------------------------------------------

const REGULAR_PICK_POINTS: Record<
  number,
  { captain: number; pick1: number; pick2: number }
> = {
  1: { captain: 16, pick1: 16, pick2: 1 },
  2: { captain: 15, pick1: 15, pick2: 2 },
  3: { captain: 14, pick1: 14, pick2: 3 },
  4: { captain: 13, pick1: 13, pick2: 4 },
  5: { captain: 12, pick1: 12, pick2: 5 },
  6: { captain: 11, pick1: 11, pick2: 6 },
  7: { captain: 10, pick1: 10, pick2: 7 },
  8: { captain: 9, pick1: 9, pick2: 8 },
};

const CHAMPS_PICK_POINTS: Record<
  number,
  { captain: number; pick1: number; pick2: number; pick3: number }
> = {
  1: { captain: 24, pick1: 24, pick2: 9, pick3: 8 },
  2: { captain: 23, pick1: 23, pick2: 10, pick3: 7 },
  3: { captain: 22, pick1: 22, pick2: 11, pick3: 6 },
  4: { captain: 21, pick1: 21, pick2: 12, pick3: 5 },
  5: { captain: 20, pick1: 20, pick2: 13, pick3: 4 },
  6: { captain: 19, pick1: 19, pick2: 14, pick3: 3 },
  7: { captain: 18, pick1: 18, pick2: 15, pick3: 2 },
  8: { captain: 17, pick1: 17, pick2: 16, pick3: 1 },
};

/** Points a team earns for being selected onto an alliance. */
export function pickingPoints(
  context: ScoreContext,
  allianceSeed: number,
  role: PickRole,
): number {
  if (context === "champs") {
    const row = CHAMPS_PICK_POINTS[allianceSeed];
    if (!row) return 0;
    return row[role] ?? 0;
  }
  const row = REGULAR_PICK_POINTS[allianceSeed];
  if (!row || role === "pick3") return 0;
  return row[role] ?? 0;
}

// ---------------------------------------------------------------------------
// Match / elimination points.
// ---------------------------------------------------------------------------

/**
 * Playoff points: 5 per playoff match WON (not merely played), at every event —
 * regular elims, champs division, and Einstein alike. Validated against the
 * real SLFF draft scores.
 */
export const PLAYOFF_POINTS_PER_WIN = 5;

// ---------------------------------------------------------------------------
// Award points.
// ---------------------------------------------------------------------------

// The six "Robot Awards" (Delphi/Xerox/etc.) matched by name prefix — TBA names
// are sometimes sponsor-prefixed. Kept in sync with data.ts bucketAwards().
const ROBOT_AWARD_PREFIXES = [
  "autonomous award",
  "creativity award",
  "excellence in engineering award",
  "industrial design award",
  "innovation in control award",
  "quality award",
];

function isRobotAward(name: string) {
  return ROBOT_AWARD_PREFIXES.some((p) => name.startsWith(p));
}

// TBA award_type ints we key on.
const AWARD_TYPE = {
  CHAIRMANS: 0, // Impact / Chairman's (winner)
  WINNER: 1,
  FINALIST: 2,
  WOODIE_FLOWERS: 3,
  DEANS_LIST: 4,
  ENGINEERING_INSPIRATION: 9,
  ROOKIE_ALL_STAR: 10,
} as const;

/**
 * Points an award is worth for XAWARDS. Event Winner (1) and Finalist (2) never
 * score as awards. Anything official not otherwise listed is the "any other
 * official award" bucket (5 regular / 10 champs).
 */
export function awardPoints(
  awardType: number,
  awardName: string,
  context: ScoreContext,
): number {
  const champs = context === "champs";
  const name = awardName.trim().toLowerCase();

  if (awardType === AWARD_TYPE.WINNER || awardType === AWARD_TYPE.FINALIST) {
    return 0;
  }

  // Impact / Chairman's. Regular events have no Impact finalist; champs
  // distinguishes winner (110) from finalist (90).
  const isImpact =
    awardType === AWARD_TYPE.CHAIRMANS ||
    name.includes("chairman") ||
    name.includes("impact");
  if (isImpact) {
    if (champs && name.includes("finalist")) return 90;
    return champs ? 110 : 60;
  }

  if (awardType === AWARD_TYPE.ENGINEERING_INSPIRATION) return champs ? 60 : 45;
  if (awardType === AWARD_TYPE.ROOKIE_ALL_STAR) return champs ? 35 : 25;
  if (name.startsWith("team sustainability")) return champs ? 35 : 25;
  if (name.startsWith("rising all star")) return champs ? 20 : 15;
  if (isRobotAward(name)) return champs ? 30 : 20;
  // Woodie Flowers: "Woodie Flowers Finalist Award" (reg 10) / "Woodie Flowers
  // Award" (champs 20).
  if (awardType === AWARD_TYPE.WOODIE_FLOWERS || name.includes("woodie flowers")) {
    return champs ? 20 : 10;
  }
  if (awardType === AWARD_TYPE.DEANS_LIST || name.includes("dean's list")) {
    return champs ? 15 : 5;
  }

  // Any other official award (excluding winner / finalist, handled above).
  return champs ? 10 : 5;
}

// ---------------------------------------------------------------------------
// One-play teams (attend only one event, for all drafts).
// ---------------------------------------------------------------------------

/**
 * A one-play team's projected second-event points. Their season total is
 * firstEventPoints + onePlaySecondEventPoints(firstEventPoints).
 */
export function onePlaySecondEventPoints(firstEventPoints: number): number {
  return 0.6 * firstEventPoints + 14;
}

// ---------------------------------------------------------------------------
// Seeding points — "district ranking formula" on the qual ranking.
// ---------------------------------------------------------------------------

// Inverse error function (Winitzki approximation) — accurate to ~1e-3, plenty
// for a value that gets rounded to an integer.
function erfInv(x: number): number {
  const a = 0.147;
  const sign = x < 0 ? -1 : 1;
  const ln = Math.log(1 - x * x);
  const term = 2 / (Math.PI * a) + ln / 2;
  return sign * Math.sqrt(Math.sqrt(term * term - ln / a) - term);
}

/**
 * Seeding points from a team's qualification rank and the number of teams at
 * the event, using FIRST's district qualification-ranking-points formula
 * (applied to every regular event, regionals included). Top seed ≈ 22, last
 * ≈ 2-3 — matches FRC. Verify against TBA /event/{key}/district_points for a
 * known district event.
 */
export function seedingPoints(rank: number, numTeams: number): number {
  if (numTeams <= 1 || rank < 1) return 0;
  const alpha = 1.07;
  const scale = 10 / erfInv(1 / alpha);
  const x = (numTeams - 2 * rank + 2) / (alpha * numTeams);
  return Math.round(erfInv(x) * scale + 12);
}
