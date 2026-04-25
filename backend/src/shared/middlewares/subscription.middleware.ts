import type { Response, NextFunction } from 'express'
import { prisma } from '../../prisma/prisma'
import type { AuthRequest } from './auth.middleware'

export const subscriptionMiddleware = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    if (!req.user?.restaurantId) {
      return res.status(401).json({
        message: 'Unauthorized',
      })
    }

    const restaurant = await prisma.restaurant.findUnique({
      where: {
        id: req.user.restaurantId,
      },
      select: {
        id: true,
        subscriptionStatus: true,
        trialEndsAt: true,
        subscriptionEndsAt: true,
        isBlocked: true,
      },
    })

    if (!restaurant) {
      return res.status(404).json({
        message: 'Restaurant not found',
      })
    }

    if (restaurant.isBlocked) {
      return res.status(403).json({
        message: 'Restaurant is blocked',
      })
    }

    const now = new Date()

    const isTrialActive =
      restaurant.subscriptionStatus === 'TRIAL' &&
      restaurant.trialEndsAt &&
      restaurant.trialEndsAt > now

    const isSubscriptionActive =
      restaurant.subscriptionStatus === 'ACTIVE' &&
      restaurant.subscriptionEndsAt &&
      restaurant.subscriptionEndsAt > now

    if (!isTrialActive && !isSubscriptionActive) {
      return res.status(402).json({
        message: 'Subscription expired',
        subscription: {
          status: restaurant.subscriptionStatus,
          trialEndsAt: restaurant.trialEndsAt,
          subscriptionEndsAt: restaurant.subscriptionEndsAt,
        },
      })
    }

    next()
  } catch {
    return res.status(500).json({
      message: 'Subscription check failed',
    })
  }
}
