import { NextResponse, type NextRequest } from "next/server";

import { env } from "~/env";
import { syncAll } from "~/server/lib/sync";

export const runtime = "nodejs";
export const maxDuration = 300; // 5 min — Vercel hobby caps at 60s; pro/enterprise can extend.

export async function GET(req: NextRequest) {
  const auth = req.headers.get("authorization");
  // Vercel Cron sends `Authorization: Bearer <CRON_SECRET>`.
  if (auth !== `Bearer ${env.CRON_SECRET}`) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  try {
    const result = await syncAll();
    return NextResponse.json({ ok: true, result });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  return GET(req);
}
