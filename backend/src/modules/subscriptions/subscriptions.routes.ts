import { Router } from 'express'
import { getMySubscription } from './subscriptions.controller'
import { authMiddleware, requireRole } from '../../shared/middlewares/auth.middleware'

export const subscriptionsRoutes = Router()

subscriptionsRoutes.get('/me', authMiddleware, requireRole('OWNER', 'ADMIN'), getMySubscription)
