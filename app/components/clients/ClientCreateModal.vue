<script setup lang="ts">
import type { CreateClientPayload } from '~/types/client'

const props = defineProps<{
  isOpen: boolean
  isCreating: boolean
  errorMessage: string
}>()

const emit = defineEmits<{
  close: []
  submit: [payload: CreateClientPayload]
}>()

const form = reactive<CreateClientPayload>({
  name: '',
  phone: '',
  note: '',
})

function resetForm() {
  form.name = ''
  form.phone = ''
  form.note = ''
}

function handleSubmit() {
  emit('submit', {
    name: form.name,
    phone: form.phone,
    note: form.note,
  })
}

watch(
  () => props.isOpen,
  (isOpen) => {
    if (isOpen) {
      resetForm()
    }
  },
)
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 bg-slate-950/40 px-4 py-6 backdrop-blur-sm sm:px-6"
        @click.self="emit('close')"
      >
        <div class="flex min-h-full items-end justify-center sm:items-center">
          <Transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="translate-y-6 opacity-0 scale-95"
            enter-to-class="translate-y-0 opacity-100 scale-100"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="translate-y-0 opacity-100 scale-100"
            leave-to-class="translate-y-6 opacity-0 scale-95"
          >
            <div
              v-if="isOpen"
              class="w-full max-w-xl rounded-4xl border border-slate-100 bg-white p-5 shadow-2xl shadow-slate-950/20 sm:p-6"
            >
              <div class="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p class="text-sm font-medium text-indigo-600">Новый клиент</p>

                  <h2 class="mt-1 text-xl font-semibold tracking-tight text-slate-950">
                    Добавить клиента
                  </h2>

                  <p class="mt-2 text-sm leading-6 text-slate-500">
                    Заполните имя, телефон и заметку клиента.
                  </p>
                </div>

                <button
                  type="button"
                  class="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-slate-500 transition hover:bg-slate-100 hover:text-slate-950"
                  @click="emit('close')"
                >
                  <svg
                    class="size-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path stroke-linecap="round" d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <p
                v-if="errorMessage"
                class="mb-4 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600"
              >
                {{ errorMessage }}
              </p>

              <form class="space-y-4" @submit.prevent="handleSubmit">
                <div>
                  <label class="mb-1.5 block text-sm font-medium text-slate-700">
                    Имя клиента
                  </label>

                  <input
                    v-model="form.name"
                    type="text"
                    placeholder="Например: Айдос"
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

                <div>
                  <label class="mb-1.5 block text-sm font-medium text-slate-700"> Заметка </label>

                  <textarea
                    v-model="form.note"
                    rows="4"
                    placeholder="Например: постоянный клиент, предпочитает большой зал"
                    class="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                  />
                </div>

                <div class="grid gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    class="h-12 rounded-2xl bg-slate-50 px-5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                    @click="emit('close')"
                  >
                    Отмена
                  </button>

                  <button
                    type="submit"
                    :disabled="isCreating"
                    class="h-12 rounded-2xl bg-slate-950 px-5 text-sm font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {{ isCreating ? 'Создаём...' : 'Создать клиента' }}
                  </button>
                </div>
              </form>
            </div>
          </Transition>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
