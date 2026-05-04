<script setup lang="ts">
import BaseButton from '~/components/ui/BaseButton.vue'
import { registerOwnerSchema, type RegisterOwnerForm } from '~/schemas/auth/register.schema'

definePageMeta({
  middleware: 'guest',
})

const auth = useAuth()
const { errors, validate, setFormError } = useValidation(registerOwnerSchema)

const form = reactive<RegisterOwnerForm>({
  ownerName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  restaurantName: '',
})

const isLoading = ref(false)

async function handleRegister(formData: RegisterOwnerForm) {
  if (!validate(form).success) return
  isLoading.value = true

  try {
    const { confirmPassword, ...payload } = formData
    await auth.registerOwner(payload)
    await navigateTo('/dashboard')
  } catch {
    setFormError('Не удалось создать аккаунт. Возможно, email уже используется')
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <main class="min-h-screen bg-slate-50 px-4 py-6">
    <div class="mx-auto flex min-h-[calc(100vh-48px)] w-full max-w-6xl items-center">
      <div
        class="grid w-full overflow-hidden rounded-4xl border border-slate-100 bg-white shadow-xl shadow-slate-200/60 lg:grid-cols-[1fr_520px]"
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

          <form class="space-y-4" @submit.prevent="handleRegister(form)">
            <UiFormInput
              v-model="form.ownerName"
              :error="errors.ownerName"
              :disabled="isLoading"
              type="text"
              label="Имя владельца"
              placeholder="Например: Алдияр Сапаров"
            />

            <UiFormInput
              v-model="form.restaurantName"
              :error="errors.restaurantName"
              :disabled="isLoading"
              type="text"
              label="Название ресторана"
              placeholder="Например: Shanyraq"
            />

            <div class="grid gap-4 sm:grid-cols-2">
              <UiFormInput
                v-model="form.email"
                :error="errors.email"
                :disabled="isLoading"
                type="email"
                label="Email"
                placeholder="owner@shan.kz"
              />

              <UiFormInput
                v-model="form.phone"
                :error="errors.phone"
                :disabled="isLoading"
                type="tel"
                label="Телефон"
                placeholder="+7 777 000 00 00"
              />
            </div>

            <div class="grid gap-4 sm:grid-cols-2">
              <UiFormInput
                v-model="form.password"
                :error="errors.password"
                :disabled="isLoading"
                type="password"
                label="Пароль"
                placeholder="Минимум 8 символов"
              />

              <UiFormInput
                v-model="form.confirmPassword"
                :error="errors.confirmPassword"
                :disabled="isLoading"
                type="password"
                label="Повторите пароль"
                placeholder="Повторите пароль"
              />
            </div>

            <div class="rounded-3xl bg-slate-50 p-4">
              <p class="text-sm font-semibold text-slate-800">Роль: OWNER</p>

              <p class="mt-1 text-sm leading-6 text-slate-500">
                После регистрации вы сможете создавать аккаунты админов для сотрудников ресторана.
              </p>
            </div>

            <BaseButton type="submit" :full-width="true" :disabled="isLoading" :loading="isLoading">
              Создать аккаунт владельца
            </BaseButton>
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
