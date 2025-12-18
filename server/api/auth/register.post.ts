import type { RegisterInterface } from '#shared/interfaces/register.interface'
import { registerValidation } from '~~/server/validation/register.validation'
import { createUser, findUserByEmail } from '~~/server/services/user.service'
import { badRequest } from '~~/server/utils/errors'
import { hashPassword } from '~~/server/utils/password'

export default defineEventHandler(async (event) => {
  const body = await readBody<RegisterInterface>(event)

  registerValidation(body)

  const user = await findUserByEmail(body.email)
  if (user) throw badRequest(400, 'Пользователь с таким email уже существует')

  const hashedPassword = await hashPassword(body.password)

  await createUser(body.email, hashedPassword)

  return {
    statusCode: 200
  }
})
