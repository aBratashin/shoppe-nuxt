<script setup lang="ts">
const email = ref('')
</script>

<template>
  <div class="restore">
    <div class="restore__form">
      <h1>Забыли пароль?</h1>
      <h3>Если вы забыли пароль, то введите свой email и мы отправим вам ссылку на
        восстановление</h3>
      <div class="email">
        <InputField v-model="email" placeholder="Email" variant="transparent" />
      </div>
      <ActionButton>Сбросить пароль</ActionButton>
    </div>
  </div>
</template>

<style scoped src="./restore.css">

</style>
