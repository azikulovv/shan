import type { Response } from 'express'
import type { AuthRequest } from '../../shared/middlewares/auth.middleware'
import { getMySubscriptionService } from './subscriptions.service'

export const getMySubscription = async (req: AuthRequest, res: Response) => {
  try {
    const data = await getMySubscriptionService(req.user!.restaurantId)

    return res.json({
      message: 'Subscription info',
      data,
    })
  } catch (error) {
    if (error instanceof Error && error.message === 'RESTAURANT_NOT_FOUND') {
      return res.status(404).json({
        message: 'Restaurant not found',
      })
    }

    return res.status(500).json({
      message: 'Internal error',
    })
  }
}
