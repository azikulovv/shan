export default defineNuxtRouteMiddleware(async () => {
  const auth = useAuth()

  if (!auth.token.value) {
    return navigateTo('/auth/login')
  }

  if (!auth.user) {
    await auth.fetchMe()
  }

  if (auth.user?.role !== 'OWNER') {
    return navigateTo('/dashboard')
  }
})
