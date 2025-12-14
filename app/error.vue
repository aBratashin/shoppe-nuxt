<script lang="ts" setup>
import type { NuxtError } from '#app'

const { error } = defineProps<{
	error: NuxtError
}>()
</script>

<template>
	<NuxtLayout name="default">
		<div class="error">
			<h1 class="error__status">{{ error.statusCode }} ошибка</h1>
			<p class="error__text">Страница не найдена, попробуйте перейти на главную страницу</p>
			<ActionButton variant="ghost" @click="navigateTo('/')">Главная страница</ActionButton>
		</div>
	</NuxtLayout>
</template>

<style scoped src="./assets/styles/error.css">

</style>