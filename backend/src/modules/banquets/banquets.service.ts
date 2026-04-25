import { prisma } from '../../prisma/prisma'
import type { CreateBanquetDto, UpdateBanquetDto } from './banquets.schema'

const toDate = (d: string) => new Date(d)

const calcRemaining = (total?: number, pre?: number) => {
  const t = total ?? 0
  const p = pre ?? 0
  return Math.max(t - p, 0)
}

export const getBanquetsService = async (restaurantId: string) => {
  return prisma.banquet.findMany({
    where: { restaurantId },
    include: {
      client: true,
      hall: true,
    },
    orderBy: { date: 'asc' },
  })
}

export const createBanquetService = async (
  dto: CreateBanquetDto,
  restaurantId: string,
  userId: string,
) => {
  // проверка клиента
  const client = await prisma.client.findFirst({
    where: { id: dto.clientId, restaurantId },
  })
  if (!client) throw new Error('CLIENT_NOT_FOUND')

  // проверка зала
  if (dto.hallId) {
    const hall = await prisma.hall.findFirst({
      where: { id: dto.hallId, restaurantId },
    })
    if (!hall) throw new Error('HALL_NOT_FOUND')

    // простая проверка конфликта по дате/залу
    const conflict = await prisma.banquet.findFirst({
      where: {
        restaurantId,
        hallId: dto.hallId,
        date: toDate(dto.date),
        status: { not: 'CANCELLED' },
      },
    })

    if (conflict) throw new Error('HALL_CONFLICT')
  }

  const total = dto.totalAmount ?? 0
  const pre = dto.prepaymentAmount ?? 0

  return prisma.banquet.create({
    data: {
      title: dto.title,
      eventType: dto.eventType,
      guestCount: dto.guestCount,

      date: toDate(dto.date),
      startTime: dto.startTime,
      endTime: dto.endTime,

      totalAmount: total,
      prepaymentAmount: pre,
      remainingAmount: calcRemaining(total, pre),

      clientId: dto.clientId,
      hallId: dto.hallId,
      restaurantId,
      createdById: userId,

      comment: dto.comment,
    },
    include: {
      client: true,
      hall: true,
    },
  })
}

export const updateBanquetService = async (
  id: string,
  dto: UpdateBanquetDto,
  restaurantId: string,
) => {
  const banquet = await prisma.banquet.findFirst({
    where: { id, restaurantId },
  })

  if (!banquet) throw new Error('BANQUET_NOT_FOUND')

  // при смене зала/даты — проверка конфликта
  if (dto.hallId || dto.date) {
    const hallId = dto.hallId ?? banquet.hallId
    const date = dto.date ? toDate(dto.date) : banquet.date

    if (hallId) {
      const conflict = await prisma.banquet.findFirst({
        where: {
          restaurantId,
          hallId,
          date,
          id: { not: id },
          status: { not: 'CANCELLED' },
        },
      })
      if (conflict) throw new Error('HALL_CONFLICT')
    }
  }

  const total = dto.totalAmount ?? banquet.totalAmount
  const pre = dto.prepaymentAmount ?? banquet.prepaymentAmount

  return prisma.banquet.update({
    where: { id },
    data: {
      ...dto,
      date: dto.date ? toDate(dto.date) : undefined,
      remainingAmount: calcRemaining(total, pre),
    },
    include: {
      client: true,
      hall: true,
    },
  })
}

export const deleteBanquetService = async (id: string, restaurantId: string) => {
  const banquet = await prisma.banquet.findFirst({
    where: { id, restaurantId },
  })

  if (!banquet) throw new Error('BANQUET_NOT_FOUND')

  return prisma.banquet.delete({
    where: { id },
  })
}
