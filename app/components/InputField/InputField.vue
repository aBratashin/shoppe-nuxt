<script lang="ts" setup>
const { variant = 'ghost', iconPosition = 'right', placeholder = '', type = 'text' } = defineProps<{
	variant?: 'transparent' | 'ghost',
	iconPosition?: 'left' | 'right',
	placeholder?: string,
	type?: string
}>()

const model = defineModel<string>({
	required: true
})

const emit = defineEmits<{
	(e: 'ok'): void
}>()
</script>

<template>
	<div :class="['input', {[variant]: variant}]">
		<input
			v-model="model"
			:placeholder
			:type
			class="input__field"
		>
		<button :class="['input__icon', {[iconPosition]: iconPosition}]" @click="emit('ok')">
			<slot />
		</button>
	</div>
</template>

<style scoped src="./InputField.css">

</style>