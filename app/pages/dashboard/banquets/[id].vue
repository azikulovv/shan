<script setup lang="ts">
import type { Banquet, UpdateBanquetPayload } from '~/types/banquet'
import type { Client } from '~/types/client'
import type { Hall } from '~/types/hall'

definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
})

const route = useRoute()

const banquetsApi = useBanquets()
const clientsApi = useClients()
const hallsApi = useHalls()

const banquetId = computed(() => String(route.params.id))

const banquet = ref<Banquet | null>(null)
const clients = ref<Client[]>([])
const halls = ref<Hall[]>([])

const isLoading = ref(false)
const isSaving = ref(false)
const isDeleting = ref(false)

const errorMessage = ref('')
const successMessage = ref('')

const form = reactive<UpdateBanquetPayload>({
  title: '',
  eventType: '',
  guestCount: 1,

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

const remainingAmount = computed(() => {
  return Math.max(Number(form.totalAmount || 0) - Number(form.prepaymentAmount || 0), 0)
})

const paymentPercent = computed(() => {
  const total = Number(form.totalAmount || 0)
  const prepayment = Number(form.prepaymentAmount || 0)

  if (!total) {
    return 0
  }

  return Math.min(Math.round((prepayment / total) * 100), 100)
})

function getInputDate(value: string) {
  const date = new Date(value)

  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

function getInputTime(value: string) {
  const date = new Date(value)

  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')

  return `${hours}:${minutes}`
}

function getBanquetTitle(value: Banquet | null) {
  if (!value) {
    return 'Банкет'
  }

  return value.title || value.eventType || 'Без названия'
}

function fillForm(value: Banquet) {
  form.title = value.title || ''
  form.eventType = value.eventType || ''
  form.guestCount = Number(value.guestCount || 1)

  form.date = getInputDate(value.date)
  form.startTime = value.startTime || getInputTime(value.date)

  form.clientId = value.clientId
  form.hallId = value.hallId || ''

  form.totalAmount = Number(value.totalAmount || 0)
  form.prepaymentAmount = Number(value.prepaymentAmount || 0)

  form.comment = value.comment || ''
}

async function fetchBanquet() {
  const response = await banquetsApi.getBanquet(banquetId.value)

  banquet.value = response.data
  fillForm(response.data)
}

async function fetchClients() {
  const response = await clientsApi.getClients()
  clients.value = response.data
}

async function fetchHalls() {
  const response = await hallsApi.getHalls()
  halls.value = response.data
}

async function fetchPageData() {
  isLoading.value = true
  errorMessage.value = ''
  successMessage.value = ''

  try {
    await Promise.all([fetchBanquet(), fetchClients(), fetchHalls()])
  } catch {
    errorMessage.value = 'Не удалось загрузить данные банкета'
  } finally {
    isLoading.value = false
  }
}

async function handleUpdateBanquet() {
  errorMessage.value = ''
  successMessage.value = ''

  if (!form.clientId) {
    errorMessage.value = 'Выберите клиента'
    return
  }

  if (!form.guestCount || form.guestCount <= 0) {
    errorMessage.value = 'Количество гостей должно быть больше 0'
    return
  }

  if (!form.date) {
    errorMessage.value = 'Укажите дату банкета'
    return
  }

  isSaving.value = true

  try {
    const isoDate = new Date(`${form.date}T${form.startTime || '00:00'}`).toISOString()

    const response = await banquetsApi.updateBanquet(banquetId.value, {
      title: form.title?.trim() || undefined,
      eventType: form.eventType?.trim() || undefined,
      guestCount: Number(form.guestCount),

      date: isoDate,
      startTime: form.startTime || undefined,

      clientId: form.clientId,
      hallId: form.hallId || undefined,

      totalAmount: Number(form.totalAmount) || 0,
      prepaymentAmount: Number(form.prepaymentAmount) || 0,

      comment: form.comment?.trim() || undefined,
    })

    banquet.value = response.data
    fillForm(response.data)

    successMessage.value = 'Банкет успешно обновлён'
  } catch {
    errorMessage.value = 'Не удалось обновить банкет'
  } finally {
    isSaving.value = false
  }
}

async function handleDeleteBanquet() {
  const confirmed = confirm('Удалить этот банкет?')

  if (!confirmed) {
    return
  }

  isDeleting.value = true
  errorMessage.value = ''

  try {
    await banquetsApi.deleteBanquet(banquetId.value)
    await navigateTo('/dashboard/banquets')
  } catch {
    errorMessage.value = 'Не удалось удалить банкет'
  } finally {
    isDeleting.value = false
  }
}

onMounted(() => {
  fetchPageData()
})
</script>

<template>
  <section class="min-h-screen">
    <div class="space-y-5">
      <!-- Header -->
      <header class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <NuxtLink
            to="/dashboard/banquets"
            class="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-950"
          >
            <svg
              class="size-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 18l-6-6 6-6" />
            </svg>

            Назад к банкетам
          </NuxtLink>

          <h1 class="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            {{ getBanquetTitle(banquet) }}
          </h1>

          <p class="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Детальная страница банкета. Здесь можно изменить данные мероприятия, клиента, зал и
            оплату.
          </p>
        </div>

        <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            class="inline-flex h-11 items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 hover:text-slate-950"
            @click="fetchPageData"
          >
            Обновить
          </button>

          <button
            type="button"
            :disabled="isDeleting"
            class="inline-flex h-11 items-center justify-center rounded-2xl bg-red-600 px-5 text-sm font-medium text-white shadow-sm transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
            @click="handleDeleteBanquet"
          >
            {{ isDeleting ? 'Удаляем...' : 'Удалить' }}
          </button>
        </div>
      </header>

      <p
        v-if="errorMessage"
        class="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600"
      >
        {{ errorMessage }}
      </p>

      <p
        v-if="successMessage"
        class="rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
      >
        {{ successMessage }}
      </p>

      <div
        v-if="isLoading"
        class="rounded-4xl border border-slate-100 bg-white p-6 text-sm text-slate-500 shadow-sm"
      >
        Загружаем данные банкета...
      </div>

      <template v-else>
        <!-- Hero -->
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
                  Детали мероприятия
                </div>

                <h2 class="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  {{ getBanquetTitle(banquet) }}
                </h2>

                <p class="mt-2 text-sm leading-6 text-slate-500">
                  <template v-if="banquet?.date">
                    {{ formatDate(banquet?.date) }}
                    ·
                    {{ formatTime(banquet?.date, banquet?.startTime) }}
                  </template>
                  <template v-else> Дата не указана </template>
                </p>
              </div>

              <div class="grid grid-cols-2 gap-3 sm:min-w-[320px]">
                <div class="rounded-3xl bg-slate-950 p-4 text-white shadow-lg shadow-slate-950/10">
                  <p class="text-xs text-white/60">Гостей</p>

                  <p class="mt-2 text-2xl font-semibold">
                    {{ form.guestCount || 0 }}
                  </p>
                </div>

                <div class="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <p class="text-xs text-slate-500">Остаток</p>

                  <p class="mt-2 truncate text-xl font-semibold text-slate-950">
                    {{ formatPrice(remainingAmount) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div class="grid min-w-0 gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
          <!-- Form -->
          <div class="min-w-0 space-y-5">
            <article class="rounded-4xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
              <div class="mb-6">
                <h2 class="text-lg font-semibold tracking-tight text-slate-950">
                  Редактирование банкета
                </h2>

                <p class="mt-1 text-sm text-slate-500">Измените нужные поля и сохраните данные.</p>
              </div>

              <form class="space-y-4" @submit.prevent="handleUpdateBanquet">
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
                    <label class="mb-1.5 block text-sm font-medium text-slate-700"> Клиент </label>

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
                        <template v-if="hall.capacity"> — до {{ hall.capacity }} гостей </template>
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
                    <label class="mb-1.5 block text-sm font-medium text-slate-700"> Гостей </label>

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

                <div class="grid gap-3 sm:grid-cols-[1fr_auto]">
                  <NuxtLink
                    to="/dashboard/banquets"
                    class="inline-flex h-12 items-center justify-center rounded-2xl bg-slate-50 px-5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                  >
                    Отмена
                  </NuxtLink>

                  <button
                    type="submit"
                    :disabled="isSaving"
                    class="inline-flex h-12 items-center justify-center rounded-2xl bg-slate-950 px-6 text-sm font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {{ isSaving ? 'Сохраняем...' : 'Сохранить изменения' }}
                  </button>
                </div>
              </form>
            </article>
          </div>

          <!-- Sidebar -->
          <aside class="space-y-5">
            <article class="rounded-4xl border border-slate-100 bg-white p-5 shadow-sm">
              <div class="mb-5">
                <h2 class="text-lg font-semibold tracking-tight text-slate-950">Финансы</h2>

                <p class="mt-1 text-sm text-slate-500">Сводка по оплате</p>
              </div>

              <div class="space-y-3">
                <div class="rounded-3xl bg-slate-950 p-4 text-white">
                  <p class="text-xs text-white/60">Общая сумма</p>

                  <p class="mt-2 text-xl font-semibold">
                    {{ formatPrice(Number(form.totalAmount || 0)) }}
                  </p>
                </div>

                <div class="rounded-3xl bg-indigo-50 p-4">
                  <p class="text-xs text-indigo-600">Предоплата</p>

                  <p class="mt-2 text-xl font-semibold text-indigo-700">
                    {{ formatPrice(Number(form.prepaymentAmount || 0)) }}
                  </p>
                </div>

                <div class="rounded-3xl bg-violet-50 p-4">
                  <p class="text-xs text-violet-600">Остаток</p>

                  <p class="mt-2 text-xl font-semibold text-violet-700">
                    {{ formatPrice(remainingAmount) }}
                  </p>
                </div>

                <div class="rounded-3xl bg-slate-50 p-4">
                  <div class="mb-2 flex items-center justify-between gap-3">
                    <p class="text-sm font-medium text-slate-700">Оплачено</p>

                    <p class="text-sm font-semibold text-slate-950">{{ paymentPercent }}%</p>
                  </div>

                  <div class="h-2 overflow-hidden rounded-full bg-slate-200">
                    <div
                      class="h-full rounded-full bg-indigo-600 transition-all"
                      :style="{ width: `${paymentPercent}%` }"
                    />
                  </div>
                </div>
              </div>
            </article>

            <article class="rounded-4xl border border-slate-100 bg-white p-5 shadow-sm">
              <div class="mb-5">
                <h2 class="text-lg font-semibold tracking-tight text-slate-950">Текущие данные</h2>

                <p class="mt-1 text-sm text-slate-500">Информация из базы</p>
              </div>

              <div class="space-y-3">
                <div class="rounded-3xl bg-slate-50 p-4">
                  <p class="text-xs text-slate-400">Клиент</p>

                  <p class="mt-1 text-sm font-semibold text-slate-800">
                    {{ banquet?.client?.name || 'Не указан' }}
                  </p>

                  <p v-if="banquet?.client?.phone" class="mt-1 text-xs text-slate-500">
                    {{ banquet.client.phone }}
                  </p>
                </div>

                <div class="rounded-3xl bg-slate-50 p-4">
                  <p class="text-xs text-slate-400">Зал</p>

                  <p class="mt-1 text-sm font-semibold text-slate-800">
                    {{ banquet?.hall?.name || 'Без зала' }}
                  </p>
                </div>

                <div class="rounded-3xl bg-slate-50 p-4">
                  <p class="text-xs text-slate-400">Тип мероприятия</p>

                  <p class="mt-1 text-sm font-semibold text-slate-800">
                    {{ banquet?.eventType || 'Не указан' }}
                  </p>
                </div>
              </div>
            </article>
          </aside>
        </div>
      </template>
    </div>
  </section>
</template>
