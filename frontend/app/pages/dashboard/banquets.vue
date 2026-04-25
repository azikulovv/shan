<script setup lang="ts">
import type { Client } from '~/types/client'
import type { Banquet, CreateBanquetPayload } from '~/types/banquet'
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

const search = ref('')

const isLoading = ref(false)
const isCreating = ref(false)
const isDeleting = ref<string | null>(null)
const errorMessage = ref('')
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

const filteredBanquets = computed(() => {
  const query = search.value.trim().toLowerCase()

  return banquets.value.filter((banquet) => {
    const matchesSearch =
      !query ||
      banquet.title?.toLowerCase().includes(query) ||
      banquet.client?.name.toLowerCase().includes(query) ||
      banquet.client?.phone.toLowerCase().includes(query) ||
      banquet.hall.name.toLowerCase().includes(query)

    return matchesSearch
  })
})

function formatDate(date: string) {
  return new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(date))
}

function formatPrice(value: number) {
  return new Intl.NumberFormat('ru-KZ', {
    style: 'currency',
    currency: 'KZT',
    maximumFractionDigits: 0,
  }).format(value)
}

async function fetchBanquets() {
  isLoading.value = true
  errorMessage.value = ''

  try {
    const response = await banquetsApi.getBanquets()
    banquets.value = response.data
  } catch (error) {
    errorMessage.value = 'Не удалось загрузить банкеты'
  } finally {
    isLoading.value = false
  }
}

async function fetchClients() {
  try {
    const response = await clientsApi.getClients()
    clients.value = response.data
  } catch (error) {
    errorMessage.value = 'Не удалось загрузить клиентов'
  }
}

async function fetchHalls() {
  try {
    const response = await hallsApi.getHalls()
    halls.value = response.data
  } catch (error) {
    errorMessage.value = 'Не удалось загрузить залы'
  }
}

async function handleCreateBanquet() {
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

  isCreating.value = true
  errorMessage.value = ''

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

    isCreateModalOpen.value = false
  } catch (error) {
    errorMessage.value = 'Не удалось создать банкет'
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
  } catch (error) {
    errorMessage.value = 'Не удалось удалить банкет'
  } finally {
    isDeleting.value = null
  }
}

onMounted(async () => {
  await Promise.all([fetchBanquets(), fetchClients(), fetchHalls()])
})
</script>

<template>
  <section>
    <div class="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <h1 class="text-2xl font-semibold tracking-tight text-gray-950">Банкеты</h1>

        <p class="mt-2 text-sm text-gray-500">
          Планируйте мероприятия, контролируйте гостей, оплату и статус банкета.
        </p>
      </div>

      <button
        class="h-11 rounded-2xl bg-gray-950 px-5 text-sm font-medium text-white transition hover:bg-gray-800"
        @click="isCreateModalOpen = true"
      >
        Создать банкет
      </button>
    </div>

    <div
      class="mb-5 grid gap-3 rounded-3xl border border-gray-100 bg-white p-4 shadow-sm md:grid-cols-[1fr_220px]"
    >
      <input
        v-model="search"
        type="text"
        placeholder="Поиск по названию, клиенту, телефону или залу"
        class="h-12 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 text-sm outline-none transition focus:border-gray-900 focus:bg-white"
      />
    </div>

    <p
      v-if="errorMessage"
      class="mb-5 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600"
    >
      {{ errorMessage }}
    </p>

    <div
      v-if="isLoading"
      class="rounded-3xl border border-gray-100 bg-white p-6 text-sm text-gray-500 shadow-sm"
    >
      Загружаем банкеты...
    </div>

    <div
      v-else-if="filteredBanquets.length === 0"
      class="rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm"
    >
      <h2 class="text-lg font-semibold text-gray-950">Банкетов пока нет</h2>

      <p class="mt-2 text-sm leading-6 text-gray-500">
        Создайте первый банкет, чтобы начать планирование мероприятий.
      </p>

      <button
        class="mt-5 h-11 rounded-2xl bg-gray-950 px-5 text-sm font-medium text-white transition hover:bg-gray-800"
        @click="isCreateModalOpen = true"
      >
        Создать банкет
      </button>
    </div>

    <div v-else class="grid gap-4 xl:grid-cols-2">
      <article
        v-for="banquet in filteredBanquets"
        :key="banquet.id"
        class="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
      >
        <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div class="mb-3 flex flex-wrap items-center gap-2">
              <span class="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                {{ banquet.guestCount }} гостей
              </span>
            </div>

            <h2 class="text-lg font-semibold text-gray-950">
              {{ banquet.title }}
            </h2>

            <p class="mt-2 text-sm text-gray-500">
              <!-- {{ formatDate(banquet.eventDate) }} -->
            </p>
          </div>

          <button
            class="h-10 rounded-2xl bg-gray-100 px-4 text-xs font-medium text-gray-600 transition hover:bg-red-50 hover:text-red-600 disabled:opacity-50"
            :disabled="isDeleting === banquet.id"
            @click="handleDeleteBanquet(banquet.id)"
          >
            {{ isDeleting === banquet.id ? 'Удаляем...' : 'Удалить' }}
          </button>
        </div>

        <div class="mt-5 grid gap-3 sm:grid-cols-2">
          <div class="rounded-2xl bg-gray-50 px-4 py-3">
            <p class="text-xs text-gray-400">Клиент</p>

            <p class="mt-1 text-sm font-medium text-gray-800">
              {{ banquet.client?.name || 'Не указан' }}
            </p>

            <p v-if="banquet.client?.phone" class="mt-1 text-xs text-gray-500">
              {{ banquet.client.phone }}
            </p>
          </div>

          <div class="rounded-2xl bg-gray-50 px-4 py-3">
            <p class="text-xs text-gray-400">Зал</p>

            <p class="mt-1 text-sm font-medium text-gray-800">
              {{ banquet.hall.name || 'Не указан' }}
            </p>
          </div>

          <div class="rounded-2xl bg-gray-50 px-4 py-3">
            <p class="text-xs text-gray-400">Сумма</p>

            <p class="mt-1 text-sm font-medium text-gray-800">
              {{ formatPrice(banquet.totalAmount ?? 0) }}
            </p>
          </div>

          <div class="rounded-2xl bg-gray-50 px-4 py-3">
            <p class="text-xs text-gray-400">Предоплата</p>

            <p class="mt-1 text-sm font-medium text-gray-800">
              {{ formatPrice(banquet.prepaymentAmount ?? 0) }}
            </p>
          </div>
        </div>

        <div v-if="banquet.comment" class="mt-3 rounded-2xl bg-gray-50 px-4 py-3">
          <p class="text-xs text-gray-400">Заметка</p>

          <p class="mt-1 text-sm leading-6 text-gray-700">
            {{ banquet.comment }}
          </p>
        </div>
      </article>
    </div>

    <Teleport to="body">
      <div
        v-if="isCreateModalOpen"
        class="fixed inset-0 z-50 flex items-end bg-black/40 px-4 pb-4 pt-16 md:items-center md:justify-center md:p-6"
        @click.self="isCreateModalOpen = false"
      >
        <div
          class="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-5 shadow-xl md:p-6"
        >
          <div class="mb-6 flex items-start justify-between gap-4">
            <div>
              <h2 class="text-xl font-semibold tracking-tight text-gray-950">Новый банкет</h2>

              <p class="mt-2 text-sm leading-6 text-gray-500">
                Заполните основные данные мероприятия.
              </p>
            </div>

            <button
              class="rounded-xl bg-gray-100 px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-200"
              @click="isCreateModalOpen = false"
            >
              Закрыть
            </button>
          </div>

          <form class="space-y-4" @submit.prevent="handleCreateBanquet">
            <div>
              <label class="mb-1.5 block text-sm font-medium text-gray-700">
                Название банкета
              </label>

              <input
                v-model="form.title"
                type="text"
                placeholder="Например: Свадьба Айдоса"
                class="h-12 w-full rounded-2xl border border-gray-200 bg-white px-4 text-sm outline-none transition focus:border-gray-900"
              />
            </div>

            <div>
              <label class="mb-1.5 block text-sm font-medium text-gray-700">
                Тип мероприятия
              </label>

              <input
                v-model="form.eventType"
                type="text"
                placeholder="Свадьба, Құдалық, Той, Юбилей"
                class="h-12 w-full rounded-2xl border border-gray-200 bg-white px-4 text-sm outline-none transition focus:border-gray-900"
              />
            </div>

            <div>
              <label class="mb-1.5 block text-sm font-medium text-gray-700"> Клиент </label>

              <select
                v-model="form.clientId"
                class="h-12 w-full rounded-2xl border border-gray-200 bg-white px-4 text-sm outline-none transition focus:border-gray-900"
              >
                <option value="">Выберите клиента</option>

                <option v-for="client in clients" :key="client.id" :value="client.id">
                  {{ client.name }} — {{ client.phone }}
                </option>
              </select>
            </div>

            <div class="grid gap-4 md:grid-cols-2">
              <div>
                <label class="mb-1.5 block text-sm font-medium text-gray-700"> Дата </label>

                <input
                  v-model="form.date"
                  type="date"
                  class="h-12 w-full rounded-2xl border border-gray-200 bg-white px-4 text-sm outline-none transition focus:border-gray-900"
                />
              </div>

              <div>
                <label class="mb-1.5 block text-sm font-medium text-gray-700"> Время начала </label>

                <input
                  v-model="form.startTime"
                  type="time"
                  class="h-12 w-full rounded-2xl border border-gray-200 bg-white px-4 text-sm outline-none transition focus:border-gray-900"
                />
              </div>
            </div>

            <div class="grid gap-4 md:grid-cols-2">
              <div>
                <label class="mb-1.5 block text-sm font-medium text-gray-700">
                  Количество гостей
                </label>

                <input
                  v-model.number="form.guestCount"
                  type="number"
                  min="1"
                  class="h-12 w-full rounded-2xl border border-gray-200 bg-white px-4 text-sm outline-none transition focus:border-gray-900"
                />
              </div>

              <div>
                <label class="mb-1.5 block text-sm font-medium text-gray-700"> Зал </label>

                <select
                  v-model="form.hallId"
                  class="h-12 w-full rounded-2xl border border-gray-200 bg-white px-4 text-sm outline-none transition focus:border-gray-900"
                >
                  <option value="">Без зала</option>

                  <option v-for="hall in halls" :key="hall.id" :value="hall.id">
                    {{ hall.name }}
                    <template v-if="hall.capacity"> — до {{ hall.capacity }} гостей </template>
                  </option>
                </select>
              </div>
            </div>

            <div class="grid gap-4 md:grid-cols-2">
              <div>
                <label class="mb-1.5 block text-sm font-medium text-gray-700"> Общая сумма </label>

                <input
                  v-model.number="form.totalAmount"
                  type="number"
                  min="0"
                  placeholder="0"
                  class="h-12 w-full rounded-2xl border border-gray-200 bg-white px-4 text-sm outline-none transition focus:border-gray-900"
                />
              </div>

              <div>
                <label class="mb-1.5 block text-sm font-medium text-gray-700"> Предоплата </label>

                <input
                  v-model.number="form.prepaymentAmount"
                  type="number"
                  min="0"
                  placeholder="0"
                  class="h-12 w-full rounded-2xl border border-gray-200 bg-white px-4 text-sm outline-none transition focus:border-gray-900"
                />
              </div>
            </div>

            <div>
              <label class="mb-1.5 block text-sm font-medium text-gray-700"> Комментарий </label>

              <textarea
                v-model="form.comment"
                rows="4"
                placeholder="Например: нужен проектор, отдельный стол, детская зона"
                class="w-full resize-none rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-gray-900"
              />
            </div>

            <button
              type="submit"
              :disabled="isCreating"
              class="h-12 w-full rounded-2xl bg-gray-950 text-sm font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {{ isCreating ? 'Создаём...' : 'Создать банкет' }}
            </button>
          </form>
        </div>
      </div>
    </Teleport>
  </section>
</template>
