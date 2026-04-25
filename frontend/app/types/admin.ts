export type AdminAccount = {
  id: string
  name: string
  email: string
  phone?: string | null
  role: 'ADMIN'
  restaurantId: string
  createdAt: string
  updatedAt: string
}

export type CreateAdminPayload = {
  name: string
  email: string
  password: string
  phone?: string
}

export type AdminsResponse = {
  message: string
  data: AdminAccount[]
}

export type AdminResponse = {
  message: string
  data: AdminAccount
}
