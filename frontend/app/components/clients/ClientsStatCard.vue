<script setup lang="ts">
defineProps<{
  label: string
  value: string | number
  description: string
  iconClass: string
  icon: string[]
}>()
</script>

<template>
  <article
    class="group rounded-3xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-200/60"
  >
    <div class="flex items-start justify-between gap-4">
      <div class="min-w-0">
        <p class="text-sm text-slate-500">
          {{ label }}
        </p>

        <p class="mt-3 truncate text-2xl font-semibold tracking-tight text-slate-950">
          {{ value }}
        </p>
      </div>

      <div
        class="flex size-11 items-center justify-center rounded-2xl shadow-sm ring-1 ring-slate-100 transition group-hover:scale-105"
        :class="iconClass"
      >
        <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path
            v-for="path in icon"
            :key="path"
            stroke-linecap="round"
            stroke-linejoin="round"
            :d="path"
          />
        </svg>
      </div>
    </div>

    <p class="mt-4 text-sm text-slate-500">
      {{ description }}
    </p>
  </article>
</template>
