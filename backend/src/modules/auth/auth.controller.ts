import type { Request, Response } from 'express'
import {
  registerOwnerService,
  loginService,
  createAdminService,
  getMeService,
} from './auth.service'
import { AuthRequest } from '../../shared/middlewares/auth.middleware'
import { prisma } from '../../prisma/prisma'

export const registerOwner = async (req: Request, res: Response) => {
  try {
    const data = await registerOwnerService(req.body)

    res.status(201).json({
      message: 'Owner registered',
      data,
    })
  } catch (error) {
    if (error instanceof Error && error.message === 'USER_ALREADY_EXISTS') {
      return res.status(409).json({
        message: 'User already exists',
      })
    }

    res.status(500).json({
      message: 'Internal error',
    })
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const data = await loginService(req.body)

    res.json({
      message: 'Login success',
      data,
    })
  } catch (error) {
    if (error instanceof Error && error.message === 'INVALID_CREDENTIALS') {
      return res.status(401).json({
        message: 'Invalid credentials',
      })
    }

    res.status(500).json({
      message: 'Internal error',
    })
  }
}

export const createAdmin = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user?.restaurantId) {
      return res.status(401).json({
        message: 'Unauthorized',
      })
    }

    const data = await createAdminService(req.body, req.user.restaurantId)

    return res.status(201).json({
      message: 'Admin created',
      data,
    })
  } catch (error) {
    if (error instanceof Error && error.message === 'USER_ALREADY_EXISTS') {
      return res.status(409).json({
        message: 'User already exists',
      })
    }

    return res.status(500).json({
      message: 'Internal error',
    })
  }
}

export const getMe = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        message: 'Unauthorized',
      })
    }

    const user = await getMeService(req.user.userId)

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      })
    }

    return res.status(200).json({
      message: 'Current user fetched successfully',
      data: user,
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Failed to fetch current user',
    })
  }
}
