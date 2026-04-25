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

  return Math.round((totalPrepayment.value / totalAmount.value) * 100)
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

const quickActions = [
  {
    label: 'Добавить клиента',
    description: 'Создать контакт гостя',
    to: '/dashboard/clients',
  },
  {
    label: 'Создать банкет',
    description: 'Запланировать мероприятие',
    to: '/dashboard/banquets',
  },
  {
    label: 'Добавить зал',
    description: 'Настроить помещение',
    to: '/dashboard/halls',
  },
]

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
    height: Math.max(Math.round((Number(item.value) / maxValue) * 100), 8),
  }))
})

function formatPrice(value: number) {
  return new Intl.NumberFormat('ru-KZ', {
    style: 'currency',
    currency: 'KZT',
    maximumFractionDigits: 0,
  }).format(value)
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))
}

function formatTime(date: string, startTime?: string | null) {
  if (startTime) {
    return startTime
  }

  return new Intl.DateTimeFormat('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(date))
}

function getClientInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

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

      <p
        v-if="errorMessage"
        class="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600"
      >
        {{ errorMessage }}
      </p>

      <div
        v-if="isLoading"
        class="rounded-4xl border border-slate-100 bg-white p-6 text-sm text-slate-500 shadow-sm"
      >
        Загружаем dashboard...
      </div>

      <template v-else>
        <!-- Welcome -->
        <article class="overflow-hidden rounded-4xl border border-indigo-100 bg-white shadow-sm">
          <div class="relative p-5 sm:p-6 lg:p-7">
            <div class="absolute right-0 top-0 h-40 w-40 rounded-full bg-indigo-100 blur-3xl" />
            <div class="absolute bottom-0 right-20 h-32 w-32 rounded-full bg-violet-100 blur-3xl" />

            <div
              class="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between"
            >
              <div>
                <div
                  class="mb-4 inline-flex rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-100"
                >
                  Сегодня в Shanyraq
                </div>

                <h2 class="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  Добро пожаловать 👋
                </h2>

                <p class="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                  У вас {{ totalClients }} клиентов, {{ totalBanquets }} банкетов и
                  {{ totalHalls }} залов. Следите за оплатами, ближайшими мероприятиями и базой
                  гостей в одном месте.
                </p>
              </div>

              <div class="grid grid-cols-2 gap-3 sm:min-w-[320px]">
                <div class="rounded-3xl bg-slate-950 p-4 text-white shadow-lg shadow-slate-950/10">
                  <p class="text-xs text-white/60">Предоплата</p>

                  <p class="mt-2 text-2xl font-semibold">{{ prepaymentPercent }}%</p>
                </div>

                <div class="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <p class="text-xs text-slate-500">Ближайшие банкеты</p>

                  <p class="mt-2 text-2xl font-semibold text-slate-950">
                    {{ upcomingBanquets.length }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        <!-- Stats -->
        <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <article
            v-for="stat in stats"
            :key="stat.label"
            class="group rounded-3xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-200/60"
          >
            <div class="flex items-start justify-between gap-4">
              <div>
                <p class="text-sm text-slate-500">
                  {{ stat.label }}
                </p>

                <p class="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                  {{ stat.value }}
                </p>
              </div>

              <div
                class="flex size-11 items-center justify-center rounded-2xl shadow-sm ring-1 ring-slate-100 transition group-hover:scale-105"
                :class="stat.iconClass"
              >
                <svg
                  class="size-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    v-for="path in stat.icon"
                    :key="path"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    :d="path"
                  />
                </svg>
              </div>
            </div>

            <p class="mt-4 text-sm text-slate-500">
              {{ stat.description }}
            </p>

            <div
              class="mt-4 inline-flex rounded-full bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-500"
            >
              {{ stat.trend }}
            </div>
          </article>
        </div>

        <div class="grid gap-5 xl:grid-cols-[1fr_360px]">
          <div class="space-y-5">
            <!-- Finance + chart -->
            <article class="rounded-4xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
              <div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 class="text-lg font-semibold tracking-tight text-slate-950">
                    Финансовая картина
                  </h2>

                  <p class="mt-1 text-sm text-slate-500">
                    Общая сумма банкетов, предоплата и остаток
                  </p>
                </div>

                <div
                  class="rounded-2xl bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700"
                >
                  {{ prepaymentPercent }}% оплачено
                </div>
              </div>

              <div class="mb-6 grid gap-3 sm:grid-cols-3">
                <div class="rounded-3xl bg-slate-950 p-4 text-white">
                  <p class="text-xs text-white/60">Общая сумма</p>

                  <p class="mt-2 text-xl font-semibold">
                    {{ formatPrice(totalAmount) }}
                  </p>
                </div>

                <div class="rounded-3xl bg-indigo-50 p-4">
                  <p class="text-xs text-indigo-600">Предоплата</p>

                  <p class="mt-2 text-xl font-semibold text-indigo-700">
                    {{ formatPrice(totalPrepayment) }}
                  </p>
                </div>

                <div class="rounded-3xl bg-violet-50 p-4">
                  <p class="text-xs text-violet-600">Остаток</p>

                  <p class="mt-2 text-xl font-semibold text-violet-700">
                    {{ formatPrice(remainingAmount) }}
                  </p>
                </div>
              </div>

              <div class="relative h-72 rounded-3xl bg-linear-to-b from-slate-50 to-white p-4">
                <div class="absolute inset-x-4 top-1/4 border-t border-dashed border-slate-200" />
                <div class="absolute inset-x-4 top-1/2 border-t border-dashed border-slate-200" />
                <div class="absolute inset-x-4 top-3/4 border-t border-dashed border-slate-200" />

                <div class="relative flex h-full items-end gap-3">
                  <div
                    v-for="bar in chartBars"
                    :key="bar.label"
                    class="flex min-w-0 flex-1 flex-col items-center gap-2"
                  >
                    <div class="flex h-full w-full items-end">
                      <div
                        class="w-full rounded-t-2xl bg-linear-to-t from-indigo-600 to-violet-400 shadow-sm transition hover:from-indigo-700 hover:to-violet-500"
                        :style="{ height: `${bar.height}%` }"
                      />
                    </div>

                    <p class="truncate text-[11px] font-medium text-slate-400">
                      {{ bar.label }}
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <!-- Upcoming banquets -->
            <article
              class="overflow-hidden rounded-4xl border border-slate-100 bg-white shadow-sm"
            >
              <div
                class="flex flex-col gap-3 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h2 class="text-lg font-semibold tracking-tight text-slate-950">
                    Ближайшие банкеты
                  </h2>

                  <p class="mt-1 text-sm text-slate-500">Следующие мероприятия по дате</p>
                </div>

                <NuxtLink
                  to="/dashboard/banquets"
                  class="inline-flex h-10 items-center justify-center rounded-2xl bg-slate-50 px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                >
                  Все банкеты
                </NuxtLink>
              </div>

              <div v-if="upcomingBanquets.length === 0" class="p-5">
                <div class="rounded-3xl bg-slate-50 p-6 text-center">
                  <p class="text-sm font-medium text-slate-700">Ближайших банкетов пока нет</p>

                  <p class="mt-1 text-sm text-slate-500">
                    Когда появятся мероприятия, они будут отображаться здесь.
                  </p>
                </div>
              </div>

              <div v-else class="divide-y divide-slate-100">
                <div
                  v-for="banquet in upcomingBanquets"
                  :key="banquet.id"
                  class="p-5 transition hover:bg-slate-50/80"
                >
                  <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div class="min-w-0">
                      <div class="mb-2 flex flex-wrap gap-2">
                        <span
                          class="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700"
                        >
                          {{ banquet.eventType || 'Банкет' }}
                        </span>

                        <span
                          class="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                        >
                          {{ banquet.guestCount }} гостей
                        </span>
                      </div>

                      <h3 class="truncate text-sm font-semibold text-slate-950">
                        {{ banquet.title || banquet.eventType || 'Без названия' }}
                      </h3>

                      <p class="mt-1 text-sm text-slate-500">
                        {{ banquet.client?.name || 'Клиент не указан' }}
                        <span v-if="banquet.client?.phone"> · {{ banquet.client.phone }} </span>
                      </p>
                    </div>

                    <div class="shrink-0 text-left sm:text-right">
                      <p class="text-sm font-semibold text-slate-950">
                        {{ formatDate(banquet.date) }}
                      </p>

                      <p class="mt-1 text-xs text-slate-500">
                        {{ formatTime(banquet.date, banquet.startTime) }}
                      </p>
                    </div>
                  </div>

                  <div class="mt-4 grid gap-3 sm:grid-cols-3">
                    <div class="rounded-2xl bg-slate-50 px-4 py-3">
                      <p class="text-xs text-slate-400">Зал</p>

                      <p class="mt-1 truncate text-sm font-medium text-slate-700">
                        {{ banquet.hall?.name || 'Без зала' }}
                      </p>
                    </div>

                    <div class="rounded-2xl bg-slate-50 px-4 py-3">
                      <p class="text-xs text-slate-400">Сумма</p>

                      <p class="mt-1 text-sm font-medium text-slate-700">
                        {{ formatPrice(banquet.totalAmount || 0) }}
                      </p>
                    </div>

                    <div class="rounded-2xl bg-slate-50 px-4 py-3">
                      <p class="text-xs text-slate-400">Предоплата</p>

                      <p class="mt-1 text-sm font-medium text-slate-700">
                        {{ formatPrice(banquet.prepaymentAmount || 0) }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <!-- Right panel -->
          <aside class="space-y-5">
            <!-- Quick actions -->
            <article class="rounded-4xl border border-slate-100 bg-white p-5 shadow-sm">
              <div class="mb-5">
                <h2 class="text-lg font-semibold tracking-tight text-slate-950">
                  Быстрые действия
                </h2>

                <p class="mt-1 text-sm text-slate-500">Частые операции в системе</p>
              </div>

              <div class="space-y-3">
                <NuxtLink
                  v-for="action in quickActions"
                  :key="action.to"
                  :to="action.to"
                  class="group flex items-center justify-between gap-4 rounded-3xl bg-slate-50 p-4 transition hover:bg-slate-100"
                >
                  <span>
                    <span class="block text-sm font-semibold text-slate-800">
                      {{ action.label }}
                    </span>

                    <span class="mt-1 block text-xs text-slate-500">
                      {{ action.description }}
                    </span>
                  </span>

                  <span
                    class="flex size-9 shrink-0 items-center justify-center rounded-2xl bg-white text-slate-500 shadow-sm transition group-hover:text-slate-950"
                  >
                    →
                  </span>
                </NuxtLink>
              </div>
            </article>

            <!-- Analytics -->
            <article class="rounded-4xl border border-slate-100 bg-white p-5 shadow-sm">
              <div class="mb-5 flex items-center justify-between">
                <div>
                  <h2 class="text-lg font-semibold tracking-tight text-slate-950">Аналитика</h2>

                  <p class="mt-1 text-sm text-slate-500">Краткий обзор</p>
                </div>

                <div
                  class="flex size-10 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600"
                >
                  <svg
                    class="size-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v18h18" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="m7 14 4-4 3 3 5-6" />
                  </svg>
                </div>
              </div>

              <div class="space-y-3">
                <div class="rounded-3xl bg-slate-50 p-4">
                  <div class="flex items-center justify-between gap-3">
                    <p class="text-sm font-medium text-slate-700">Покрытие предоплаты</p>

                    <p class="text-sm font-semibold text-slate-950">{{ prepaymentPercent }}%</p>
                  </div>

                  <div class="mt-3 h-2 overflow-hidden rounded-full bg-white">
                    <div
                      class="h-full rounded-full bg-linear-to-r from-indigo-500 to-violet-500"
                      :style="{ width: `${prepaymentPercent}%` }"
                    />
                  </div>
                </div>

                <div class="rounded-3xl bg-slate-50 p-4">
                  <div class="flex items-center justify-between gap-3">
                    <p class="text-sm font-medium text-slate-700">Средний чек</p>

                    <p class="text-sm font-semibold text-slate-950">
                      {{ formatPrice(totalBanquets ? totalAmount / totalBanquets : 0) }}
                    </p>
                  </div>
                </div>

                <div class="rounded-3xl bg-slate-50 p-4">
                  <div class="flex items-center justify-between gap-3">
                    <p class="text-sm font-medium text-slate-700">Среднее гостей</p>

                    <p class="text-sm font-semibold text-slate-950">
                      {{ totalBanquets ? Math.round(totalGuests / totalBanquets) : 0 }}
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <!-- Latest clients -->
            <article class="rounded-4xl border border-slate-100 bg-white p-5 shadow-sm">
              <div class="mb-5 flex items-center justify-between gap-4">
                <div>
                  <h2 class="text-lg font-semibold tracking-tight text-slate-950">
                    Последние клиенты
                  </h2>

                  <p class="mt-1 text-sm text-slate-500">Недавно добавленные контакты</p>
                </div>

                <NuxtLink
                  to="/dashboard/clients"
                  class="text-sm font-medium text-slate-950 hover:underline"
                >
                  Все
                </NuxtLink>
              </div>

              <div
                v-if="latestClients.length === 0"
                class="rounded-3xl bg-slate-50 p-5 text-sm text-slate-500"
              >
                Клиентов пока нет.
              </div>

              <div v-else class="space-y-3">
                <div
                  v-for="client in latestClients"
                  :key="client.id"
                  class="flex items-center gap-3 rounded-3xl bg-slate-50 p-4 transition hover:bg-slate-100"
                >
                  <div
                    class="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-white text-xs font-semibold text-slate-700 shadow-sm"
                  >
                    {{ getClientInitials(client.name) }}
                  </div>

                  <div class="min-w-0 flex-1">
                    <p class="truncate text-sm font-semibold text-slate-950">
                      {{ client.name }}
                    </p>

                    <p class="mt-0.5 truncate text-xs text-slate-500">
                      {{ client.phone }}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </aside>
        </div>
      </template>
    </div>
  </section>
</template>
