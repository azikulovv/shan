<script lang="ts" setup>
const quickActions = [
  {
    label: 'Добавить клиента',
    description: 'Создать контакт гостя',
    to: '/dashboard/clients',
  },
  {
    label: 'Создать банкет',
    description: 'Запланировать мероприятие',
    to: '/dashboard/banquets',
  },
  {
    label: 'Добавить зал',
    description: 'Настроить помещение',
    to: '/dashboard/halls',
  },
]
</script>

<template>
  <article class="rounded-4xl border border-slate-100 bg-white p-5 shadow-sm">
    <div class="mb-5">
      <h2 class="text-lg font-semibold tracking-tight text-slate-950">Быстрые действия</h2>

      <p class="mt-1 text-sm text-slate-500">Частые операции в системе</p>
    </div>

    <div class="space-y-3">
      <NuxtLink
        v-for="action in quickActions"
        :key="action.to"
        :to="action.to"
        class="group flex items-center justify-between gap-4 rounded-3xl bg-slate-50 p-4 transition hover:bg-slate-100"
      >
        <span>
          <span class="block text-sm font-semibold text-slate-800">
            {{ action.label }}
          </span>

          <span class="mt-1 block text-xs text-slate-500">
            {{ action.description }}
          </span>
        </span>

        <span
          class="flex size-9 shrink-0 items-center justify-center rounded-2xl bg-white text-slate-500 shadow-sm transition group-hover:text-slate-950"
        >
          →
        </span>
      </NuxtLink>
    </div>
  </article>
</template>
