import "server-only";

import { randomUUID } from "node:crypto";

import { db } from "~/server/db";

/**
 * Metadata Vercel attaches to a scheduled run. Vercel Schedules sends
 * CloudEvents headers (`ce-*`); legacy Cron Jobs only send the user-agent and
 * `x-vercel-cron-schedule`; a manual curl sends neither.
 */
export type RunSource = {
  kind: "schedule" | "cron" | "manual";
  executionId: string | null; // ce-id — identical across redeliveries
  scheduleName: string | null;
  scheduledAt: string | null; // ISO, before jitter
};

export function runSource(headers: Headers): RunSource {
  const executionId = headers.get("ce-id");
  if (executionId) {
    return {
      kind: "schedule",
      executionId,
      scheduleName: headers.get("ce-vssschedulename"),
      scheduledAt: headers.get("ce-vssscheduledat"),
    };
  }
  const isCron =
    headers.get("x-vercel-cron-schedule") != null ||
    (headers.get("user-agent") ?? "").startsWith("vercel-cron");
  return {
    kind: isCron ? "cron" : "manual",
    executionId: null,
    scheduleName: null,
    scheduledAt: null,
  };
}

export type LockResult =
  | { acquired: true; release: () => Promise<void> }
  | { acquired: false; reason: "running" | "duplicate" };

function isUniqueViolation(err: unknown) {
  return (
    typeof err === "object" &&
    err !== null &&
    (err as { code?: unknown }).code === "P2002"
  );
}

/**
 * Take a time-boxed lease named `name`. Fails if another run holds an
 * unexpired lease, or if `executionId` was already accepted (a redelivery).
 * The lease self-expires after `ttlMs`, so a run killed by the function
 * timeout can't wedge the job.
 */
export async function acquireCronLock(
  name: string,
  ttlMs: number,
  executionId: string | null,
): Promise<LockResult> {
  const holder = randomUUID();
  const now = new Date();
  const expiresAt = new Date(now.getTime() + ttlMs);

  const existing = await db.cronLock.findUnique({
    where: { name },
    select: { lastExecutionId: true },
  });
  if (executionId && existing?.lastExecutionId === executionId) {
    return { acquired: false, reason: "duplicate" };
  }

  let acquired = false;
  if (existing) {
    // Conditional update = atomic compare-and-set on the expiry.
    const r = await db.cronLock.updateMany({
      where: { name, expiresAt: { lt: now } },
      data: {
        holder,
        expiresAt,
        ...(executionId ? { lastExecutionId: executionId } : {}),
      },
    });
    // >= 1 (not === 1): if the unique index on `name` is missing, a racing
    // first create can leave two docs; updating both still means we hold it.
    acquired = r.count >= 1;
  } else {
    try {
      await db.cronLock.create({
        data: { name, holder, expiresAt, lastExecutionId: executionId },
      });
      acquired = true;
    } catch (err) {
      if (!isUniqueViolation(err)) throw err;
    }
  }
  if (!acquired) return { acquired: false, reason: "running" };

  return {
    acquired: true,
    release: async () => {
      // Only clear our own lease (it may have expired and been retaken).
      await db.cronLock
        .updateMany({
          where: { name, holder },
          data: { holder: null, expiresAt: new Date(0) },
        })
        .catch((err) => console.error(`[cron-lock] release ${name} failed:`, err));
    },
  };
}
