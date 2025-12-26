import { getAllCategories } from '~~/server/services/category.service'

export default defineEventHandler((event) => {
  const token = getCookie(event, 'token')
  if (!token) throw badRequest(400, 'Вы не авторизованы')

  return getAllCategories()
})
