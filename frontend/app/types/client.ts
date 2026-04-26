export type Client = {
  id: string
  name: string
  phone: string
  note?: string | null
  createdAt: string
  updatedAt: string
}

export type CreateClientPayload = {
  name: string
  phone: string
  note?: string
}

export type ClientsResponse = {
  message: string
  data: Client[]
}

export type ClientResponse = {
  message: string
  data: Client
}
