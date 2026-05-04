import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string('Введите email').trim().min(1, 'Введите email').email('Введите корректный email'),
  password: z
    .string('Введите пароль')
    .min(1, 'Введите пароль')
    .min(6, 'Пароль должен быть минимум 6 символов'),
})

export type LoginForm = z.infer<typeof loginSchema>
