<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'contained' | 'whisper' | 'raised' | 'inset' | 'bare'
  clickable?: boolean
  selected?: boolean
}>(), {
  variant: 'contained',
  clickable: false,
  selected: false,
})
</script>

<template>
  <div :class="['ag-card', `ag-card--${variant}`, clickable && 'is-clickable', selected && 'is-selected']">
    <slot />
  </div>
</template>
