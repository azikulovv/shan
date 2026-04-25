import type { LoginPayload, LoginResponse } from '~/types/auth'

export function useAuth() {
  const api = useApi()
  const token = useCookie<string | null>('token', {
    maxAge: 60 * 60 * 24 * 7,
    sameSite: 'lax',
  })

  const isAuthenticated = computed(() => Boolean(token.value))

  async function login(payload: LoginPayload) {
    const response = await api.request<LoginResponse, LoginPayload>('/auth/login', {
      method: 'POST',
      body: payload,
      auth: false,
    })

    token.value = response.data.token

    return response
  }

  function logout() {
    token.value = null
    navigateTo('/login')
  }

  return {
    token,
    isAuthenticated,
    login,
    logout,
  }
}
