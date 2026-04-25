import type { Request, Response } from 'express'
import { registerOwnerService, loginService } from './auth.service'

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
