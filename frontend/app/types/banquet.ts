import type { Client } from '~/types/client'
import type { Hall } from './hall'

export type Banquet = {
  id: string
  title?: string | null
  eventType?: string | null
  guestCount: number
  date: string
  startTime?: string | null
  clientId: string
  hallId?: string | null
  totalAmount?: number | null
  prepaymentAmount?: number | null
  comment?: string | null
  client?: Client
  createdAt: string
  updatedAt: string
  hall: Hall
}

export type CreateBanquetPayload = {
  title?: string
  eventType?: string
  guestCount: number

  date: string
  startTime?: string

  clientId: string
  hallId?: string

  totalAmount?: number
  prepaymentAmount?: number

  comment?: string
}

export type BanquetsResponse = {
  message: string
  data: Banquet[]
}

export type BanquetResponse = {
  message: string
  data: Banquet
}

export type UpdateBanquetPayload = {
  title?: string
  eventType?: string
  guestCount?: number

  date?: string
  startTime?: string

  clientId?: string
  hallId?: string

  totalAmount?: number
  prepaymentAmount?: number

  comment?: string
}
