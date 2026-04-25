import { z } from 'zod'

export const createBanquetSchema = z
  .object({
    title: z.string().optional(),
    eventType: z.string().optional(),
    guestCount: z.number().int().positive(),

    date: z.string(), // ISO
    startTime: z.string().optional(),
    endTime: z.string().optional(),

    clientId: z.string(),
    hallId: z.string().optional(),

    totalAmount: z.number().int().nonnegative().optional(),
    prepaymentAmount: z.number().int().nonnegative().optional(),

    comment: z.string().optional(),
  })
  .strict()

export const updateBanquetSchema = z
  .object({
    title: z.string().optional(),
    eventType: z.string().optional(),
    guestCount: z.number().int().positive().optional(),

    date: z.string().optional(),
    startTime: z.string().optional(),
    endTime: z.string().optional(),

    clientId: z.string().optional(),
    hallId: z.string().optional(),

    status: z
      .enum(['NEW', 'IN_PROGRESS', 'WAITING_PREPAYMENT', 'CONFIRMED', 'COMPLETED', 'CANCELLED'])
      .optional(),

    totalAmount: z.number().int().nonnegative().optional(),
    prepaymentAmount: z.number().int().nonnegative().optional(),

    comment: z.string().optional(),
  })
  .strict()

export type CreateBanquetDto = z.infer<typeof createBanquetSchema>
export type UpdateBanquetDto = z.infer<typeof updateBanquetSchema>
