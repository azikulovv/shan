<script setup lang="ts">
import type { CreateHallPayload, Hall } from '~/types/hall'

definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
})

const hallsApi = useHalls()

const halls = ref<Hall[]>([])
const searchQuery = ref('')

const isLoading = ref(false)
const isCreating = ref(false)
const isDeleting = ref<string | null>(null)

const errorMessage = ref('')
const createErrorMessage = ref('')
const isCreateModalOpen = ref(false)

const form = reactive<CreateHallPayload>({
  name: '',
  capacity: undefined,
  description: '',
})

const totalHalls = computed(() => halls.value.length)

const totalCapacity = computed(() => {
  return halls.value.reduce((sum, hall) => {
    return sum + Number(hall.capacity || 0)
  }, 0)
})

const hallsWithCapacity = computed(() => {
  return halls.value.filter((hall) => Boolean(hall.capacity)).length
})

const hallsWithDescription = computed(() => {
  return halls.value.filter((hall) => Boolean(hall.description)).length
})

const largestHall = computed(() => {
  return [...halls.value]
    .filter((hall) => Boolean(hall.capacity))
    .sort((a, b) => Number(b.capacity || 0) - Number(a.capacity || 0))[0]
})

const averageCapacity = computed(() => {
  if (!hallsWithCapacity.value) {
    return 0
  }

  return Math.round(totalCapacity.value / hallsWithCapacity.value)
})

const filteredHalls = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()

  return [...halls.value]
    .filter((hall) => {
      if (!query) {
        return true
      }

      return (
        hall.name.toLowerCase().includes(query) ||
        hall.description?.toLowerCase().includes(query) ||
        String(hall.capacity || '').includes(query)
      )
    })
    .sort((a, b) => {
      return a.name.localeCompare(b.name)
    })
})

const stats = computed(() => [
  {
    label: 'Всего залов',
    value: totalHalls.value,
    description: 'Залы ресторана',
    iconClass: 'bg-indigo-50 text-indigo-600',
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
    label: 'Общая вместимость',
    value: totalCapacity.value,
    description: 'Гостей во всех залах',
    iconClass: 'bg-violet-50 text-violet-600',
    icon: [
      'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2',
      'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z',
      'M23 21v-2a4 4 0 0 0-3-3.87',
      'M16 3.13a4 4 0 0 1 0 7.75',
    ],
  },
  {
    label: 'Средняя вместимость',
    value: averageCapacity.value,
    description: 'Среднее количество гостей',
    iconClass: 'bg-blue-50 text-blue-600',
    icon: ['M3 3v18h18', 'm7 14 4-4 3 3 5-6'],
  },
  {
    label: 'С описанием',
    value: hallsWithDescription.value,
    description: 'Залы с дополнительной информацией',
    iconClass: 'bg-slate-100 text-slate-700',
    icon: [
      'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z',
      'M14 2v6h6',
      'M8 13h8',
      'M8 17h6',
    ],
  },
])

function formatDate(date: string) {
  return new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))
}

function resetForm() {
  form.name = ''
  form.capacity = undefined
  form.description = ''
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

async function fetchHalls() {
  isLoading.value = true
  errorMessage.value = ''

  try {
    const response = await hallsApi.getHalls()
    halls.value = response.data
  } catch {
    errorMessage.value = 'Не удалось загрузить залы'
  } finally {
    isLoading.value = false
  }
}

async function handleCreateHall() {
  createErrorMessage.value = ''

  if (!form.name.trim()) {
    createErrorMessage.value = 'Введите название зала'
    return
  }

  if (form.capacity !== undefined && Number(form.capacity) < 1) {
    createErrorMessage.value = 'Вместимость должна быть больше 0'
    return
  }

  isCreating.value = true

  try {
    const response = await hallsApi.createHall({
      name: form.name.trim(),
      capacity: form.capacity ? Number(form.capacity) : undefined,
      description: form.description?.trim() || undefined,
    })

    halls.value.unshift(response.data)
    closeCreateModal()
  } catch {
    createErrorMessage.value = 'Не удалось создать зал'
  } finally {
    isCreating.value = false
  }
}

async function handleDeleteHall(id: string) {
  const confirmed = confirm('Удалить зал?')

  if (!confirmed) {
    return
  }

  isDeleting.value = id
  errorMessage.value = ''

  try {
    await hallsApi.deleteHall(id)

    halls.value = halls.value.filter((hall) => hall.id !== id)
  } catch {
    errorMessage.value = 'Не удалось удалить зал'
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
  fetchHalls()
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
          <p class="text-sm font-medium text-slate-500">Shanyraq Halls</p>

          <h1 class="mt-1 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            Залы
          </h1>

          <p class="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Управляйте залами ресторана, вместимостью и описанием помещений для банкетов.
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
              placeholder="Поиск по названию, описанию, вместимости..."
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

            Добавить зал
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
        Загружаем залы...
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
                  Пространства ресторана
                </div>

                <h2 class="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  {{ totalHalls }} залов в системе
                </h2>

                <p class="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                  Настраивайте залы, чтобы при создании банкета выбирать нужное помещение без
                  ручного ввода ID.
                </p>
              </div>

              <div class="grid grid-cols-2 gap-3 sm:min-w-[320px]">
                <div class="rounded-3xl bg-slate-950 p-4 text-white shadow-lg shadow-slate-950/10">
                  <p class="text-xs text-white/60">Общая вместимость</p>

                  <p class="mt-2 text-2xl font-semibold">
                    {{ totalCapacity }}
                  </p>
                </div>

                <div class="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <p class="text-xs text-slate-500">Самый большой зал</p>

                  <p class="mt-2 truncate text-lg font-semibold text-slate-950">
                    {{ largestHall?.name || 'Пока нет' }}
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
            <!-- Halls list -->
            <article
              class="overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm"
            >
              <div
                class="flex flex-col gap-3 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h2 class="text-lg font-semibold tracking-tight text-slate-950">Список залов</h2>

                  <p class="mt-1 text-sm text-slate-500">{{ filteredHalls.length }} найдено</p>
                </div>

                <button
                  type="button"
                  class="inline-flex h-10 items-center justify-center rounded-2xl bg-slate-50 px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                  @click="fetchHalls"
                >
                  Обновить
                </button>
              </div>

              <div v-if="filteredHalls.length === 0" class="p-5">
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
                        d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M18 21V9h2a2 2 0 0 1 2 2v10"
                      />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 21h18" />
                    </svg>
                  </div>

                  <h3 class="mt-4 text-sm font-semibold text-slate-950">Залы не найдены</h3>

                  <p class="mt-1 text-sm text-slate-500">
                    Добавьте первый зал или измените поисковый запрос.
                  </p>

                  <button
                    type="button"
                    class="mt-5 inline-flex h-11 items-center justify-center rounded-2xl bg-slate-950 px-5 text-sm font-medium text-white transition hover:bg-slate-800"
                    @click="openCreateModal"
                  >
                    Добавить зал
                  </button>
                </div>
              </div>

              <div v-else class="grid gap-4 p-5 md:grid-cols-2">
                <article
                  v-for="hall in filteredHalls"
                  :key="hall.id"
                  class="group rounded-3xl border border-slate-100 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-lg hover:shadow-slate-200/60"
                >
                  <div class="flex items-start justify-between gap-4">
                    <div class="flex min-w-0 items-center gap-3">
                      <div
                        class="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white text-slate-700 shadow-sm ring-1 ring-slate-100"
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
                            d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M18 21V9h2a2 2 0 0 1 2 2v10"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8 7h4M8 11h4M8 15h4M3 21h18"
                          />
                        </svg>
                      </div>

                      <div class="min-w-0">
                        <h3 class="truncate text-base font-semibold text-slate-950">
                          {{ hall.name }}
                        </h3>

                        <p class="mt-1 truncate text-xs text-slate-500">
                          Вместимость:
                          <span class="font-medium text-slate-700">
                            {{ hall.capacity || 'не указана' }}
                          </span>
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      class="flex size-9 shrink-0 items-center justify-center rounded-2xl bg-white text-slate-400 shadow-sm transition hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50"
                      :disabled="isDeleting === hall.id"
                      @click="handleDeleteHall(hall.id)"
                    >
                      <svg
                        v-if="isDeleting !== hall.id"
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
                      <p class="text-xs text-slate-400">Вместимость</p>

                      <p class="mt-1 text-sm font-semibold text-slate-700">
                        {{ hall.capacity ? `${hall.capacity} гостей` : 'Не указана' }}
                      </p>
                    </div>

                    <div class="rounded-2xl bg-white px-4 py-3">
                      <p class="text-xs text-slate-400">Добавлен</p>

                      <p class="mt-1 text-sm font-semibold text-slate-700">
                        {{ formatDate(hall.createdAt) }}
                      </p>
                    </div>
                  </div>

                  <div v-if="hall.description" class="mt-3 rounded-2xl bg-white px-4 py-3">
                    <p class="text-xs text-slate-400">Описание</p>

                    <p class="mt-1 text-sm leading-6 text-slate-700">
                      {{ hall.description }}
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

                <p class="mt-1 text-sm text-slate-500">Аналитика по залам</p>
              </div>

              <div class="space-y-3">
                <div class="rounded-3xl bg-slate-50 p-4">
                  <div class="flex items-center justify-between gap-3">
                    <p class="text-sm font-medium text-slate-700">Залов с вместимостью</p>

                    <p class="text-sm font-semibold text-slate-950">
                      {{ hallsWithCapacity }}
                    </p>
                  </div>
                </div>

                <div class="rounded-3xl bg-slate-50 p-4">
                  <div class="flex items-center justify-between gap-3">
                    <p class="text-sm font-medium text-slate-700">Средняя вместимость</p>

                    <p class="text-sm font-semibold text-slate-950">
                      {{ averageCapacity }}
                    </p>
                  </div>
                </div>

                <div class="rounded-3xl bg-slate-50 p-4">
                  <div class="flex items-center justify-between gap-3">
                    <p class="text-sm font-medium text-slate-700">Самый большой зал</p>

                    <p class="truncate text-sm font-semibold text-slate-950">
                      {{ largestHall?.name || 'Нет данных' }}
                    </p>
                  </div>

                  <p v-if="largestHall?.capacity" class="mt-2 text-xs text-slate-500">
                    До {{ largestHall.capacity }} гостей
                  </p>
                </div>
              </div>
            </article>

            <article class="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-sm">
              <div class="mb-5">
                <h2 class="text-lg font-semibold tracking-tight text-slate-950">Рекомендации</h2>

                <p class="mt-1 text-sm text-slate-500">Для удобной работы с банкетами</p>
              </div>

              <div class="space-y-3">
                <div class="rounded-3xl bg-slate-50 p-4">
                  <p class="text-sm font-semibold text-slate-800">Указывайте вместимость</p>

                  <p class="mt-1 text-sm leading-6 text-slate-500">
                    Это поможет быстрее выбирать подходящий зал при создании банкета.
                  </p>
                </div>

                <div class="rounded-3xl bg-slate-50 p-4">
                  <p class="text-sm font-semibold text-slate-800">Добавляйте описание</p>

                  <p class="mt-1 text-sm leading-6 text-slate-500">
                    Например: сцена, проектор, отдельный вход, детская зона.
                  </p>
                </div>
              </div>
            </article>

            <article
              class="rounded-[2rem] border border-indigo-100 bg-gradient-to-br from-indigo-600 to-violet-600 p-5 text-white shadow-lg shadow-indigo-200"
            >
              <p class="text-sm font-medium text-white/70">Совет</p>

              <h2 class="mt-2 text-xl font-semibold tracking-tight">Связывайте банкет с залом</h2>

              <p class="mt-2 text-sm leading-6 text-white/70">
                Тогда dashboard сможет показывать более точную аналитику по загрузке залов и
                планированию мероприятий.
              </p>

              <button
                type="button"
                class="mt-5 h-11 rounded-2xl bg-white px-5 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"
                @click="openCreateModal"
              >
                Добавить зал
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
                class="w-full max-w-xl rounded-[2rem] border border-slate-100 bg-white p-5 shadow-2xl shadow-slate-950/20 sm:p-6"
              >
                <div class="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p class="text-sm font-medium text-indigo-600">Новый зал</p>

                    <h2 class="mt-1 text-xl font-semibold tracking-tight text-slate-950">
                      Добавить зал
                    </h2>

                    <p class="mt-2 text-sm leading-6 text-slate-500">
                      Создайте зал ресторана, чтобы использовать его при создании банкетов.
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

                <form class="space-y-4" @submit.prevent="handleCreateHall">
                  <div>
                    <label class="mb-1.5 block text-sm font-medium text-slate-700">
                      Название зала
                    </label>

                    <input
                      v-model="form.name"
                      type="text"
                      placeholder="Например: Большой зал"
                      class="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                    />
                  </div>

                  <div>
                    <label class="mb-1.5 block text-sm font-medium text-slate-700">
                      Вместимость
                    </label>

                    <input
                      v-model.number="form.capacity"
                      type="number"
                      min="1"
                      placeholder="Например: 150"
                      class="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                    />
                  </div>

                  <div>
                    <label class="mb-1.5 block text-sm font-medium text-slate-700">
                      Описание
                    </label>

                    <textarea
                      v-model="form.description"
                      rows="4"
                      placeholder="Например: подходит для свадеб, юбилеев и крупных мероприятий"
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
                      {{ isCreating ? 'Создаём...' : 'Создать зал' }}
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
