import { z } from 'zod'

export const registerSchema = z.object({
  email: z.email('Некорректный email'),
  password: z.string().min(6, 'Минимальная длина - 6 символов'),
  confirmPassword: z.string().min(6, 'Минимальная длина - 6 символов'),
  processingPersonalData: z.boolean().refine(v => v === true, 'Подтвердите согласие')
}).refine(data => data.password === data.confirmPassword, {
  message: 'Пароли не совпадают',
  path: ['confirmPassword']
})
