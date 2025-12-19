<script lang="ts" setup>
const { isActive } = defineProps<{ isActive: boolean }>()

const emit = defineEmits(['toggle'])
</script>

<template>
  <nav class="navbar" @click="emit('toggle')">
    <div :class="['burger-btn', {'active': isActive}]">
      <span />
    </div>
  </nav>
</template>

<style scoped src="./burger-button.css">

</style>
