<script lang="ts" setup>
const { isVisible } = defineProps<{ isVisible: boolean }>()

const textLinks = [
	{ id: 1, href: '/', label: 'Главная' },
	{ id: 2, href: '/products', label: 'Магазин' },
	{ id: 3, href: '/about', label: 'О нас' }
]

const iconLinks = [
	{ id: 1, href: '/account', name: 'icons:user', label: 'Мой аккаунт' },
	{ id: 2, href: '/favorites', name: 'icons:favorite', label: 'Мой избранное' },
	{ id: 3, href: '#', name: 'icons:exit', label: 'Выход' }
]
</script>

<template>
	<ul :class="['menu', { 'active': isVisible }]">
		<li v-for="item in textLinks" :key="item.id">
			<NuxtLink :to="item.href">{{ item.label }}</NuxtLink>
		</li>
		<hr />
		<li v-for="item in iconLinks" :key="item.id">
			<NuxtLink :to="item.href">
				<Icon :name="item.name" size="20" />
				{{ item.label }}
			</NuxtLink>
		</li>
	</ul>
</template>

<style scoped src="./BurgerMenu.css">

</style>