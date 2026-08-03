import "server-only";

import { db } from "~/server/db";

/**
 * Weight fitting for the weighted-4-year predictions.
 *
 * Prediction: XROBOT_pred(Y) = Σ_{k=1..4} wR_k · stdXrobot(Y−k), and the same
 * for awards. We choose wR / wA to best predict a team's *actual* std-window
 * value in year Y from its four prior seasons — a non-negative least-squares
 * fit over the panel of (team, Y) rows where all five seasons exist.
 *
 * The fitted weights are the "optimal" defaults; they're copied into the
 * editable "active" weights, and "reset to optimal" restores them.
 */

export type Weights4 = [number, number, number, number];

// Sensible fallback when there isn't enough history to fit (recency-weighted).
const DEFAULT_WEIGHTS: Weights4 = [0.5, 0.3, 0.15, 0.05];

// Solve (A w = b) for a small symmetric system via Gaussian elimination with
// partial pivoting. A is n×n row-major, b length n.
function solve(A: number[][], b: number[]): number[] | null {
  const n = b.length;
  const M = A.map((row, i) => [...row, b[i]!]);
  for (let col = 0; col < n; col++) {
    let piv = col;
    for (let r = col + 1; r < n; r++) {
      if (Math.abs(M[r]![col]!) > Math.abs(M[piv]![col]!)) piv = r;
    }
    if (Math.abs(M[piv]![col]!) < 1e-12) return null;
    [M[col], M[piv]] = [M[piv]!, M[col]!];
    const pivRow = M[col]!;
    for (let r = 0; r < n; r++) {
      if (r === col) continue;
      const f = M[r]![col]! / pivRow[col]!;
      for (let c = col; c <= n; c++) M[r]![c]! -= f * pivRow[c]!;
    }
  }
  return M.map((row, i) => row[n]! / row[i]!);
}

// Non-negative least squares (small, 4 features): ridge-regularized normal
// equations, then a few rounds of clamping the most-negative weight to 0 and
// refitting on the remaining active set. Good enough for 4 monotone features.
function nnls(X: number[][], y: number[], lambda = 1e-3): Weights4 {
  const p = 4;
  let active = [0, 1, 2, 3];
  for (let iter = 0; iter < p; iter++) {
    // Normal equations over the active columns.
    const A: number[][] = active.map(() => active.map(() => 0));
    const b: number[] = active.map(() => 0);
    for (let s = 0; s < X.length; s++) {
      const row = X[s]!;
      for (let i = 0; i < active.length; i++) {
        b[i]! += row[active[i]!]! * y[s]!;
        for (let j = 0; j < active.length; j++) {
          A[i]![j]! += row[active[i]!]! * row[active[j]!]!;
        }
      }
    }
    for (let i = 0; i < active.length; i++) A[i]![i]! += lambda;
    const sol = solve(A, b);
    if (!sol) break;
    // Any negative weight → drop that column and refit.
    let worst = -1;
    let worstVal = 0;
    for (let i = 0; i < active.length; i++) {
      if (sol[i]! < worstVal) {
        worstVal = sol[i]!;
        worst = i;
      }
    }
    if (worst === -1) {
      const w: Weights4 = [0, 0, 0, 0];
      active.forEach((col, i) => (w[col] = sol[i]!));
      return w;
    }
    active = active.filter((_, i) => i !== worst);
    if (active.length === 0) break;
  }
  return DEFAULT_WEIGHTS;
}

// Build (features, target) rows for one component across the score panel.
// scoresByTeamYear: team -> year -> value. For each (team, Y) with all of
// Y..Y−4 present, feature = [v(Y−1..Y−4)], target = v(Y).
function panel(
  scoresByTeamYear: Map<number, Map<number, number>>,
  years: number[],
): { X: number[][]; y: number[] } {
  const X: number[][] = [];
  const y: number[] = [];
  const targetYears = years.filter((yr) => years.includes(yr - 4));
  for (const [, byYear] of scoresByTeamYear) {
    for (const Y of targetYears) {
      const t = byYear.get(Y);
      const f1 = byYear.get(Y - 1);
      const f2 = byYear.get(Y - 2);
      const f3 = byYear.get(Y - 3);
      const f4 = byYear.get(Y - 4);
      if (t == null || f1 == null || f2 == null || f3 == null || f4 == null) {
        continue;
      }
      X.push([f1, f2, f3, f4]);
      y.push(t);
    }
  }
  return { X, y };
}

/**
 * Fit optimal robot/award weights from all stored TeamScore rows and persist
 * them to ScoreWeights (both opt* and, when seeding, act*). Returns the fit.
 */
export async function fitWeights(seedActive = true): Promise<{
  optRobot: Weights4;
  optAwards: Weights4;
  rows: number;
}> {
  const scores = await db.teamScore.findMany({
    select: { teamNumber: true, year: true, regXrobot: true, regXawards: true },
  });
  const years = [...new Set(scores.map((s) => s.year))].sort((a, b) => a - b);

  const robotByTY = new Map<number, Map<number, number>>();
  const awardsByTY = new Map<number, Map<number, number>>();
  for (const s of scores) {
    (robotByTY.get(s.teamNumber) ?? robotByTY.set(s.teamNumber, new Map()).get(s.teamNumber)!).set(s.year, s.regXrobot);
    (awardsByTY.get(s.teamNumber) ?? awardsByTY.set(s.teamNumber, new Map()).get(s.teamNumber)!).set(s.year, s.regXawards);
  }

  const robotPanel = panel(robotByTY, years);
  const awardsPanel = panel(awardsByTY, years);

  const optRobot = robotPanel.X.length >= 8 ? nnls(robotPanel.X, robotPanel.y) : DEFAULT_WEIGHTS;
  const optAwards = awardsPanel.X.length >= 8 ? nnls(awardsPanel.X, awardsPanel.y) : DEFAULT_WEIGHTS;

  await db.scoreWeights.upsert({
    where: { key: "default" },
    create: {
      key: "default",
      optRobot,
      optAwards,
      actRobot: optRobot,
      actAwards: optAwards,
    },
    update: seedActive
      ? { optRobot, optAwards, actRobot: optRobot, actAwards: optAwards }
      : { optRobot, optAwards },
  });

  return { optRobot, optAwards, rows: robotPanel.X.length };
}

// Load active weights (falls back to defaults if unfit).
export async function getActiveWeights(): Promise<{
  robot: Weights4;
  awards: Weights4;
}> {
  const w = await db.scoreWeights.findUnique({ where: { key: "default" } });
  const as4 = (a: number[] | undefined, fb: Weights4): Weights4 =>
    a && a.length === 4 ? (a as Weights4) : fb;
  return {
    robot: as4(w?.actRobot, DEFAULT_WEIGHTS),
    awards: as4(w?.actAwards, DEFAULT_WEIGHTS),
  };
}

// The weighted-4-year prediction for one component given prior-year values.
export function predict(weights: Weights4, priors: [number, number, number, number]): number {
  return weights[0] * priors[0] + weights[1] * priors[1] + weights[2] * priors[2] + weights[3] * priors[3];
}
