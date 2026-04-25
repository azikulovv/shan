import { Router } from 'express'
import { registerOwner, login } from './auth.controller'
import { validateBody } from '../../shared/middlewares/validate-body'
import { registerOwnerSchema, loginSchema } from './auth.schema'

export const authRoutes = Router()

authRoutes.post('/register-owner', validateBody(registerOwnerSchema), registerOwner)
authRoutes.post('/login', validateBody(loginSchema), login)
