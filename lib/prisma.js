import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

// Prisma talks to MongoDB through Prisma Accelerate (an HTTPS Data Proxy),
// so NO native query engine is loaded — this is what lets it run on
// Cloudflare Workers (which can't load .node native addons).
//
// Required env:
//   DATABASE_URL          -> your Accelerate URL, e.g. prisma://accelerate.prisma-data.net/?api_key=...
const globalForPrisma = globalThis;

// Determine the connection URL for Prisma Client / Accelerate.
// Prioritizes a prisma:// URL if present in DATABASE_URL or DIRECT_DATABASE_URL.
const dbUrl =
  (process.env.DATABASE_URL?.startsWith("prisma://") && process.env.DATABASE_URL) ||
  (process.env.DIRECT_DATABASE_URL?.startsWith("prisma://") && process.env.DIRECT_DATABASE_URL) ||
  process.env.DATABASE_URL ||
  process.env.DIRECT_DATABASE_URL;

function createPrismaClient() {
  return new PrismaClient({
    datasources: dbUrl ? { db: { url: dbUrl } } : undefined,
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  }).$extends(withAccelerate());
}

// Reuse a single client across hot reloads in dev so we don't open many
// Accelerate connections during `next dev`.
export const prisma = globalForPrisma.prisma || createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
