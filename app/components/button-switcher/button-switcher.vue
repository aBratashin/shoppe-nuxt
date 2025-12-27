<script lang="ts" setup>
const { modelValue } = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const toggleValue = () => {
  emit('update:modelValue', !modelValue)
}
</script>

<template>
  <div :class="['switcher', {'switcher-active': modelValue}]" @click="toggleValue">
    <div :class="['switcher-circle', {'switcher-circle-active': modelValue}]"></div>
  </div>
</template>

<style scoped src="./button-switcher.css">

</style>
