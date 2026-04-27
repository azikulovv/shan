import type {
  AuthUser,
  LoginPayload,
  LoginResponse,
  MeResponse,
  UserRole,
  RegisterOwnerPayload,
  RegisterOwnerResponse,
} from '~/types/auth'

export function useAuth() {
  const api = useApi()

  const token = useCookie<string | null>('token', {
    maxAge: 60 * 60 * 24 * 7,
    sameSite: 'lax',
  })

  const user = useState<AuthUser | null>('auth:user', () => null)
  const isLoadingUser = useState<boolean>('auth:is-loading-user', () => false)

  const isAuthenticated = computed(() => Boolean(token.value))
  const isOwner = computed(() => user.value?.role === 'OWNER')
  const isAdmin = computed(() => user.value?.role === 'ADMIN')

  async function login(payload: LoginPayload) {
    const response = await api.request<LoginResponse, LoginPayload>('/auth/login', {
      method: 'POST',
      body: payload,
      auth: false,
    })

    token.value = response.data.token

    return response
  }

  async function fetchMe() {
    if (!token.value) {
      user.value = null
      return null
    }

    isLoadingUser.value = true

    try {
      const response = await api.request<MeResponse>('/auth/me', {
        method: 'GET',
      })

      user.value = response.data

      return response.data
    } catch (error) {
      token.value = null
      user.value = null

      return null
    } finally {
      isLoadingUser.value = false
    }
  }

  async function registerOwner(payload: RegisterOwnerPayload) {
    const response = await api.request<RegisterOwnerResponse, RegisterOwnerPayload>(
      '/auth/register-owner',
      {
        method: 'POST',
        body: payload,
        auth: false,
      },
    )

    token.value = response.data.token

    await fetchMe()

    return response
  }

  function logout() {
    token.value = null
    user.value = null
    navigateTo('/auth/login')
  }

  function hasRole(roles: UserRole[]) {
    if (!user.value) {
      return false
    }

    return roles.includes(user.value.role)
  }

  return {
    token,
    user: user.value,
    isLoadingUser,
    isAuthenticated,
    isOwner,
    isAdmin,
    login,
    fetchMe,
    logout,
    hasRole,
    registerOwner,
  }
}
