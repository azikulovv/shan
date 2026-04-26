<script setup lang="ts">
type ChartBar = {
  key: string
  label: string
  total: number
  paid: number
  height: number
}

defineProps<{
  chartBars: ChartBar[]
  totalAmount: number
  totalPrepayment: number
  remainingAmount: number
  prepaymentPercent: number
}>()

function formatPrice(value: number) {
  return new Intl.NumberFormat('ru-KZ', {
    style: 'currency',
    currency: 'KZT',
    maximumFractionDigits: 0,
  }).format(value)
}
</script>

<template>
  <article class="min-w-0 rounded-4xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
    <div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h2 class="text-lg font-semibold tracking-tight text-slate-950">Динамика по месяцам</h2>

        <p class="mt-1 text-sm text-slate-500">Общая сумма банкетов за последние 6 месяцев</p>
      </div>

      <div class="rounded-2xl bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700">
        {{ prepaymentPercent }}% оплачено
      </div>
    </div>

    <div class="mb-6 grid gap-3 sm:grid-cols-3">
      <div class="rounded-3xl bg-slate-950 p-4 text-white">
        <p class="text-xs text-white/60">Всего</p>

        <p class="mt-2 text-xl font-semibold">
          {{ formatPrice(totalAmount) }}
        </p>
      </div>

      <div class="rounded-3xl bg-indigo-50 p-4">
        <p class="text-xs text-indigo-600">Получено</p>

        <p class="mt-2 text-xl font-semibold text-indigo-700">
          {{ formatPrice(totalPrepayment) }}
        </p>
      </div>

      <div class="rounded-3xl bg-violet-50 p-4">
        <p class="text-xs text-violet-600">К получению</p>

        <p class="mt-2 text-xl font-semibold text-violet-700">
          {{ formatPrice(remainingAmount) }}
        </p>
      </div>
    </div>

    <div class="rounded-3xl bg-linear-to-b from-slate-50 to-white p-4">
      <div class="relative h-64">
        <div class="absolute inset-x-0 top-0 border-t border-dashed border-slate-200" />
        <div class="absolute inset-x-0 top-1/4 border-t border-dashed border-slate-200" />
        <div class="absolute inset-x-0 top-1/2 border-t border-dashed border-slate-200" />
        <div class="absolute inset-x-0 top-3/4 border-t border-dashed border-slate-200" />
        <div class="absolute inset-x-0 bottom-0 border-t border-slate-200" />

        <div class="relative z-10 flex h-full items-end gap-3">
          <div
            v-for="bar in chartBars"
            :key="bar.key"
            class="group flex h-full min-w-0 flex-1 flex-col justify-end"
          >
            <div class="flex h-full items-end">
              <div
                class="relative w-full rounded-t-2xl bg-linear-to-t from-indigo-600 to-violet-400 shadow-sm transition-all duration-300 hover:from-indigo-700 hover:to-violet-500"
                :style="{ height: `${bar.height}%` }"
              >
                <div
                  class="pointer-events-none absolute bottom-full left-1/2 mb-2 hidden w-max -translate-x-1/2 rounded-2xl bg-slate-950 px-3 py-2 text-xs font-medium text-white shadow-lg group-hover:block"
                >
                  <p>Всего: {{ formatPrice(bar.total) }}</p>

                  <p class="mt-1 text-white/60">Получено: {{ formatPrice(bar.paid) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-3 grid grid-cols-6 gap-3">
        <div v-for="bar in chartBars" :key="`${bar.key}-label`" class="min-w-0 text-center">
          <p class="truncate text-[11px] font-semibold text-slate-500">
            {{ bar.label }}
          </p>

          <p class="mt-0.5 truncate text-[10px] text-slate-400">
            {{ formatPrice(bar.total) }}
          </p>
        </div>
      </div>
    </div>
  </article>
</template>
