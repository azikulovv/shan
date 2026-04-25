import { prisma } from '../../prisma/prisma'

export const getMySubscriptionService = async (restaurantId: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: { id: restaurantId },
    select: {
      id: true,
      name: true,
      subscriptionStatus: true,
      trialEndsAt: true,
      subscriptionEndsAt: true,
      isBlocked: true,
      createdAt: true,
    },
  })

  if (!restaurant) {
    throw new Error('RESTAURANT_NOT_FOUND')
  }

  const now = new Date()

  let daysLeft: number | null = null

  if (restaurant.subscriptionStatus === 'TRIAL' && restaurant.trialEndsAt) {
    daysLeft = Math.ceil((restaurant.trialEndsAt.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
  }

  if (restaurant.subscriptionStatus === 'ACTIVE' && restaurant.subscriptionEndsAt) {
    daysLeft = Math.ceil(
      (restaurant.subscriptionEndsAt.getTime() - now.getTime()) / (1000 * 60 * 60 * 24),
    )
  }

  return {
    ...restaurant,
    daysLeft,
  }
}
