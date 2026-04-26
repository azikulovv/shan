<script setup lang="ts">
import type { Client } from '~/types/client'
import ClientCard from '~/components/clients/ClientCard.vue'

defineProps<{
  clients: Client[]
  isDeleting: string | null
}>()

const emit = defineEmits<{
  refresh: []
  create: []
  delete: [id: string]
}>()
</script>

<template>
  <article class="overflow-hidden rounded-4xl border border-slate-100 bg-white shadow-sm">
    <div
      class="flex flex-col gap-3 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between"
    >
      <div>
        <h2 class="text-lg font-semibold tracking-tight text-slate-950">Список клиентов</h2>

        <p class="mt-1 text-sm text-slate-500">{{ clients.length }} найдено</p>
      </div>

      <button
        type="button"
        class="inline-flex h-10 items-center justify-center rounded-2xl bg-slate-50 px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
        @click="emit('refresh')"
      >
        Обновить
      </button>
    </div>

    <div v-if="clients.length === 0" class="p-5">
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
          @click="emit('create')"
        >
          Добавить клиента
        </button>
      </div>
    </div>

    <div v-else class="grid gap-4 p-5 md:grid-cols-2 xl:grid-cols-3">
      <ClientCard
        v-for="client in clients"
        :key="client.id"
        :client="client"
        :is-deleting="isDeleting === client.id"
        @delete="emit('delete', client.id)"
      />
    </div>
  </article>
</template>
