export default defineNuxtRouteMiddleware(async () => {
  const auth = useAuth()

  if (!auth.token.value) {
    return navigateTo('/auth/login')
  }

  if (!auth.user) {
    const user = await auth.fetchMe()

    if (!user) {
      return navigateTo('/auth/login')
    }
  }
})
