import { prisma } from '../../../prisma/prisma'

export const getAdminsService = async (restaurantId: string) => {
  return prisma.user.findMany({
    where: {
      restaurantId,
      role: 'ADMIN',
    },
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })
}
