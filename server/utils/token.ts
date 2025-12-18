import { signJwt } from '~~/server/utils/jwt'

export const createAuthToken = (id: number, rememberUser: boolean) => {
  const expiresIn = rememberUser ? '30d' : '1d'
  return signJwt({ id }, expiresIn)
}
