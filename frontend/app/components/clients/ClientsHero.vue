<script setup lang="ts">
defineProps<{
  totalClients: number
  clientsWithNote: number
  latestClientName: string
}>()
</script>

<template>
  <article class="overflow-hidden rounded-4xl border border-indigo-100 bg-white shadow-sm">
    <div class="relative p-5 sm:p-6 lg:p-7">
      <div class="absolute right-0 top-0 h-40 w-40 rounded-full bg-indigo-100 blur-3xl" />
      <div class="absolute bottom-0 right-20 h-32 w-32 rounded-full bg-violet-100 blur-3xl" />

      <div class="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div
            class="mb-4 inline-flex rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-100"
          >
            База гостей
          </div>

          <h2 class="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            {{ totalClients }} клиентов в системе
          </h2>

          <p class="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Храните имена, телефоны и заметки клиентов, чтобы быстрее создавать банкеты.
          </p>
        </div>

        <div class="grid grid-cols-2 gap-3 sm:min-w-[320px]">
          <div class="rounded-3xl bg-slate-950 p-4 text-white shadow-lg shadow-slate-950/10">
            <p class="text-xs text-white/60">С заметками</p>

            <p class="mt-2 text-2xl font-semibold">
              {{ clientsWithNote }}
            </p>
          </div>

          <div class="rounded-3xl border border-slate-200 bg-slate-50 p-4">
            <p class="text-xs text-slate-500">Последний клиент</p>

            <p class="mt-2 truncate text-lg font-semibold text-slate-950">
              {{ latestClientName }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
