<script lang="ts" setup>
const { placeholder } = defineProps<{
  placeholder: string
}>()

const model = defineModel<string>({
  required: true
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
    v-bind="$attrs"
    variant="transparent"
  >
    <Icon
      :name="isVisiblePassword ? 'icons:eye-hide' : 'icons:eye-show'"
      class="eye-icon"
      size="24"
      @click="toggleVisiblePassword"
    />
  </InputField>
</template>

<style scoped src="./input-password.css">

</style>
