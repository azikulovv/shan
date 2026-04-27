<script setup lang="ts">
type FinanceItem = {
  label: string
  value: string
  class: string
  labelClass: string
  valueClass: string
}

defineProps<{
  items: FinanceItem[]
}>()

const emit = defineEmits<{
  refresh: []
}>()
</script>

<template>
  <article class="rounded-4xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
    <div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h2 class="text-lg font-semibold tracking-tight text-slate-950">Финансы по банкетам</h2>

        <p class="mt-1 text-sm text-slate-500">
          Общая сумма, предоплата и остаток по всем мероприятиям
        </p>
      </div>

      <button
        type="button"
        class="inline-flex h-10 items-center justify-center rounded-2xl bg-slate-50 px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
        @click="emit('refresh')"
      >
        Обновить
      </button>
    </div>

    <div class="grid gap-3 sm:grid-cols-3">
      <div v-for="item in items" :key="item.label" class="rounded-3xl p-4" :class="item.class">
        <p class="text-xs" :class="item.labelClass">
          {{ item.label }}
        </p>

        <p class="mt-2 text-xl font-semibold" :class="item.valueClass">
          {{ item.value }}
        </p>
      </div>
    </div>
  </article>
</template>
