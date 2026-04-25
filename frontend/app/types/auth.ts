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
  restaurant?: {
    id: string
    name: string
    subscriptionStatus: string
    trialEndsAt: string
    createdAt: string
  }
}

export type MeResponse = {
  message: string
  data: AuthUser
}

export type RegisterOwnerPayload = {
  ownerName: string
  email: string
  phone?: string
  password: string
  restaurantName: string
}

export type RegisterOwnerResponse = {
  message: string
  data: {
    token: string
  }
}
