<script setup lang="ts">
import type { SubscriptionStatus } from '~/types/subscription'

definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
})

const auth = useAuth()
const subscription = useSubscription()

const isRefreshing = ref(false)
const errorMessage = ref('')

const roleLabels = {
  OWNER: 'Владелец',
  ADMIN: 'Администратор',
}

const subscriptionLabels: Record<SubscriptionStatus, string> = {
  TRIAL: 'Пробный период',
  ACTIVE: 'Подписка активна',
  PAST_DUE: 'Не оплачена',
  CANCELLED: 'Отменён',
  EXPIRED: 'Срок подписки истек',
}

const subscriptionClasses: Record<SubscriptionStatus, string> = {
  TRIAL: 'bg-blue-50 text-blue-700 ring-blue-100',
  ACTIVE: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
  PAST_DUE: 'bg-amber-50 text-amber-700 ring-amber-100',
  CANCELLED: 'bg-slate-100 text-slate-700 ring-slate-200',
  EXPIRED: 'bg-red-50 text-red-700 ring-red-100',
}

const user = computed(() => auth.user)
const restaurant = computed(() => user.value?.restaurant || null)

const subscriptionStatus = computed<SubscriptionStatus>(() => {
  return subscription.status.value || restaurant.value?.subscriptionStatus || 'TRIAL'
})

const userInitials = computed(() => {
  const name = user.value?.name || 'User'

  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
})

const profileItems = computed(() => [
  {
    label: 'Имя',
    value: user.value?.name || 'Не указано',
  },
  {
    label: 'Email',
    value: user.value?.email || 'Не указано',
  },
  {
    label: 'Телефон',
    value: user.value?.phone || 'Не указан',
  },
  {
    label: 'Роль',
    value: user.value?.role ? roleLabels[user.value.role] : 'Не указана',
  },
])

const restaurantItems = computed(() => [
  {
    label: 'Название ресторана',
    value: restaurant.value?.name || 'Не указано',
  },
  {
    label: 'Restaurant ID',
    value: user.value?.restaurantId || 'Не указан',
  },
  {
    label: 'Статус подписки',
    value: subscriptionLabels[subscriptionStatus.value],
  },
  {
    label: 'Trial до',
    value: formatDate(
      restaurant.value?.trialEndsAt || subscription.subscription.value?.trialEndsAt,
    ),
  },
])

const accountStats = computed(() => [
  {
    label: 'Роль',
    value: user.value?.role ? roleLabels[user.value.role] : '—',
    description: 'Уровень доступа',
    iconClass: 'bg-indigo-50 text-indigo-600',
    icon: ['M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z', 'M20 21a8 8 0 1 0-16 0'],
  },
  {
    label: 'Ресторан',
    value: restaurant.value?.name || '—',
    description: 'Текущий workspace',
    iconClass: 'bg-violet-50 text-violet-600',
    icon: ['M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16', 'M18 21V9h2a2 2 0 0 1 2 2v10', 'M3 21h18'],
  },
  {
    label: 'Подписка',
    value: subscriptionLabels[subscriptionStatus.value],
    description: 'Текущий статус',
    iconClass: 'bg-blue-50 text-blue-600',
    icon: [
      'M20 7H5a2 2 0 0 1 0-4h13',
      'M5 7h15a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a3 3 0 0 1-3-3V6',
      'M17 14h.01',
    ],
  },
])

function formatDate(date?: string | null) {
  if (!date) {
    return 'Не указано'
  }

  return new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))
}

async function refreshProfile() {
  isRefreshing.value = true
  errorMessage.value = ''

  try {
    await Promise.all([auth.fetchMe(), subscription.fetchSubscription()])
  } catch {
    errorMessage.value = 'Не удалось обновить данные профиля'
  } finally {
    isRefreshing.value = false
  }
}

onMounted(async () => {
  if (!auth.user) {
    await auth.fetchMe()
  }

  await subscription.fetchSubscription()
})
</script>

<template>
  <section class="min-h-screen">
    <div class="space-y-5">
      <!-- Header -->
      <header class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p class="text-sm font-medium text-slate-500">Shanyraq Profile</p>

          <h1 class="mt-1 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            Профиль
          </h1>

          <p class="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Информация о пользователе, роли, ресторане и текущей подписке.
          </p>
        </div>

        <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            :disabled="isRefreshing"
            class="inline-flex h-11 items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 hover:text-slate-950 disabled:cursor-not-allowed disabled:opacity-60"
            @click="refreshProfile"
          >
            {{ isRefreshing ? 'Обновляем...' : 'Обновить данные' }}
          </button>

          <button
            type="button"
            class="inline-flex h-11 items-center justify-center rounded-2xl bg-slate-950 px-5 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-200"
            @click="auth.logout"
          >
            Выйти
          </button>
        </div>
      </header>

      <p
        v-if="errorMessage"
        class="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600"
      >
        {{ errorMessage }}
      </p>

      <!-- Hero profile card -->
      <article class="overflow-hidden rounded-[2rem] border border-indigo-100 bg-white shadow-sm">
        <div class="relative p-5 sm:p-6 lg:p-7">
          <div class="absolute right-0 top-0 h-40 w-40 rounded-full bg-indigo-100 blur-3xl" />
          <div class="absolute bottom-0 right-20 h-32 w-32 rounded-full bg-violet-100 blur-3xl" />

          <div class="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div class="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div
                class="flex size-20 shrink-0 items-center justify-center rounded-[1.75rem] bg-slate-950 text-2xl font-semibold text-white shadow-lg shadow-slate-950/10"
              >
                {{ userInitials }}
              </div>

              <div>
                <div
                  class="mb-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1"
                  :class="subscriptionClasses[subscriptionStatus]"
                >
                  {{ subscriptionLabels[subscriptionStatus] }}
                </div>

                <h2 class="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  {{ user?.name || 'Пользователь' }}
                </h2>

                <p class="mt-2 text-sm leading-6 text-slate-500">
                  {{ user?.email || 'Email не указан' }}
                  <span v-if="user?.phone"> · {{ user.phone }} </span>
                </p>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-3 sm:min-w-[320px]">
              <div class="rounded-3xl bg-slate-950 p-4 text-white shadow-lg shadow-slate-950/10">
                <p class="text-xs text-white/60">Роль</p>

                <p class="mt-2 truncate text-xl font-semibold">
                  {{ user?.role ? roleLabels[user.role] : '—' }}
                </p>
              </div>

              <div class="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <p class="text-xs text-slate-500">Workspace</p>

                <p class="mt-2 truncate text-xl font-semibold text-slate-950">
                  {{ restaurant?.name || '—' }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <!-- Stats -->
      <div class="grid gap-4 md:grid-cols-3">
        <article
          v-for="stat in accountStats"
          :key="stat.label"
          class="group rounded-3xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-200/60"
        >
          <div class="flex items-start justify-between gap-4">
            <div class="min-w-0">
              <p class="text-sm text-slate-500">
                {{ stat.label }}
              </p>

              <p class="mt-3 truncate text-2xl font-semibold tracking-tight text-slate-950">
                {{ stat.value }}
              </p>
            </div>

            <div
              class="flex size-11 items-center justify-center rounded-2xl shadow-sm ring-1 ring-slate-100 transition group-hover:scale-105"
              :class="stat.iconClass"
            >
              <svg
                class="size-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
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
        </article>
      </div>

      <div class="grid gap-5 xl:grid-cols-[1fr_360px]">
        <div class="space-y-5">
          <!-- Profile info -->
          <article
            class="overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm"
          >
            <div class="border-b border-slate-100 p-5">
              <h2 class="text-lg font-semibold tracking-tight text-slate-950">Данные аккаунта</h2>

              <p class="mt-1 text-sm text-slate-500">Основная информация о текущем пользователе.</p>
            </div>

            <div class="grid gap-4 p-5 md:grid-cols-2">
              <div
                v-for="item in profileItems"
                :key="item.label"
                class="rounded-3xl bg-slate-50 p-4"
              >
                <p class="text-xs text-slate-400">
                  {{ item.label }}
                </p>

                <p class="mt-2 break-words text-sm font-semibold text-slate-800">
                  {{ item.value }}
                </p>
              </div>
            </div>
          </article>

          <!-- Restaurant info -->
          <article
            class="overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm"
          >
            <div class="border-b border-slate-100 p-5">
              <h2 class="text-lg font-semibold tracking-tight text-slate-950">
                Ресторан и workspace
              </h2>

              <p class="mt-1 text-sm text-slate-500">
                Данные ресторана, к которому привязан пользователь.
              </p>
            </div>

            <div class="grid gap-4 p-5 md:grid-cols-2">
              <div
                v-for="item in restaurantItems"
                :key="item.label"
                class="rounded-3xl bg-slate-50 p-4"
              >
                <p class="text-xs text-slate-400">
                  {{ item.label }}
                </p>

                <p class="mt-2 break-words text-sm font-semibold text-slate-800">
                  {{ item.value }}
                </p>
              </div>
            </div>
          </article>
        </div>

        <!-- Right panel -->
        <aside class="space-y-5">
          <!-- Subscription -->
          <article class="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-sm">
            <div class="mb-5 flex items-center justify-between gap-4">
              <div>
                <h2 class="text-lg font-semibold tracking-tight text-slate-950">Подписка</h2>

                <p class="mt-1 text-sm text-slate-500">Текущий статус доступа</p>
              </div>

              <span
                class="rounded-full px-3 py-1 text-xs font-semibold ring-1"
                :class="subscriptionClasses[subscriptionStatus]"
              >
                {{ subscriptionLabels[subscriptionStatus] }}
              </span>
            </div>

            <div class="space-y-3">
              <div class="rounded-3xl bg-slate-50 p-4">
                <p class="text-xs text-slate-400">Статус</p>

                <p class="mt-2 text-sm font-semibold text-slate-800">
                  {{ subscriptionLabels[subscriptionStatus] }}
                </p>
              </div>

              <div class="rounded-3xl bg-slate-50 p-4">
                <p class="text-xs text-slate-400">Trial заканчивается</p>

                <p class="mt-2 text-sm font-semibold text-slate-800">
                  {{
                    formatDate(
                      restaurant?.trialEndsAt || subscription.subscription.value?.trialEndsAt,
                    )
                  }}
                </p>
              </div>

              <div
                v-if="subscription.trialDaysLeft.value !== null"
                class="rounded-3xl bg-indigo-50 p-4"
              >
                <p class="text-xs text-indigo-600">Осталось дней</p>

                <p class="mt-2 text-2xl font-semibold text-indigo-700">
                  {{ subscription.trialDaysLeft.value }}
                </p>
              </div>
            </div>
          </article>

          <!-- Access -->
          <article class="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-sm">
            <div class="mb-5">
              <h2 class="text-lg font-semibold tracking-tight text-slate-950">Доступ</h2>

              <p class="mt-1 text-sm text-slate-500">Что доступно текущей роли.</p>
            </div>

            <div class="space-y-3">
              <div class="rounded-3xl bg-slate-50 p-4">
                <p class="text-sm font-semibold text-slate-800">
                  {{ user?.role === 'OWNER' ? 'Полный доступ' : 'Рабочий доступ' }}
                </p>

                <p class="mt-1 text-sm leading-6 text-slate-500">
                  <template v-if="user?.role === 'OWNER'">
                    Вы можете управлять рестораном, админами, подпиской и всеми рабочими модулями.
                  </template>

                  <template v-else>
                    Вы можете работать с клиентами, банкетами и залами без управления подпиской.
                  </template>
                </p>
              </div>
            </div>
          </article>
        </aside>
      </div>
    </div>
  </section>
</template>
