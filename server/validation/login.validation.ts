import type { LoginInterface } from '#shared/interfaces/login.interface'

export const loginValidation = (body: LoginInterface) => {
  const { email, password } = body

  if (!email || !password) {
    throw createError({
      statusCode: 400,
      message: 'Заполните все поля'
    })
  }
}
