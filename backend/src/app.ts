import express from 'express'
import cors from 'cors'
import { authRoutes } from './modules/auth/auth.routes'
import { hallsRoutes } from './modules/halls/halls.routes'
import { clientsRoutes } from './modules/clients/clients.routes'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/halls', hallsRoutes)
app.use('/api/clients', clientsRoutes)

app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

export { app }
