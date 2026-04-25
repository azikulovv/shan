import type { Request, Response } from 'express'
import { registerOwnerService, loginService, createAdminService } from './auth.service'
import { AuthRequest } from '../../shared/middlewares/auth.middleware'

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
