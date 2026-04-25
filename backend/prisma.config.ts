import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, env } from 'prisma/config'

const envFiles = [resolve(process.cwd(), '../.env'), resolve(process.cwd(), '.env')]

envFiles.forEach((envFile) => {
  if (existsSync(envFile)) {
    process.loadEnvFile(envFile)
  }
})

export default defineConfig({
  schema: 'src/prisma/schema.prisma',
  migrations: {
    path: 'src/prisma/migrations',
  },
  datasource: {
    url: env('BACKEND_DATABASE_URL'),
  },
})
