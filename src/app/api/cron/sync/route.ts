import { NextResponse, type NextRequest } from "next/server";

import { env } from "~/env";
import { backfillYears, syncAll, syncAllEpas } from "~/server/lib/sync";
import { fitWeights } from "~/server/lib/scoring-fit";

export const runtime = "nodejs";
export const maxDuration = 300; // 5 min — Vercel hobby caps at 60s; pro/enterprise can extend.

export async function GET(req: NextRequest) {
  const auth = req.headers.get("authorization");
  // Vercel Cron sends `Authorization: Bearer <CRON_SECRET>`.
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
    } else if (task === "fit") {
      result = await fitWeights();
    } else {
      result = await syncAll();
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
