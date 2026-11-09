import { NextResponse, type NextRequest } from "next/server";

import { env } from "~/env";
import {
  backfillYears,
  recomputeYears,
  rescoreYears,
  syncAll,
  syncAllEpas,
  syncChampsEvents,
} from "~/server/lib/sync";
import { fitWeights } from "~/server/lib/scoring-fit";
import { acquireCronLock, runSource } from "~/server/lib/cron-lock";

export const runtime = "nodejs";
export const maxDuration = 300; // 5 min — Vercel hobby caps at 60s; pro/enterprise can extend.

// Lease for the scheduled sync: a bit longer than maxDuration so a run that
// hits the function timeout releases the job on its own.
const SYNC_LOCK_TTL_MS = (maxDuration + 60) * 1000;

// Works with both legacy Vercel Cron Jobs (GET) and Vercel Schedules (POST by
// default, CloudEvents `ce-*` headers). Both send `Authorization: Bearer
// <CRON_SECRET>` — Schedules sends the CRON_SECRET of the current production
// deployment, so rotate it by updating the env var AND redeploying.
export async function GET(req: NextRequest) {
  const auth = req.headers.get("authorization");
  if (auth !== `Bearer ${env.CRON_SECRET}`) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  // Tasks:
  //   ?task=epa                       re-pull only EPA values (repair stale data)
  //   ?task=backfill&years=2022,2023   pull+score prior seasons (run offline)
  //   ?task=fit                        refit prediction weights from TeamScore
  //   (default)                        full current-year sync
  const params = new URL(req.url).searchParams;
  const task = params.get("task");

  try {
    let result: unknown;
    if (task === "epa") {
      result = await syncAllEpas();
    } else if (task === "backfill") {
      const years = (params.get("years") ?? "")
        .split(",")
        .map((y) => Number(y.trim()))
        .filter((y) => Number.isInteger(y) && y > 2000);
      if (years.length === 0) {
        return NextResponse.json(
          { ok: false, error: "backfill needs ?years=YYYY,YYYY" },
          { status: 400 },
        );
      }
      result = await backfillYears(years);
    } else if (task === "rescore") {
      const years = (params.get("years") ?? "")
        .split(",")
        .map((y) => Number(y.trim()))
        .filter((y) => Number.isInteger(y) && y > 2000);
      if (years.length === 0) {
        return NextResponse.json(
          { ok: false, error: "rescore needs ?years=YYYY,YYYY" },
          { status: 400 },
        );
      }
      result = await rescoreYears(years);
    } else if (task === "recompute") {
      const years = (params.get("years") ?? "")
        .split(",")
        .map((y) => Number(y.trim()))
        .filter((y) => Number.isInteger(y) && y > 2000);
      if (years.length === 0) {
        return NextResponse.json(
          { ok: false, error: "recompute needs ?years=YYYY,YYYY" },
          { status: 400 },
        );
      }
      result = await recomputeYears(years);
    } else if (task === "champs") {
      const years = (params.get("years") ?? "")
        .split(",")
        .map((y) => Number(y.trim()))
        .filter((y) => Number.isInteger(y) && y > 2000);
      if (years.length === 0) {
        return NextResponse.json(
          { ok: false, error: "champs needs ?years=YYYY,YYYY" },
          { status: 400 },
        );
      }
      result = await syncChampsEvents(years);
    } else if (task === "fit") {
      result = await fitWeights();
    } else {
      // The scheduled job. Schedules runs can overlap, be redelivered, or be
      // started by hand ("Run now"); two concurrent syncs would double the
      // Mongo connection count for no benefit, so take a lease first.
      const source = runSource(req.headers);
      console.log("[cron/sync] start", source);
      const lock = await acquireCronLock(
        "sync",
        SYNC_LOCK_TTL_MS,
        source.executionId,
      );
      if (!lock.acquired) {
        console.log(`[cron/sync] skipped: ${lock.reason}`);
        return NextResponse.json({ ok: true, skipped: lock.reason, source });
      }
      try {
        result = await syncAll();
      } finally {
        await lock.release();
      }
    }
    return NextResponse.json({ ok: true, result });
  } catch (err) {
    // Log the full error (with stack) so it shows in the function logs, not
    // just the response body.
    console.error("[cron/sync] failed:", err);
    const message = err instanceof Error ? err.stack ?? err.message : String(err);
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  return GET(req);
}
