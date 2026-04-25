import type { Response } from 'express'
import type { AuthRequest } from '../../shared/middlewares/auth.middleware'
import {
  createClientService,
  deleteClientService,
  getClientsService,
  updateClientService,
} from './clients.service'

export const getClients = async (req: AuthRequest, res: Response) => {
  const restaurantId = req.user!.restaurantId

  const data = await getClientsService(restaurantId)

  return res.json({
    message: 'Clients fetched',
    data,
  })
}

export const createClient = async (req: AuthRequest, res: Response) => {
  try {
    const restaurantId = req.user!.restaurantId

    const data = await createClientService(req.body, restaurantId)

    return res.status(201).json({
      message: 'Client created',
      data,
    })
  } catch (error) {
    if (error instanceof Error && error.message === 'CLIENT_ALREADY_EXISTS') {
      return res.status(409).json({
        message: 'Client with this phone already exists',
      })
    }

    return res.status(500).json({
      message: 'Internal error',
    })
  }
}

export const updateClient = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.params.id) {
      return res.status(400).json({
        message: 'Client id is required',
      })
    }

    const restaurantId = req.user!.restaurantId

    const data = await updateClientService(String(req.params.id), req.body, restaurantId)

    return res.json({
      message: 'Client updated',
      data,
    })
  } catch (error) {
    if (error instanceof Error && error.message === 'CLIENT_NOT_FOUND') {
      return res.status(404).json({
        message: 'Client not found',
      })
    }

    return res.status(500).json({
      message: 'Internal error',
    })
  }
}

export const deleteClient = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.params.id) {
      return res.status(400).json({
        message: 'Client id is required',
      })
    }

    const restaurantId = req.user!.restaurantId

    await deleteClientService(String(req.params.id), restaurantId)

    return res.json({
      message: 'Client deleted',
    })
  } catch (error) {
    if (error instanceof Error && error.message === 'CLIENT_NOT_FOUND') {
      return res.status(404).json({
        message: 'Client not found',
      })
    }

    return res.status(500).json({
      message: 'Internal error',
    })
  }
}
