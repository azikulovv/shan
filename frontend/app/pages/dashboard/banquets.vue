<script setup lang="ts">
import type { Banquet, CreateBanquetPayload } from '~/types/banquet'
import type { Client } from '~/types/client'
import type { Hall } from '~/types/hall'

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

const form = reactive<CreateBanquetPayload>({
  title: '',
  eventType: '',
  guestCount: 10,

  date: '',
  startTime: '',

  clientId: '',
  hallId: '',

  totalAmount: 0,
  prepaymentAmount: 0,

  comment: '',
})

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
    .sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime()
    })
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
    .sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime()
    })
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

function formatDate(date: string) {
  return new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))
}

function formatShortDate(date: string) {
  return new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: 'short',
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

function getClientInitials(name?: string | null) {
  if (!name) {
    return 'CL'
  }

  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function getBanquetTitle(banquet: Banquet) {
  return banquet.title || banquet.eventType || 'Без названия'
}

function resetForm() {
  form.title = ''
  form.eventType = ''
  form.guestCount = 10

  form.date = ''
  form.startTime = ''

  form.clientId = ''
  form.hallId = ''

  form.totalAmount = 0
  form.prepaymentAmount = 0

  form.comment = ''

  createErrorMessage.value = ''
}

function openCreateModal() {
  resetForm()
  isCreateModalOpen.value = true
}

function closeCreateModal() {
  isCreateModalOpen.value = false
  resetForm()
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

async function handleCreateBanquet() {
  createErrorMessage.value = ''

  if (!form.clientId) {
    createErrorMessage.value = 'Выберите клиента'
    return
  }

  if (!form.guestCount || form.guestCount <= 0) {
    createErrorMessage.value = 'Количество гостей должно быть больше 0'
    return
  }

  if (!form.date) {
    createErrorMessage.value = 'Укажите дату банкета'
    return
  }

  isCreating.value = true

  try {
    const isoDate = new Date(`${form.date}T${form.startTime || '00:00'}`).toISOString()

    const response = await banquetsApi.createBanquet({
      title: form.title?.trim() || undefined,
      eventType: form.eventType?.trim() || undefined,
      guestCount: Number(form.guestCount),

      date: isoDate,
      startTime: form.startTime || undefined,

      clientId: form.clientId,
      hallId: form.hallId || undefined,

      totalAmount: Number(form.totalAmount) || undefined,
      prepaymentAmount: Number(form.prepaymentAmount) || undefined,

      comment: form.comment?.trim() || undefined,
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
      <!-- Header -->
      <header class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p class="text-sm font-medium text-slate-500">Shanyraq Banquets</p>

          <h1 class="mt-1 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            Банкеты
          </h1>

          <p class="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Управляйте мероприятиями, клиентами, залами, оплатой и количеством гостей.
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
            class="inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-200"
            @click="openCreateModal"
          >
            <svg
              class="size-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v14M5 12h14" />
            </svg>

            Создать банкет
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
        Загружаем банкеты...
      </div>

      <template v-else>
        <!-- Welcome card -->
        <article class="overflow-hidden rounded-[2rem] border border-indigo-100 bg-white shadow-sm">
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
                  Планирование мероприятий
                </div>

                <h2 class="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  {{ totalBanquets }} банкетов в системе
                </h2>

                <p class="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                  Ближайшее мероприятие:
                  <span class="font-medium text-slate-700">
                    {{ nearestBanquet ? getBanquetTitle(nearestBanquet) : 'пока не запланировано' }}
                  </span>
                </p>
              </div>

              <div class="grid grid-cols-2 gap-3 sm:min-w-[320px]">
                <div class="rounded-3xl bg-slate-950 p-4 text-white shadow-lg shadow-slate-950/10">
                  <p class="text-xs text-white/60">Ближайшие</p>

                  <p class="mt-2 text-2xl font-semibold">
                    {{ upcomingBanquets.length }}
                  </p>
                </div>

                <div class="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <p class="text-xs text-slate-500">Всего гостей</p>

                  <p class="mt-2 text-2xl font-semibold text-slate-950">
                    {{ totalGuests }}
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
          </article>
        </div>

        <div class="grid gap-5 xl:grid-cols-[1fr_360px]">
          <div class="space-y-5">
            <!-- Finance -->
            <article class="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
              <div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 class="text-lg font-semibold tracking-tight text-slate-950">
                    Финансы по банкетам
                  </h2>

                  <p class="mt-1 text-sm text-slate-500">
                    Общая сумма, предоплата и остаток по всем мероприятиям
                  </p>
                </div>

                <button
                  type="button"
                  class="inline-flex h-10 items-center justify-center rounded-2xl bg-slate-50 px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                  @click="fetchPageData"
                >
                  Обновить
                </button>
              </div>

              <div class="grid gap-3 sm:grid-cols-3">
                <div
                  v-for="item in financeItems"
                  :key="item.label"
                  class="rounded-3xl p-4"
                  :class="item.class"
                >
                  <p class="text-xs" :class="item.labelClass">
                    {{ item.label }}
                  </p>

                  <p class="mt-2 text-xl font-semibold" :class="item.valueClass">
                    {{ item.value }}
                  </p>
                </div>
              </div>
            </article>

            <!-- Banquets list -->
            <article
              class="overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm"
            >
              <div
                class="flex flex-col gap-3 border-b border-slate-100 p-5 lg:flex-row lg:items-center lg:justify-between"
              >
                <div>
                  <h2 class="text-lg font-semibold tracking-tight text-slate-950">
                    Список банкетов
                  </h2>

                  <p class="mt-1 text-sm text-slate-500">{{ filteredBanquets.length }} найдено</p>
                </div>

                <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <select
                    v-model="eventTypeFilter"
                    class="h-10 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                  >
                    <option value="ALL">Все типы</option>

                    <option v-for="type in eventTypes" :key="type" :value="type">
                      {{ type }}
                    </option>
                  </select>

                  <button
                    type="button"
                    class="inline-flex h-10 items-center justify-center rounded-2xl bg-slate-50 px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                    @click="fetchPageData"
                  >
                    Обновить
                  </button>
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
                        d="M8 2v4M16 2v4M3 10h18"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
                      />
                    </svg>
                  </div>

                  <h3 class="mt-4 text-sm font-semibold text-slate-950">Банкеты не найдены</h3>

                  <p class="mt-1 text-sm text-slate-500">
                    Создайте первый банкет или измените поисковый запрос.
                  </p>

                  <button
                    type="button"
                    class="mt-5 inline-flex h-11 items-center justify-center rounded-2xl bg-slate-950 px-5 text-sm font-medium text-white transition hover:bg-slate-800"
                    @click="openCreateModal"
                  >
                    Создать банкет
                  </button>
                </div>
              </div>

              <div v-else class="grid gap-4 p-5 xl:grid-cols-2">
                <article
                  v-for="banquet in filteredBanquets"
                  :key="banquet.id"
                  class="group rounded-3xl border border-slate-100 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-lg hover:shadow-slate-200/60"
                >
                  <div class="flex items-start justify-between gap-4">
                    <div class="min-w-0">
                      <div class="mb-2 flex flex-wrap gap-2">
                        <span
                          class="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700"
                        >
                          {{ banquet.eventType || 'Банкет' }}
                        </span>

                        <span
                          class="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-slate-600 shadow-sm"
                        >
                          {{ banquet.guestCount }} гостей
                        </span>
                      </div>

                      <h3 class="truncate text-base font-semibold text-slate-950">
                        {{ getBanquetTitle(banquet) }}
                      </h3>

                      <p class="mt-1 text-sm text-slate-500">
                        {{ formatDate(banquet.date) }}
                        ·
                        {{ formatTime(banquet.date, banquet.startTime) }}
                      </p>
                    </div>

                    <button
                      type="button"
                      class="flex size-9 shrink-0 items-center justify-center rounded-2xl bg-white text-slate-400 shadow-sm transition hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50"
                      :disabled="isDeleting === banquet.id"
                      @click="handleDeleteBanquet(banquet.id)"
                    >
                      <svg
                        v-if="isDeleting !== banquet.id"
                        class="size-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 6h18" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 6V4h8v2" />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19 6l-1 14H6L5 6"
                        />
                      </svg>

                      <span v-else class="text-xs"> ... </span>
                    </button>
                  </div>

                  <div class="mt-4 grid gap-3 sm:grid-cols-2">
                    <div class="rounded-2xl bg-white px-4 py-3">
                      <p class="text-xs text-slate-400">Клиент</p>

                      <div class="mt-2 flex items-center gap-2">
                        <div
                          class="flex size-8 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xs font-semibold text-slate-600"
                        >
                          {{ getClientInitials(banquet.client?.name) }}
                        </div>

                        <div class="min-w-0">
                          <p class="truncate text-sm font-medium text-slate-700">
                            {{ banquet.client?.name || 'Не указан' }}
                          </p>

                          <p v-if="banquet.client?.phone" class="truncate text-xs text-slate-400">
                            {{ banquet.client.phone }}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="rounded-2xl bg-white px-4 py-3">
                      <p class="text-xs text-slate-400">Зал</p>

                      <p class="mt-2 truncate text-sm font-medium text-slate-700">
                        {{ banquet.hall?.name || 'Без зала' }}
                      </p>
                    </div>

                    <div class="rounded-2xl bg-white px-4 py-3">
                      <p class="text-xs text-slate-400">Сумма</p>

                      <p class="mt-2 text-sm font-medium text-slate-700">
                        {{ formatPrice(banquet.totalAmount || 0) }}
                      </p>
                    </div>

                    <div class="rounded-2xl bg-white px-4 py-3">
                      <p class="text-xs text-slate-400">Предоплата</p>

                      <p class="mt-2 text-sm font-medium text-slate-700">
                        {{ formatPrice(banquet.prepaymentAmount || 0) }}
                      </p>
                    </div>
                  </div>

                  <div v-if="banquet.comment" class="mt-3 rounded-2xl bg-white px-4 py-3">
                    <p class="text-xs text-slate-400">Комментарий</p>

                    <p class="mt-1 text-sm leading-6 text-slate-700">
                      {{ banquet.comment }}
                    </p>
                  </div>
                </article>
              </div>
            </article>
          </div>

          <!-- Right panel -->
          <aside class="space-y-5">
            <article class="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-sm">
              <div class="mb-5">
                <h2 class="text-lg font-semibold tracking-tight text-slate-950">Быстрый обзор</h2>

                <p class="mt-1 text-sm text-slate-500">Краткая аналитика по мероприятиям</p>
              </div>

              <div class="space-y-3">
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

                <div class="rounded-3xl bg-slate-50 p-4">
                  <div class="flex items-center justify-between gap-3">
                    <p class="text-sm font-medium text-slate-700">Типов мероприятий</p>

                    <p class="text-sm font-semibold text-slate-950">
                      {{ eventTypes.length }}
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <article class="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-sm">
              <div class="mb-5 flex items-center justify-between gap-4">
                <div>
                  <h2 class="text-lg font-semibold tracking-tight text-slate-950">
                    Ближайшие даты
                  </h2>

                  <p class="mt-1 text-sm text-slate-500">Следующие мероприятия</p>
                </div>
              </div>

              <div
                v-if="upcomingBanquets.length === 0"
                class="rounded-3xl bg-slate-50 p-5 text-sm text-slate-500"
              >
                Ближайших банкетов пока нет.
              </div>

              <div v-else class="space-y-3">
                <div
                  v-for="banquet in upcomingBanquets.slice(0, 4)"
                  :key="banquet.id"
                  class="flex items-start gap-3 rounded-3xl bg-slate-50 p-4 transition hover:bg-slate-100"
                >
                  <div
                    class="flex size-11 shrink-0 flex-col items-center justify-center rounded-2xl bg-white shadow-sm"
                  >
                    <span class="text-xs font-semibold text-slate-950">
                      {{ formatShortDate(banquet.date).split(' ')[0] }}
                    </span>
                    <span class="text-[10px] text-slate-400">
                      {{ formatShortDate(banquet.date).split(' ')[1] }}
                    </span>
                  </div>

                  <div class="min-w-0">
                    <p class="truncate text-sm font-semibold text-slate-950">
                      {{ getBanquetTitle(banquet) }}
                    </p>

                    <p class="mt-1 truncate text-xs text-slate-500">
                      {{ banquet.client?.name || 'Клиент не указан' }}
                    </p>

                    <p class="mt-1 text-xs text-slate-400">
                      {{ formatTime(banquet.date, banquet.startTime) }}
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <article
              class="rounded-[2rem] border border-indigo-100 bg-gradient-to-br from-indigo-600 to-violet-600 p-5 text-white shadow-lg shadow-indigo-200"
            >
              <p class="text-sm font-medium text-white/70">Совет</p>

              <h2 class="mt-2 text-xl font-semibold tracking-tight">Заполняйте клиента и зал</h2>

              <p class="mt-2 text-sm leading-6 text-white/70">
                Так dashboard сможет показывать точную аналитику по загрузке залов, гостям и
                оплатам.
              </p>

              <button
                type="button"
                class="mt-5 h-11 rounded-2xl bg-white px-5 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"
                @click="openCreateModal"
              >
                Создать банкет
              </button>
            </article>
          </aside>
        </div>
      </template>
    </div>

    <!-- Create modal -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition-opacity duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isCreateModalOpen"
          class="fixed inset-0 z-50 bg-slate-950/40 px-4 py-6 backdrop-blur-sm sm:px-6"
          @click.self="closeCreateModal"
        >
          <div class="flex min-h-full items-end justify-center sm:items-center">
            <Transition
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="translate-y-6 opacity-0 scale-95"
              enter-to-class="translate-y-0 opacity-100 scale-100"
              leave-active-class="transition duration-200 ease-in"
              leave-from-class="translate-y-0 opacity-100 scale-100"
              leave-to-class="translate-y-6 opacity-0 scale-95"
            >
              <div
                v-if="isCreateModalOpen"
                class="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] border border-slate-100 bg-white p-5 shadow-2xl shadow-slate-950/20 sm:p-6"
              >
                <div class="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p class="text-sm font-medium text-indigo-600">Новый банкет</p>

                    <h2 class="mt-1 text-xl font-semibold tracking-tight text-slate-950">
                      Создать банкет
                    </h2>

                    <p class="mt-2 text-sm leading-6 text-slate-500">
                      Заполните данные мероприятия: клиент, дата, зал, гости и оплата.
                    </p>
                  </div>

                  <button
                    type="button"
                    class="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-slate-500 transition hover:bg-slate-100 hover:text-slate-950"
                    @click="closeCreateModal"
                  >
                    <svg
                      class="size-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path stroke-linecap="round" d="M18 6 6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <p
                  v-if="createErrorMessage"
                  class="mb-4 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600"
                >
                  {{ createErrorMessage }}
                </p>

                <form class="space-y-4" @submit.prevent="handleCreateBanquet">
                  <div>
                    <label class="mb-1.5 block text-sm font-medium text-slate-700">
                      Название банкета
                    </label>

                    <input
                      v-model="form.title"
                      type="text"
                      placeholder="Например: Свадьба Айдоса и Аружан"
                      class="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                    />
                  </div>

                  <div>
                    <label class="mb-1.5 block text-sm font-medium text-slate-700">
                      Тип мероприятия
                    </label>

                    <select
                      v-model="form.eventType"
                      class="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                    >
                      <option value="">Не выбран</option>

                      <option v-for="type in eventTypeSuggestions" :key="type" :value="type">
                        {{ type }}
                      </option>
                    </select>
                  </div>

                  <div class="grid gap-4 md:grid-cols-2">
                    <div>
                      <label class="mb-1.5 block text-sm font-medium text-slate-700">
                        Клиент
                      </label>

                      <select
                        v-model="form.clientId"
                        class="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                      >
                        <option value="">Выберите клиента</option>

                        <option v-for="client in clients" :key="client.id" :value="client.id">
                          {{ client.name }} — {{ client.phone }}
                        </option>
                      </select>
                    </div>

                    <div>
                      <label class="mb-1.5 block text-sm font-medium text-slate-700"> Зал </label>

                      <select
                        v-model="form.hallId"
                        class="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                      >
                        <option value="">Без зала</option>

                        <option v-for="hall in halls" :key="hall.id" :value="hall.id">
                          {{ hall.name }}
                          <template v-if="hall.capacity">
                            — до {{ hall.capacity }} гостей
                          </template>
                        </option>
                      </select>
                    </div>
                  </div>

                  <div class="grid gap-4 md:grid-cols-3">
                    <div>
                      <label class="mb-1.5 block text-sm font-medium text-slate-700"> Дата </label>

                      <input
                        v-model="form.date"
                        type="date"
                        class="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                      />
                    </div>

                    <div>
                      <label class="mb-1.5 block text-sm font-medium text-slate-700"> Время </label>

                      <input
                        v-model="form.startTime"
                        type="time"
                        class="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                      />
                    </div>

                    <div>
                      <label class="mb-1.5 block text-sm font-medium text-slate-700">
                        Гостей
                      </label>

                      <input
                        v-model.number="form.guestCount"
                        type="number"
                        min="1"
                        class="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                      />
                    </div>
                  </div>

                  <div class="grid gap-4 md:grid-cols-2">
                    <div>
                      <label class="mb-1.5 block text-sm font-medium text-slate-700">
                        Общая сумма
                      </label>

                      <input
                        v-model.number="form.totalAmount"
                        type="number"
                        min="0"
                        placeholder="0"
                        class="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                      />
                    </div>

                    <div>
                      <label class="mb-1.5 block text-sm font-medium text-slate-700">
                        Предоплата
                      </label>

                      <input
                        v-model.number="form.prepaymentAmount"
                        type="number"
                        min="0"
                        placeholder="0"
                        class="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                      />
                    </div>
                  </div>

                  <div>
                    <label class="mb-1.5 block text-sm font-medium text-slate-700">
                      Комментарий
                    </label>

                    <textarea
                      v-model="form.comment"
                      rows="4"
                      placeholder="Например: нужен проектор, отдельный стол, детская зона"
                      class="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                    />
                  </div>

                  <div class="grid gap-3 sm:grid-cols-2">
                    <button
                      type="button"
                      class="h-12 rounded-2xl bg-slate-50 px-5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                      @click="closeCreateModal"
                    >
                      Отмена
                    </button>

                    <button
                      type="submit"
                      :disabled="isCreating"
                      class="h-12 rounded-2xl bg-slate-950 px-5 text-sm font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {{ isCreating ? 'Создаём...' : 'Создать банкет' }}
                    </button>
                  </div>
                </form>
              </div>
            </Transition>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>
