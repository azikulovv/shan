import type { Response } from 'express'
import type { AuthRequest } from '../../../shared/middlewares/auth.middleware'
import { getAdminsService } from './admins.service'

export const getAdmins = async (req: AuthRequest, res: Response) => {
  const data = await getAdminsService(req.user!.restaurantId)

  return res.json({
    message: 'Admins fetched',
    data,
  })
}
