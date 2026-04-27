<template>
  <div class="rounded-3xl border p-3 transition" :class="currentVariant.cardClass">
    <div class="flex items-center gap-3">
      <div
        class="flex size-10 shrink-0 items-center justify-center rounded-2xl"
        :class="currentVariant.iconClass"
      >
        <svg
          class="size-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path v-for="path in currentVariant.icon" :key="path" :d="path" />
        </svg>
      </div>

      <div class="min-w-0 flex-1">
        <div class="flex items-center gap-2">
          <p class="truncate text-sm font-semibold text-slate-950">
            {{ titleText }}
          </p>

          <span
            class="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide"
            :class="currentVariant.badgeClass"
          >
            {{ currentVariant.label }}
          </span>
        </div>

        <p class="mt-0.5 truncate text-xs text-slate-500">
          {{ descriptionText }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { subscriptionStatusVariants } from '~/constants/subscription-status'
import type { SubscriptionStatus } from '~/types/subscription'

const props = withDefaults(
  defineProps<{
    status?: SubscriptionStatus | null
    title?: string
    description?: string
    trialDaysLeft?: number | null
  }>(),
  {
    status: 'TRIAL',
  },
)

const currentVariant = computed(() => {
  return subscriptionStatusVariants[props.status ?? 'TRIAL'] || subscriptionStatusVariants.TRIAL
})

const titleText = computed(() => {
  return props.title || currentVariant.value.title
})

const descriptionText = computed(() => {
  if (props.description) {
    return props.description
  }

  if (props.status === 'TRIAL' && props.trialDaysLeft !== null) {
    return `Осталось ${props.trialDaysLeft} дней`
  }

  return currentVariant.value.description
})
</script>
