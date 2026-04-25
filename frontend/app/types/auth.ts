export type UserRole = 'OWNER' | 'ADMIN'

export type LoginPayload = {
  email: string
  password: string
}

export type LoginResponse = {
  message: string
  data: {
    token: string
  }
}

export type AuthUser = {
  id: string
  restaurantId: string
  role: UserRole
  email?: string
  name?: string
  phone?: string
}
