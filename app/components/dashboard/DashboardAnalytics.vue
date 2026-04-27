<script lang="ts" setup>
defineProps<{
  prepaymentPercent: number
  totalBanquets: number
  totalAmount: number
  totalGuests: number
}>()
</script>

<template>
  <article class="rounded-4xl border border-slate-100 bg-white p-5 shadow-sm">
    <div class="mb-5 flex items-center justify-between">
      <div>
        <h2 class="text-lg font-semibold tracking-tight text-slate-950">Аналитика</h2>

        <p class="mt-1 text-sm text-slate-500">Краткий обзор</p>
      </div>

      <div
        class="flex size-10 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600"
      >
        <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v18h18" />
          <path stroke-linecap="round" stroke-linejoin="round" d="m7 14 4-4 3 3 5-6" />
        </svg>
      </div>
    </div>

    <div class="space-y-3">
      <div class="rounded-3xl bg-slate-50 p-4">
        <div class="flex items-center justify-between gap-3">
          <p class="text-sm font-medium text-slate-700">Покрытие предоплаты</p>

          <p class="text-sm font-semibold text-slate-950">{{ prepaymentPercent }}%</p>
        </div>

        <div class="mt-3 h-2 overflow-hidden rounded-full bg-white">
          <div
            class="h-full rounded-full bg-linear-to-r from-indigo-500 to-violet-500"
            :style="{ width: `${prepaymentPercent}%` }"
          />
        </div>
      </div>

      <div class="rounded-3xl bg-slate-50 p-4">
        <div class="flex items-center justify-between gap-3">
          <p class="text-sm font-medium text-slate-700">Средний чек</p>

          <p class="text-sm font-semibold text-slate-950">
            {{ formatPrice(totalBanquets ? totalAmount / totalBanquets : 0) }}
          </p>
        </div>
      </div>

      <div class="rounded-3xl bg-slate-50 p-4">
        <div class="flex items-center justify-between gap-3">
          <p class="text-sm font-medium text-slate-700">Среднее гостей</p>

          <p class="text-sm font-semibold text-slate-950">
            {{ totalBanquets ? Math.round(totalGuests / totalBanquets) : 0 }}
          </p>
        </div>
      </div>
    </div>
  </article>
</template>
