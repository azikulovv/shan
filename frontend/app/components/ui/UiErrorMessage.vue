<script lang="ts" setup>
defineProps<{
  errorMessage: string | null
}>()
</script>

<template>
  <p
    v-if="errorMessage"
    class="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600"
  >
    {{ errorMessage }}
  </p>
</template>
