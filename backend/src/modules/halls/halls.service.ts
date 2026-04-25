import { prisma } from '../../prisma/prisma'
import type { CreateHallDto, UpdateHallDto } from './halls.schema'

export const getHallsService = async (restaurantId: string) => {
  return prisma.hall.findMany({
    where: { restaurantId },
    orderBy: { createdAt: 'desc' },
  })
}

export const createHallService = async (dto: CreateHallDto, restaurantId: string) => {
  return prisma.hall.create({
    data: {
      name: dto.name,
      capacity: dto.capacity,
      description: dto.description,
      restaurantId,
    },
  })
}

export const updateHallService = async (id: string, dto: UpdateHallDto, restaurantId: string) => {
  const hall = await prisma.hall.findFirst({
    where: { id, restaurantId },
  })

  if (!hall) {
    throw new Error('HALL_NOT_FOUND')
  }

  return prisma.hall.update({
    where: { id },
    data: dto,
  })
}

export const deleteHallService = async (id: string, restaurantId: string) => {
  const hall = await prisma.hall.findFirst({
    where: { id, restaurantId },
  })

  if (!hall) {
    throw new Error('HALL_NOT_FOUND')
  }

  return prisma.hall.delete({
    where: { id },
  })
}
