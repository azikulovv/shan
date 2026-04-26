import type { Response } from 'express'
import type { AuthRequest } from '../../shared/middlewares/auth.middleware'
import {
  createBanquetService,
  deleteBanquetService,
  getBanquetService,
  getBanquetsService,
  updateBanquetService,
} from './banquets.service'

export const getBanquet = async (req: AuthRequest, res: Response) => {
  const banquetId = req.params.id

  if (!banquetId) {
    return res.status(400).json({ message: 'Banquet ID is required' })
  }

  const data = await getBanquetService(req.user!.restaurantId, String(banquetId))
  return res.json({ message: 'Banquet fetched', data })
}

export const getBanquets = async (req: AuthRequest, res: Response) => {
  const data = await getBanquetsService(req.user!.restaurantId)
  return res.json({ message: 'Banquets fetched', data })
}

export const createBanquet = async (req: AuthRequest, res: Response) => {
  try {
    const data = await createBanquetService(req.body, req.user!.restaurantId, req.user!.userId)
    return res.status(201).json({ message: 'Banquet created', data })
  } catch (e) {
    if (e instanceof Error) {
      if (e.message === 'CLIENT_NOT_FOUND')
        return res.status(404).json({ message: 'Client not found' })
      if (e.message === 'HALL_NOT_FOUND') return res.status(404).json({ message: 'Hall not found' })
      if (e.message === 'HALL_CONFLICT')
        return res.status(409).json({ message: 'Hall is already booked for this date' })
    }
    return res.status(500).json({ message: 'Internal error' })
  }
}

export const updateBanquet = async (req: AuthRequest, res: Response) => {
  if (!req.params.id) {
    return res.status(400).json({ message: 'Banquet ID is required' })
  }

  try {
    const data = await updateBanquetService(String(req.params.id), req.body, req.user!.restaurantId)
    return res.json({ message: 'Banquet updated', data })
  } catch (e) {
    if (e instanceof Error) {
      if (e.message === 'BANQUET_NOT_FOUND')
        return res.status(404).json({ message: 'Banquet not found' })
      if (e.message === 'HALL_CONFLICT')
        return res.status(409).json({ message: 'Hall is already booked for this date' })
    }
    return res.status(500).json({ message: 'Internal error' })
  }
}

export const deleteBanquet = async (req: AuthRequest, res: Response) => {
  if (!req.params.id) {
    return res.status(400).json({ message: 'Banquet ID is required' })
  }

  try {
    await deleteBanquetService(String(req.params.id), req.user!.restaurantId)
    return res.json({ message: 'Banquet deleted' })
  } catch (e) {
    if (e instanceof Error && e.message === 'BANQUET_NOT_FOUND') {
      return res.status(404).json({ message: 'Banquet not found' })
    }
    return res.status(500).json({ message: 'Internal error' })
  }
}
