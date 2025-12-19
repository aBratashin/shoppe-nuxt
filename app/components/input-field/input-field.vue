<script lang="ts" setup>
defineOptions({
  inheritAttrs: false
})

const {
  variant = 'ghost',
  iconPosition = 'right',
  placeholder = '',
  type = 'text',
  error = ''
} = defineProps<{
  variant?: 'transparent' | 'ghost',
  iconPosition?: 'left' | 'right',
  placeholder?: string,
  type?: string,
  error?: string
}>()

const model = defineModel<string>({
  required: true
})

const emit = defineEmits<{
  (e: 'ok'): void
}>()
</script>

<template>
  <div class="input-wrapper">
    <div :class="['input', {[variant]: variant}]">
      <input
        v-model="model"
        :placeholder
        :type
        class="input__field"
        v-bind="$attrs"
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
    <span v-if="error" class="error">{{ error }}</span>
  </div>

</template>

<style scoped src="./input-field.css">

</style>
