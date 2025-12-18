<script lang="ts" setup>
import { useToastStore } from '~/stores/toast.store'
import { useLoginForm } from '~/composables/useLoginForm'

const toastStore = useToastStore()

const { login } = useAuth()
const { handleError } = useApiError()
const { formData, resetForm } = useLoginForm()

const loginUser = async () => {
  try {
    const res = await login(formData.value)

    if (res.statusCode === 200) {
      toastStore.showToast('success', 'Вы успешно вошли')
      navigateTo('/')
    }
  } catch (error) {
    handleError(error)
  } finally {
    resetForm()
  }
}
</script>

<template>
  <div class="auth">
    <div class="auth__form">
      <InputField
        v-model="formData.email"
        placeholder="Email"
        type="email"
        variant="transparent"
      />
      <InputPassword
        v-model="formData.password"
        placeholder="Пароль"
      />
    </div>
    <label class="auth__additional-info" for="additional-info">
      <input
        id="additional-info"
        v-model="formData.rememberUser"
        type="checkbox"
      />
      <span>Запомнить меня</span>
    </label>
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
