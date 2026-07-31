import { NextResponse, type NextRequest } from "next/server";

import { env } from "~/env";
import { seedAvatars } from "~/server/lib/sync";

export const runtime = "nodejs";
export const maxDuration = 300;

// One-shot avatar backfill. Walks every team in Mongo and pulls the TBA avatar
// for the requested year. Existing entries are kept unless `force=1`.
//   ?year=2024            target season (defaults to SYNC_YEAR / current year)
//   ?force=1              re-fetch even if an entry already exists
export async function GET(req: NextRequest) {
  const auth = req.headers.get("authorization");
  if (auth !== `Bearer ${env.CRON_SECRET}`) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const url = new URL(req.url);
  const yearParam = url.searchParams.get("year");
  const year = yearParam
    ? Number(yearParam)
    : env.SYNC_YEAR ?? new Date().getUTCFullYear();
  if (!Number.isFinite(year)) {
    return NextResponse.json({ error: "invalid year" }, { status: 400 });
  }
  const force = url.searchParams.get("force") === "1";

  try {
    const result = await seedAvatars(year, { force });
    return NextResponse.json({ ok: true, result });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  return GET(req);
}
