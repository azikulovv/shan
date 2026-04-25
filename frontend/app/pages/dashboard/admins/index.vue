<script setup lang="ts">
import type { AdminAccount, CreateAdminPayload } from '~/types/admin'

definePageMeta({
  layout: 'dashboard',
  middleware: ['auth', 'owner'],
})

const adminsApi = useAdmins()

const admins = ref<AdminAccount[]>([])
const searchQuery = ref('')

const isLoading = ref(false)
const isCreating = ref(false)
const isDeleting = ref<string | null>(null)

const errorMessage = ref('')
const createErrorMessage = ref('')
const isCreateModalOpen = ref(false)

const form = reactive<CreateAdminPayload>({
  name: '',
  email: '',
  password: '',
  phone: '',
})

const totalAdmins = computed(() => admins.value.length)

const adminsWithPhone = computed(() => {
  return admins.value.filter((admin) => Boolean(admin.phone)).length
})

const latestAdmin = computed(() => {
  return [...admins.value].sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  })[0]
})

const filteredAdmins = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()

  return [...admins.value]
    .filter((admin) => {
      if (!query) {
        return true
      }

      return (
        admin.name.toLowerCase().includes(query) ||
        admin.email.toLowerCase().includes(query) ||
        admin.phone?.toLowerCase().includes(query)
      )
    })
    .sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    })
})

const stats = computed(() => [
  {
    label: 'Всего админов',
    value: totalAdmins.value,
    description: 'Аккаунты сотрудников',
    iconClass: 'bg-indigo-50 text-indigo-600',
    icon: [
      'M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2',
      'M9.5 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z',
      'M22 21v-2a4 4 0 0 0-3-3.87',
      'M16 3.13a4 4 0 0 1 0 7.75',
    ],
  },
  {
    label: 'С телефоном',
    value: adminsWithPhone.value,
    description: 'Админы с контактным номером',
    iconClass: 'bg-violet-50 text-violet-600',
    icon: [
      'M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.08 5.18 2 2 0 0 1 5.05 3h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.6 2.6a2 2 0 0 1-.45 2.11L9 10.63a16 16 0 0 0 4.37 4.37l1.2-1.2a2 2 0 0 1 2.11-.45c.83.28 1.7.48 2.6.6A2 2 0 0 1 22 16.92Z',
    ],
  },
  {
    label: 'Найдено',
    value: filteredAdmins.value.length,
    description: 'По текущему поиску',
    iconClass: 'bg-blue-50 text-blue-600',
    icon: ['m21 21-4.35-4.35', 'M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z'],
  },
  {
    label: 'Роль',
    value: 'ADMIN',
    description: 'Создаваемый тип аккаунта',
    iconClass: 'bg-slate-100 text-slate-700',
    icon: ['M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z', 'M20 21a8 8 0 1 0-16 0'],
  },
])

function getInitials(name: string) {
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
  form.email = ''
  form.password = ''
  form.phone = ''
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

async function fetchAdmins() {
  isLoading.value = true
  errorMessage.value = ''

  try {
    const response = await adminsApi.getAdmins()
    admins.value = response.data
  } catch {
    errorMessage.value = 'Не удалось загрузить админов'
  } finally {
    isLoading.value = false
  }
}

async function handleCreateAdmin() {
  createErrorMessage.value = ''

  if (!form.name.trim()) {
    createErrorMessage.value = 'Введите имя админа'
    return
  }

  if (!form.email.trim()) {
    createErrorMessage.value = 'Введите email админа'
    return
  }

  if (!form.password.trim()) {
    createErrorMessage.value = 'Введите пароль'
    return
  }

  if (form.password.length < 6) {
    createErrorMessage.value = 'Пароль должен быть минимум 6 символов'
    return
  }

  isCreating.value = true

  try {
    const response = await adminsApi.createAdmin({
      name: form.name.trim(),
      email: form.email.trim(),
      password: form.password,
      phone: form.phone?.trim() || undefined,
    })

    admins.value.unshift(response.data)
    closeCreateModal()
  } catch {
    createErrorMessage.value = 'Не удалось создать админа'
  } finally {
    isCreating.value = false
  }
}

async function handleDeleteAdmin(id: string) {
  const confirmed = confirm('Удалить аккаунт админа?')

  if (!confirmed) {
    return
  }

  isDeleting.value = id
  errorMessage.value = ''

  try {
    await adminsApi.deleteAdmin(id)

    admins.value = admins.value.filter((admin) => admin.id !== id)
  } catch {
    errorMessage.value = 'Не удалось удалить админа'
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
  fetchAdmins()
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
          <p class="text-sm font-medium text-slate-500">Shanyraq Admins</p>

          <h1 class="mt-1 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            Админы
          </h1>

          <p class="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Создавайте аккаунты администраторов ресторана и управляйте доступом сотрудников.
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
              placeholder="Поиск по имени, email, телефону..."
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

            Создать админа
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
        Загружаем админов...
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
                  Только для владельца
                </div>

                <h2 class="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  {{ totalAdmins }} админов ресторана
                </h2>

                <p class="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                  Владелец может создавать аккаунты админов, чтобы сотрудники могли работать с
                  клиентами, банкетами, залами и финансами без доступа к управлению подпиской.
                </p>
              </div>

              <div class="grid grid-cols-2 gap-3 sm:min-w-[320px]">
                <div class="rounded-3xl bg-slate-950 p-4 text-white shadow-lg shadow-slate-950/10">
                  <p class="text-xs text-white/60">Всего админов</p>

                  <p class="mt-2 text-2xl font-semibold">
                    {{ totalAdmins }}
                  </p>
                </div>

                <div class="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <p class="text-xs text-slate-500">Последний админ</p>

                  <p class="mt-2 truncate text-lg font-semibold text-slate-950">
                    {{ latestAdmin?.name || 'Пока нет' }}
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
            <!-- Admins list -->
            <article
              class="overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm"
            >
              <div
                class="flex flex-col gap-3 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h2 class="text-lg font-semibold tracking-tight text-slate-950">
                    Список админов
                  </h2>

                  <p class="mt-1 text-sm text-slate-500">{{ filteredAdmins.length }} найдено</p>
                </div>

                <button
                  type="button"
                  class="inline-flex h-10 items-center justify-center rounded-2xl bg-slate-50 px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                  @click="fetchAdmins"
                >
                  Обновить
                </button>
              </div>

              <div v-if="filteredAdmins.length === 0" class="p-5">
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

                  <h3 class="mt-4 text-sm font-semibold text-slate-950">Админы не найдены</h3>

                  <p class="mt-1 text-sm text-slate-500">
                    Создайте первый аккаунт администратора или измените поиск.
                  </p>

                  <button
                    type="button"
                    class="mt-5 inline-flex h-11 items-center justify-center rounded-2xl bg-slate-950 px-5 text-sm font-medium text-white transition hover:bg-slate-800"
                    @click="openCreateModal"
                  >
                    Создать админа
                  </button>
                </div>
              </div>

              <div v-else class="grid gap-4 p-5 md:grid-cols-2">
                <article
                  v-for="admin in filteredAdmins"
                  :key="admin.id"
                  class="group rounded-3xl border border-slate-100 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-lg hover:shadow-slate-200/60"
                >
                  <div class="flex items-start justify-between gap-4">
                    <div class="flex min-w-0 items-center gap-3">
                      <div
                        class="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-100"
                      >
                        {{ getInitials(admin.name) }}
                      </div>

                      <div class="min-w-0">
                        <h3 class="truncate text-sm font-semibold text-slate-950">
                          {{ admin.name }}
                        </h3>

                        <p class="mt-1 truncate text-xs text-slate-500">
                          {{ admin.email }}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      class="flex size-9 shrink-0 items-center justify-center rounded-2xl bg-white text-slate-400 shadow-sm transition hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50"
                      :disabled="isDeleting === admin.id"
                      @click="handleDeleteAdmin(admin.id)"
                    >
                      <svg
                        v-if="isDeleting !== admin.id"
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
                      <p class="text-xs text-slate-400">Роль</p>

                      <p class="mt-1 text-sm font-semibold text-slate-700">ADMIN</p>
                    </div>

                    <div class="rounded-2xl bg-white px-4 py-3">
                      <p class="text-xs text-slate-400">Добавлен</p>

                      <p class="mt-1 text-sm font-semibold text-slate-700">
                        {{ formatDate(admin.createdAt) }}
                      </p>
                    </div>
                  </div>

                  <div v-if="admin.phone" class="mt-3 rounded-2xl bg-white px-4 py-3">
                    <p class="text-xs text-slate-400">Телефон</p>

                    <p class="mt-1 text-sm font-medium text-slate-700">
                      {{ admin.phone }}
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
                <h2 class="text-lg font-semibold tracking-tight text-slate-950">Права админа</h2>

                <p class="mt-1 text-sm text-slate-500">Что может делать администратор.</p>
              </div>

              <div class="space-y-3">
                <div class="rounded-3xl bg-slate-50 p-4">
                  <p class="text-sm font-semibold text-slate-800">Работать с клиентами</p>

                  <p class="mt-1 text-sm leading-6 text-slate-500">
                    Добавлять, просматривать и вести базу гостей.
                  </p>
                </div>

                <div class="rounded-3xl bg-slate-50 p-4">
                  <p class="text-sm font-semibold text-slate-800">Управлять банкетами</p>

                  <p class="mt-1 text-sm leading-6 text-slate-500">
                    Создавать мероприятия, выбирать клиента, зал и оплату.
                  </p>
                </div>

                <div class="rounded-3xl bg-slate-50 p-4">
                  <p class="text-sm font-semibold text-slate-800">Без доступа к подписке</p>

                  <p class="mt-1 text-sm leading-6 text-slate-500">
                    Админ не должен управлять тарифом, владельцем и критичными настройками.
                  </p>
                </div>
              </div>
            </article>

            <article
              class="rounded-[2rem] border border-indigo-100 bg-gradient-to-br from-indigo-600 to-violet-600 p-5 text-white shadow-lg shadow-indigo-200"
            >
              <p class="text-sm font-medium text-white/70">Совет</p>

              <h2 class="mt-2 text-xl font-semibold tracking-tight">
                Создавайте отдельный аккаунт для каждого сотрудника
              </h2>

              <p class="mt-2 text-sm leading-6 text-white/70">
                Так будет проще контролировать доступ и понимать, кто работает в системе.
              </p>

              <button
                type="button"
                class="mt-5 h-11 rounded-2xl bg-white px-5 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"
                @click="openCreateModal"
              >
                Создать админа
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
                    <p class="text-sm font-medium text-indigo-600">Новый админ</p>

                    <h2 class="mt-1 text-xl font-semibold tracking-tight text-slate-950">
                      Создать аккаунт администратора
                    </h2>

                    <p class="mt-2 text-sm leading-6 text-slate-500">
                      Админ будет привязан к вашему ресторану и сможет войти в систему по email и
                      паролю.
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

                <form class="space-y-4" @submit.prevent="handleCreateAdmin">
                  <div>
                    <label class="mb-1.5 block text-sm font-medium text-slate-700"> Имя </label>

                    <input
                      v-model="form.name"
                      type="text"
                      placeholder="Например: Админ ресторана"
                      class="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                    />
                  </div>

                  <div>
                    <label class="mb-1.5 block text-sm font-medium text-slate-700"> Email </label>

                    <input
                      v-model="form.email"
                      type="email"
                      placeholder="admin@restaurant.kz"
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
                    <label class="mb-1.5 block text-sm font-medium text-slate-700"> Пароль </label>

                    <input
                      v-model="form.password"
                      type="password"
                      placeholder="Минимум 6 символов"
                      class="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                    />
                  </div>

                  <div class="rounded-3xl bg-slate-50 p-4">
                    <p class="text-sm font-semibold text-slate-800">Роль: ADMIN</p>

                    <p class="mt-1 text-sm leading-6 text-slate-500">
                      Этот аккаунт будет создан как администратор вашего ресторана.
                    </p>
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
                      {{ isCreating ? 'Создаём...' : 'Создать админа' }}
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
