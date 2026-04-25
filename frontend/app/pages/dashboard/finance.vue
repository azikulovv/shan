<script setup lang="ts">
import type { Banquet } from '~/types/banquet'

definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
})

const banquetsApi = useBanquets()

const banquets = ref<Banquet[]>([])
const searchQuery = ref('')
const paymentFilter = ref<'ALL' | 'PAID' | 'PARTIAL' | 'UNPAID'>('ALL')
const dateFilter = ref<'ALL' | 'UPCOMING' | 'PAST'>('ALL')

const isLoading = ref(false)
const errorMessage = ref('')

const totalBanquets = computed(() => banquets.value.length)

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

const averageCheck = computed(() => {
  if (!totalBanquets.value) {
    return 0
  }

  return Math.round(totalAmount.value / totalBanquets.value)
})

const paidBanquets = computed(() => {
  return banquets.value.filter((banquet) => {
    const total = Number(banquet.totalAmount || 0)
    const paid = Number(banquet.prepaymentAmount || 0)

    return total > 0 && paid >= total
  })
})

const partialBanquets = computed(() => {
  return banquets.value.filter((banquet) => {
    const total = Number(banquet.totalAmount || 0)
    const paid = Number(banquet.prepaymentAmount || 0)

    return total > 0 && paid > 0 && paid < total
  })
})

const unpaidBanquets = computed(() => {
  return banquets.value.filter((banquet) => {
    const paid = Number(banquet.prepaymentAmount || 0)

    return paid <= 0
  })
})

const filteredBanquets = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  const now = new Date()

  return [...banquets.value]
    .filter((banquet) => {
      if (dateFilter.value === 'UPCOMING') {
        return new Date(banquet.date) >= now
      }

      if (dateFilter.value === 'PAST') {
        return new Date(banquet.date) < now
      }

      return true
    })
    .filter((banquet) => {
      const total = Number(banquet.totalAmount || 0)
      const paid = Number(banquet.prepaymentAmount || 0)

      if (paymentFilter.value === 'PAID') {
        return total > 0 && paid >= total
      }

      if (paymentFilter.value === 'PARTIAL') {
        return total > 0 && paid > 0 && paid < total
      }

      if (paymentFilter.value === 'UNPAID') {
        return paid <= 0
      }

      return true
    })
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
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
})

const filteredTotalAmount = computed(() => {
  return filteredBanquets.value.reduce((sum, banquet) => {
    return sum + Number(banquet.totalAmount || 0)
  }, 0)
})

const filteredTotalPrepayment = computed(() => {
  return filteredBanquets.value.reduce((sum, banquet) => {
    return sum + Number(banquet.prepaymentAmount || 0)
  }, 0)
})

const filteredRemainingAmount = computed(() => {
  return Math.max(filteredTotalAmount.value - filteredTotalPrepayment.value, 0)
})

const stats = computed(() => [
  {
    label: 'Общая сумма',
    value: formatPrice(totalAmount.value),
    description: 'Сумма всех банкетов',
    iconClass: 'bg-indigo-50 text-indigo-600',
    icon: ['M12 1v22', 'M17 5H9.5a3.5 3.5 0 0 0 0 7H14.5a3.5 3.5 0 0 1 0 7H6'],
  },
  {
    label: 'Предоплата',
    value: formatPrice(totalPrepayment.value),
    description: `${prepaymentPercent.value}% от общей суммы`,
    iconClass: 'bg-violet-50 text-violet-600',
    icon: [
      'M20 7H5a2 2 0 0 1 0-4h13',
      'M5 7h15a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a3 3 0 0 1-3-3V6',
      'M17 14h.01',
    ],
  },
  {
    label: 'Остаток',
    value: formatPrice(remainingAmount.value),
    description: 'Сумма к доплате',
    iconClass: 'bg-blue-50 text-blue-600',
    icon: ['M3 3v18h18', 'm7 14 4-4 3 3 5-6'],
  },
  {
    label: 'Средний чек',
    value: formatPrice(averageCheck.value),
    description: 'Средняя сумма банкета',
    iconClass: 'bg-slate-100 text-slate-700',
    icon: ['M4 19V5', 'M4 19h16', 'M8 16V9', 'M12 16V5', 'M16 16v-4'],
  },
])

const financeCards = computed(() => [
  {
    label: 'Оплачено полностью',
    value: paidBanquets.value.length,
    description: 'Банкеты без остатка',
    class: 'bg-emerald-50 text-emerald-700',
  },
  {
    label: 'Частичная оплата',
    value: partialBanquets.value.length,
    description: 'Есть предоплата',
    class: 'bg-indigo-50 text-indigo-700',
  },
  {
    label: 'Без оплаты',
    value: unpaidBanquets.value.length,
    description: 'Предоплата не внесена',
    class: 'bg-amber-50 text-amber-700',
  },
])

const chartBars = computed(() => {
  const lastMonths = getLastMonths(6)

  const items = lastMonths.map((month) => {
    const amount = banquets.value.reduce((sum, banquet) => {
      const date = new Date(banquet.date)
      const key = getMonthKey(date)

      if (key !== month.key) {
        return sum
      }

      return sum + Number(banquet.totalAmount || 0)
    }, 0)

    return {
      label: month.label,
      value: amount,
    }
  })

  const maxValue = Math.max(...items.map((item) => item.value), 1)

  return items.map((item) => ({
    ...item,
    height: Math.max(Math.round((item.value / maxValue) * 100), 8),
  }))
})

const latestPayments = computed(() => {
  return [...banquets.value]
    .filter((banquet) => Number(banquet.prepaymentAmount || 0) > 0)
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    .slice(0, 5)
})

function getMonthKey(date: Date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')

  return `${year}-${month}`
}

function getLastMonths(count: number) {
  const months = []

  for (let index = count - 1; index >= 0; index--) {
    const date = new Date()
    date.setMonth(date.getMonth() - index)

    months.push({
      key: getMonthKey(date),
      label: new Intl.DateTimeFormat('ru-RU', {
        month: 'short',
      }).format(date),
    })
  }

  return months
}

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

function getPaymentStatus(banquet: Banquet) {
  const total = Number(banquet.totalAmount || 0)
  const paid = Number(banquet.prepaymentAmount || 0)

  if (total > 0 && paid >= total) {
    return {
      label: 'Оплачен',
      class: 'bg-emerald-50 text-emerald-700',
    }
  }

  if (paid > 0) {
    return {
      label: 'Частично',
      class: 'bg-indigo-50 text-indigo-700',
    }
  }

  return {
    label: 'Без оплаты',
    class: 'bg-amber-50 text-amber-700',
  }
}

function getBanquetTitle(banquet: Banquet) {
  return banquet.title || banquet.eventType || 'Без названия'
}

async function fetchFinanceData() {
  isLoading.value = true
  errorMessage.value = ''

  try {
    const response = await banquetsApi.getBanquets()
    banquets.value = response.data
  } catch {
    errorMessage.value = 'Не удалось загрузить финансовые данные'
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchFinanceData()
})
</script>

<template>
  <section class="min-h-screen">
    <div class="space-y-5">
      <!-- Header -->
      <header class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p class="text-sm font-medium text-slate-500">Shanyraq Finance</p>

          <h1 class="mt-1 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            Финансы
          </h1>

          <p class="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Анализ оплат, предоплат, остатков и финансовой картины по банкетам.
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
              placeholder="Поиск по банкету, клиенту, залу..."
              class="h-11 w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-700 shadow-sm outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 sm:w-80"
            />
          </div>

          <button
            type="button"
            class="inline-flex h-11 items-center justify-center rounded-2xl bg-slate-950 px-5 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-200"
            @click="fetchFinanceData"
          >
            Обновить
          </button>
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
        class="rounded-[2rem] border border-slate-100 bg-white p-6 text-sm text-slate-500 shadow-sm"
      >
        Загружаем финансы...
      </div>

      <template v-else>
        <!-- Hero -->
        <article class="overflow-hidden rounded-[2rem] border border-indigo-100 bg-white shadow-sm">
          <div class="relative p-5 sm:p-6 lg:p-7">
            <div class="absolute right-0 top-0 h-40 w-40 rounded-full bg-indigo-100 blur-3xl" />
            <div class="absolute bottom-0 right-20 h-32 w-32 rounded-full bg-violet-100 blur-3xl" />

            <div
              class="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
            >
              <div>
                <div
                  class="mb-4 inline-flex rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-100"
                >
                  Финансовая сводка
                </div>

                <h2 class="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  {{ formatPrice(totalAmount) }}
                </h2>

                <p class="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                  Общая сумма по {{ totalBanquets }} банкетам. Предоплата составляет
                  <span class="font-semibold text-slate-700"> {{ prepaymentPercent }}% </span>
                  от всей суммы.
                </p>
              </div>

              <div class="grid grid-cols-2 gap-3 sm:min-w-[320px]">
                <div class="rounded-3xl bg-slate-950 p-4 text-white shadow-lg shadow-slate-950/10">
                  <p class="text-xs text-white/60">Предоплата</p>

                  <p class="mt-2 text-xl font-semibold">
                    {{ formatPrice(totalPrepayment) }}
                  </p>
                </div>

                <div class="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <p class="text-xs text-slate-500">Остаток</p>

                  <p class="mt-2 text-xl font-semibold text-slate-950">
                    {{ formatPrice(remainingAmount) }}
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
              <div class="min-w-0">
                <p class="text-sm text-slate-500">
                  {{ stat.label }}
                </p>

                <p class="mt-3 truncate text-2xl font-semibold tracking-tight text-slate-950">
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
          </article>
        </div>

        <div class="grid gap-5 xl:grid-cols-[1fr_360px]">
          <div class="space-y-5">
            <!-- Chart -->
            <article class="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
              <div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 class="text-lg font-semibold tracking-tight text-slate-950">
                    Динамика суммы
                  </h2>

                  <p class="mt-1 text-sm text-slate-500">
                    Визуальный обзор сумм банкетов за последние 6 месяцев
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
                  <p class="text-xs text-white/60">Всего</p>

                  <p class="mt-2 text-xl font-semibold">
                    {{ formatPrice(totalAmount) }}
                  </p>
                </div>

                <div class="rounded-3xl bg-indigo-50 p-4">
                  <p class="text-xs text-indigo-600">Получено</p>

                  <p class="mt-2 text-xl font-semibold text-indigo-700">
                    {{ formatPrice(totalPrepayment) }}
                  </p>
                </div>

                <div class="rounded-3xl bg-violet-50 p-4">
                  <p class="text-xs text-violet-600">К получению</p>

                  <p class="mt-2 text-xl font-semibold text-violet-700">
                    {{ formatPrice(remainingAmount) }}
                  </p>
                </div>
              </div>

              <div class="relative h-72 rounded-3xl bg-gradient-to-b from-slate-50 to-white p-4">
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
                        class="w-full rounded-t-2xl bg-gradient-to-t from-indigo-600 to-violet-400 shadow-sm transition hover:from-indigo-700 hover:to-violet-500"
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

            <!-- Finance table -->
            <article
              class="overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm"
            >
              <div
                class="flex flex-col gap-3 border-b border-slate-100 p-5 lg:flex-row lg:items-center lg:justify-between"
              >
                <div>
                  <h2 class="text-lg font-semibold tracking-tight text-slate-950">
                    Финансы по банкетам
                  </h2>

                  <p class="mt-1 text-sm text-slate-500">
                    {{ filteredBanquets.length }} найдено · {{ formatPrice(filteredTotalAmount) }}
                  </p>
                </div>

                <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <select
                    v-model="paymentFilter"
                    class="h-10 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                  >
                    <option value="ALL">Все оплаты</option>
                    <option value="PAID">Оплачено</option>
                    <option value="PARTIAL">Частично</option>
                    <option value="UNPAID">Без оплаты</option>
                  </select>

                  <select
                    v-model="dateFilter"
                    class="h-10 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                  >
                    <option value="ALL">Все даты</option>
                    <option value="UPCOMING">Будущие</option>
                    <option value="PAST">Прошедшие</option>
                  </select>
                </div>
              </div>

              <div v-if="filteredBanquets.length === 0" class="p-5">
                <div class="rounded-3xl bg-slate-50 p-8 text-center">
                  <div
                    class="mx-auto flex size-12 items-center justify-center rounded-2xl bg-white text-slate-500 shadow-sm"
                  >
                    <svg
                      class="size-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M20 7H5a2 2 0 0 1 0-4h13"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 7h15a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a3 3 0 0 1-3-3V6"
                      />
                    </svg>
                  </div>

                  <h3 class="mt-4 text-sm font-semibold text-slate-950">
                    Финансовые записи не найдены
                  </h3>

                  <p class="mt-1 text-sm text-slate-500">
                    Измените фильтр или добавьте суммы в банкетах.
                  </p>
                </div>
              </div>

              <div v-else class="overflow-x-auto">
                <table class="w-full min-w-[860px] text-left">
                  <thead>
                    <tr
                      class="border-b border-slate-100 bg-slate-50/70 text-xs uppercase tracking-wide text-slate-400"
                    >
                      <th class="px-5 py-4 font-semibold">Банкет</th>
                      <th class="px-5 py-4 font-semibold">Клиент</th>
                      <th class="px-5 py-4 font-semibold">Дата</th>
                      <th class="px-5 py-4 font-semibold">Сумма</th>
                      <th class="px-5 py-4 font-semibold">Предоплата</th>
                      <th class="px-5 py-4 font-semibold">Остаток</th>
                      <th class="px-5 py-4 font-semibold">Статус</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr
                      v-for="banquet in filteredBanquets"
                      :key="banquet.id"
                      class="border-b border-slate-100 transition last:border-b-0 hover:bg-slate-50/70"
                    >
                      <td class="px-5 py-4">
                        <p class="max-w-[180px] truncate text-sm font-semibold text-slate-950">
                          {{ getBanquetTitle(banquet) }}
                        </p>

                        <p class="mt-1 text-xs text-slate-400">
                          {{ banquet.eventType || 'Банкет' }}
                        </p>
                      </td>

                      <td class="px-5 py-4">
                        <p class="max-w-[160px] truncate text-sm font-medium text-slate-700">
                          {{ banquet.client?.name || 'Не указан' }}
                        </p>

                        <p v-if="banquet.client?.phone" class="mt-1 text-xs text-slate-400">
                          {{ banquet.client.phone }}
                        </p>
                      </td>

                      <td class="px-5 py-4">
                        <p class="text-sm font-medium text-slate-700">
                          {{ formatDate(banquet.date) }}
                        </p>

                        <p class="mt-1 text-xs text-slate-400">
                          {{ formatTime(banquet.date, banquet.startTime) }}
                        </p>
                      </td>

                      <td class="px-5 py-4 text-sm font-semibold text-slate-950">
                        {{ formatPrice(banquet.totalAmount || 0) }}
                      </td>

                      <td class="px-5 py-4 text-sm font-semibold text-indigo-700">
                        {{ formatPrice(banquet.prepaymentAmount || 0) }}
                      </td>

                      <td class="px-5 py-4 text-sm font-semibold text-violet-700">
                        {{
                          formatPrice(
                            Math.max(
                              Number(banquet.totalAmount || 0) -
                                Number(banquet.prepaymentAmount || 0),
                              0,
                            ),
                          )
                        }}
                      </td>

                      <td class="px-5 py-4">
                        <span
                          class="rounded-full px-2.5 py-1 text-xs font-semibold"
                          :class="getPaymentStatus(banquet).class"
                        >
                          {{ getPaymentStatus(banquet).label }}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>
          </div>

          <!-- Right panel -->
          <aside class="space-y-5">
            <article class="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-sm">
              <div class="mb-5">
                <h2 class="text-lg font-semibold tracking-tight text-slate-950">Оплаты</h2>

                <p class="mt-1 text-sm text-slate-500">Состояние оплат по банкетам</p>
              </div>

              <div class="space-y-3">
                <div
                  v-for="card in financeCards"
                  :key="card.label"
                  class="rounded-3xl p-4"
                  :class="card.class"
                >
                  <div class="flex items-center justify-between gap-3">
                    <div>
                      <p class="text-sm font-semibold">
                        {{ card.label }}
                      </p>

                      <p class="mt-1 text-xs opacity-75">
                        {{ card.description }}
                      </p>
                    </div>

                    <p class="text-2xl font-semibold">
                      {{ card.value }}
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <article class="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-sm">
              <div class="mb-5">
                <h2 class="text-lg font-semibold tracking-tight text-slate-950">
                  По текущему фильтру
                </h2>

                <p class="mt-1 text-sm text-slate-500">Суммы только по найденным банкетам</p>
              </div>

              <div class="space-y-3">
                <div class="rounded-3xl bg-slate-50 p-4">
                  <div class="flex items-center justify-between gap-3">
                    <p class="text-sm font-medium text-slate-700">Общая сумма</p>

                    <p class="text-sm font-semibold text-slate-950">
                      {{ formatPrice(filteredTotalAmount) }}
                    </p>
                  </div>
                </div>

                <div class="rounded-3xl bg-slate-50 p-4">
                  <div class="flex items-center justify-between gap-3">
                    <p class="text-sm font-medium text-slate-700">Предоплата</p>

                    <p class="text-sm font-semibold text-indigo-700">
                      {{ formatPrice(filteredTotalPrepayment) }}
                    </p>
                  </div>
                </div>

                <div class="rounded-3xl bg-slate-50 p-4">
                  <div class="flex items-center justify-between gap-3">
                    <p class="text-sm font-medium text-slate-700">Остаток</p>

                    <p class="text-sm font-semibold text-violet-700">
                      {{ formatPrice(filteredRemainingAmount) }}
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <article class="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-sm">
              <div class="mb-5">
                <h2 class="text-lg font-semibold tracking-tight text-slate-950">
                  Последние предоплаты
                </h2>

                <p class="mt-1 text-sm text-slate-500">Банкеты, где уже внесена оплата</p>
              </div>

              <div
                v-if="latestPayments.length === 0"
                class="rounded-3xl bg-slate-50 p-5 text-sm text-slate-500"
              >
                Предоплат пока нет.
              </div>

              <div v-else class="space-y-3">
                <div
                  v-for="banquet in latestPayments"
                  :key="banquet.id"
                  class="rounded-3xl bg-slate-50 p-4 transition hover:bg-slate-100"
                >
                  <div class="flex items-start justify-between gap-3">
                    <div class="min-w-0">
                      <p class="truncate text-sm font-semibold text-slate-950">
                        {{ getBanquetTitle(banquet) }}
                      </p>

                      <p class="mt-1 truncate text-xs text-slate-500">
                        {{ banquet.client?.name || 'Клиент не указан' }}
                      </p>
                    </div>

                    <p class="shrink-0 text-sm font-semibold text-indigo-700">
                      {{ formatPrice(banquet.prepaymentAmount || 0) }}
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <article
              class="rounded-[2rem] border border-indigo-100 bg-gradient-to-br from-indigo-600 to-violet-600 p-5 text-white shadow-lg shadow-indigo-200"
            >
              <p class="text-sm font-medium text-white/70">Совет</p>

              <h2 class="mt-2 text-xl font-semibold tracking-tight">
                Заполняйте сумму и предоплату
              </h2>

              <p class="mt-2 text-sm leading-6 text-white/70">
                Тогда финансовый dashboard сможет точнее показывать остатки, средний чек и
                оплаченные мероприятия.
              </p>

              <NuxtLink
                to="/dashboard/banquets"
                class="mt-5 inline-flex h-11 items-center rounded-2xl bg-white px-5 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"
              >
                Перейти к банкетам
              </NuxtLink>
            </article>
          </aside>
        </div>
      </template>
    </div>
  </section>
</template>
