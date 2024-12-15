import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma?: PrismaClient };

export const db = globalForPrisma.prisma || new PrismaClient();

if (process.env.NEXT_PUBLIC_NODE_ENV !== "production") globalForPrisma.prisma = db;
