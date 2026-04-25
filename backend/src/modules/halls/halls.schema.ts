import { z } from 'zod'

export const createHallSchema = z
  .object({
    name: z.string().min(2),
    capacity: z.number().int().positive(),
    description: z.string().optional(),
  })
  .strict()

export const updateHallSchema = z
  .object({
    name: z.string().min(2).optional(),
    capacity: z.number().int().positive().optional(),
    description: z.string().optional(),
    isActive: z.boolean().optional(),
  })
  .strict()

export type CreateHallDto = z.infer<typeof createHallSchema>
export type UpdateHallDto = z.infer<typeof updateHallSchema>
