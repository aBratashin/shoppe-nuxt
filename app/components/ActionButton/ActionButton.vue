<script setup lang="ts">
const { variant = 'ghost' } = defineProps<{
	variant?: 'primary' | 'ghost'
}>()
</script>

<template>
	<button :class="['button', {[variant]: variant}]">
		<slot />
	</button>
</template>

<style scoped src="./ActionButton.css">

</style>