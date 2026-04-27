<script setup lang="ts">
import type { Banquet } from '~/types/banquet'

defineProps<{
  banquets: Banquet[]
}>()

function getBanquetTitle(banquet: Banquet) {
  return banquet.title || banquet.eventType || 'Без названия'
}
</script>

<template>
  <article class="rounded-4xl border border-slate-100 bg-white p-5 shadow-sm">
    <div class="mb-5 flex items-center justify-between gap-4">
      <div>
        <h2 class="text-lg font-semibold tracking-tight text-slate-950">Ближайшие даты</h2>

        <p class="mt-1 text-sm text-slate-500">Следующие мероприятия</p>
      </div>
    </div>

    <div v-if="banquets.length === 0" class="rounded-3xl bg-slate-50 p-5 text-sm text-slate-500">
      Ближайших банкетов пока нет.
    </div>

    <div v-else class="space-y-3">
      <div
        v-for="banquet in banquets.slice(0, 4)"
        :key="banquet.id"
        class="flex items-start gap-3 rounded-3xl bg-slate-50 p-4 transition hover:bg-slate-100"
      >
        <div
          class="flex size-11 shrink-0 flex-col items-center justify-center rounded-2xl bg-white shadow-sm"
        >
          <span class="text-xs font-semibold text-slate-950">
            {{ formatShortDate(banquet.date).split(' ')[0] }}
          </span>

          <span class="text-[10px] text-slate-400">
            {{ formatShortDate(banquet.date).split(' ')[1] }}
          </span>
        </div>

        <div class="min-w-0">
          <p class="truncate text-sm font-semibold text-slate-950">
            {{ getBanquetTitle(banquet) }}
          </p>

          <p class="mt-1 truncate text-xs text-slate-500">
            {{ banquet.client?.name || 'Клиент не указан' }}
          </p>

          <p class="mt-1 text-xs text-slate-400">
            {{ formatTime(banquet.date, banquet.startTime) }}
          </p>
        </div>
      </div>
    </div>
  </article>
</template>
