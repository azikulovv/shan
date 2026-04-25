<script setup lang="ts">
import AppIcon from '~/components/ui/AppIcon.vue'
import SubscriptionStatusCard from './SubscriptionStatusCard.vue'

const props = defineProps<{
  activePath: string
  items: {
    href: string
    icon: string
    label: string
    description: string
    disabled?: boolean
  }[]
  user: {
    name: string
    role: string
    restaurantName: string
  }
}>()

const emit = defineEmits(['close'])

const subscription = useSubscription()

const userInitials = computed(() => {
  return props.user.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
})

function isActive(href: string) {
  if (href === '/dashboard') {
    return props.activePath === href
  }

  return props.activePath.startsWith(href)
}
</script>

<template>
  <div class="flex h-full flex-col">
    <div class="mb-8 flex items-center justify-between">
      <RouterLink to="/dashboard" class="flex items-center gap-3" @click="emit('close')">
        <div
          class="flex size-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white shadow-sm shadow-slate-950/20"
        >
          S
        </div>

        <div>
          <p class="text-sm font-semibold leading-none text-slate-950">Shanyraq</p>
          <p class="mt-1 text-xs text-slate-500">{{ user.restaurantName }}</p>
        </div>
      </RouterLink>

      <button
        type="button"
        class="inline-flex size-10 items-center justify-center rounded-2xl text-slate-500 transition hover:bg-slate-100 hover:text-slate-950 focus:outline-none focus:ring-4 focus:ring-slate-200 lg:hidden"
        aria-label="Close menu"
        @click="emit('close')"
      >
        <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>
    </div>

    <SubscriptionStatusCard
      :status="subscription.status.value"
      title="Тариф Pro"
      :trial-days-left="subscription.trialDaysLeft.value"
    />

    <nav class="mt-5 flex-1 space-y-1.5">
      <template v-for="item in items" :key="item.href">
        <RouterLink
          v-if="!item.disabled"
          :to="item.href"
          class="group flex items-center gap-3 rounded-2xl px-3 py-3 text-sm transition focus:outline-none focus:ring-4 focus:ring-slate-200"
          :class="
            isActive(item.href)
              ? 'bg-slate-950 text-white shadow-sm shadow-slate-950/20'
              : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
          "
          @click="emit('close')"
        >
          <span
            class="flex size-10 shrink-0 items-center justify-center rounded-2xl transition"
            :class="
              isActive(item.href)
                ? 'bg-white/10 text-white'
                : 'bg-white text-slate-500 shadow-sm ring-1 ring-slate-200 group-hover:text-slate-950'
            "
          >
            <AppIcon :name="item.icon" />
          </span>

          <span class="min-w-0 flex-1">
            <span class="block truncate font-medium">
              {{ item.label }}
            </span>

            <span
              class="mt-0.5 block truncate text-xs"
              :class="isActive(item.href) ? 'text-white/60' : 'text-slate-400'"
            >
              {{ item.description }}
            </span>
          </span>

          <span v-if="isActive(item.href)" class="size-1.5 rounded-full bg-white" />
        </RouterLink>

        <div
          v-else
          class="flex cursor-not-allowed items-center gap-3 rounded-2xl px-3 py-3 text-sm text-slate-400 opacity-60"
        >
          <span
            class="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-white text-slate-400 shadow-sm ring-1 ring-slate-200"
          >
            <AppIcon :name="item.icon" />
          </span>

          <span class="min-w-0 flex-1">
            <span class="block truncate font-medium">
              {{ item.label }}
            </span>

            <span class="mt-0.5 block truncate text-xs text-slate-400">
              {{ item.description }}
            </span>
          </span>
        </div>
      </template>
    </nav>

    <RouterLink
      to="/dashboard/profile"
      class="mt-6 block rounded-3xl bg-slate-50 p-3 transition hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-slate-200"
      @click="emit('close')"
    >
      <div class="flex items-center gap-3">
        <div
          class="flex size-11 items-center justify-center rounded-2xl bg-white text-sm font-semibold text-slate-800 shadow-sm ring-1 ring-slate-200"
        >
          {{ userInitials }}
        </div>

        <div class="min-w-0 flex-1">
          <p class="truncate text-sm font-semibold text-slate-950">
            {{ user.name }}
          </p>
          <p class="mt-0.5 truncate text-xs text-slate-500">
            {{ { OWNER: 'Владелец', ADMIN: 'Админ' }[user.role] }}
          </p>
        </div>

        <svg
          class="size-4 shrink-0 text-slate-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 18l6-6-6-6" />
        </svg>
      </div>
    </RouterLink>
  </div>
</template>
