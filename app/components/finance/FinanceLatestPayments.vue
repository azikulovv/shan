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
    <div class="mb-5">
      <h2 class="text-lg font-semibold tracking-tight text-slate-950">Последние предоплаты</h2>

      <p class="mt-1 text-sm text-slate-500">Банкеты, где уже внесена оплата</p>
    </div>

    <div v-if="banquets.length === 0" class="rounded-3xl bg-slate-50 p-5 text-sm text-slate-500">
      Предоплат пока нет.
    </div>

    <div v-else class="space-y-3">
      <div
        v-for="banquet in banquets"
        :key="banquet.id"
        class="rounded-3xl bg-slate-50 p-4 transition hover:bg-slate-100"
      >
        <div class="flex items-start justify-between gap-3">
          <div class="min-w-0">
            <NuxtLink
              :to="`/dashboard/banquets/${banquet.id}`"
              class="block truncate text-sm font-semibold text-slate-950 transition hover:text-indigo-600 hover:underline"
            >
              {{ getBanquetTitle(banquet) }}
            </NuxtLink>

            <p class="mt-1 truncate text-xs text-slate-500">
              {{ banquet.client?.name || 'Клиент не указан' }}
            </p>
          </div>

          <p class="shrink-0 text-sm font-semibold text-indigo-700">
            {{ formatPrice(Number(banquet.prepaymentAmount || 0)) }}
          </p>
        </div>
      </div>
    </div>
  </article>
</template>
