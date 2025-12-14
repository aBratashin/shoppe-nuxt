<script setup lang="ts">
const { placeholder } = defineProps<{
	placeholder: string
}>()

const model = defineModel<string>({
	required: true,
})

const isVisiblePassword = ref(false)

const toggleVisiblePassword = () => {
	isVisiblePassword.value = !isVisiblePassword.value
}
</script>

<template>
	<InputField
		v-model="model"
		:placeholder
		:type="isVisiblePassword ? 'text' : 'password'"
		variant="transparent"
	>
		<Icon
			:name="isVisiblePassword ? 'icons:eye-closed' : 'icons:eye-opened'"
			@click="toggleVisiblePassword"
		/>
	</InputField>
</template>

<style scoped>

</style>