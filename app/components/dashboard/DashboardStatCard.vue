<script lang="ts" setup>
defineProps<{
  stat: {
    label: string
    value: string | number
    description: string
    trend: string
    iconClass: string
    icon: string[]
  }
}>()
</script>

<template>
  <article
    class="group rounded-3xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-200/60"
  >
    <div class="flex items-start justify-between gap-4">
      <div>
        <p class="text-sm text-slate-500">
          {{ stat.label }}
        </p>

        <p class="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
          {{ stat.value }}
        </p>
      </div>

      <div
        class="flex size-11 items-center justify-center rounded-2xl shadow-sm ring-1 ring-slate-100 transition group-hover:scale-105"
        :class="stat.iconClass"
      >
        <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path
            v-for="path in stat.icon"
            :key="path"
            stroke-linecap="round"
            stroke-linejoin="round"
            :d="path"
          />
        </svg>
      </div>
    </div>

    <p class="mt-4 text-sm text-slate-500">
      {{ stat.description }}
    </p>

    <div
      class="mt-4 inline-flex rounded-full bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-500"
    >
      {{ stat.trend }}
    </div>
  </article>
</template>
