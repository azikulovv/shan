<script lang="ts" setup>
import type { Client } from '~/types/client'

defineProps<{
  latestClients: Client[]
}>()

function getClientInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}
</script>

<template>
  <article class="rounded-4xl border border-slate-100 bg-white p-5 shadow-sm">
    <div class="mb-5 flex items-center justify-between gap-4">
      <div>
        <h2 class="text-lg font-semibold tracking-tight text-slate-950">Последние клиенты</h2>

        <p class="mt-1 text-sm text-slate-500">Недавно добавленные контакты</p>
      </div>

      <NuxtLink to="/dashboard/clients" class="text-sm font-medium text-slate-950 hover:underline">
        Все
      </NuxtLink>
    </div>

    <div
      v-if="latestClients.length === 0"
      class="rounded-3xl bg-slate-50 p-5 text-sm text-slate-500"
    >
      Клиентов пока нет.
    </div>

    <div v-else class="space-y-3">
      <div
        v-for="client in latestClients"
        :key="client.id"
        class="flex items-center gap-3 rounded-3xl bg-slate-50 p-4 transition hover:bg-slate-100"
      >
        <div
          class="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-white text-xs font-semibold text-slate-700 shadow-sm"
        >
          {{ getClientInitials(client.name) }}
        </div>

        <div class="min-w-0 flex-1">
          <p class="truncate text-sm font-semibold text-slate-950">
            {{ client.name }}
          </p>

          <p class="mt-0.5 truncate text-xs text-slate-500">
            {{ client.phone }}
          </p>
        </div>
      </div>
    </div>
  </article>
</template>
