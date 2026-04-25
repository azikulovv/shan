<script setup lang="ts">
definePageMeta({
  middleware: 'guest',
})

const auth = useAuth()

const form = reactive({
  email: '',
  password: '',
})

const isLoading = ref(false)
const errorMessage = ref('')

async function handleLogin() {
  errorMessage.value = ''
  isLoading.value = true

  try {
    await auth.login({
      email: form.email,
      password: form.password,
    })

    await navigateTo('/dashboard')
  } catch (error) {
    errorMessage.value = 'Неверный email или пароль'
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
        <div>
          <label class="mb-1.5 block text-sm font-medium text-gray-700"> Email </label>

          <input
            v-model="form.email"
            type="email"
            placeholder="admin@shanyraq.kz"
            class="h-12 w-full rounded-2xl border border-gray-200 bg-white px-4 text-sm outline-none transition focus:border-gray-900"
          />
        </div>

        <div>
          <label class="mb-1.5 block text-sm font-medium text-gray-700"> Пароль </label>

          <input
            v-model="form.password"
            type="password"
            placeholder="Введите пароль"
            class="h-12 w-full rounded-2xl border border-gray-200 bg-white px-4 text-sm outline-none transition focus:border-gray-900"
          />
        </div>

        <p v-if="errorMessage" class="text-sm text-red-500">
          {{ errorMessage }}
        </p>

        <button
          type="submit"
          :disabled="isLoading"
          class="h-12 w-full rounded-2xl bg-gray-950 text-sm font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {{ isLoading ? 'Входим...' : 'Войти' }}
        </button>
      </form>
    </section>
  </main>
</template>
