import { NextResponse, type NextRequest } from "next/server";

import { db } from "~/server/db";
import { tba } from "~/server/lib/tba";

export const runtime = "nodejs";

// Avatar proxy. The public TBA hotlink URL (`/avatar/{year}/frc{n}.png`) 403s
// for any team without an avatar that exact year, and the browser can't fall
// back to another year — so avatars intermittently fail to load. This serves
// the team's avatar from our cache (nearest year), and on a miss fetches it
// from the TBA API with our auth key (no 403) and caches it. Teams with no
// avatar at all get a clean 404, which the UI renders as the number tile.
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ team: string }> },
) {
  const { team } = await params;
  const number = parseInt(String(team).replace(/^frc/, ""), 10);
  if (!Number.isFinite(number)) {
    return new NextResponse("bad team", { status: 400 });
  }
  const yearParam = parseInt(
    new URL(req.url).searchParams.get("year") ?? "",
    10,
  );
  const year = Number.isFinite(yearParam) ? yearParam : new Date().getFullYear();

  // 1. Cache: exact year, else nearest prior, else newest available.
  const doc = await db.teamAvatar.findUnique({
    where: { teamNumber: number },
    select: { avatars: true },
  });
  let base64: string | null = null;
  if (doc?.avatars.length) {
    const exact = doc.avatars.find((a) => a.year === year);
    const prior = [...doc.avatars]
      .filter((a) => a.year <= year)
      .sort((a, b) => b.year - a.year)[0];
    const newest = [...doc.avatars].sort((a, b) => b.year - a.year)[0];
    base64 = (exact ?? prior ?? newest)?.base64 ?? null;
  }

  // 2. Miss: fetch from TBA (authed) for the requested year then a couple prior,
  //    and cache the first hit so the next request is served locally.
  if (!base64) {
    for (const y of [year, year - 1, year - 2]) {
      try {
        const media = await tba.teamMedia(`frc${number}`, y);
        const avatar = media.find((m) => m.type === "avatar");
        const raw =
          avatar?.details &&
          (avatar.details as { base64Image?: unknown }).base64Image;
        if (typeof raw === "string" && raw) {
          base64 = raw;
          const others = doc?.avatars.filter((a) => a.year !== y) ?? [];
          const next = [...others, { year: y, base64: raw }].sort(
            (a, b) => a.year - b.year,
          );
          await db.teamAvatar.upsert({
            where: { teamNumber: number },
            create: { teamNumber: number, avatars: next },
            update: { avatars: next },
          });
          break;
        }
      } catch {
        // ignore and try the next year / fall through to 404
      }
    }
  }

  if (!base64) return new NextResponse(null, { status: 404 });

  return new NextResponse(Buffer.from(base64, "base64"), {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      // Browser + CDN cache; avatars change at most once a season.
      "Cache-Control": "public, max-age=86400, s-maxage=604800",
    },
  });
}
