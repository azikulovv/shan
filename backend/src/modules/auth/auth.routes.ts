import { Router } from 'express'
import { registerOwner, login, createAdmin, getMe } from './auth.controller'
import { validateBody } from '../../shared/middlewares/validate-body'
import { registerOwnerSchema, loginSchema, createAdminSchema } from './auth.schema'
import { authMiddleware, requireRole } from '../../shared/middlewares/auth.middleware'

export const authRoutes = Router()

authRoutes.post('/register-owner', validateBody(registerOwnerSchema), registerOwner)
authRoutes.post('/login', validateBody(loginSchema), login)
authRoutes.post(
  '/create-admin',
  authMiddleware,
  requireRole('OWNER'),
  validateBody(createAdminSchema),
  createAdmin,
)
authRoutes.get('/me', authMiddleware, getMe)
