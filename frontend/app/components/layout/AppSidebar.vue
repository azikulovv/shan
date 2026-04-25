<template>
  <div class="min-h-screen bg-slate-50">
    <header
      class="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200/80 bg-white/80 px-4 backdrop-blur-xl lg:hidden"
    >
      <RouterLink to="/dashboard" class="flex items-center gap-3">
        <div
          class="flex size-10 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white shadow-sm"
        >
          S
        </div>

        <div>
          <p class="text-sm font-semibold leading-none text-slate-950">Shanyraq</p>
          <p class="mt-1 text-xs text-slate-500">{{ auth.user.restaurant.name }}</p>
        </div>
      </RouterLink>

      <button
        type="button"
        class="inline-flex size-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200"
        aria-label="Open menu"
        @click="openMobileMenu"
      >
        <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>
    </header>

    <Transition
      enter-active-class="transition-opacity duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isMobileMenuOpen"
        class="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-sm lg:hidden"
        @click="closeMobileMenu"
      />
    </Transition>

    <Transition
      enter-active-class="transition-transform duration-300 ease-out"
      enter-from-class="-translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition-transform duration-200 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="-translate-x-full"
    >
      <aside
        v-if="isMobileMenuOpen"
        class="fixed inset-y-0 left-0 z-50 flex w-75 flex-col border-r border-slate-200 bg-white p-4 shadow-2xl shadow-slate-950/10 lg:hidden"
      >
        <SidebarContent
          :items="navigationItems"
          :active-path="activePath"
          :user="user"
          @close="closeMobileMenu"
        />
      </aside>
    </Transition>

    <aside
      class="fixed inset-y-0 left-0 z-30 hidden w-72 flex-col border-r border-slate-200 bg-white p-4 shadow-sm lg:flex"
    >
      <SidebarContent :items="navigationItems" :active-path="activePath" :user="user" />
    </aside>

    <main class="lg:pl-72">
      <div class="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup>
import SidebarContent from '~/components/layout/SidebarContent.vue'

const route = useRoute()
const auth = useAuth()

const isMobileMenuOpen = ref(false)
const activePath = computed(() => route.path)

const user = {
  name: auth.user.name ?? 'Гость',
  role: auth.user.role ?? 'Пользователь',
  restaurantName: auth.user.restaurant.name ?? 'Ресторан',
}

const navigationItems = [
  {
    label: 'Главная',
    description: 'Обзор системы',
    href: '/dashboard',
    icon: 'dashboard',
  },
  {
    label: 'Клиенты',
    description: 'База гостей',
    href: '/dashboard/clients',
    icon: 'users',
  },
  {
    label: 'Банкеты',
    description: 'Мероприятия',
    href: '/dashboard/banquets',
    icon: 'calendar',
  },
  {
    label: 'Залы',
    description: 'Помещения',
    href: '/dashboard/halls',
    icon: 'building',
  },
  {
    label: 'Финансы',
    description: 'Оплаты',
    href: '/dashboard/finance',
    icon: 'wallet',
    disbaled: true,
  },
  {
    label: 'Настройки',
    description: 'Workspace',
    href: '/dashboard/settings',
    icon: 'settings',
    disbaled: true,
  },
]

function openMobileMenu() {
  isMobileMenuOpen.value = true
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
}

function handleKeydown(event) {
  if (event.key === 'Escape') {
    closeMobileMenu()
  }
}

watch(isMobileMenuOpen, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : ''
})

watch(
  () => route.path,
  () => {
    closeMobileMenu()
  },
)

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>
