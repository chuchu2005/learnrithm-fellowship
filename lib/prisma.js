import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

// Prisma talks to MongoDB through Prisma Accelerate (an HTTPS Data Proxy),
// so NO native query engine is loaded — this is what lets it run on
// Cloudflare Workers (which can't load .node native addons).
//
// Required env:
//   DATABASE_URL        -> prisma://accelerate.prisma-data.net/?api_key=...
//   DIRECT_DATABASE_URL -> mongodb+srv://... (only for `prisma db push`)
//
// IMPORTANT: createPrismaClient() is called lazily (on first access) so that
// DATABASE_URL is NOT required at build time — only at request time.
// This prevents PrismaClientInitializationError during Next.js/OpenNext builds
// on Cloudflare where env vars are injected as Worker secrets, not build vars.

let _prisma = null;

function createPrismaClient() {
  // Resolve URL at call-time (request time), not module-load time (build time).
  const dbUrl =
    (process.env.DATABASE_URL?.startsWith("prisma://") && process.env.DATABASE_URL) ||
    (process.env.DIRECT_DATABASE_URL?.startsWith("prisma://") && process.env.DIRECT_DATABASE_URL) ||
    process.env.DATABASE_URL ||
    process.env.DIRECT_DATABASE_URL;

  return new PrismaClient({
    datasources: dbUrl ? { db: { url: dbUrl } } : undefined,
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  }).$extends(withAccelerate());
}

// Lazy singleton — instantiated on first property access, not at import time.
// In dev, reuse across hot reloads to avoid opening many Accelerate connections.
export const prisma = new Proxy(
  {},
  {
    get(_target, prop) {
      if (!_prisma) {
        _prisma =
          (process.env.NODE_ENV !== "production" && globalThis.__prisma) ||
          createPrismaClient();
        if (process.env.NODE_ENV !== "production") {
          globalThis.__prisma = _prisma;
        }
      }
      return _prisma[prop];
    },
  }
);
