<script lang="ts" setup>
import type { LoginInterface } from '#shared/interfaces/login.interface'
import { loginSchema } from '#shared/validation/login.validation'

const createLoginForm = (): LoginInterface => ({
  email: '',
  password: '',
  rememberUser: false
})

const toastStore = useToastStore()
const { login } = useAuth()
const { handleError } = useApiError()
const { formData, resetForm } = useForm<LoginInterface>(createLoginForm)
const { errors, validate } = useValidate(loginSchema)

const loginUser = async () => {
  try {
    if (!validate(formData.value)) return
    const res = await login(formData.value)

    if (res.statusCode === 200) {
      toastStore.showToast('success', 'Вы успешно вошли')
      navigateTo('/')
    }
  } catch (error) {
    handleError(error)
  } finally {
    resetForm(Object.keys(errors.value) as (keyof LoginInterface)[])
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
    </div>
    <CheckboxForm v-model="formData.rememberUser">Запомнить меня
    </CheckboxForm>
    <div class="auth__actions">
      <ActionButton variant="primary" @click="loginUser">
        Вход
      </ActionButton>
      <NuxtLink to="/auth/restore">Забыли пароль?</NuxtLink>
    </div>
  </div>
</template>

<style scoped src="./auth-form.css">

</style>
