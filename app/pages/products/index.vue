<script lang="ts" setup>
import type { Category } from '#shared/interfaces/category.interface'
import { useDebounceFn } from '@vueuse/core'
import type { Product } from '#shared/interfaces/product.interface'

useSeoMeta({
  title: 'Каталог',
  description: 'Каталог магазина Shoppe'
})

const router = useRouter()
const route = useRoute()

const toastStore = useToastStore()
const searchInput = ref(route.query.search?.toString() || '')
const selectedOption = ref(route.query.category?.toString() || '')
const showFilters = ref(false)

const query = computed(() => ({
  category: route.query.category,
  search: route.query.search
}))

watch(
  () => ({
    search: searchInput.value,
    category: selectedOption.value
  }),
  ({ search, category }) => {
    changeRoute(search, category)
  }
)

const changeRoute = useDebounceFn((search, category) => {
  const query: Record<string, string> = {}

  if (search) query.search = search
  if (category) query.category = category

  router.replace({ query })
}, 300)

const { data: categoryOptions } = await useFetch<Category[]>('/api/category/receive', {
  method: 'GET',
  key: 'categories',
  onResponseError: () => {
    toastStore.showToast('error', 'Ошибка при получении категорий')
  }
})

const { data: products } = await useFetch<Product[]>('/api/product/receive', {
  method: 'GET',
  query,
  onResponseError: () => {
    toastStore.showToast('error', 'Ошибка при получении продуктов')
  }
})

onMounted(() => {
  const checkWindowWidth = () => {
    showFilters.value = window.innerWidth >= 768
  }

  checkWindowWidth()
  window.addEventListener('resize', checkWindowWidth)
})

const toggleFilters = () => {
  showFilters.value = !showFilters.value
}
</script>

<template>
  <div class="products">
    <h1 class="products__title">Каталог товаров</h1>
    <div class="products__filters" @click="toggleFilters">
      <Icon name="icons:filter" size="18" />
      Фильтры
    </div>
    <div class="products__content">
      <div v-if="showFilters" class="products__left">
        <InputField
          v-model="searchInput"
          placeholder="Поиск..."
          variant="transparent"
        >
          <Icon name="icons:search" />
        </InputField>
        <DropdownList
          v-if="categoryOptions?.length"
          v-model="selectedOption"
          :options="categoryOptions"
          default-option="Категория"
        />
      </div>
      <div v-if="products" class="product-list">
        <ProductItem
          v-for="product in products"
          :key="product.id"
          v-bind="product"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.products__title {
  text-align: left;
}

.products__filters {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  max-width: 100px;
  margin-bottom: 16px;

  cursor: pointer;
}

.products__content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items: center;
  gap: 70px 24px;
  width: 100%;
  padding: 16px 0;
}

@media (min-width: 768px) {
  .products__content {
    flex-direction: row;
  }

  .products__filters {
    display: none;
  }

  .products__left {
    min-width: 260px;
  }
}
</style>
