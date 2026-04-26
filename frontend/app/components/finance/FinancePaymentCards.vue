<script setup lang="ts">
type FinanceCard = {
  label: string
  value: number
  description: string
  class: string
}

defineProps<{
  cards: FinanceCard[]
}>()
</script>

<template>
  <article class="rounded-4xl border border-slate-100 bg-white p-5 shadow-sm">
    <div class="mb-5">
      <h2 class="text-lg font-semibold tracking-tight text-slate-950">Оплаты</h2>

      <p class="mt-1 text-sm text-slate-500">Состояние оплат по банкетам</p>
    </div>

    <div class="space-y-3">
      <div v-for="card in cards" :key="card.label" class="rounded-3xl p-4" :class="card.class">
        <div class="flex items-center justify-between gap-3">
          <div>
            <p class="text-sm font-semibold">
              {{ card.label }}
            </p>

            <p class="mt-1 text-xs opacity-75">
              {{ card.description }}
            </p>
          </div>

          <p class="text-2xl font-semibold">
            {{ card.value }}
          </p>
        </div>
      </div>
    </div>
  </article>
</template>
