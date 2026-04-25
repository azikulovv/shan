<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
})
</script>

<template>
  <section>
    <div class="mb-6">
      <h1 class="text-2xl font-semibold tracking-tight text-gray-950">Панель управления</h1>

      <p class="mt-2 text-sm text-gray-500">Быстрый обзор ресторана, клиентов и банкетов.</p>
    </div>

    <div class="grid gap-4 md:grid-cols-3">
      <article class="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
        <p class="text-sm text-gray-500">Клиенты</p>
        <p class="mt-3 text-3xl font-semibold text-gray-950">—</p>
      </article>

      <article class="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
        <p class="text-sm text-gray-500">Банкеты</p>
        <p class="mt-3 text-3xl font-semibold text-gray-950">—</p>
      </article>

      <article class="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
        <p class="text-sm text-gray-500">Доход</p>
        <p class="mt-3 text-3xl font-semibold text-gray-950">—</p>
      </article>
    </div>
  </section>
</template>
