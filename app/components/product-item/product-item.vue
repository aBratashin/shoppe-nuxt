<script lang="ts" setup>
import type { Product } from '#shared/interfaces/product.interface'

const { name, price, images, discount } = defineProps<Product>()
</script>

<template>
  <div class="product">
    <img :src="images[0]" alt="name" class="product__image">
    <h3 class="product__title">{{ name }}</h3>
    <div class="product__price">$ {{ price.toFixed(2) }}</div>
  </div>
</template>

<style scoped>
.product__image {
  width: 300px;
  height: 300px;
  object-fit: contain;
  margin-bottom: 24px;

  border-radius: 8px;
}

.product__title {
  margin-bottom: 16px;

  text-align: left;
}

.product__price {
  color: var(--color-sandal);
  font-weight: 500;
  font-size: 20px;
}
</style>
