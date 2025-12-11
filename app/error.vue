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
			<ActionButton type="ghost" @click="navigateTo('/')">Главная страница</ActionButton>
		</div>
	</NuxtLayout>
</template>

<style scoped>
.error {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
}

.error__status {
	font-size: 33px;
	font-weight: 500;
}

.error__text {
	margin: 24px 0 64px 0;

	font-size: 20px;
	text-align: center;
	color: var(--color-dove-gray);
}
</style>