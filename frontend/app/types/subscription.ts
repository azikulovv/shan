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
  name: string
  daysLeft: number
  isBlocked: boolean
  trialEndsAt: string | null
  subscriptionEndsAt: string | null
  subscriptionStatus: SubscriptionStatus
  createdAt: string
}

export type SubscriptionResponse = {
  message: string
  data: Subscription
}
