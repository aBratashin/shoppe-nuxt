import { DAY, MONTH } from '~~/server/utils/constants'
import type { H3Event } from 'h3'

export const setAuthCookie = (event: H3Event, token: string, rememberUser: boolean) => {
  setCookie(event, 'token', token, {
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: rememberUser ? MONTH : DAY
  })
}
