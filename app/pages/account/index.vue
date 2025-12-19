<script lang="ts" setup>
useSeoMeta({
  title: 'Аккаунт',
  description: 'Аккаунт пользователя'
})

const { logout } = useAuth()

const handleLogout = async () => {
  await logout()
  navigateTo('/auth/login')
}
</script>

<template>
  <div>
    <div>account</div>
    <button @click="handleLogout">Выйти</button>
  </div>
</template>

<style scoped>

</style>
