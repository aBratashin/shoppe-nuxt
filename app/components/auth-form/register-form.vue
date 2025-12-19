<script lang="ts" setup>
import type { RegisterInterface } from '#shared/interfaces/register.interface'
import { registerSchema } from '#shared/validation/register.validation'

const createRegisterForm = (): RegisterInterface => ({
  email: '',
  password: '',
  confirmPassword: '',
  processingPersonalData: false
})

const toastStore = useToastStore()
const { register } = useAuth()
const { handleError } = useApiError()
const { formData, resetForm } = useForm<RegisterInterface>(createRegisterForm)
const { errors, validate } = useValidate<RegisterInterface>(registerSchema)

const registerUser = async () => {
  try {
    if (!validate(formData.value)) return
    const res = await register(formData.value)

    if (res.statusCode === 200) {
      toastStore.showToast('success', 'Вы успешно зарегистрировались')
      navigateTo('/auth/login')
    }
  } catch (error) {
    handleError(error)
  } finally {
    resetForm(Object.keys(errors.value) as (keyof RegisterInterface)[])
  }
}
</script>

<template>
  <div class="auth">
    <div class="auth__form">
      <InputField
        v-model="formData.email"
        :error="errors.email"
        placeholder="Email"
        type="email"
        variant="transparent"
      />
      <InputPassword
        v-model="formData.password"
        :error="errors.password"
        placeholder="Пароль"
      />
      <InputPassword
        v-model="formData.confirmPassword"
        :error="errors.confirmPassword"
        placeholder="Повторите пароль"
      />
    </div>
    <CheckboxForm v-model="formData.processingPersonalData" :error="errors.processingPersonalData">
      Согласен на обработку персональных
      данных
    </CheckboxForm>
    <div class="auth__actions">
      <ActionButton variant="primary" @click="registerUser">
        Зарегистрироваться
      </ActionButton>
      <NuxtLink to="/auth/restore">Забыли пароль?</NuxtLink>
    </div>
  </div>
</template>

<style scoped src="./auth-form.css">

</style>
