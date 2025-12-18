import bcrypt from 'bcryptjs'
import { SALT } from '~~/server/utils/constants'

export const hashPassword = (password: string) => {
  return bcrypt.hash(password, SALT)
}

export const comparePassword = (password: string, hash: string) => {
  return bcrypt.compare(password, hash)
}
