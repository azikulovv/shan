<script setup lang="ts">
import type { Banquet } from '~/types/banquet'

type PaymentFilter = 'ALL' | 'PAID' | 'PARTIAL' | 'UNPAID'
type DateFilter = 'ALL' | 'UPCOMING' | 'PAST'

defineProps<{
  banquets: Banquet[]
  filteredTotalAmount: number
  paymentFilter: PaymentFilter
  dateFilter: DateFilter
}>()

const emit = defineEmits<{
  'update:paymentFilter': [value: PaymentFilter]
  'update:dateFilter': [value: DateFilter]
}>()

function handlePaymentFilterChange(event: Event) {
  const target = event.target as HTMLSelectElement
  emit('update:paymentFilter', target.value as PaymentFilter)
}

function handleDateFilterChange(event: Event) {
  const target = event.target as HTMLSelectElement
  emit('update:dateFilter', target.value as DateFilter)
}

function formatPrice(value: number) {
  return new Intl.NumberFormat('ru-KZ', {
    style: 'currency',
    currency: 'KZT',
    maximumFractionDigits: 0,
  }).format(value)
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))
}

function formatTime(date: string, startTime?: string | null) {
  if (startTime) {
    return startTime
  }

  return new Intl.DateTimeFormat('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(date))
}

function getBanquetTitle(banquet: Banquet) {
  return banquet.title || banquet.eventType || 'Без названия'
}

function getRemainingAmount(banquet: Banquet) {
  return Math.max(Number(banquet.totalAmount || 0) - Number(banquet.prepaymentAmount || 0), 0)
}

function getPaymentPercent(banquet: Banquet) {
  const total = Number(banquet.totalAmount || 0)
  const paid = Number(banquet.prepaymentAmount || 0)

  if (!total) {
    return 0
  }

  return Math.min(Math.round((paid / total) * 100), 100)
}

function getPaymentStatus(banquet: Banquet) {
  const total = Number(banquet.totalAmount || 0)
  const paid = Number(banquet.prepaymentAmount || 0)

  if (total > 0 && paid >= total) {
    return {
      label: 'Оплачен',
      class: 'bg-emerald-50 text-emerald-700',
    }
  }

  if (paid > 0) {
    return {
      label: 'Частично',
      class: 'bg-indigo-50 text-indigo-700',
    }
  }

  return {
    label: 'Без оплаты',
    class: 'bg-amber-50 text-amber-700',
  }
}
</script>

<template>
  <article
    class="min-w-0 overflow-hidden rounded-4xl border border-slate-100 bg-white shadow-sm"
  >
    <div
      class="flex flex-col gap-3 border-b border-slate-100 p-5 lg:flex-row lg:items-center lg:justify-between"
    >
      <div>
        <h2 class="text-lg font-semibold tracking-tight text-slate-950">Финансы по банкетам</h2>

        <p class="mt-1 text-sm text-slate-500">
          {{ banquets.length }} найдено · {{ formatPrice(filteredTotalAmount) }}
        </p>
      </div>

      <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
        <select
          :value="paymentFilter"
          class="h-10 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
          @change="handlePaymentFilterChange"
        >
          <option value="ALL">Все оплаты</option>

          <option value="PAID">Оплачено</option>

          <option value="PARTIAL">Частично</option>

          <option value="UNPAID">Без оплаты</option>
        </select>

        <select
          :value="dateFilter"
          class="h-10 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
          @change="handleDateFilterChange"
        >
          <option value="ALL">Все даты</option>

          <option value="UPCOMING">Будущие</option>

          <option value="PAST">Прошедшие</option>
        </select>
      </div>
    </div>

    <div v-if="banquets.length === 0" class="p-5">
      <div class="rounded-3xl bg-slate-50 p-8 text-center">
        <div
          class="mx-auto flex size-12 items-center justify-center rounded-2xl bg-white text-slate-500 shadow-sm"
        >
          <svg
            class="size-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M20 7H5a2 2 0 0 1 0-4h13" />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5 7h15a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a3 3 0 0 1-3-3V6"
            />
          </svg>
        </div>

        <h3 class="mt-4 text-sm font-semibold text-slate-950">Финансовые записи не найдены</h3>

        <p class="mt-1 text-sm text-slate-500">Измените фильтр или добавьте суммы в банкетах.</p>
      </div>
    </div>

    <div v-else class="max-w-full overflow-x-auto rounded-b-4xl">
      <table class="min-w-280 text-left">
        <thead>
          <tr
            class="border-b border-slate-100 bg-slate-50/70 text-xs uppercase tracking-wide text-slate-400"
          >
            <th class="px-5 py-4 font-semibold">Банкет</th>
            <th class="px-5 py-4 font-semibold">Клиент</th>
            <th class="px-5 py-4 font-semibold">Дата</th>
            <th class="px-5 py-4 font-semibold">Сумма</th>
            <th class="px-5 py-4 font-semibold">Предоплата</th>
            <th class="px-5 py-4 font-semibold">Остаток</th>
            <th class="px-5 py-4 font-semibold">Оплачено</th>
            <th class="px-5 py-4 font-semibold">Статус</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="banquet in banquets"
            :key="banquet.id"
            class="border-b border-slate-100 transition last:border-b-0 hover:bg-slate-50/70"
          >
            <td class="px-5 py-4">
              <NuxtLink
                :to="`/dashboard/banquets/${banquet.id}`"
                class="block max-w-55 truncate text-sm font-semibold text-slate-950 transition hover:text-indigo-600 hover:underline"
              >
                {{ getBanquetTitle(banquet) }}
              </NuxtLink>

              <p class="mt-1 max-w-55 truncate text-xs text-slate-400">
                {{ banquet.eventType || 'Банкет' }}
              </p>
            </td>

            <td class="px-5 py-4">
              <p class="max-w-42.5 truncate text-sm font-medium text-slate-700">
                {{ banquet.client?.name || 'Не указан' }}
              </p>

              <p
                v-if="banquet.client?.phone"
                class="mt-1 max-w-42.5 truncate text-xs text-slate-400"
              >
                {{ banquet.client.phone }}
              </p>
            </td>

            <td class="px-5 py-4">
              <p class="text-sm font-medium text-slate-700">
                {{ formatDate(banquet.date) }}
              </p>

              <p class="mt-1 text-xs text-slate-400">
                {{ formatTime(banquet.date, banquet.startTime) }}
              </p>
            </td>

            <td class="px-5 py-4">
              <p class="text-sm font-semibold text-slate-950">
                {{ formatPrice(Number(banquet.totalAmount || 0)) }}
              </p>
            </td>

            <td class="px-5 py-4">
              <p class="text-sm font-semibold text-indigo-700">
                {{ formatPrice(Number(banquet.prepaymentAmount || 0)) }}
              </p>
            </td>

            <td class="px-5 py-4">
              <p class="text-sm font-semibold text-violet-700">
                {{ formatPrice(getRemainingAmount(banquet)) }}
              </p>
            </td>

            <td class="px-5 py-4">
              <div class="w-28">
                <div class="mb-1 flex items-center justify-between gap-2">
                  <span class="text-xs text-slate-400"> progress </span>

                  <span class="text-xs font-semibold text-slate-700">
                    {{ getPaymentPercent(banquet) }}%
                  </span>
                </div>

                <div class="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    class="h-full rounded-full bg-indigo-600"
                    :style="{ width: `${getPaymentPercent(banquet)}%` }"
                  />
                </div>
              </div>
            </td>

            <td class="px-5 py-4">
              <span
                class="rounded-full px-2.5 py-1 text-xs font-semibold"
                :class="getPaymentStatus(banquet).class"
              >
                {{ getPaymentStatus(banquet).label }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </article>
</template>
