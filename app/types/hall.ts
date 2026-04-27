export type Hall = {
  id: string
  name: string
  capacity?: number | null
  description?: string | null
  createdAt: string
  updatedAt: string
}

export type CreateHallPayload = {
  name: string
  capacity?: number
  description?: string
}

export type HallsResponse = {
  message: string
  data: Hall[]
}

export type HallResponse = {
  message: string
  data: Hall
}
