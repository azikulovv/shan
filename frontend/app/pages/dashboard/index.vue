<script setup lang="ts">
import type { Banquet } from '~/types/banquet'
import type { Client } from '~/types/client'
import type { Hall } from '~/types/hall'

definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
})

const clientsApi = useClients()
const banquetsApi = useBanquets()
const hallsApi = useHalls()

const clients = ref<Client[]>([])
const banquets = ref<Banquet[]>([])
const halls = ref<Hall[]>([])

const searchQuery = ref('')
const isLoading = ref(false)
const errorMessage = ref('')

const totalClients = computed(() => clients.value.length)
const totalBanquets = computed(() => banquets.value.length)
const totalHalls = computed(() => halls.value.length)

const totalGuests = computed(() => {
  return banquets.value.reduce((sum, banquet) => {
    return sum + Number(banquet.guestCount || 0)
  }, 0)
})

const totalAmount = computed(() => {
  return banquets.value.reduce((sum, banquet) => {
    return sum + Number(banquet.totalAmount || 0)
  }, 0)
})

const totalPrepayment = computed(() => {
  return banquets.value.reduce((sum, banquet) => {
    return sum + Number(banquet.prepaymentAmount || 0)
  }, 0)
})

const remainingAmount = computed(() => {
  return Math.max(totalAmount.value - totalPrepayment.value, 0)
})

const prepaymentPercent = computed(() => {
  if (!totalAmount.value) {
    return 0
  }

  return Math.min(Math.round((totalPrepayment.value / totalAmount.value) * 100), 100)
})

const upcomingBanquets = computed(() => {
  const now = new Date()
  const query = searchQuery.value.trim().toLowerCase()

  return banquets.value
    .filter((banquet) => new Date(banquet.date) >= now)
    .filter((banquet) => {
      if (!query) {
        return true
      }

      return (
        banquet.title?.toLowerCase().includes(query) ||
        banquet.eventType?.toLowerCase().includes(query) ||
        banquet.client?.name?.toLowerCase().includes(query) ||
        banquet.client?.phone?.toLowerCase().includes(query) ||
        banquet.hall?.name?.toLowerCase().includes(query)
      )
    })
    .sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime()
    })
    .slice(0, 5)
})

const latestClients = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()

  return [...clients.value]
    .filter((client) => {
      if (!query) {
        return true
      }

      return (
        client.name.toLowerCase().includes(query) ||
        client.phone.toLowerCase().includes(query) ||
        client.email?.toLowerCase().includes(query)
      )
    })
    .sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    })
    .slice(0, 5)
})

const stats = computed(() => [
  {
    label: 'Клиенты',
    value: totalClients.value,
    description: 'Всего клиентов в базе',
    trend: '+ база гостей',
    iconClass: 'bg-indigo-50 text-indigo-600',
    icon: [
      'M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2',
      'M9.5 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z',
      'M22 21v-2a4 4 0 0 0-3-3.87',
      'M16 3.13a4 4 0 0 1 0 7.75',
    ],
  },
  {
    label: 'Банкеты',
    value: totalBanquets.value,
    description: 'Всего мероприятий',
    trend: `${upcomingBanquets.value.length} ближайших`,
    iconClass: 'bg-violet-50 text-violet-600',
    icon: [
      'M8 2v4',
      'M16 2v4',
      'M3 10h18',
      'M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z',
    ],
  },
  {
    label: 'Залы',
    value: totalHalls.value,
    description: 'Активные залы ресторана',
    trend: 'для мероприятий',
    iconClass: 'bg-blue-50 text-blue-600',
    icon: [
      'M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16',
      'M18 21V9h2a2 2 0 0 1 2 2v10',
      'M8 7h4',
      'M8 11h4',
      'M8 15h4',
      'M3 21h18',
    ],
  },
  {
    label: 'Гости',
    value: totalGuests.value,
    description: 'Общее количество гостей',
    trend: 'по всем банкетам',
    iconClass: 'bg-slate-100 text-slate-700',
    icon: [
      'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2',
      'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z',
      'M23 21v-2a4 4 0 0 0-3-3.87',
      'M16 3.13a4 4 0 0 1 0 7.75',
    ],
  },
])

const chartBars = computed(() => {
  const values = [
    totalClients.value,
    totalBanquets.value,
    totalHalls.value,
    totalGuests.value,
    Math.round(totalAmount.value / 100000) || 0,
    Math.round(totalPrepayment.value / 100000) || 0,
  ]

  const maxValue = Math.max(...values, 1)

  return [
    {
      label: 'Клиенты',
      value: values[0],
    },
    {
      label: 'Банкеты',
      value: values[1],
    },
    {
      label: 'Залы',
      value: values[2],
    },
    {
      label: 'Гости',
      value: values[3],
    },
    {
      label: 'Сумма',
      value: values[4],
    },
    {
      label: 'Предоплата',
      value: values[5],
    },
  ].map((item) => ({
    ...item,
    height: item.value ? Math.max(Math.round((Number(item.value) / maxValue) * 100), 8) : 0,
  }))
})

async function fetchDashboardData() {
  isLoading.value = true
  errorMessage.value = ''

  try {
    const [clientsResponse, banquetsResponse, hallsResponse] = await Promise.all([
      clientsApi.getClients(),
      banquetsApi.getBanquets(),
      hallsApi.getHalls(),
    ])

    clients.value = clientsResponse.data
    banquets.value = banquetsResponse.data
    halls.value = hallsResponse.data
  } catch {
    errorMessage.value = 'Не удалось загрузить данные dashboard'
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchDashboardData()
})
</script>

<template>
  <section class="min-h-screen">
    <div class="space-y-5">
      <!-- Top bar -->
      <header class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p class="text-sm font-medium text-slate-500">Shanyraq Dashboard</p>

          <h1 class="mt-1 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            Панель управления
          </h1>

          <p class="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Обзор клиентов, банкетов, залов и финансовых показателей ресторана.
          </p>
        </div>

        <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div class="relative">
            <svg
              class="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-slate-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-4.35-4.35" />
              <circle cx="11" cy="11" r="7" />
            </svg>

            <input
              v-model="searchQuery"
              type="text"
              placeholder="Поиск по клиентам и банкетам..."
              class="h-11 w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-700 shadow-sm outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 sm:w-80"
            />
          </div>

          <NuxtLink
            to="/dashboard/banquets"
            class="inline-flex h-11 items-center justify-center rounded-2xl bg-slate-950 px-5 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-200"
          >
            Создать банкет
          </NuxtLink>
        </div>
      </header>

      <UiErrorMessage :error-message="errorMessage" />
      <UiLoader v-if="isLoading" />

      <template v-else>
        <DashboardWelcome
          :total-halls="totalHalls"
          :total-clients="totalClients"
          :total-banquets="totalBanquets"
          :prepayment-percent="prepaymentPercent"
          :upcoming-banquets="upcomingBanquets.length"
        />

        <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <DashboardStatCard v-for="(stat, index) in stats" :stat="stat" :key="index" />
        </div>

        <div class="grid gap-5 xl:grid-cols-[1fr_360px]">
          <div class="space-y-5">
            <DashboardFinanceChart
              :chart-bars="chartBars"
              :remaining-amount="remainingAmount"
              :prepayment-percent="prepaymentPercent"
              :total-amount="totalAmount"
              :total-prepayment="totalPrepayment"
            />

            <DashboardUpcomingBanquets :upcoming-banquets="upcomingBanquets" />
          </div>

          <!-- Right panel -->
          <aside class="space-y-5">
            <DashboardQuickActions />

            <DashboardAnalytics
              :total-guests="totalGuests"
              :total-amount="totalAmount"
              :total-banquets="totalBanquets"
              :prepayment-percent="prepaymentPercent"
            />

            <DashboardLatestClients :latest-clients="latestClients" />
          </aside>
        </div>
      </template>
    </div>
  </section>
</template>
