import type { ProductCreateDto } from '#shared/interfaces/product.interface'
import { productSchema } from '#shared/validation/product.validation'
import { createProduct } from '~~/server/services/product.service'

export default defineEventHandler(async (event) => {
  const token = getCookie(event, 'token')
  if (!token) throw badRequest(400, 'Вы не авторизованы')

  const body = await readBody<ProductCreateDto>(event)

  const validate = productSchema.safeParse(body)
  if (!validate.success) throw badRequest(400, 'Переданы не все параметры')

  await createProduct(body)

  return {
    statusCode: 200
  }
})
