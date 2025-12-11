<script setup lang="ts">
const { type = 'ghost' } = defineProps<{
	type?: 'primary' | 'ghost'
}>()
</script>

<template>
	<button :class="['button', {[type]: type}]">
		<slot />
	</button>
</template>

<style scoped src="./ActionButton.css">

</style>