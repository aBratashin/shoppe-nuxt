import { getProducts } from '~~/server/services/product.service'

export default defineEventHandler((event) => {
  const queryParams = getQuery(event)
  const { search, category } = queryParams

  const token = getCookie(event, 'token')
  if (!token) throw badRequest(400, 'Вы не авторизованы')

  return getProducts(search?.toString(), category?.toString())
})
