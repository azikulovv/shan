import { z } from 'zod'

export const registerOwnerSchema = z
  .object({
    restaurantName: z.string().min(2),
    ownerName: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(8),
  })
  .strict()

export const loginSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(1),
  })
  .strict()

export type RegisterOwnerDto = z.infer<typeof registerOwnerSchema>
export type LoginDto = z.infer<typeof loginSchema>
