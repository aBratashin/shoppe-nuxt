<script lang="ts" setup>
import type { Category } from '#shared/interfaces/category.interface'
import { useDebounceFn } from '@vueuse/core'
import type { ProductResponse } from '#shared/interfaces/product.interface'

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
const showDiscount = ref(route.query.discount || false)
const currentPage = ref(Number(route.query.page) || 1)
const productsLimit = ref(Number(route.query.limit) || 6)

watchEffect(() => {
  console.log(showDiscount.value)
})

const query = computed(() => ({
  category: route.query.category,
  search: route.query.search,
  page: currentPage.value,
  limit: productsLimit.value,
  discount: showDiscount.value
}))

watch([searchInput, selectedOption, showDiscount], () => {
  currentPage.value = 1
  changeRoute(searchInput.value, selectedOption.value, showDiscount.value.toString())
})

watch(
  () => route.query.page,
  (page) => {
    currentPage.value = Number(page) || 1
  }
)

const changeRoute = useDebounceFn((search: string, category: string, discount: string) => {
  const query: Record<string, string> = {}

  if (search) query.search = search
  if (category) query.category = category

  query.page = currentPage.value.toString()
  query.limit = productsLimit.value.toString()

  if (discount === 'true') query.discount = discount

  router.replace({ query })
}, 300)

const { data: categoryOptions } = await useFetch<Category[]>('/api/category/receive', {
  method: 'GET',
  key: 'categories',
  onResponseError: () => {
    toastStore.showToast('error', 'Ошибка при получении категорий')
  }
})

const { data, pending } = await useFetch<ProductResponse>('/api/product/receive', {
  method: 'GET',
  query,
  lazy: true,
  server: false,
  onResponseError: () => {
    toastStore.showToast('error', 'Ошибка при получении продуктов')
  }
})

const products = computed(() => data.value?.products ?? [])

onMounted(() => {
  const checkWindowWidth = () => {
    showFilters.value = window.innerWidth >= 768
  }

  checkWindowWidth()
  window.addEventListener('resize', checkWindowWidth)

  if (!route.query.page || !route.query.limit) {
    router.replace({
      query: {
        ...route.query,
        page: currentPage.value.toString(),
        limit: productsLimit.value.toString()
      }
    })
  }
})

const toggleFilters = () => {
  showFilters.value = !showFilters.value
}

const goToPage = (page: number) => {
  currentPage.value = page

  router.replace({
    query: {
      ...route.query,
      page: page.toString(),
      limit: productsLimit.value.toString()
    }
  })
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
        <div class="products__discount">
          <div>Со скидкой</div>
          <ButtonSwitcher v-model="showDiscount" />
        </div>
      </div>
      <div class="products__right">
        <div v-if="pending && !data">
          Загрузка...
        </div>
        <div v-else-if="products.length" class="product-list">
          <ProductItem
            v-for="product in products"
            :key="product.id"
            v-bind="product"
          />
        </div>
        <div class="products__pagination">
          <PageNavigation
            v-if="data && data.total > productsLimit"
            :limit="productsLimit"
            :page="currentPage"
            :total="data.total"
            @next="goToPage(currentPage + 1)"
            @prev="goToPage(currentPage - 1)"
            @to-page="(page) => goToPage(page)"
          />
        </div>
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

.products__discount {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
}

.products__right {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items: center;
  gap: 70px 24px;
  width: 100%;
  padding: 16px 0;
  margin-bottom: 30px;
}

.products__pagination {
  margin-bottom: 50px;
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
