import { existsSync } from 'node:fs'
import { resolve } from 'node:path'

const envFiles = [
  resolve(process.cwd(), '../.env'),
  resolve(process.cwd(), '.env'),
]

envFiles.forEach((envFile) => {
  if (existsSync(envFile)) {
    process.loadEnvFile(envFile)
  }
})
