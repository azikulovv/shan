<script setup lang="ts">
import type { Client, CreateClientPayload } from '~/types/client'

definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
})

const clientsApi = useClients()

const clients = ref<Client[]>([])
const search = ref('')
const isLoading = ref(false)
const isCreating = ref(false)
const isDeleting = ref<string | null>(null)
const errorMessage = ref('')
const isCreateModalOpen = ref(false)

const form = reactive<CreateClientPayload>({
  name: '',
  phone: '',
  note: '',
})

const filteredClients = computed(() => {
  const query = search.value.trim().toLowerCase()

  if (!query) {
    return clients.value
  }

  return clients.value.filter((client) => {
    return client.name.toLowerCase().includes(query) || client.phone.toLowerCase().includes(query)
  })
})

async function fetchClients() {
  isLoading.value = true
  errorMessage.value = ''

  try {
    const response = await clientsApi.getClients()
    clients.value = response.data
  } catch (error) {
    errorMessage.value = 'Не удалось загрузить клиентов'
  } finally {
    isLoading.value = false
  }
}

async function handleCreateClient() {
  if (!form.name.trim() || !form.phone.trim()) {
    errorMessage.value = 'Имя и телефон обязательны'
    return
  }

  isCreating.value = true
  errorMessage.value = ''

  try {
    const response = await clientsApi.createClient({
      name: form.name.trim(),
      phone: form.phone.trim(),
      note: form.note?.trim() || undefined,
    })

    clients.value.unshift(response.data)

    form.name = ''
    form.phone = ''
    form.note = ''

    isCreateModalOpen.value = false
  } catch (error) {
    errorMessage.value = 'Не удалось создать клиента'
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
  } catch (error) {
    errorMessage.value = 'Не удалось удалить клиента'
  } finally {
    isDeleting.value = null
  }
}

onMounted(() => {
  fetchClients()
})
</script>

<template>
  <section>
    <div class="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <h1 class="text-2xl font-semibold tracking-tight text-gray-950">Клиенты</h1>

        <p class="mt-2 text-sm text-gray-500">
          Храните контакты гостей и быстро создавайте банкеты на основе клиента.
        </p>
      </div>

      <button
        class="h-11 rounded-2xl bg-gray-950 px-5 text-sm font-medium text-white transition hover:bg-gray-800"
        @click="isCreateModalOpen = true"
      >
        Добавить клиента
      </button>
    </div>

    <div class="mb-5 rounded-3xl border border-gray-100 bg-white p-4 shadow-sm">
      <input
        v-model="search"
        type="text"
        placeholder="Поиск по имени или телефону"
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
      Загружаем клиентов...
    </div>

    <div
      v-else-if="filteredClients.length === 0"
      class="rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm"
    >
      <h2 class="text-lg font-semibold text-gray-950">Клиентов пока нет</h2>

      <p class="mt-2 text-sm leading-6 text-gray-500">
        Добавьте первого клиента, чтобы потом быстро создавать для него банкеты.
      </p>

      <button
        class="mt-5 h-11 rounded-2xl bg-gray-950 px-5 text-sm font-medium text-white transition hover:bg-gray-800"
        @click="isCreateModalOpen = true"
      >
        Добавить клиента
      </button>
    </div>

    <div v-else class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <article
        v-for="client in filteredClients"
        :key="client.id"
        class="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
      >
        <div class="flex items-start justify-between gap-4">
          <div>
            <h2 class="text-base font-semibold text-gray-950">
              {{ client.name }}
            </h2>

            <p class="mt-1 text-sm text-gray-500">
              {{ client.phone }}
            </p>
          </div>

          <button
            class="rounded-xl bg-gray-100 px-3 py-2 text-xs font-medium text-gray-600 transition hover:bg-red-50 hover:text-red-600 disabled:opacity-50"
            :disabled="isDeleting === client.id"
            @click="handleDeleteClient(client.id)"
          >
            {{ isDeleting === client.id ? '...' : 'Удалить' }}
          </button>
        </div>

        <div class="mt-5 space-y-3">
          <div v-if="client.note" class="rounded-2xl bg-gray-50 px-4 py-3">
            <p class="text-xs text-gray-400">Заметка</p>

            <p class="mt-1 text-sm leading-6 text-gray-700">
              {{ client.note }}
            </p>
          </div>
        </div>
      </article>
    </div>

    <Teleport to="body">
      <div
        v-if="isCreateModalOpen"
        class="fixed inset-0 z-50 flex items-end bg-black/40 px-4 pb-4 pt-16 md:items-center md:justify-center md:p-6"
        @click.self="isCreateModalOpen = false"
      >
        <div class="w-full max-w-lg rounded-3xl bg-white p-5 shadow-xl md:p-6">
          <div class="mb-6 flex items-start justify-between gap-4">
            <div>
              <h2 class="text-xl font-semibold tracking-tight text-gray-950">Новый клиент</h2>

              <p class="mt-2 text-sm leading-6 text-gray-500">
                Добавьте контактные данные клиента для будущих банкетов.
              </p>
            </div>

            <button
              class="rounded-xl bg-gray-100 px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-200"
              @click="isCreateModalOpen = false"
            >
              Закрыть
            </button>
          </div>

          <form class="space-y-4" @submit.prevent="handleCreateClient">
            <div>
              <label class="mb-1.5 block text-sm font-medium text-gray-700"> Имя клиента </label>

              <input
                v-model="form.name"
                type="text"
                placeholder="Например: Айдос"
                class="h-12 w-full rounded-2xl border border-gray-200 bg-white px-4 text-sm outline-none transition focus:border-gray-900"
              />
            </div>

            <div>
              <label class="mb-1.5 block text-sm font-medium text-gray-700"> Телефон </label>

              <input
                v-model="form.phone"
                type="tel"
                placeholder="+7 777 000 00 00"
                class="h-12 w-full rounded-2xl border border-gray-200 bg-white px-4 text-sm outline-none transition focus:border-gray-900"
              />
            </div>

            <div>
              <label class="mb-1.5 block text-sm font-medium text-gray-700"> Заметка </label>

              <textarea
                v-model="form.note"
                rows="4"
                placeholder="Например: постоянный клиент, предпочитает большой зал"
                class="w-full resize-none rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-gray-900"
              />
            </div>

            <button
              type="submit"
              :disabled="isCreating"
              class="h-12 w-full rounded-2xl bg-gray-950 text-sm font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {{ isCreating ? 'Создаём...' : 'Создать клиента' }}
            </button>
          </form>
        </div>
      </div>
    </Teleport>
  </section>
</template>
