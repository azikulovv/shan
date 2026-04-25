<script setup lang="ts">
import type { Client, CreateClientPayload } from '~/types/client'

definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
})

const clientsApi = useClients()

const clients = ref<Client[]>([])
const searchQuery = ref('')

const isLoading = ref(false)
const isCreating = ref(false)
const isDeleting = ref<string | null>(null)

const errorMessage = ref('')
const createErrorMessage = ref('')
const isCreateModalOpen = ref(false)

const form = reactive<CreateClientPayload>({
  name: '',
  phone: '',
  email: '',
  note: '',
})

const totalClients = computed(() => clients.value.length)

const clientsWithEmail = computed(() => {
  return clients.value.filter((client) => Boolean(client.email)).length
})

const clientsWithNote = computed(() => {
  return clients.value.filter((client) => Boolean(client.note)).length
})

const latestClient = computed(() => {
  return [...clients.value].sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  })[0]
})

const filteredClients = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()

  if (!query) {
    return clients.value
  }

  return clients.value.filter((client) => {
    return (
      client.name.toLowerCase().includes(query) ||
      client.phone.toLowerCase().includes(query) ||
      client.email?.toLowerCase().includes(query) ||
      client.note?.toLowerCase().includes(query)
    )
  })
})

const stats = computed(() => [
  {
    label: 'Всего клиентов',
    value: totalClients.value,
    description: 'Контакты в базе',
    iconClass: 'bg-indigo-50 text-indigo-600',
    icon: [
      'M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2',
      'M9.5 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z',
      'M22 21v-2a4 4 0 0 0-3-3.87',
      'M16 3.13a4 4 0 0 1 0 7.75',
    ],
  },
  {
    label: 'С email',
    value: clientsWithEmail.value,
    description: 'Можно отправлять уведомления',
    iconClass: 'bg-blue-50 text-blue-600',
    icon: [
      'M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z',
      'm22 6-10 7L2 6',
    ],
  },
  {
    label: 'С заметками',
    value: clientsWithNote.value,
    description: 'Есть дополнительная информация',
    iconClass: 'bg-violet-50 text-violet-600',
    icon: [
      'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z',
      'M14 2v6h6',
      'M8 13h8',
      'M8 17h6',
    ],
  },
  {
    label: 'Найдено',
    value: filteredClients.value.length,
    description: 'По текущему поиску',
    iconClass: 'bg-slate-100 text-slate-700',
    icon: ['m21 21-4.35-4.35', 'M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z'],
  },
])

function getClientInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))
}

function resetForm() {
  form.name = ''
  form.phone = ''
  form.email = ''
  form.note = ''
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

async function fetchClients() {
  isLoading.value = true
  errorMessage.value = ''

  try {
    const response = await clientsApi.getClients()
    clients.value = response.data
  } catch {
    errorMessage.value = 'Не удалось загрузить клиентов'
  } finally {
    isLoading.value = false
  }
}

async function handleCreateClient() {
  createErrorMessage.value = ''

  if (!form.name.trim()) {
    createErrorMessage.value = 'Введите имя клиента'
    return
  }

  if (!form.phone.trim()) {
    createErrorMessage.value = 'Введите телефон клиента'
    return
  }

  isCreating.value = true

  try {
    const response = await clientsApi.createClient({
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email?.trim() || undefined,
      note: form.note?.trim() || undefined,
    })

    clients.value.unshift(response.data)
    closeCreateModal()
  } catch {
    createErrorMessage.value = 'Не удалось создать клиента'
  } finally {
    isCreating.value = false
  }
}

async function handleDeleteClient(id: string) {
  const confirmed = confirm('Удалить клиента?')

  if (!confirmed) {
    return
  }

  isDeleting.value = id
  errorMessage.value = ''

  try {
    await clientsApi.deleteClient(id)

    clients.value = clients.value.filter((client) => client.id !== id)
  } catch {
    errorMessage.value = 'Не удалось удалить клиента'
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
  fetchClients()
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
          <p class="text-sm font-medium text-slate-500">Shanyraq Clients</p>

          <h1 class="mt-1 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            Клиенты
          </h1>

          <p class="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Управляйте базой гостей, контактами и заметками для будущих банкетов.
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
              placeholder="Поиск по имени, телефону, email..."
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

            Добавить клиента
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
        Загружаем клиентов...
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
                  База гостей
                </div>

                <h2 class="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  {{ totalClients }} клиентов в системе
                </h2>

                <p class="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                  Храните контакты клиентов, заметки и данные для быстрого создания банкетов.
                </p>
              </div>

              <div class="grid grid-cols-2 gap-3 sm:min-w-[320px]">
                <div class="rounded-3xl bg-slate-950 p-4 text-white shadow-lg shadow-slate-950/10">
                  <p class="text-xs text-white/60">С email</p>

                  <p class="mt-2 text-2xl font-semibold">
                    {{ clientsWithEmail }}
                  </p>
                </div>

                <div class="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <p class="text-xs text-slate-500">Последний клиент</p>

                  <p class="mt-2 truncate text-lg font-semibold text-slate-950">
                    {{ latestClient?.name || 'Пока нет' }}
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

        <!-- Clients list -->
        <article class="overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm">
          <div
            class="flex flex-col gap-3 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <h2 class="text-lg font-semibold tracking-tight text-slate-950">Список клиентов</h2>

              <p class="mt-1 text-sm text-slate-500">{{ filteredClients.length }} найдено</p>
            </div>

            <button
              type="button"
              class="inline-flex h-10 items-center justify-center rounded-2xl bg-slate-50 px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
              @click="fetchClients"
            >
              Обновить
            </button>
          </div>

          <div v-if="filteredClients.length === 0" class="p-5">
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
                    d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"
                  />
                  <circle cx="9.5" cy="7" r="4" />
                </svg>
              </div>

              <h3 class="mt-4 text-sm font-semibold text-slate-950">Клиенты не найдены</h3>

              <p class="mt-1 text-sm text-slate-500">
                Добавьте первого клиента или измените поисковый запрос.
              </p>

              <button
                type="button"
                class="mt-5 inline-flex h-11 items-center justify-center rounded-2xl bg-slate-950 px-5 text-sm font-medium text-white transition hover:bg-slate-800"
                @click="openCreateModal"
              >
                Добавить клиента
              </button>
            </div>
          </div>

          <div v-else class="grid gap-4 p-5 md:grid-cols-2 xl:grid-cols-3">
            <article
              v-for="client in filteredClients"
              :key="client.id"
              class="group rounded-3xl border border-slate-100 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-lg hover:shadow-slate-200/60"
            >
              <div class="flex items-start justify-between gap-4">
                <div class="flex min-w-0 items-center gap-3">
                  <div
                    class="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-100"
                  >
                    {{ getClientInitials(client.name) }}
                  </div>

                  <div class="min-w-0">
                    <h3 class="truncate text-sm font-semibold text-slate-950">
                      {{ client.name }}
                    </h3>

                    <p class="mt-1 truncate text-xs text-slate-500">
                      {{ client.phone }}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  class="flex size-9 shrink-0 items-center justify-center rounded-2xl bg-white text-slate-400 shadow-sm transition hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50"
                  :disabled="isDeleting === client.id"
                  @click="handleDeleteClient(client.id)"
                >
                  <svg
                    v-if="isDeleting !== client.id"
                    class="size-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 6h18" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 6V4h8v2" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 6l-1 14H6L5 6" />
                  </svg>

                  <span v-else class="text-xs"> ... </span>
                </button>
              </div>

              <div class="mt-4 space-y-3">
                <div v-if="client.email" class="rounded-2xl bg-white px-4 py-3">
                  <p class="text-xs text-slate-400">Email</p>

                  <p class="mt-1 truncate text-sm font-medium text-slate-700">
                    {{ client.email }}
                  </p>
                </div>

                <div v-if="client.note" class="rounded-2xl bg-white px-4 py-3">
                  <p class="text-xs text-slate-400">Заметка</p>

                  <p class="mt-1 line-clamp-3 text-sm leading-6 text-slate-700">
                    {{ client.note }}
                  </p>
                </div>

                <div class="flex items-center justify-between rounded-2xl bg-white px-4 py-3">
                  <p class="text-xs text-slate-400">Добавлен</p>

                  <p class="text-xs font-medium text-slate-600">
                    {{ formatDate(client.createdAt) }}
                  </p>
                </div>
              </div>
            </article>
          </div>
        </article>
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
                    <p class="text-sm font-medium text-indigo-600">Новый клиент</p>

                    <h2 class="mt-1 text-xl font-semibold tracking-tight text-slate-950">
                      Добавить клиента
                    </h2>

                    <p class="mt-2 text-sm leading-6 text-slate-500">
                      Заполните контактные данные гостя для будущих банкетов.
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

                <form class="space-y-4" @submit.prevent="handleCreateClient">
                  <div>
                    <label class="mb-1.5 block text-sm font-medium text-slate-700">
                      Имя клиента
                    </label>

                    <input
                      v-model="form.name"
                      type="text"
                      placeholder="Например: Айдос"
                      class="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                    />
                  </div>

                  <div>
                    <label class="mb-1.5 block text-sm font-medium text-slate-700"> Телефон </label>

                    <input
                      v-model="form.phone"
                      type="tel"
                      placeholder="+7 777 000 00 00"
                      class="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                    />
                  </div>

                  <div>
                    <label class="mb-1.5 block text-sm font-medium text-slate-700"> Email </label>

                    <input
                      v-model="form.email"
                      type="email"
                      placeholder="client@mail.kz"
                      class="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                    />
                  </div>

                  <div>
                    <label class="mb-1.5 block text-sm font-medium text-slate-700"> Заметка </label>

                    <textarea
                      v-model="form.note"
                      rows="4"
                      placeholder="Например: постоянный клиент, предпочитает большой зал"
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
                      {{ isCreating ? 'Создаём...' : 'Создать клиента' }}
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
