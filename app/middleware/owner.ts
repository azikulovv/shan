export default defineNuxtRouteMiddleware(async () => {
  const auth = useAuth()

  if (!auth.token.value) {
    return navigateTo('/auth/login')
  }

  if (!auth.user.value) {
    await auth.fetchMe()
  }

  if (auth.user.value?.role !== 'OWNER') {
    return navigateTo('/dashboard')
  }
})
