import type { RegisterInterface } from '#shared/interfaces/register.interface'

export const registerValidation = (body: RegisterInterface) => {
  const { email, password, confirmPassword, processingPersonalData } = body

  if (!email || !password || !confirmPassword || !processingPersonalData) {
    throw createError({
      statusCode: 400,
      message: 'Заполните все поля'
    })
  }

  if (password !== confirmPassword) {
    throw createError({
      statusCode: 400,
      message: 'Пароли не совпадают'
    })
  }
}
