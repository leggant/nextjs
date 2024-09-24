import { PrismaClient } from '@prisma/client';

const singlePrismaClient = () => {
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof singlePrismaClient>;
} & typeof global;

const db = globalThis.prismaGlobal ?? singlePrismaClient();

export default db;

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = db;
