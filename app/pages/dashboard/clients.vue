<script setup lang="ts">
import ClientCreateModal from '~/components/clients/ClientCreateModal.vue'
import ClientsHeader from '~/components/clients/ClientsHeader.vue'
import ClientsHero from '~/components/clients/ClientsHero.vue'
import ClientsStatCard from '~/components/clients/ClientsStatCard.vue'
import ClientsTable from '~/components/clients/ClientsTable.vue'
import UiErrorMessage from '~/components/ui/UiErrorMessage.vue'
import UiLoader from '~/components/ui/UiLoader.vue'
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

const totalClients = computed(() => clients.value.length)

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
    iconClass: 'bg-blue-50 text-blue-600',
    icon: ['m21 21-4.35-4.35', 'M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z'],
  },
  {
    label: 'Последний клиент',
    value: latestClient.value?.name || '—',
    description: 'Недавно добавленный',
    iconClass: 'bg-slate-100 text-slate-700',
    icon: ['M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z', 'M20 21a8 8 0 1 0-16 0'],
  },
])

function openCreateModal() {
  createErrorMessage.value = ''
  isCreateModalOpen.value = true
}

function closeCreateModal() {
  isCreateModalOpen.value = false
  createErrorMessage.value = ''
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

async function handleCreateClient(payload: CreateClientPayload) {
  createErrorMessage.value = ''

  if (!payload.name.trim()) {
    createErrorMessage.value = 'Введите имя клиента'
    return
  }

  if (!payload.phone.trim()) {
    createErrorMessage.value = 'Введите телефон клиента'
    return
  }

  isCreating.value = true

  try {
    const response = await clientsApi.createClient({
      name: payload.name.trim(),
      phone: payload.phone.trim(),
      note: payload.note?.trim() || undefined,
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
      <ClientsHeader v-model:search-query="searchQuery" @create="openCreateModal" />

      <UiErrorMessage v-if="errorMessage" :message="errorMessage" />
      <UiLoader v-if="isLoading" />

      <template v-else>
        <ClientsHero
          :total-clients="totalClients"
          :clients-with-note="clientsWithNote"
          :latest-client-name="latestClient?.name || 'Пока нет'"
        />

        <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <ClientsStatCard
            v-for="stat in stats"
            :key="stat.label"
            :label="stat.label"
            :value="stat.value"
            :description="stat.description"
            :icon-class="stat.iconClass"
            :icon="stat.icon"
          />
        </div>

        <ClientsTable
          :clients="filteredClients"
          :is-deleting="isDeleting"
          @refresh="fetchClients"
          @create="openCreateModal"
          @delete="handleDeleteClient"
        />
      </template>
    </div>

    <ClientCreateModal
      :is-open="isCreateModalOpen"
      :is-creating="isCreating"
      :error-message="createErrorMessage"
      @close="closeCreateModal"
      @submit="handleCreateClient"
    />
  </section>
</template>
