import bcrypt from 'bcrypt'
import { prisma } from '../../prisma/prisma'
import { signToken } from '../../shared/utils/jwt'
import type { RegisterOwnerDto, LoginDto, CreateAdminDto } from './auth.schema'

export const registerOwnerService = async (dto: RegisterOwnerDto) => {
  const existingUser = await prisma.user.findUnique({
    where: { email: dto.email },
  })

  if (existingUser) {
    throw new Error('USER_ALREADY_EXISTS')
  }

  const passwordHash = await bcrypt.hash(dto.password, 10)

  const restaurant = await prisma.restaurant.create({
    data: {
      name: dto.restaurantName,
      trialEndsAt: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),

      users: {
        create: {
          name: dto.ownerName,
          email: dto.email,
          passwordHash,
          role: 'OWNER',
        },
      },
    },
    include: {
      users: true,
    },
  })

  const owner = restaurant.users[0]

  const token = signToken({
    userId: owner.id,
    restaurantId: restaurant.id,
    role: owner.role,
  })

  return {
    token,
    user: owner,
    restaurant: {
      id: restaurant.id,
      name: restaurant.name,
      subscriptionStatus: restaurant.subscriptionStatus,
      trialEndsAt: restaurant.trialEndsAt,
    },
  }
}

export const loginService = async (dto: LoginDto) => {
  const user = await prisma.user.findUnique({
    where: { email: dto.email },
    include: { restaurant: true },
  })

  if (!user) {
    throw new Error('INVALID_CREDENTIALS')
  }

  const { passwordHash, restaurant, ...safeUser } = user

  const isValid = await bcrypt.compare(dto.password, passwordHash)

  if (!isValid) {
    throw new Error('INVALID_CREDENTIALS')
  }

  const token = signToken({
    userId: user.id,
    restaurantId: user.restaurantId,
    role: user.role,
  })

  return {
    token,
    user: safeUser,
    restaurant,
  }
}

export const createAdminService = async (dto: CreateAdminDto, restaurantId: string) => {
  const existingUser = await prisma.user.findUnique({
    where: { email: dto.email },
  })

  if (existingUser) {
    throw new Error('USER_ALREADY_EXISTS')
  }

  const passwordHash = await bcrypt.hash(dto.password, 10)

  const admin = await prisma.user.create({
    data: {
      name: dto.name,
      email: dto.email,
      phone: dto.phone,
      passwordHash,
      role: 'ADMIN',
      restaurantId,
    },
  })

  const { passwordHash: _, ...safeAdmin } = admin

  return safeAdmin
}

export const getMeService = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      role: true,
      restaurantId: true,
      createdAt: true,
      updatedAt: true,

      restaurant: {
        select: {
          id: true,
          name: true,
          subscriptionStatus: true,
          trialEndsAt: true,
          createdAt: true,
        },
      },
    },
  })

  return user
}
