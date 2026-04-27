<script setup lang="ts">
defineProps<{
  searchQuery: string
}>()

const emit = defineEmits<{
  'update:searchQuery': [value: string]
  create: []
}>()

function handleSearch(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:searchQuery', target.value)
}
</script>

<template>
  <header class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
    <div>
      <p class="text-sm font-medium text-slate-500">Shanyraq Clients</p>

      <h1 class="mt-1 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Клиенты</h1>

      <p class="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
        Управляйте базой гостей, телефонами и заметками для будущих банкетов.
      </p>
    </div>

    <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
      <div class="relative">
        <svg
          class="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-slate-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-4.35-4.35" />
          <circle cx="11" cy="11" r="7" />
        </svg>

        <input
          :value="searchQuery"
          type="text"
          placeholder="Поиск по имени, телефону, заметке..."
          class="h-11 w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-700 shadow-sm outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 sm:w-80"
          @input="handleSearch"
        />
      </div>

      <button
        type="button"
        class="inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-200"
        @click="emit('create')"
      >
        <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v14M5 12h14" />
        </svg>

        Добавить клиента
      </button>
    </div>
  </header>
</template>
