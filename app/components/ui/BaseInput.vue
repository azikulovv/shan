<script lang="ts" setup>
import type { BaseInputProps } from '~/types/ui/input'

const props = withDefaults(defineProps<BaseInputProps>(), {
  type: 'text',
  error: false,
})

const modelValue = defineModel<string | number>()

const inputMode = computed(() => {
  switch (props.type) {
    case 'email':
      return 'email'
    case 'tel':
      return 'numeric'
    default:
      return 'text'
  }
})
</script>

<template>
  <input
    v-model="modelValue"
    :type="type"
    :disabled="disabled"
    :inputmode="inputMode"
    :placeholder="placeholder"
    :aria-invalid="error"
    :aria-describedby="error ? 'input-error' : undefined"
    class="h-12 w-full rounded-2xl border border-gray-200 bg-white px-4 text-base text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-900 focus:ring-4 focus:ring-gray-100 duration-200 active:scale-[0.98]"
    :class="
      error
        ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-50'
        : 'border-gray-200 focus:border-gray-900 focus:ring-4 focus:ring-gray-100'
    "
  />
</template>
