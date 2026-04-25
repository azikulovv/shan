import { z } from 'zod'
import type { Request, Response, NextFunction } from 'express'

export const validateBody = (schema: z.ZodObject<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body)

    if (!result.success) {
      const shape = schema.shape

      const expectedFields = Object.entries(shape).map(([key, value]) => {
        const field = value as z.ZodTypeAny

        return {
          field: key,
          type: field._def.type,
          required: !field.isOptional(),
        }
      })

      return res.status(400).json({
        message: 'Validation error',
        expected: {
          contentType: 'application/json',
          body: expectedFields,
        },
        errors: result.error.flatten(),
      })
    }

    req.body = result.data
    next()
  }
}
