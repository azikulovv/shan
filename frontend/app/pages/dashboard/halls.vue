<script setup lang="ts">
import type { CreateHallPayload, Hall } from '~/types/hall'

definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
})

const hallsApi = useHalls()

const halls = ref<Hall[]>([])
const search = ref('')

const isLoading = ref(false)
const isCreating = ref(false)
const isDeleting = ref<string | null>(null)

const errorMessage = ref('')
const isCreateModalOpen = ref(false)

const form = reactive<CreateHallPayload>({
  name: '',
  capacity: undefined,
  description: '',
})

const filteredHalls = computed(() => {
  const query = search.value.trim().toLowerCase()

  if (!query) {
    return halls.value
  }

  return halls.value.filter((hall) => {
    return (
      hall.name.toLowerCase().includes(query) || hall.description?.toLowerCase().includes(query)
    )
  })
})

async function fetchHalls() {
  isLoading.value = true
  errorMessage.value = ''

  try {
    const response = await hallsApi.getHalls()
    halls.value = response.data
  } catch (error) {
    errorMessage.value = 'Не удалось загрузить залы'
  } finally {
    isLoading.value = false
  }
}

async function handleCreateHall() {
  if (!form.name.trim()) {
    errorMessage.value = 'Название зала обязательно'
    return
  }

  isCreating.value = true
  errorMessage.value = ''

  try {
    const response = await hallsApi.createHall({
      name: form.name.trim(),
      capacity: form.capacity ? Number(form.capacity) : undefined,
      description: form.description?.trim() || undefined,
    })

    halls.value.unshift(response.data)

    form.name = ''
    form.capacity = undefined
    form.description = ''

    isCreateModalOpen.value = false
  } catch (error) {
    errorMessage.value = 'Не удалось создать зал'
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
  } catch (error) {
    errorMessage.value = 'Не удалось удалить зал'
  } finally {
    isDeleting.value = null
  }
}

onMounted(() => {
  fetchHalls()
})
</script>

<template>
  <section>
    <div class="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <h1 class="text-2xl font-semibold tracking-tight text-gray-950">Залы</h1>

        <p class="mt-2 text-sm text-gray-500">
          Управляйте залами ресторана, чтобы потом выбирать их при создании банкета.
        </p>
      </div>

      <button
        class="h-11 rounded-2xl bg-gray-950 px-5 text-sm font-medium text-white transition hover:bg-gray-800"
        @click="isCreateModalOpen = true"
      >
        Добавить зал
      </button>
    </div>

    <div class="mb-5 rounded-3xl border border-gray-100 bg-white p-4 shadow-sm">
      <input
        v-model="search"
        type="text"
        placeholder="Поиск по названию или описанию"
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
      Загружаем залы...
    </div>

    <div
      v-else-if="filteredHalls.length === 0"
      class="rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm"
    >
      <h2 class="text-lg font-semibold text-gray-950">Залов пока нет</h2>

      <p class="mt-2 text-sm leading-6 text-gray-500">
        Добавьте первый зал, чтобы использовать его при создании банкетов.
      </p>

      <button
        class="mt-5 h-11 rounded-2xl bg-gray-950 px-5 text-sm font-medium text-white transition hover:bg-gray-800"
        @click="isCreateModalOpen = true"
      >
        Добавить зал
      </button>
    </div>

    <div v-else class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <article
        v-for="hall in filteredHalls"
        :key="hall.id"
        class="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
      >
        <div class="flex items-start justify-between gap-4">
          <div>
            <h2 class="text-base font-semibold text-gray-950">
              {{ hall.name }}
            </h2>

            <p class="mt-1 text-sm text-gray-500">
              Вместимость:
              {{ hall.capacity || 'не указана' }}
            </p>
          </div>

          <button
            class="rounded-xl bg-gray-100 px-3 py-2 text-xs font-medium text-gray-600 transition hover:bg-red-50 hover:text-red-600 disabled:opacity-50"
            :disabled="isDeleting === hall.id"
            @click="handleDeleteHall(hall.id)"
          >
            {{ isDeleting === hall.id ? '...' : 'Удалить' }}
          </button>
        </div>

        <div v-if="hall.description" class="mt-5 rounded-2xl bg-gray-50 px-4 py-3">
          <p class="text-xs text-gray-400">Описание</p>

          <p class="mt-1 text-sm leading-6 text-gray-700">
            {{ hall.description }}
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
        <div class="w-full max-w-lg rounded-3xl bg-white p-5 shadow-xl md:p-6">
          <div class="mb-6 flex items-start justify-between gap-4">
            <div>
              <h2 class="text-xl font-semibold tracking-tight text-gray-950">Новый зал</h2>

              <p class="mt-2 text-sm leading-6 text-gray-500">
                Добавьте зал ресторана для будущих банкетов.
              </p>
            </div>

            <button
              class="rounded-xl bg-gray-100 px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-200"
              @click="isCreateModalOpen = false"
            >
              Закрыть
            </button>
          </div>

          <form class="space-y-4" @submit.prevent="handleCreateHall">
            <div>
              <label class="mb-1.5 block text-sm font-medium text-gray-700"> Название зала </label>

              <input
                v-model="form.name"
                type="text"
                placeholder="Например: Большой зал"
                class="h-12 w-full rounded-2xl border border-gray-200 bg-white px-4 text-sm outline-none transition focus:border-gray-900"
              />
            </div>

            <div>
              <label class="mb-1.5 block text-sm font-medium text-gray-700"> Вместимость </label>

              <input
                v-model.number="form.capacity"
                type="number"
                min="1"
                placeholder="Например: 150"
                class="h-12 w-full rounded-2xl border border-gray-200 bg-white px-4 text-sm outline-none transition focus:border-gray-900"
              />
            </div>

            <div>
              <label class="mb-1.5 block text-sm font-medium text-gray-700"> Описание </label>

              <textarea
                v-model="form.description"
                rows="4"
                placeholder="Например: подходит для свадеб, юбилеев и крупных мероприятий"
                class="w-full resize-none rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-gray-900"
              />
            </div>

            <button
              type="submit"
              :disabled="isCreating"
              class="h-12 w-full rounded-2xl bg-gray-950 text-sm font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {{ isCreating ? 'Создаём...' : 'Создать зал' }}
            </button>
          </form>
        </div>
      </div>
    </Teleport>
  </section>
</template>
