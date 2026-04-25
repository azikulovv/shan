import { Router } from 'express'
import { createBanquet, deleteBanquet, getBanquets, updateBanquet } from './banquets.controller'
import { validateBody } from '../../shared/middlewares/validate-body'
import { authMiddleware, requireRole } from '../../shared/middlewares/auth.middleware'
import { subscriptionMiddleware } from '../../shared/middlewares/subscription.middleware'
import { createBanquetSchema, updateBanquetSchema } from './banquets.schema'

export const banquetsRoutes = Router()

banquetsRoutes.get(
  '/',
  authMiddleware,
  subscriptionMiddleware,
  requireRole('OWNER', 'ADMIN'),
  getBanquets,
)

banquetsRoutes.post(
  '/',
  authMiddleware,
  subscriptionMiddleware,
  requireRole('OWNER', 'ADMIN'),
  validateBody(createBanquetSchema),
  createBanquet,
)

banquetsRoutes.patch(
  '/:id',
  authMiddleware,
  subscriptionMiddleware,
  requireRole('OWNER', 'ADMIN'),
  validateBody(updateBanquetSchema),
  updateBanquet,
)

banquetsRoutes.delete(
  '/:id',
  authMiddleware,
  subscriptionMiddleware,
  requireRole('OWNER', 'ADMIN'),
  deleteBanquet,
)
