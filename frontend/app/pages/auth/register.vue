<script setup lang="ts">
import type { RegisterOwnerPayload } from '~/types/auth'

definePageMeta({
  middleware: 'guest',
})

const auth = useAuth()

const form = reactive<RegisterOwnerPayload>({
  name: '',
  email: '',
  phone: '',
  password: '',
  restaurantName: '',
})

const confirmPassword = ref('')
const isLoading = ref(false)
const errorMessage = ref('')

async function handleRegister() {
  errorMessage.value = ''

  if (!form.name.trim()) {
    errorMessage.value = 'Введите имя'
    return
  }

  if (!form.email.trim()) {
    errorMessage.value = 'Введите email'
    return
  }

  if (!form.restaurantName.trim()) {
    errorMessage.value = 'Введите название ресторана'
    return
  }

  if (form.password.length < 6) {
    errorMessage.value = 'Пароль должен быть минимум 6 символов'
    return
  }

  if (form.password !== confirmPassword.value) {
    errorMessage.value = 'Пароли не совпадают'
    return
  }

  isLoading.value = true

  try {
    await auth.registerOwner({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone?.trim() || undefined,
      password: form.password,
      restaurantName: form.restaurantName.trim(),
    })

    await navigateTo('/dashboard')
  } catch {
    errorMessage.value = 'Не удалось создать аккаунт. Возможно, email уже используется'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <main class="min-h-screen bg-slate-50 px-4 py-6">
    <div class="mx-auto flex min-h-[calc(100vh-48px)] w-full max-w-6xl items-center">
      <div
        class="grid w-full overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-xl shadow-slate-200/60 lg:grid-cols-[1fr_520px]"
      >
        <!-- Left visual -->
        <section class="relative hidden overflow-hidden bg-slate-950 p-8 text-white lg:block">
          <div class="absolute right-0 top-0 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl" />
          <div class="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

          <div class="relative flex h-full flex-col justify-between">
            <div>
              <div class="flex items-center gap-3">
                <div
                  class="flex size-12 items-center justify-center rounded-2xl bg-white text-base font-bold text-slate-950"
                >
                  S
                </div>

                <div>
                  <p class="text-base font-semibold">Shanyraq</p>
                  <p class="mt-0.5 text-sm text-white/50">Restaurant SaaS</p>
                </div>
              </div>

              <div class="mt-16">
                <div
                  class="mb-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80 ring-1 ring-white/10"
                >
                  Owner Workspace
                </div>

                <h1 class="max-w-md text-4xl font-semibold tracking-tight">
                  Создайте рабочее пространство для ресторана
                </h1>

                <p class="mt-4 max-w-md text-sm leading-6 text-white/60">
                  Управляйте клиентами, банкетами, залами, оплатами и администраторами из одной
                  современной панели.
                </p>
              </div>
            </div>

            <div class="grid grid-cols-3 gap-3">
              <div class="rounded-3xl bg-white/10 p-4 ring-1 ring-white/10">
                <p class="text-2xl font-semibold">CRM</p>
                <p class="mt-1 text-xs text-white/50">Клиенты</p>
              </div>

              <div class="rounded-3xl bg-white/10 p-4 ring-1 ring-white/10">
                <p class="text-2xl font-semibold">ERP</p>
                <p class="mt-1 text-xs text-white/50">Банкеты</p>
              </div>

              <div class="rounded-3xl bg-white/10 p-4 ring-1 ring-white/10">
                <p class="text-2xl font-semibold">SaaS</p>
                <p class="mt-1 text-xs text-white/50">Подписка</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Form -->
        <section class="p-5 sm:p-8">
          <div class="mb-8 lg:hidden">
            <div class="flex items-center gap-3">
              <div
                class="flex size-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white"
              >
                S
              </div>

              <div>
                <p class="text-sm font-semibold text-slate-950">Shanyraq</p>
                <p class="mt-0.5 text-xs text-slate-500">Restaurant SaaS</p>
              </div>
            </div>
          </div>

          <div class="mb-7">
            <p class="text-sm font-medium text-indigo-600">Регистрация владельца</p>

            <h2 class="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
              Создать аккаунт
            </h2>

            <p class="mt-2 text-sm leading-6 text-slate-500">
              Этот аккаунт станет владельцем ресторана и сможет создавать админов.
            </p>
          </div>

          <p
            v-if="errorMessage"
            class="mb-5 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600"
          >
            {{ errorMessage }}
          </p>

          <form class="space-y-4" @submit.prevent="handleRegister">
            <div>
              <label class="mb-1.5 block text-sm font-medium text-slate-700"> Имя владельца </label>

              <input
                v-model="form.name"
                type="text"
                placeholder="Например: Алдияр Сапаров"
                class="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
              />
            </div>

            <div>
              <label class="mb-1.5 block text-sm font-medium text-slate-700">
                Название ресторана
              </label>

              <input
                v-model="form.restaurantName"
                type="text"
                placeholder="Например: Shanyraq"
                class="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
              />
            </div>

            <div class="grid gap-4 sm:grid-cols-2">
              <div>
                <label class="mb-1.5 block text-sm font-medium text-slate-700"> Email </label>

                <input
                  v-model="form.email"
                  type="email"
                  placeholder="example@mail.com"
                  class="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                />
              </div>

              <div>
                <label class="mb-1.5 block text-sm font-medium text-slate-700"> Телефон </label>

                <input
                  v-model="form.phone"
                  type="tel"
                  placeholder="+7 777 000 00 00"
                  class="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                />
              </div>
            </div>

            <div class="grid gap-4 sm:grid-cols-2">
              <div>
                <label class="mb-1.5 block text-sm font-medium text-slate-700"> Пароль </label>

                <input
                  v-model="form.password"
                  type="password"
                  placeholder="Минимум 6 символов"
                  class="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                />
              </div>

              <div>
                <label class="mb-1.5 block text-sm font-medium text-slate-700">
                  Повторите пароль
                </label>

                <input
                  v-model="confirmPassword"
                  type="password"
                  placeholder="Повторите пароль"
                  class="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                />
              </div>
            </div>

            <div class="rounded-3xl bg-slate-50 p-4">
              <p class="text-sm font-semibold text-slate-800">Роль: OWNER</p>

              <p class="mt-1 text-sm leading-6 text-slate-500">
                После регистрации вы сможете создавать аккаунты админов для сотрудников ресторана.
              </p>
            </div>

            <button
              type="submit"
              :disabled="isLoading"
              class="h-12 w-full rounded-2xl bg-slate-950 text-sm font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {{ isLoading ? 'Создаём аккаунт...' : 'Создать аккаунт владельца' }}
            </button>
          </form>

          <div class="mt-6 text-center">
            <p class="text-sm text-slate-500">
              Уже есть аккаунт?
              <NuxtLink to="/auth/login" class="font-medium text-slate-950 hover:underline">
                Войти
              </NuxtLink>
            </p>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>
