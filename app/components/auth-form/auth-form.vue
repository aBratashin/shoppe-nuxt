<script lang="ts" setup>
const { variant } = defineProps<{
	variant: 'login' | 'register'
}>()

const authData = ref({
	email: '',
	password: '',
	confirmPassword: '',
	personalData: false,
	rememberUser: false
})
</script>

<template>
	<div class="auth">
		<div class="auth__form">
			<InputField
				v-model="authData.email"
				placeholder="Email"
				type="email"
				variant="transparent"
			/>
			<InputPassword
				v-model="authData.password"
				placeholder="Пароль"
			/>
			<InputPassword
				v-if="variant === 'register'"
				v-model="authData.confirmPassword"
				placeholder="Повторите пароль"
			/>
		</div>
		<label class="auth__additional-info" for="additional-info">
			<input
				id="additional-info"
				v-model="authData.personalData"
				type="checkbox"
			/>
			<span>{{ variant === 'register' ? 'Согласен на обработку персональных данных' : 'Запомнить меня' }}</span>
		</label>
		<div class="auth__actions">
			<ActionButton variant="primary">
				{{ variant === 'register' ? 'Зарегистрироваться' : 'Войти' }}
			</ActionButton>
			<NuxtLink to="/auth/restore">Забыли пароль?</NuxtLink>
		</div>
	</div>
</template>

<style scoped src="./auth-form.css">

</style>