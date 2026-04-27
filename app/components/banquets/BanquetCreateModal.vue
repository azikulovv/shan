<script setup lang="ts">
import type { CreateBanquetPayload } from '~/types/banquet'
import type { Client } from '~/types/client'
import type { Hall } from '~/types/hall'

const props = defineProps<{
  isOpen: boolean
  isCreating: boolean
  errorMessage: string
  clients: Client[]
  halls: Hall[]
  eventTypeSuggestions: string[]
}>()

const emit = defineEmits<{
  close: []
  submit: [payload: CreateBanquetPayload]
}>()

const form = reactive<CreateBanquetPayload>({
  title: '',
  eventType: '',
  guestCount: 10,

  date: '',
  startTime: '',

  clientId: '',
  hallId: '',

  totalAmount: 0,
  prepaymentAmount: 0,

  comment: '',
})

function resetForm() {
  form.title = ''
  form.eventType = ''
  form.guestCount = 10

  form.date = ''
  form.startTime = ''

  form.clientId = ''
  form.hallId = ''

  form.totalAmount = 0
  form.prepaymentAmount = 0

  form.comment = ''
}

function handleSubmit() {
  emit('submit', {
    title: form.title,
    eventType: form.eventType,
    guestCount: form.guestCount,

    date: form.date,
    startTime: form.startTime,

    clientId: form.clientId,
    hallId: form.hallId,

    totalAmount: form.totalAmount,
    prepaymentAmount: form.prepaymentAmount,

    comment: form.comment,
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
              class="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-4xl border border-slate-100 bg-white p-5 shadow-2xl shadow-slate-950/20 sm:p-6"
            >
              <div class="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p class="text-sm font-medium text-indigo-600">Новый банкет</p>

                  <h2 class="mt-1 text-xl font-semibold tracking-tight text-slate-950">
                    Создать банкет
                  </h2>

                  <p class="mt-2 text-sm leading-6 text-slate-500">
                    Заполните данные мероприятия: клиент, дата, зал, гости и оплата.
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
                    Название банкета
                  </label>

                  <input
                    v-model="form.title"
                    type="text"
                    placeholder="Например: Свадьба Айдоса и Аружан"
                    class="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                  />
                </div>

                <div>
                  <label class="mb-1.5 block text-sm font-medium text-slate-700">
                    Тип мероприятия
                  </label>

                  <select
                    v-model="form.eventType"
                    class="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                  >
                    <option value="">Не выбран</option>

                    <option v-for="type in eventTypeSuggestions" :key="type" :value="type">
                      {{ type }}
                    </option>
                  </select>
                </div>

                <div class="grid gap-4 md:grid-cols-2">
                  <div>
                    <label class="mb-1.5 block text-sm font-medium text-slate-700"> Клиент </label>

                    <select
                      v-model="form.clientId"
                      class="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                    >
                      <option value="">Выберите клиента</option>

                      <option v-for="client in clients" :key="client.id" :value="client.id">
                        {{ client.name }} — {{ client.phone }}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label class="mb-1.5 block text-sm font-medium text-slate-700"> Зал </label>

                    <select
                      v-model="form.hallId"
                      class="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                    >
                      <option value="">Без зала</option>

                      <option v-for="hall in halls" :key="hall.id" :value="hall.id">
                        {{ hall.name }}
                        <template v-if="hall.capacity"> — до {{ hall.capacity }} гостей </template>
                      </option>
                    </select>
                  </div>
                </div>

                <div class="grid gap-4 md:grid-cols-3">
                  <div>
                    <label class="mb-1.5 block text-sm font-medium text-slate-700"> Дата </label>

                    <input
                      v-model="form.date"
                      type="date"
                      class="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                    />
                  </div>

                  <div>
                    <label class="mb-1.5 block text-sm font-medium text-slate-700"> Время </label>

                    <input
                      v-model="form.startTime"
                      type="time"
                      class="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                    />
                  </div>

                  <div>
                    <label class="mb-1.5 block text-sm font-medium text-slate-700"> Гостей </label>

                    <input
                      v-model.number="form.guestCount"
                      type="number"
                      min="1"
                      class="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                    />
                  </div>
                </div>

                <div class="grid gap-4 md:grid-cols-2">
                  <div>
                    <label class="mb-1.5 block text-sm font-medium text-slate-700">
                      Общая сумма
                    </label>

                    <input
                      v-model.number="form.totalAmount"
                      type="number"
                      min="0"
                      placeholder="0"
                      class="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                    />
                  </div>

                  <div>
                    <label class="mb-1.5 block text-sm font-medium text-slate-700">
                      Предоплата
                    </label>

                    <input
                      v-model.number="form.prepaymentAmount"
                      type="number"
                      min="0"
                      placeholder="0"
                      class="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                    />
                  </div>
                </div>

                <div>
                  <label class="mb-1.5 block text-sm font-medium text-slate-700">
                    Комментарий
                  </label>

                  <textarea
                    v-model="form.comment"
                    rows="4"
                    placeholder="Например: нужен проектор, отдельный стол, детская зона"
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
                    {{ isCreating ? 'Создаём...' : 'Создать банкет' }}
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
