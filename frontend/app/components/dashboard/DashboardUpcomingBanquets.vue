<script lang="ts" setup>
import type { Banquet } from '~/types/banquet'

defineProps<{
  upcomingBanquets: Banquet[]
}>()
</script>

<template>
  <article class="overflow-hidden rounded-4xl border border-slate-100 bg-white shadow-sm">
    <div
      class="flex flex-col gap-3 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between"
    >
      <div>
        <h2 class="text-lg font-semibold tracking-tight text-slate-950">Ближайшие банкеты</h2>

        <p class="mt-1 text-sm text-slate-500">Следующие мероприятия по дате</p>
      </div>

      <NuxtLink
        to="/dashboard/banquets"
        class="inline-flex h-10 items-center justify-center rounded-2xl bg-slate-50 px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
      >
        Все банкеты
      </NuxtLink>
    </div>

    <div v-if="upcomingBanquets.length === 0" class="p-5">
      <div class="rounded-3xl bg-slate-50 p-6 text-center">
        <p class="text-sm font-medium text-slate-700">Ближайших банкетов пока нет</p>

        <p class="mt-1 text-sm text-slate-500">
          Когда появятся мероприятия, они будут отображаться здесь.
        </p>
      </div>
    </div>

    <div v-else class="divide-y divide-slate-100">
      <div
        v-for="banquet in upcomingBanquets"
        :key="banquet.id"
        class="p-5 transition hover:bg-slate-50/80"
      >
        <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div class="min-w-0">
            <div class="mb-2 flex flex-wrap gap-2">
              <span
                class="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700"
              >
                {{ banquet.eventType || 'Банкет' }}
              </span>

              <span
                class="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
              >
                {{ banquet.guestCount }} гостей
              </span>
            </div>

            <h3 class="truncate text-sm font-semibold text-slate-950">
              {{ banquet.title || banquet.eventType || 'Без названия' }}
            </h3>

            <p class="mt-1 text-sm text-slate-500">
              {{ banquet.client?.name || 'Клиент не указан' }}
              <span v-if="banquet.client?.phone"> · {{ banquet.client.phone }} </span>
            </p>
          </div>

          <div class="shrink-0 text-left sm:text-right">
            <p class="text-sm font-semibold text-slate-950">
              {{ formatDate(banquet.date) }}
            </p>

            <p class="mt-1 text-xs text-slate-500">
              {{ formatTime(banquet.date, banquet.startTime) }}
            </p>
          </div>
        </div>

        <div class="mt-4 grid gap-3 sm:grid-cols-3">
          <div class="rounded-2xl bg-slate-50 px-4 py-3">
            <p class="text-xs text-slate-400">Зал</p>

            <p class="mt-1 truncate text-sm font-medium text-slate-700">
              {{ banquet.hall?.name || 'Без зала' }}
            </p>
          </div>

          <div class="rounded-2xl bg-slate-50 px-4 py-3">
            <p class="text-xs text-slate-400">Сумма</p>

            <p class="mt-1 text-sm font-medium text-slate-700">
              {{ formatPrice(banquet.totalAmount || 0) }}
            </p>
          </div>

          <div class="rounded-2xl bg-slate-50 px-4 py-3">
            <p class="text-xs text-slate-400">Предоплата</p>

            <p class="mt-1 text-sm font-medium text-slate-700">
              {{ formatPrice(banquet.prepaymentAmount || 0) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
