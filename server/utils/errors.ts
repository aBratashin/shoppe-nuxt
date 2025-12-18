export const badRequest = (statusCode: number, message: string) => {
  throw createError({
    statusCode,
    message
  })
}
