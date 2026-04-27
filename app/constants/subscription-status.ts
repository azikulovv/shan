import type { SubscriptionStatus } from '~/types/subscription'

export const subscriptionStatusVariants = {
  TRIAL: {
    label: 'Trial',
    title: 'Trial Workspace',
    description: 'Пробный период активен',
    cardClass: 'border-blue-200 bg-blue-50',
    iconClass: 'bg-white text-blue-600 shadow-sm',
    badgeClass: 'bg-blue-600 text-white',
    icon: ['M13 2 3 14h8l-1 8 11-13h-8V2Z'],
  },

  ACTIVE: {
    label: 'Active',
    title: 'Pro Workspace',
    description: 'Подписка активна',
    cardClass: 'border-emerald-200 bg-emerald-50',
    iconClass: 'bg-white text-emerald-600 shadow-sm',
    badgeClass: 'bg-emerald-600 text-white',
    icon: ['M20 6 9 17l-5-5'],
  },

  PAST_DUE: {
    label: 'Past due',
    title: 'Payment Required',
    description: 'Требуется оплата',
    cardClass: 'border-amber-200 bg-amber-50',
    iconClass: 'bg-white text-amber-600 shadow-sm',
    badgeClass: 'bg-amber-600 text-white',
    icon: [
      'M12 9v4',
      'M12 17h.01',
      'M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z',
    ],
  },

  CANCELLED: {
    label: 'Cancelled',
    title: 'Plan Cancelled',
    description: 'Подписка отменена',
    cardClass: 'border-slate-200 bg-slate-50',
    iconClass: 'bg-white text-slate-500 shadow-sm',
    badgeClass: 'bg-slate-600 text-white',
    icon: ['M18 6 6 18', 'M6 6l12 12'],
  },

  EXPIRED: {
    label: 'Expired',
    title: 'Plan Expired',
    description: 'Срок действия истёк',
    cardClass: 'border-red-200 bg-red-50',
    iconClass: 'bg-white text-red-600 shadow-sm',
    badgeClass: 'bg-red-600 text-white',
    icon: ['M12 6v6l4 2', 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'],
  },
} satisfies Record<
  SubscriptionStatus,
  {
    label: string
    title: string
    description: string
    cardClass: string
    iconClass: string
    badgeClass: string
    icon: string[]
  }
>
