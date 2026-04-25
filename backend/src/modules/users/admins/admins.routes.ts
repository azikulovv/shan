import { Router } from 'express'
import { getAdmins } from './admins.controller'
import { authMiddleware, requireRole } from '../../../shared/middlewares/auth.middleware'
import { subscriptionMiddleware } from '../../../shared/middlewares/subscription.middleware'

export const adminsRoutes = Router()

adminsRoutes.get('/admins', authMiddleware, subscriptionMiddleware, requireRole('OWNER'), getAdmins)
