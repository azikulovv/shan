<script setup lang="ts">
import type { Banquet } from '~/types/banquet'

import FinanceChart from '~/components/finance/FinanceChart.vue'
import FinanceFilteredSummary from '~/components/finance/FinanceFilteredSummary.vue'
import FinanceHeader from '~/components/finance/FinanceHeader.vue'
import FinanceHero from '~/components/finance/FinanceHero.vue'
import FinanceLatestPayments from '~/components/finance/FinanceLatestPayments.vue'
import FinancePaymentCards from '~/components/finance/FinancePaymentCards.vue'
import FinanceStatCard from '~/components/finance/FinanceStatCard.vue'
import FinanceTable from '~/components/finance/FinanceTable.vue'
import FinanceTipCard from '~/components/finance/FinanceTipCard.vue'
import UiErrorMessage from '~/components/ui/UiErrorMessage.vue'

definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
})

type PaymentFilter = 'ALL' | 'PAID' | 'PARTIAL' | 'UNPAID'
type DateFilter = 'ALL' | 'UPCOMING' | 'PAST'

const banquetsApi = useBanquets()

const banquets = ref<Banquet[]>([])
const searchQuery = ref('')
const paymentFilter = ref<PaymentFilter>('ALL')
const dateFilter = ref<DateFilter>('ALL')

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
    return Number(banquet.prepaymentAmount || 0) <= 0
  })
})

const filteredBanquets = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  const now = new Date()

  return [...banquets.value]
    .filter((banquet) => {
      const banquetDate = new Date(banquet.date)

      if (dateFilter.value === 'UPCOMING') {
        return banquetDate >= now
      }

      if (dateFilter.value === 'PAST') {
        return banquetDate < now
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
  const months = getLastMonths(6)

  const bars = months.map((month) => {
    const total = banquets.value.reduce((sum, banquet) => {
      const banquetDate = new Date(banquet.date)

      if (getMonthKey(banquetDate) !== month.key) {
        return sum
      }

      return sum + Number(banquet.totalAmount || 0)
    }, 0)

    const paid = banquets.value.reduce((sum, banquet) => {
      const banquetDate = new Date(banquet.date)

      if (getMonthKey(banquetDate) !== month.key) {
        return sum
      }

      return sum + Number(banquet.prepaymentAmount || 0)
    }, 0)

    return {
      key: month.key,
      label: month.label,
      total,
      paid,
    }
  })

  const maxValue = Math.max(...bars.map((bar) => bar.total), 1)

  return bars.map((bar) => ({
    ...bar,
    height: bar.total ? Math.max(Math.round((bar.total / maxValue) * 100), 10) : 6,
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
  const currentDate = new Date()

  for (let index = count - 1; index >= 0; index--) {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - index, 1)

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
      <FinanceHeader v-model:search-query="searchQuery" @refresh="fetchFinanceData" />

      <UiErrorMessage v-if="errorMessage" :message="errorMessage" />
      <div
        v-if="isLoading"
        class="rounded-4xl border border-slate-100 bg-white p-6 text-sm text-slate-500 shadow-sm"
      >
        Загружаем финансы...
      </div>

      <template v-else>
        <FinanceHero
          :total-amount="totalAmount"
          :total-banquets="totalBanquets"
          :total-prepayment="totalPrepayment"
          :remaining-amount="remainingAmount"
          :prepayment-percent="prepaymentPercent"
        />

        <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <FinanceStatCard
            v-for="stat in stats"
            :key="stat.label"
            :label="stat.label"
            :value="stat.value"
            :description="stat.description"
            :icon-class="stat.iconClass"
            :icon="stat.icon"
          />
        </div>

        <div class="grid min-w-0 gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
          <div class="min-w-0 space-y-5">
            <FinanceChart
              :chart-bars="chartBars"
              :total-amount="totalAmount"
              :total-prepayment="totalPrepayment"
              :remaining-amount="remainingAmount"
              :prepayment-percent="prepaymentPercent"
            />

            <FinanceTable
              v-model:payment-filter="paymentFilter"
              v-model:date-filter="dateFilter"
              :banquets="filteredBanquets"
              :filtered-total-amount="filteredTotalAmount"
            />
          </div>

          <aside class="min-w-0 space-y-5">
            <FinancePaymentCards :cards="financeCards" />

            <FinanceFilteredSummary
              :total-amount="filteredTotalAmount"
              :total-prepayment="filteredTotalPrepayment"
              :remaining-amount="filteredRemainingAmount"
            />

            <FinanceLatestPayments :banquets="latestPayments" />

            <FinanceTipCard />
          </aside>
        </div>
      </template>
    </div>
  </section>
</template>
