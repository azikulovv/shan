import { Router } from 'express'
import { createHall, deleteHall, getHalls, updateHall } from './halls.controller'
import { validateBody } from '../../shared/middlewares/validate-body'
import { authMiddleware, requireRole } from '../../shared/middlewares/auth.middleware'
import { subscriptionMiddleware } from '../../shared/middlewares/subscription.middleware'
import { createHallSchema, updateHallSchema } from './halls.schema'

export const hallsRoutes = Router()

hallsRoutes.get(
  '/',
  authMiddleware,
  subscriptionMiddleware,
  requireRole('OWNER', 'ADMIN'),
  getHalls,
)

hallsRoutes.post(
  '/',
  authMiddleware,
  subscriptionMiddleware,
  requireRole('OWNER'),
  validateBody(createHallSchema),
  createHall,
)

hallsRoutes.patch(
  '/:id',
  authMiddleware,
  subscriptionMiddleware,
  requireRole('OWNER'),
  validateBody(updateHallSchema),
  updateHall,
)

hallsRoutes.delete('/:id', authMiddleware, subscriptionMiddleware, requireRole('OWNER'), deleteHall)
