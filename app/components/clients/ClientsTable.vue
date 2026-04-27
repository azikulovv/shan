<script setup lang="ts">
import type { Client } from '~/types/client'

defineProps<{
  clients: Client[]
  isDeleting: string | null
}>()

const emit = defineEmits<{
  refresh: []
  create: []
  delete: [id: string]
}>()

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

    <div v-else class="overflow-x-auto">
      <table class="w-full min-w-190 text-left">
        <thead>
          <tr
            class="border-b border-slate-100 bg-slate-50/70 text-xs uppercase tracking-wide text-slate-400"
          >
            <th class="px-5 py-4 font-semibold">Клиент</th>

            <th class="px-5 py-4 font-semibold">Телефон</th>

            <th class="px-5 py-4 font-semibold">Заметка</th>

            <th class="px-5 py-4 font-semibold">Добавлен</th>

            <th class="px-5 py-4 text-right font-semibold">Действия</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="client in clients"
            :key="client.id"
            class="border-b border-slate-100 transition last:border-b-0 hover:bg-slate-50/80"
          >
            <td class="px-5 py-4">
              <div class="flex items-center gap-3">
                <div
                  class="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-xs font-semibold text-slate-700"
                >
                  {{ getClientInitials(client.name) }}
                </div>

                <div class="min-w-0">
                  <p class="truncate text-sm font-semibold text-slate-950">
                    {{ client.name }}
                  </p>

                  <p class="mt-0.5 text-xs text-slate-400">ID: {{ client.id.slice(0, 8) }}</p>
                </div>
              </div>
            </td>

            <td class="px-5 py-4">
              <p class="text-sm font-medium text-slate-700">
                {{ client.phone }}
              </p>
            </td>

            <td class="px-5 py-4">
              <p class="max-w-70 truncate text-sm text-slate-500">
                {{ client.note || '—' }}
              </p>
            </td>

            <td class="px-5 py-4">
              <p class="text-sm text-slate-500">
                {{ formatDate(client.createdAt) }}
              </p>
            </td>

            <td class="px-5 py-4">
              <div class="flex justify-end">
                <button
                  type="button"
                  class="flex size-9 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-50"
                  :disabled="isDeleting === client.id"
                  @click="emit('delete', client.id)"
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
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </article>
</template>
