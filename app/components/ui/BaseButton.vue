<script setup lang="ts">
import { computed } from 'vue'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const props = withDefaults(
  defineProps<{
    type?: 'button' | 'submit'
    as?: 'button' | 'a'
    href?: string

    variant?: Variant
    size?: Size

    loading?: boolean
    disabled?: boolean
    fullWidth?: boolean
    iconOnly?: boolean

    loadingText?: string
  }>(),
  {
    type: 'button',
    as: 'button',
    variant: 'primary',
    size: 'md',
    fullWidth: false,
    loadingText: 'Загрузка...',
  },
)

const isDisabled = computed(() => props.disabled || props.loading)

const base = `
  relative inline-flex items-center justify-center gap-2

  rounded-lg
  font-medium text-[13px]

  transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]

  select-none
  whitespace-nowrap

  focus:outline-none
  focus-visible:ring-2 focus-visible:ring-slate-300/70
  dark:focus-visible:ring-slate-600/70

  disabled:opacity-40 disabled:pointer-events-none

  active:scale-[0.985]
`

const sizes: Record<Size, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-11 px-4 text-sm',
  lg: 'h-12 px-5 text-base',
}

const iconSizes: Record<Size, string> = {
  sm: 'h-9 w-9',
  md: 'h-11 w-11',
  lg: 'h-12 w-12',
}

const variants = {
  primary: `
    relative
    bg-white text-slate-900
    border border-slate-200

    shadow-[0_1px_0_rgba(0,0,0,0.02)]

    before:absolute before:inset-0
    before:rounded-[inherit]
    before:bg-gradient-to-b before:from-white before:to-transparent
    before:opacity-60
    before:pointer-events-none

    hover:bg-slate-50
    hover:border-slate-300
    hover:shadow-[0_2px_6px_rgba(0,0,0,0.06)]

    active:bg-slate-100
    active:shadow-[0_1px_2px_rgba(0,0,0,0.05)]

    dark:bg-slate-900 dark:text-slate-100
    dark:border-slate-700
    dark:before:from-white/5
    dark:hover:bg-slate-800
  `,

  secondary: `
    bg-slate-50 text-slate-800
    border border-slate-200

    hover:bg-slate-100
    hover:border-slate-300

    active:bg-slate-200

    dark:bg-slate-800 dark:text-slate-200
    dark:border-slate-700
    dark:hover:bg-slate-700
  `,

  outline: `
    bg-transparent text-slate-700
    border border-slate-200

    hover:bg-slate-50
    hover:border-slate-300

    active:bg-slate-100

    dark:text-slate-300
    dark:border-slate-700
    dark:hover:bg-slate-800
  `,

  ghost: `
    bg-transparent text-slate-600

    hover:bg-slate-100
    active:bg-slate-200

    dark:text-slate-400
    dark:hover:bg-slate-800
  `,
}

const width = computed(() => (props.fullWidth ? 'w-full' : 'w-auto'))

const classes = computed(() => [
  base,
  props.iconOnly ? iconSizes[props.size] : sizes[props.size],
  variants[props.variant],
  width.value,
])
</script>

<template>
  <component
    :is="as"
    :type="as === 'button' ? type : undefined"
    :href="as === 'a' ? href : undefined"
    :disabled="as === 'button' ? isDisabled : undefined"
    :aria-disabled="isDisabled"
    :aria-busy="loading"
    :class="classes"
  >
    <!-- loader overlay (без сдвига контента) -->
    <span v-if="loading" class="absolute inset-0 flex items-center justify-center">
      <svg class="h-4 w-4 animate-spin" viewBox="0 0 24 24">
        <circle class="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" />
        <path class="opacity-80" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
      </svg>
    </span>

    <!-- content -->
    <span :class="['flex items-center gap-2', loading ? 'opacity-0' : 'opacity-100']">
      <slot name="icon" />
      <slot />
    </span>
  </component>
</template>
