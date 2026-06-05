<script setup lang="ts">
const props = withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'icon'
  loading?: boolean
  disabled?: boolean
  label?: string
}>(), {
  variant: 'primary',
  size: 'md',
  loading: false,
  disabled: false,
})
</script>

<template>
  <button
    :class="[
      'ag-btn',
      `ag-btn--${props.variant}`,
      props.size === 'sm' && 'ag-btn--compact',
      props.size === 'icon' && 'ag-icon-btn',
    ]"
    :disabled="props.disabled || props.loading"
    :aria-busy="props.loading || undefined"
    :aria-label="props.size === 'icon' ? props.label : undefined"
  >
    <span v-if="props.loading" class="ag-spinner" aria-hidden="true" />
    <slot />
  </button>
</template>
