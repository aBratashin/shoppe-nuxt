import type { RegisterInterface } from '#shared/interfaces/register.interface'
import type { LoginInterface } from '#shared/interfaces/login.interface'

export const useAuth = () => {
  const register = (data: RegisterInterface) => {
    return $fetch('/api/auth/register', {
      method: 'POST',
      body: data
    })
  }

  const login = (data: LoginInterface) => {
    return $fetch('/api/auth/login', {
      method: 'POST',
      body: data
    })
  }

  const logout = () => {
    return $fetch('/api/auth/logout', {
      method: 'POST'
    })
  }

  return { register, login, logout }
}
