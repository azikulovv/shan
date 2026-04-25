import { prisma } from '../../prisma/prisma'
import type { CreateClientDto, UpdateClientDto } from './clients.schema'

export const getClientsService = async (restaurantId: string) => {
  return prisma.client.findMany({
    where: { restaurantId },
    orderBy: { createdAt: 'desc' },
  })
}

export const createClientService = async (dto: CreateClientDto, restaurantId: string) => {
  const existing = await prisma.client.findFirst({
    where: {
      restaurantId,
      phone: dto.phone,
    },
  })

  if (existing) {
    throw new Error('CLIENT_ALREADY_EXISTS')
  }

  return prisma.client.create({
    data: {
      name: dto.name,
      phone: dto.phone,
      comment: dto.comment,
      restaurantId,
    },
  })
}

export const updateClientService = async (
  id: string,
  dto: UpdateClientDto,
  restaurantId: string,
) => {
  const client = await prisma.client.findFirst({
    where: { id, restaurantId },
  })

  if (!client) {
    throw new Error('CLIENT_NOT_FOUND')
  }

  return prisma.client.update({
    where: { id },
    data: dto,
  })
}

export const deleteClientService = async (id: string, restaurantId: string) => {
  const client = await prisma.client.findFirst({
    where: { id, restaurantId },
  })

  if (!client) {
    throw new Error('CLIENT_NOT_FOUND')
  }

  return prisma.client.delete({
    where: { id },
  })
}
