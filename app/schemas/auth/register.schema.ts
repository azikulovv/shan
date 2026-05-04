import { z } from 'zod'

export const registerOwnerSchema = z
  .object({
    ownerName: z
      .string('Введите имя владельца')
      .trim()
      .min(1, 'Введите имя владельца')
      .min(2, 'Имя должно быть минимум 2 символа'),

    email: z.string().trim().min(1, 'Введите email').email('Введите корректный email'),

    phone: z
      .string('Введите номер телефона')
      .trim()
      .min(1, 'Введите номер телефона')
      .regex(/^\+?[0-9\s()-]{10,20}$/, 'Введите корректный номер телефона'),

    password: z.string('Введите пароль').min(1, 'Введите пароль').min(8, 'Пароль должен быть минимум 8 символов'),

    confirmPassword: z.string('Повторите пароль').min(1, 'Повторите пароль'),

    restaurantName: z
      .string('Введите название ресторана')
      .trim()
      .min(1, 'Введите название ресторана')
      .min(2, 'Название ресторана должно быть минимум 2 символа'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Пароли не совпадают',
  })

export type RegisterOwnerForm = z.input<typeof registerOwnerSchema>
