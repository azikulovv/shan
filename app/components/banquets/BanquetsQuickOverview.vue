<script setup lang="ts">
const props = defineProps<{
  totalBanquets: number
  totalAmount: number
  totalGuests: number
  eventTypesCount: number
}>()

const averageCheck = computed(() => {
  if (!props.totalBanquets) {
    return 0
  }

  return props.totalAmount / props.totalBanquets
})

const averageGuests = computed(() => {
  if (!props.totalBanquets) {
    return 0
  }

  return Math.round(props.totalGuests / props.totalBanquets)
})
</script>

<template>
  <article class="rounded-4xl border border-slate-100 bg-white p-5 shadow-sm">
    <div class="mb-5">
      <h2 class="text-lg font-semibold tracking-tight text-slate-950">Быстрый обзор</h2>

      <p class="mt-1 text-sm text-slate-500">Краткая аналитика по мероприятиям</p>
    </div>

    <div class="space-y-3">
      <div class="rounded-3xl bg-slate-50 p-4">
        <div class="flex items-center justify-between gap-3">
          <p class="text-sm font-medium text-slate-700">Средний чек</p>

          <p class="text-sm font-semibold text-slate-950">
            {{ formatPrice(averageCheck) }}
          </p>
        </div>
      </div>

      <div class="rounded-3xl bg-slate-50 p-4">
        <div class="flex items-center justify-between gap-3">
          <p class="text-sm font-medium text-slate-700">Среднее гостей</p>

          <p class="text-sm font-semibold text-slate-950">
            {{ averageGuests }}
          </p>
        </div>
      </div>

      <div class="rounded-3xl bg-slate-50 p-4">
        <div class="flex items-center justify-between gap-3">
          <p class="text-sm font-medium text-slate-700">Типов мероприятий</p>

          <p class="text-sm font-semibold text-slate-950">
            {{ eventTypesCount }}
          </p>
        </div>
      </div>
    </div>
  </article>
</template>
