<script lang="ts" setup>
const props = defineProps<{
  totalAmount: number
  totalPrepayment: number
  remainingAmount: number
  prepaymentPercent: number
  chartBars: {
    label: string
    value: number | undefined
    height: number
  }[]
}>()

const hasChartData = computed(() => props.chartBars.some((bar) => bar.value! > 0))
</script>

<template>
  <article class="rounded-4xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
    <div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h2 class="text-lg font-semibold tracking-tight text-slate-950">Финансовая картина</h2>

        <p class="mt-1 text-sm text-slate-500">Общая сумма банкетов, предоплата и остаток</p>
      </div>

      <div class="rounded-2xl bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700">
        {{ prepaymentPercent }}% оплачено
      </div>
    </div>

    <div class="mb-6 grid gap-3 sm:grid-cols-3">
      <div class="rounded-3xl bg-slate-950 p-4 text-white">
        <p class="text-xs text-white/60">Общая сумма</p>

        <p class="mt-2 text-xl font-semibold">
          {{ formatPrice(totalAmount) }}
        </p>
      </div>

      <div class="rounded-3xl bg-indigo-50 p-4">
        <p class="text-xs text-indigo-600">Предоплата</p>

        <p class="mt-2 text-xl font-semibold text-indigo-700">
          {{ formatPrice(totalPrepayment) }}
        </p>
      </div>

      <div class="rounded-3xl bg-violet-50 p-4">
        <p class="text-xs text-violet-600">Остаток</p>

        <p class="mt-2 text-xl font-semibold text-violet-700">
          {{ formatPrice(remainingAmount) }}
        </p>
      </div>
    </div>

    <div
      class="relative h-72 overflow-hidden rounded-3xl bg-linear-to-b from-slate-50 to-white p-4"
    >
      <div class="absolute inset-x-4 top-1/4 border-t border-dashed border-slate-200" />
      <div class="absolute inset-x-4 top-1/2 border-t border-dashed border-slate-200" />
      <div class="absolute inset-x-4 top-3/4 border-t border-dashed border-slate-200" />

      <div
        v-if="!hasChartData"
        class="relative flex h-full items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-white/70 px-4 text-center"
      >
        <div>
          <p class="text-sm font-semibold text-slate-700">Нет финансовых данных</p>

          <p class="mt-1 text-xs text-slate-400">
            Укажите сумму или предоплату в банкетах, чтобы построить график.
          </p>
        </div>
      </div>

      <div v-else class="relative grid grid-cols-6 h-full items-end gap-3">
        <div
          v-for="bar in chartBars"
          :key="bar.label"
          class="flex h-full min-w-0 flex-col items-center gap-2"
        >
          <div class="flex min-h-0 w-full flex-1 items-end">
            <div
              class="w-full rounded-t-lg bg-linear-to-t from-indigo-600 to-violet-400 shadow-sm transition hover:from-indigo-700 hover:to-violet-500"
              :style="{ height: `${bar.height}%` }"
            />
          </div>

          <p class="truncate text-[11px] font-medium text-slate-400">
            {{ bar.label }}
          </p>
        </div>
      </div>
    </div>
  </article>
</template>
