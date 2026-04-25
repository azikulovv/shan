import { z } from 'zod'

export const createClientSchema = z
  .object({
    name: z.string().min(2),
    phone: z.string().min(5),
    comment: z.string().optional(),
  })
  .strict()

export const updateClientSchema = z
  .object({
    name: z.string().min(2).optional(),
    phone: z.string().min(5).optional(),
    comment: z.string().optional(),
  })
  .strict()

export type CreateClientDto = z.infer<typeof createClientSchema>
export type UpdateClientDto = z.infer<typeof updateClientSchema>
