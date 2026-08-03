import { env } from "~/env";
import { PrismaClient } from "../../generated/prisma";

// Cap the MongoDB connection pool. The driver defaults to maxPoolSize=100 per
// client, so each dev server / serverless instance could open ~100 connections
// and blow past Atlas's cluster limit. A small pool is plenty (board queries do
// a handful of parallel reads; the sync's concurrency just queues on it).
function withPoolLimit(url: string, max: number): string {
  if (/[?&]maxPoolSize=/i.test(url)) return url; // respect an explicit setting
  return `${url}${url.includes("?") ? "&" : "?"}maxPoolSize=${max}`;
}

const createPrismaClient = () =>
  new PrismaClient({
    datasources: { db: { url: withPoolLimit(env.DATABASE_URL, 10) } },
    log:
      env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined;
};

export const db = globalForPrisma.prisma ?? createPrismaClient();

if (env.NODE_ENV !== "production") globalForPrisma.prisma = db;
