import type { Response } from 'express'
import type { AuthRequest } from '../../shared/middlewares/auth.middleware'
import {
  createHallService,
  deleteHallService,
  getHallsService,
  updateHallService,
} from './halls.service'

export const getHalls = async (req: AuthRequest, res: Response) => {
  const restaurantId = req.user!.restaurantId

  const data = await getHallsService(restaurantId)

  return res.json({
    message: 'Halls fetched',
    data,
  })
}

export const createHall = async (req: AuthRequest, res: Response) => {
  const restaurantId = req.user!.restaurantId

  const data = await createHallService(req.body, restaurantId)

  return res.status(201).json({
    message: 'Hall created',
    data,
  })
}

export const updateHall = async (req: AuthRequest, res: Response) => {
  try {
    const restaurantId = req.user!.restaurantId

    const data = await updateHallService(String(req.params.id), req.body, restaurantId)

    return res.json({
      message: 'Hall updated',
      data,
    })
  } catch (error) {
    if (error instanceof Error && error.message === 'HALL_NOT_FOUND') {
      return res.status(404).json({
        message: 'Hall not found',
      })
    }

    return res.status(500).json({
      message: 'Internal error',
    })
  }
}

export const deleteHall = async (req: AuthRequest, res: Response) => {
  try {
    const restaurantId = req.user!.restaurantId

    await deleteHallService(String(req.params.id), restaurantId)

    return res.json({
      message: 'Hall deleted',
    })
  } catch (error) {
    if (error instanceof Error && error.message === 'HALL_NOT_FOUND') {
      return res.status(404).json({
        message: 'Hall not found',
      })
    }

    return res.status(500).json({
      message: 'Internal error',
    })
  }
}
