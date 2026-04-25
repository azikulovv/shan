<script setup lang="ts">
const auth = useAuth()

const navItems = [
  {
    label: 'Главная',
    to: '/dashboard',
  },
  {
    label: 'Клиенты',
    to: '/dashboard/clients',
  },
  {
    label: 'Залы',
    to: '/dashboard/halls',
  },
  {
    label: 'Банкеты',
    to: '/dashboard/banquets',
  },
]
</script>

<template>
  <div class="min-h-screen bg-[#f6f7f9]">
    <aside
      class="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white px-3 py-2 md:inset-y-0 md:left-0 md:right-auto md:w-64 md:border-r md:border-t-0 md:p-4"
    >
      <div class="hidden md:block mb-8">
        <p class="text-lg font-semibold text-gray-950">Shanyraq</p>
        <p class="mt-1 text-sm text-gray-500">Admin panel</p>
      </div>

      <nav class="flex justify-between gap-2 md:flex-col md:justify-start">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="rounded-2xl px-4 py-3 text-sm font-medium text-gray-500 transition hover:bg-gray-100 hover:text-gray-950"
          active-class="bg-gray-950 text-white hover:bg-gray-950 hover:text-white"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <button
        class="mt-6 hidden h-11 w-full rounded-2xl bg-gray-100 text-sm font-medium text-gray-700 transition hover:bg-gray-200 md:block"
        @click="auth.logout"
      >
        Выйти
      </button>
    </aside>

    <main class="px-4 pb-24 pt-5 md:ml-64 md:px-8 md:py-8">
      <slot />
    </main>
  </div>
</template>
