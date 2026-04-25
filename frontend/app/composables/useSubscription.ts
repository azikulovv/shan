import type { Subscription, SubscriptionResponse, SubscriptionStatus } from '~/types/subscription'

export function useSubscription() {
  const api = useApi()

  const subscription = useState<Subscription | null>('subscription:data', () => null)
  const isLoadingSubscription = useState<boolean>('subscription:isLoading', () => false)
  const subscriptionError = useState<string>('subscription:error', () => '')
  const status = computed<SubscriptionStatus | null>(() => {
    return subscription.value?.status || null
  })

  const isTrial = computed(() => status.value === 'TRIAL')
  const isActive = computed(() => status.value === 'ACTIVE')
  const isPastDue = computed(() => status.value === 'PAST_DUE')
  const isCancelled = computed(() => status.value === 'CANCELLED')
  const isExpired = computed(() => status.value === 'EXPIRED')

  const isSubscriptionAvailable = computed(() => {
    return status.value === 'TRIAL' || status.value === 'ACTIVE'
  })

  const trialDaysLeft = computed(() => {
    if (!subscription.value?.trialEndsAt) {
      return null
    }

    const now = new Date()
    const trialEnd = new Date(subscription.value.trialEndsAt)

    const diffMs = trialEnd.getTime() - now.getTime()
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24))

    return Math.max(diffDays, 0)
  })

  async function fetchSubscription() {
    isLoadingSubscription.value = true
    subscriptionError.value = ''

    try {
      const response = await api.request<SubscriptionResponse>('/subscription', {
        method: 'GET',
      })

      subscription.value = response.data

      return response.data
    } catch (error) {
      subscription.value = null
      subscriptionError.value = 'Не удалось загрузить информацию о подписке'

      return null
    } finally {
      isLoadingSubscription.value = false
    }
  }

  function clearSubscription() {
    subscription.value = null
    subscriptionError.value = ''
  }

  return {
    subscription,
    status,
    trialDaysLeft,

    isLoadingSubscription,
    subscriptionError,

    isTrial,
    isActive,
    isPastDue,
    isCancelled,
    isExpired,
    isSubscriptionAvailable,

    fetchSubscription,
    clearSubscription,
  }
}
