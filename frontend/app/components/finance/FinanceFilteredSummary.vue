<script setup lang="ts">
defineProps<{
  totalAmount: number
  totalPrepayment: number
  remainingAmount: number
}>()
</script>

<template>
  <article class="rounded-4xl border border-slate-100 bg-white p-5 shadow-sm">
    <div class="mb-5">
      <h2 class="text-lg font-semibold tracking-tight text-slate-950">По текущему фильтру</h2>

      <p class="mt-1 text-sm text-slate-500">Суммы только по найденным банкетам</p>
    </div>

    <div class="space-y-3">
      <div class="rounded-3xl bg-slate-50 p-4">
        <div class="flex items-center justify-between gap-3">
          <p class="text-sm font-medium text-slate-700">Общая сумма</p>

          <p class="text-sm font-semibold text-slate-950">
            {{ formatPrice(totalAmount) }}
          </p>
        </div>
      </div>

      <div class="rounded-3xl bg-slate-50 p-4">
        <div class="flex items-center justify-between gap-3">
          <p class="text-sm font-medium text-slate-700">Предоплата</p>

          <p class="text-sm font-semibold text-indigo-700">
            {{ formatPrice(totalPrepayment) }}
          </p>
        </div>
      </div>

      <div class="rounded-3xl bg-slate-50 p-4">
        <div class="flex items-center justify-between gap-3">
          <p class="text-sm font-medium text-slate-700">Остаток</p>

          <p class="text-sm font-semibold text-violet-700">
            {{ formatPrice(remainingAmount) }}
          </p>
        </div>
      </div>
    </div>
  </article>
</template>
