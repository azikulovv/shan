<script setup lang="ts">
import BaseInput from '@/components/ui/BaseInput.vue'
import type { FormInputProps } from '~/types/ui/input'

const props = withDefaults(defineProps<FormInputProps>(), {
  type: 'text',
  error: '',
})

const modelValue = defineModel<string | number>()
</script>

<template>
  <div class="flex flex-col gap-y-1.5">
    <label v-if="label" class="block text-sm font-medium text-gray-700"> {{ label }} </label>

    <BaseInput
      v-model="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :error="!!error"
    />

    <p v-if="error" id="input-error" class="mt-1.5 text-sm font-medium text-red-600">
      {{ error }}
    </p>
  </div>
</template>
