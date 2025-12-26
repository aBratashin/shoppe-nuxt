<script lang="ts" setup>
import type { Category } from '#shared/interfaces/category.interface'

const model = defineModel<string>({
  required: true
})

const { options, defaultOption } = defineProps<{
  options: Category[],
  defaultOption: string
}>()
</script>

<template>
  <div class="dropdown-list">
    <select v-model="model" class="dropdown-list__select">
      <option value="">{{ defaultOption }}</option>
      <option
        v-for="option in options"
        :key="option.id"
        :value="option.alias"
        v-bind="$attrs"
      >
        {{ option.name }}
      </option>
    </select>
    <div class="dropdown-list__icon">
      <Icon name="icons:arrow-down" size="7" />
    </div>
  </div>
</template>

<style scoped src="./dropdown-list.css">

</style>
