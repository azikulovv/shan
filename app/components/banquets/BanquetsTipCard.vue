<script setup lang="ts">
const emit = defineEmits<{
  create: []
}>()
</script>

<template>
  <article
    class="rounded-4xl border border-indigo-100 bg-linear-to-br from-indigo-600 to-violet-600 p-5 text-white shadow-lg shadow-indigo-200"
  >
    <p class="text-sm font-medium text-white/70">Совет</p>

    <h2 class="mt-2 text-xl font-semibold tracking-tight">Заполняйте клиента и зал</h2>

    <p class="mt-2 text-sm leading-6 text-white/70">
      Так dashboard сможет показывать точную аналитику по загрузке залов, гостям и оплатам.
    </p>

    <button
      type="button"
      class="mt-5 h-11 rounded-2xl bg-white px-5 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"
      @click="emit('create')"
    >
      Создать банкет
    </button>
  </article>
</template>
