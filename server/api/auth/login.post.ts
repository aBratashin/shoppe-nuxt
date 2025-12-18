import type { LoginInterface } from '#shared/interfaces/login.interface'
import { setAuthCookie } from '~~/server/utils/cookies'
import { createAuthToken } from '~~/server/utils/token'
import { loginValidation } from '~~/server/validation/login.validation'
import { findUserByEmail } from '~~/server/services/user.service'
import { comparePassword } from '~~/server/utils/password'
import { badRequest } from '~~/server/utils/errors'

export default defineEventHandler(async (event) => {
  const body = await readBody<LoginInterface>(event)

  loginValidation(body)

  const user = await findUserByEmail(body.email)
  if (!user) throw badRequest(400, 'Пользователя с таким email не существует')

  const isPasswordValid = await comparePassword(body.password, user.password)
  if (!isPasswordValid) throw badRequest(400, 'Неверный пароль')

  const token = createAuthToken(user.id, body.rememberUser)
  setAuthCookie(event, token, body.rememberUser)

  return {
    statusCode: 200
  }
})
