import type { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export type UserRole = 'OWNER' | 'ADMIN'

export type JwtPayload = {
  userId: string
  restaurantId: string
  role: UserRole
}

export type AuthRequest = Request & {
  user?: JwtPayload
}

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      message: 'Unauthorized',
    })
  }

  const token = authHeader.split(' ')[1]

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload

    req.user = decoded

    next()
  } catch {
    return res.status(401).json({
      message: 'Invalid or expired token',
    })
  }
}

export const requireRole = (...roles: UserRole[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({
        message: 'Forbidden',
      })
    }

    next()
  }
}
