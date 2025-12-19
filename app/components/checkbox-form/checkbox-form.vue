<script lang="ts" setup>
const { error = '' } = defineProps<{ error?: string }>()

const model = defineModel<boolean>({
  required: true
})
</script>

<template>
  <div class="checkbox-wrapper">
    <label class="auth__additional-info" for="additional-info">
      <input
        id="additional-info"
        v-model="model"
        type="checkbox"
      />
      <span><slot /></span>
    </label>
    <span v-if="error" class="error">{{ error }}</span>
  </div>

</template>

<style scoped src="./checkbox-form.css">

</style>
