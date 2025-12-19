<script lang="ts" setup>

</script>

<template>
  <div class="wrapper">
    <LayoutHeader />
    <main class="main">
      <div class="auth">
        <h1 class="auth__title">Мой аккаунт</h1>
        <div class="auth__type">
          <NuxtLink active-class="active" to="/auth/login">Войти</NuxtLink>
          <NuxtLink active-class="active" to="/auth/register">Зарегистрироваться</NuxtLink>
        </div>
        <slot />
      </div>
    </main>
    <LayoutFooter />
  </div>
</template>

<style scoped src="./auth.css">

</style>
