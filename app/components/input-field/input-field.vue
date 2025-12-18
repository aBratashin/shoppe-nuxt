<script lang="ts" setup>
defineOptions({
  inheritAttrs: false
})

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
      v-bind="$attrs"
			:placeholder
			:type
			class="input__field"
      @keyup.enter="emit('ok')"
		>
    <button
      :class="['input__icon', {[iconPosition]: iconPosition}]"
      tabindex="-1"
      @click="emit('ok')"
    >
			<slot />
		</button>
	</div>
</template>

<style scoped src="./input-field.css">

</style>
