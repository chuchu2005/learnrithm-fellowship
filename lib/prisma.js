import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

// Prisma talks to MongoDB through Prisma Accelerate (an HTTPS Data Proxy),
// so NO native query engine is loaded — this is what lets it run on
// Cloudflare Workers (which can't load .node native addons).
//
// Required env:
//   DATABASE_URL          -> your Accelerate URL, e.g. prisma://accelerate.prisma-data.net/?api_key=...
//   DIRECT_DATABASE_URL   -> your direct MongoDB connection string (only used by `prisma db push`)
const globalForPrisma = globalThis;

function createPrismaClient() {
  return new PrismaClient({
    datasources: process.env.DATABASE_URL
      ? { db: { url: process.env.DATABASE_URL } }
      : undefined,
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  }).$extends(withAccelerate());
}

// Reuse a single client across hot reloads in dev so we don't open many
// Accelerate connections during `next dev`.
export const prisma = globalForPrisma.prisma || createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
