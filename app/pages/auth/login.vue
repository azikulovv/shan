<script setup lang="ts">
import BaseButton from '~/components/ui/BaseButton.vue'
import { loginSchema } from '~/schemas/auth/login.schema'

definePageMeta({
  middleware: 'guest',
})

useSeoMeta({
  title: 'Вход в систему',
  description: 'Вход в личный кабинет Shanyraq для управления банкетами ресторана.',
  robots: 'index, follow',
})

const auth = useAuth()

const form = reactive({
  email: '',
  password: '',
})

const isLoading = ref(false)

const { errors, validate, setFormError } = useValidation(loginSchema)

async function handleLogin() {
  const result = validate(form)
  if (!result.success) return
  isLoading.value = true

  try {
    await auth.login({
      email: form.email,
      password: form.password,
    })

    await navigateTo('/dashboard')
  } catch (error) {
    setFormError('Не удалось войти. Проверьте данные и попробуйте снова.')
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <main class="min-h-screen bg-[#f6f7f9] px-4 py-6 flex items-center justify-center">
    <section class="w-full max-w-md rounded-3xl bg-white p-6 shadow-sm border border-gray-100">
      <div class="mb-8">
        <p class="text-sm font-medium text-gray-500">Shanyraq</p>

        <h1 class="mt-2 text-2xl font-semibold tracking-tight text-gray-950">Вход в систему</h1>

        <p class="mt-2 text-sm leading-6 text-gray-500">
          Управляйте клиентами, банкетами и рестораном из одного кабинета.
        </p>
      </div>

      <form class="space-y-4" @submit.prevent="handleLogin">
        <UiFormInput
          v-model="form.email"
          :error="errors.email"
          :disabled="isLoading"
          type="email"
          label="Email"
          placeholder="admin@shan.kz"
        />

        <UiFormInput
          v-model="form.password"
          :error="errors.password"
          :disabled="isLoading"
          type="password"
          label="Пароль"
          placeholder="Введите пароль"
        />

        <BaseButton type="submit" :disabled="isLoading" :full-width="true" :loading="isLoading">
          Войти
        </BaseButton>

        <div class="mt-4 text-center">
          <p class="text-sm text-slate-500">
            Нет аккаунта владельца?
            <NuxtLink to="/auth/register" class="font-medium text-slate-950 hover:underline">
              Создать аккаунт
            </NuxtLink>
          </p>
        </div>
      </form>
    </section>
  </main>
</template>
