import express from 'express'
import cors from 'cors'
import { authRoutes } from './modules/auth/auth.routes'
import { hallsRoutes } from './modules/halls/halls.routes'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/halls', hallsRoutes)

app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

export { app }
