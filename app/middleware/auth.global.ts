export default defineNuxtRouteMiddleware(async (to, from) => {
  try {
    await $fetch('/api/auth/verify', {
      method: 'POST',
      headers: useRequestHeaders(['cookie'])
    })

    if (to.path.startsWith('/auth')) {
      return navigateTo('/')
    }
  } catch {
    if (to.path.startsWith('/auth')) {
      return
    }

    return navigateTo('/auth/login')
  }
})
