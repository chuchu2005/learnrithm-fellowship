import { PrismaClient } from "@prisma/client";

// Reuse a single PrismaClient across hot reloads in dev so we don't exhaust
// DB connections during `next dev`. Standard Next.js + Prisma pattern.
const globalForPrisma = globalThis;

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
