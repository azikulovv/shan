import { Router } from 'express'
import { createClient, deleteClient, getClients, updateClient } from './clients.controller'
import { validateBody } from '../../shared/middlewares/validate-body'
import { authMiddleware, requireRole } from '../../shared/middlewares/auth.middleware'
import { subscriptionMiddleware } from '../../shared/middlewares/subscription.middleware'
import { createClientSchema, updateClientSchema } from './clients.schema'

export const clientsRoutes = Router()

clientsRoutes.get(
  '/',
  authMiddleware,
  subscriptionMiddleware,
  requireRole('OWNER', 'ADMIN'),
  getClients,
)

clientsRoutes.post(
  '/',
  authMiddleware,
  subscriptionMiddleware,
  requireRole('OWNER', 'ADMIN'),
  validateBody(createClientSchema),
  createClient,
)

clientsRoutes.patch(
  '/:id',
  authMiddleware,
  subscriptionMiddleware,
  requireRole('OWNER', 'ADMIN'),
  validateBody(updateClientSchema),
  updateClient,
)

clientsRoutes.delete(
  '/:id',
  authMiddleware,
  subscriptionMiddleware,
  requireRole('OWNER', 'ADMIN'),
  deleteClient,
)
