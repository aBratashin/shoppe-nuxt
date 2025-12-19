<script lang="ts" setup>
const { isVisible } = defineProps<{ isVisible: boolean }>()

const { logout } = useAuth()
const { menuTextLinks, menuIconLinks } = useLinks()

const handleLogout = async () => {
  await logout()
  navigateTo('/auth/login')
}
</script>

<template>
  <ul :class="['menu', { 'active': isVisible }]">
    <li v-for="item in menuTextLinks" :key="item.id">
      <NuxtLink :to="item.href">{{ item.label }}</NuxtLink>
    </li>
    <hr />
    <li v-for="item in menuIconLinks" :key="item.id">
      <NuxtLink :to="item.href">
        <Icon :name="item.name" size="20" />
        {{ item.label }}
      </NuxtLink>
    </li>
    <li @click="handleLogout">
      <Icon name="icons:exit" size="20" />
      Выход
    </li>
  </ul>
</template>

<style scoped src="./burger-menu.css">

</style>
