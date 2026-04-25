import { PrismaClient } from '../generated/prisma'
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'

const adapter = new PrismaBetterSqlite3({
  url: process.env.BACKEND_DATABASE_URL || process.env.DATABASE_URL!,
})

export const prisma = new PrismaClient({
  adapter,
})
