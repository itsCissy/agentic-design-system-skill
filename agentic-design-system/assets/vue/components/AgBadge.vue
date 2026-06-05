<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'default' | 'info' | 'success' | 'warning' | 'error' | 'teal' | 'purple' | 'pink' | 'sky' | 'orange'
  size?: 'sm' | 'md'
}>(), {
  variant: 'default',
  size: 'md',
})
</script>

<template>
  <span :class="['ag-tag', `ag-tag--${variant}`, size === 'sm' && 'ag-tag--sm']">
    <slot />
  </span>
</template>
