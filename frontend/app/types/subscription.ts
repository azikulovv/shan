export const SUBSCRIPTION_STATUSES = [
  'TRIAL',
  'ACTIVE',
  'PAST_DUE',
  'CANCELLED',
  'EXPIRED',
] as const

export type SubscriptionStatus = (typeof SUBSCRIPTION_STATUSES)[number]

export type Subscription = {
  id: string
  restaurantId: string

  status: SubscriptionStatus

  trialEndsAt?: string | null
  currentPeriodStart?: string | null
  currentPeriodEnd?: string | null

  createdAt: string
  updatedAt: string
}

export type SubscriptionResponse = {
  message: string
  data: Subscription
}
