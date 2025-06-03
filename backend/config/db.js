import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log("📦 Connected to PostgreSQL via Prisma");
  } catch (error) {
    console.error("❌ DB connection error:", error);
    process.exit(1);
  }
};

export { prisma };
export default connectDB;