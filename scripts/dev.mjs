import { spawn } from 'node:child_process'
import { existsSync } from 'node:fs'
import { createServer } from 'node:net'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = dirname(fileURLToPath(import.meta.url))
const projectDir = join(rootDir, '..')

const rootEnvFile = join(projectDir, '.env')

if (existsSync(rootEnvFile)) {
  process.loadEnvFile(rootEnvFile)
}

const backendPort = process.env.BACKEND_PORT || '5000'
const preferredFrontendPort = process.env.NUXT_PORT || process.env.PORT_FRONTEND || '3000'
const apiUrl = process.env.FRONTEND_API_URL || `http://localhost:${backendPort}/api`

const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm'

async function isPortAvailable(port) {
  return await new Promise((resolve) => {
    const server = createServer()

    server.once('error', () => resolve(false))
    server.once('listening', () => {
      server.close(() => resolve(true))
    })

    server.listen(Number(port), 'localhost')
  })
}

async function getFrontendPort(preferredPort, blockedPort) {
  let port = Number(preferredPort)
  const backendPortNumber = Number(blockedPort)

  while (port === backendPortNumber || !(await isPortAvailable(port))) {
    port += 1
  }

  return String(port)
}

const frontendPort = await getFrontendPort(preferredFrontendPort, backendPort)

const processes = [
  {
    name: 'backend',
    color: '\x1b[36m',
    command: npmCommand,
    args: ['--prefix', 'backend', 'run', 'dev'],
    env: {
      PORT: backendPort,
    },
  },
  {
    name: 'frontend',
    color: '\x1b[35m',
    command: npmCommand,
    args: ['--prefix', 'frontend', 'run', 'dev', '--', '--port', frontendPort],
    env: {
      FRONTEND_API_URL: apiUrl,
      NUXT_PUBLIC_API_BASE: apiUrl,
    },
  },
]

let isShuttingDown = false
const children = []

function prefixOutput(name, color, chunk) {
  const reset = '\x1b[0m'
  const prefix = `${color}[${name}]${reset}`
  const lines = chunk.toString().split(/\r?\n/)

  lines.forEach((line, index) => {
    if (line || index < lines.length - 1) {
      process.stdout.write(`${prefix} ${line}\n`)
    }
  })
}

function shutdown(exitCode = 0) {
  if (isShuttingDown) {
    return
  }

  isShuttingDown = true

  children.forEach((child) => {
    if (!child.killed) {
      child.kill('SIGTERM')
    }
  })

  setTimeout(() => process.exit(exitCode), 300)
}

console.log(`Starting backend on http://localhost:${backendPort}`)
console.log(`Starting frontend on http://localhost:${frontendPort}`)
console.log(`Frontend API URL: ${apiUrl}`)

processes.forEach(({ name, color, command, args, env }) => {
  const child = spawn(command, args, {
    cwd: projectDir,
    env: {
      ...process.env,
      ...env,
    },
    stdio: ['inherit', 'pipe', 'pipe'],
  })

  children.push(child)

  child.stdout.on('data', (chunk) => prefixOutput(name, color, chunk))
  child.stderr.on('data', (chunk) => prefixOutput(name, color, chunk))

  child.on('exit', (code, signal) => {
    if (isShuttingDown) {
      return
    }

    console.error(`[${name}] exited with ${signal || `code ${code}`}`)
    shutdown(code || 1)
  })
})

process.on('SIGINT', () => shutdown(0))
process.on('SIGTERM', () => shutdown(0))
