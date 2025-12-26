import type { Category } from '#shared/interfaces/category.interface'
import { addCategory } from '~~/server/services/category.service'
import { categorySchema } from '#shared/validation/category.validation'

export default defineEventHandler(async (event) => {
  const token = getCookie(event, 'token')
  if (!token) throw badRequest(400, 'Вы не авторизованы')

  const body = await readBody<Category>(event)

  const validate = categorySchema.safeParse(body)
  if (!validate.success) throw badRequest(400, 'Переданы не все параметры')

  await addCategory(body)

  return {
    statusCode: 200
  }
})
