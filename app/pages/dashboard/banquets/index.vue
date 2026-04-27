<script setup lang="ts">
import type { Banquet, CreateBanquetPayload } from '~/types/banquet'
import type { Client } from '~/types/client'
import type { Hall } from '~/types/hall'

import BanquetCreateModal from '~/components/banquets/BanquetCreateModal.vue'
import BanquetsFinanceSummary from '~/components/banquets/BanquetsFinanceSummary.vue'
import BanquetsHeader from '~/components/banquets/BanquetsHeader.vue'
import BanquetsHero from '~/components/banquets/BanquetsHero.vue'
import BanquetsQuickOverview from '~/components/banquets/BanquetsQuickOverview.vue'
import BanquetsStatCard from '~/components/banquets/BanquetsStatCard.vue'
import BanquetsTable from '~/components/banquets/BanquetsTable.vue'
import BanquetsTipCard from '~/components/banquets/BanquetsTipCard.vue'
import BanquetsUpcomingDates from '~/components/banquets/BanquetsUpcomingDates.vue'

definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
})

const banquetsApi = useBanquets()
const clientsApi = useClients()
const hallsApi = useHalls()

const banquets = ref<Banquet[]>([])
const clients = ref<Client[]>([])
const halls = ref<Hall[]>([])

const searchQuery = ref('')
const eventTypeFilter = ref('ALL')

const isLoading = ref(false)
const isCreating = ref(false)
const isDeleting = ref<string | null>(null)

const errorMessage = ref('')
const createErrorMessage = ref('')
const isCreateModalOpen = ref(false)

const eventTypeSuggestions = [
  'Свадьба',
  'Құдалық',
  'Той',
  'Юбилей',
  'Корпоратив',
  'Бесік той',
  'Туған күн',
]

const totalBanquets = computed(() => banquets.value.length)

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

const upcomingBanquets = computed(() => {
  const now = new Date()

  return banquets.value
    .filter((banquet) => new Date(banquet.date) >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
})

const nearestBanquet = computed(() => upcomingBanquets.value[0])

const eventTypes = computed(() => {
  const types = banquets.value.map((banquet) => banquet.eventType).filter(Boolean) as string[]

  return [...new Set(types)]
})

const filteredBanquets = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()

  return [...banquets.value]
    .filter((banquet) => {
      if (eventTypeFilter.value === 'ALL') {
        return true
      }

      return banquet.eventType === eventTypeFilter.value
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
        banquet.hall?.name?.toLowerCase().includes(query) ||
        banquet.comment?.toLowerCase().includes(query)
      )
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
})

const stats = computed(() => [
  {
    label: 'Всего банкетов',
    value: totalBanquets.value,
    description: 'Все мероприятия в системе',
    iconClass: 'bg-indigo-50 text-indigo-600',
    icon: [
      'M8 2v4',
      'M16 2v4',
      'M3 10h18',
      'M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z',
    ],
  },
  {
    label: 'Ближайшие',
    value: upcomingBanquets.value.length,
    description: 'Предстоящие мероприятия',
    iconClass: 'bg-violet-50 text-violet-600',
    icon: ['M12 6v6l4 2', 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'],
  },
  {
    label: 'Гости',
    value: totalGuests.value,
    description: 'Общее количество гостей',
    iconClass: 'bg-blue-50 text-blue-600',
    icon: [
      'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2',
      'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z',
      'M23 21v-2a4 4 0 0 0-3-3.87',
      'M16 3.13a4 4 0 0 1 0 7.75',
    ],
  },
  {
    label: 'Сумма',
    value: formatPrice(totalAmount.value),
    description: 'Общая сумма банкетов',
    iconClass: 'bg-slate-100 text-slate-700',
    icon: ['M12 1v22', 'M17 5H9.5a3.5 3.5 0 0 0 0 7H14.5a3.5 3.5 0 0 1 0 7H6'],
  },
])

const financeItems = computed(() => [
  {
    label: 'Общая сумма',
    value: formatPrice(totalAmount.value),
    class: 'bg-slate-950 text-white',
    labelClass: 'text-white/60',
    valueClass: 'text-white',
  },
  {
    label: 'Предоплата',
    value: formatPrice(totalPrepayment.value),
    class: 'bg-indigo-50 text-indigo-700',
    labelClass: 'text-indigo-600',
    valueClass: 'text-indigo-700',
  },
  {
    label: 'Остаток',
    value: formatPrice(remainingAmount.value),
    class: 'bg-violet-50 text-violet-700',
    labelClass: 'text-violet-600',
    valueClass: 'text-violet-700',
  },
])

function formatPrice(value: number) {
  return new Intl.NumberFormat('ru-KZ', {
    style: 'currency',
    currency: 'KZT',
    maximumFractionDigits: 0,
  }).format(value)
}

function getBanquetTitle(banquet: Banquet) {
  return banquet.title || banquet.eventType || 'Без названия'
}

function openCreateModal() {
  createErrorMessage.value = ''
  isCreateModalOpen.value = true
}

function closeCreateModal() {
  isCreateModalOpen.value = false
  createErrorMessage.value = ''
}

async function fetchBanquets() {
  isLoading.value = true
  errorMessage.value = ''

  try {
    const response = await banquetsApi.getBanquets()
    banquets.value = response.data
  } catch {
    errorMessage.value = 'Не удалось загрузить банкеты'
  } finally {
    isLoading.value = false
  }
}

async function fetchClients() {
  try {
    const response = await clientsApi.getClients()
    clients.value = response.data
  } catch {
    errorMessage.value = 'Не удалось загрузить клиентов'
  }
}

async function fetchHalls() {
  try {
    const response = await hallsApi.getHalls()
    halls.value = response.data
  } catch {
    errorMessage.value = 'Не удалось загрузить залы'
  }
}

async function fetchPageData() {
  await Promise.all([fetchBanquets(), fetchClients(), fetchHalls()])
}

async function handleCreateBanquet(payload: CreateBanquetPayload) {
  createErrorMessage.value = ''

  if (!payload.clientId) {
    createErrorMessage.value = 'Выберите клиента'
    return
  }

  if (!payload.guestCount || payload.guestCount <= 0) {
    createErrorMessage.value = 'Количество гостей должно быть больше 0'
    return
  }

  if (!payload.date) {
    createErrorMessage.value = 'Укажите дату банкета'
    return
  }

  isCreating.value = true

  try {
    const isoDate = new Date(`${payload.date}T${payload.startTime || '00:00'}`).toISOString()

    const response = await banquetsApi.createBanquet({
      title: payload.title?.trim() || undefined,
      eventType: payload.eventType?.trim() || undefined,
      guestCount: Number(payload.guestCount),

      date: isoDate,
      startTime: payload.startTime || undefined,

      clientId: payload.clientId,
      hallId: payload.hallId || undefined,

      totalAmount: Number(payload.totalAmount) || undefined,
      prepaymentAmount: Number(payload.prepaymentAmount) || undefined,

      comment: payload.comment?.trim() || undefined,
    })

    banquets.value.unshift(response.data)
    closeCreateModal()
  } catch {
    createErrorMessage.value = 'Не удалось создать банкет'
  } finally {
    isCreating.value = false
  }
}

async function handleDeleteBanquet(id: string) {
  const confirmed = confirm('Удалить банкет?')

  if (!confirmed) {
    return
  }

  isDeleting.value = id
  errorMessage.value = ''

  try {
    await banquetsApi.deleteBanquet(id)
    banquets.value = banquets.value.filter((banquet) => banquet.id !== id)
  } catch {
    errorMessage.value = 'Не удалось удалить банкет'
  } finally {
    isDeleting.value = null
  }
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    closeCreateModal()
  }
}

watch(isCreateModalOpen, (isOpen) => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = isOpen ? 'hidden' : ''
  }
})

onMounted(() => {
  fetchPageData()
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <section class="min-h-screen">
    <div class="space-y-5">
      <BanquetsHeader v-model:search-query="searchQuery" @create="openCreateModal" />

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
        Загружаем банкеты...
      </div>

      <template v-else>
        <BanquetsHero
          :total-banquets="totalBanquets"
          :upcoming-count="upcomingBanquets.length"
          :total-guests="totalGuests"
          :nearest-title="
            nearestBanquet ? getBanquetTitle(nearestBanquet) : 'пока не запланировано'
          "
        />

        <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <BanquetsStatCard
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
            <BanquetsFinanceSummary :items="financeItems" @refresh="fetchPageData" />

            <BanquetsTable
              v-model:event-type-filter="eventTypeFilter"
              :banquets="filteredBanquets"
              :event-types="eventTypes"
              :is-deleting="isDeleting"
              @refresh="fetchPageData"
              @create="openCreateModal"
              @delete="handleDeleteBanquet"
            />
          </div>

          <aside class="space-y-5">
            <BanquetsQuickOverview
              :total-banquets="totalBanquets"
              :total-amount="totalAmount"
              :total-guests="totalGuests"
              :event-types-count="eventTypes.length"
            />

            <BanquetsUpcomingDates :banquets="upcomingBanquets" />

            <BanquetsTipCard @create="openCreateModal" />
          </aside>
        </div>
      </template>
    </div>

    <BanquetCreateModal
      :is-open="isCreateModalOpen"
      :is-creating="isCreating"
      :error-message="createErrorMessage"
      :clients="clients"
      :halls="halls"
      :event-type-suggestions="eventTypeSuggestions"
      @close="closeCreateModal"
      @submit="handleCreateBanquet"
    />
  </section>
</template>
