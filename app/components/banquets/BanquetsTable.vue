<script setup lang="ts">
import type { Banquet } from '~/types/banquet'

defineProps<{
  banquets: Banquet[]
  eventTypes: string[]
  eventTypeFilter: string
  isDeleting: string | null
}>()

const emit = defineEmits<{
  'update:eventTypeFilter': [value: string]
  refresh: []
  create: []
  delete: [id: string]
}>()

function handleFilterChange(event: Event) {
  const target = event.target as HTMLSelectElement
  emit('update:eventTypeFilter', target.value)
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

function getClientInitials(name?: string | null) {
  if (!name) {
    return 'CL'
  }

  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function getBanquetTitle(banquet: Banquet) {
  return banquet.title || banquet.eventType || 'Без названия'
}

function getRemainingAmount(banquet: Banquet) {
  return Math.max(Number(banquet.totalAmount || 0) - Number(banquet.prepaymentAmount || 0), 0)
}
</script>

<template>
  <article class="min-w-0 overflow-hidden rounded-4xl border border-slate-100 bg-white shadow-sm">
    <div
      class="flex flex-col gap-3 border-b border-slate-100 p-5 lg:flex-row lg:items-center lg:justify-between"
    >
      <div>
        <h2 class="text-lg font-semibold tracking-tight text-slate-950">Список банкетов</h2>

        <p class="mt-1 text-sm text-slate-500">{{ banquets.length }} найдено</p>
      </div>

      <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
        <select
          :value="eventTypeFilter"
          class="h-10 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
          @change="handleFilterChange"
        >
          <option value="ALL">Все типы</option>

          <option v-for="type in eventTypes" :key="type" :value="type">
            {{ type }}
          </option>
        </select>

        <button
          type="button"
          class="inline-flex h-10 items-center justify-center rounded-2xl bg-slate-50 px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
          @click="emit('refresh')"
        >
          Обновить
        </button>
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
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 2v4M16 2v4M3 10h18" />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
            />
          </svg>
        </div>

        <h3 class="mt-4 text-sm font-semibold text-slate-950">Банкеты не найдены</h3>

        <p class="mt-1 text-sm text-slate-500">
          Создайте первый банкет или измените поисковый запрос.
        </p>

        <button
          type="button"
          class="mt-5 inline-flex h-11 items-center justify-center rounded-2xl bg-slate-950 px-5 text-sm font-medium text-white transition hover:bg-slate-800"
          @click="emit('create')"
        >
          Создать банкет
        </button>
      </div>
    </div>

    <div v-else class="max-w-full overflow-x-auto rounded-b-4xl">
      <table class="min-w-275 text-left">
        <thead>
          <tr
            class="border-b border-slate-100 bg-slate-50/70 text-xs uppercase tracking-wide text-slate-400"
          >
            <th class="px-5 py-4 font-semibold">Банкет</th>
            <th class="px-5 py-4 font-semibold">Клиент</th>
            <th class="px-5 py-4 font-semibold">Зал</th>
            <th class="px-5 py-4 font-semibold">Дата</th>
            <th class="px-5 py-4 font-semibold">Гостей</th>
            <th class="px-5 py-4 font-semibold">Сумма</th>
            <th class="px-5 py-4 font-semibold">Предоплата</th>
            <th class="px-5 py-4 font-semibold">Остаток</th>
            <th class="px-5 py-4 text-right font-semibold">Действия</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="banquet in banquets"
            :key="banquet.id"
            class="border-b border-slate-100 transition last:border-b-0 hover:bg-slate-50/80"
          >
            <td class="px-5 py-4">
              <div class="min-w-0">
                <div class="mb-1 flex items-center gap-2">
                  <span
                    class="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700"
                  >
                    {{ banquet.eventType || 'Банкет' }}
                  </span>
                </div>

                <p class="max-w-55 truncate text-sm font-semibold text-slate-950">
                  {{ getBanquetTitle(banquet) }}
                </p>

                <p v-if="banquet.comment" class="mt-1 max-w-55 truncate text-xs text-slate-400">
                  {{ banquet.comment }}
                </p>
              </div>
            </td>

            <td class="px-5 py-4">
              <div class="flex items-center gap-3">
                <div
                  class="flex size-9 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-xs font-semibold text-slate-700"
                >
                  {{ getClientInitials(banquet.client?.name) }}
                </div>

                <div class="min-w-0">
                  <p class="max-w-40 truncate text-sm font-medium text-slate-800">
                    {{ banquet.client?.name || 'Не указан' }}
                  </p>

                  <p
                    v-if="banquet.client?.phone"
                    class="mt-0.5 max-w-40 truncate text-xs text-slate-400"
                  >
                    {{ banquet.client.phone }}
                  </p>
                </div>
              </div>
            </td>

            <td class="px-5 py-4">
              <p class="max-w-35 truncate text-sm text-slate-600">
                {{ banquet.hall?.name || 'Без зала' }}
              </p>
            </td>

            <td class="px-5 py-4">
              <p class="whitespace-nowrap text-sm font-medium text-slate-700">
                {{ formatDate(banquet.date) }}
              </p>

              <p class="mt-1 text-xs text-slate-400">
                {{ formatTime(banquet.date, banquet.startTime) }}
              </p>
            </td>

            <td class="px-5 py-4">
              <span
                class="rounded-full whitespace-nowrap bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
              >
                {{ banquet.guestCount }} гостей
              </span>
            </td>

            <td class="px-5 py-4">
              <p class="text-sm font-semibold text-slate-950">
                {{ formatPrice(banquet.totalAmount || 0) }}
              </p>
            </td>

            <td class="px-5 py-4">
              <p class="text-sm font-semibold text-indigo-700">
                {{ formatPrice(banquet.prepaymentAmount || 0) }}
              </p>
            </td>

            <td class="px-5 py-4">
              <p class="text-sm font-semibold text-violet-700">
                {{ formatPrice(getRemainingAmount(banquet)) }}
              </p>
            </td>

            <td class="px-5 py-4">
              <div class="flex justify-end gap-x-2">
                <NuxtLink
                  type="button"
                  class="flex px-4 py-1 text-xs font-semibold shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition hover:bg-indigo-100 disabled:cursor-not-allowed disabled:opacity-50"
                  :to="`/dashboard/banquets/${banquet.id}`"
                >
                  Открыть
                </NuxtLink>

                <button
                  type="button"
                  class="flex size-9 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-50"
                  :disabled="isDeleting === banquet.id"
                  @click="emit('delete', banquet.id)"
                >
                  <svg
                    v-if="isDeleting !== banquet.id"
                    class="size-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 6h18" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 6V4h8v2" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 6l-1 14H6L5 6" />
                  </svg>

                  <span v-else class="text-xs"> ... </span>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </article>
</template>
