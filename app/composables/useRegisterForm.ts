import type { RegisterInterface } from '#shared/interfaces/register.interface'

export const useRegisterForm = () => {
  const createForm = (): RegisterInterface => ({
    email: '',
    password: '',
    confirmPassword: '',
    processingPersonalData: false
  })

  const formData = ref<RegisterInterface>(createForm())

  const resetForm = () => formData.value = createForm()

  return { formData, resetForm }
}
