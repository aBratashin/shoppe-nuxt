<script lang="ts" setup>
import { useToastStore } from '~/stores/toast.store'
import { useAuth } from '~/composables/useAuth'

const toastStore = useToastStore()

const { register } = useAuth()
const { handleError } = useApiError()
const { formData, resetForm } = useRegisterForm()

const registerUser = async () => {
  try {
    const res = await register(formData.value)

    if (res.statusCode === 200) {
      toastStore.showToast('success', 'Вы успешно зарегистрировались')
      navigateTo('/auth/login')
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
      <InputPassword
        v-model="formData.confirmPassword"
        placeholder="Повторите пароль"
      />
    </div>
    <label class="auth__additional-info" for="additional-info">
      <input
        id="additional-info"
        v-model="formData.processingPersonalData"
        type="checkbox"
      />
      <span>Согласен на обработку персональных данных</span>
    </label>
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
