import type { LoginInterface } from '#shared/interfaces/login.interface'

export const useLoginForm = () => {
  const createForm = (): LoginInterface => ({
    email: '',
    password: '',
    rememberUser: false
  })

  const formData = ref<LoginInterface>(createForm())

  const resetForm = () => formData.value = createForm()

  return { formData, resetForm }
}
