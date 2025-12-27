<script lang="ts" setup>
const { total, page, limit } = defineProps<{
  total: number;
  page: number;
  limit: number;
}>()

const emit = defineEmits<{
  (e: 'prev' | 'next'): void
  (e: 'toPage', page: number): void
}>()

const pagesCount = computed(() => Math.ceil(total / limit))
</script>

<template>
  <div class="pagination">
    <div
      v-if="page > 1"
      class="pagination__item"
      @click="emit('prev')"
    >
      <Icon name="icons:arrow-left-small" />
    </div>
    <div
      v-for="pageNumber in pagesCount"
      :key="pageNumber"
      :class="['pagination__item', { 'pagination__item-active': page === pageNumber }]"
      @click="emit('toPage', pageNumber)"
    >
      {{ pageNumber }}
    </div>
    <div
      v-if="pagesCount > page"
      class="pagination__item"
      @click="emit('next')"
    >
      <Icon name="icons:arrow-right-small" />
    </div>
  </div>
</template>

<style scoped src="./page-navigation.css">

</style>
