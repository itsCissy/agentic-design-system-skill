<script setup lang="ts">
const props = defineProps<{ status: 'running' | 'idle' | 'completed' | 'error' | 'paused'; label: string }>()
const variantMap = {
  running: 'success',
  idle: 'info',
  completed: 'success',
  error: 'error',
  paused: 'default',
} as const
const dotClass = {
  running: 'ag-status__dot--running',
  idle: 'ag-status__dot--idle',
  completed: 'ag-status__dot--completed',
  error: 'ag-status__dot--error',
  paused: 'ag-status__dot--paused',
} as const
</script>

<template>
  <span :class="['ag-tag', `ag-tag--${variantMap[props.status]}`]">
    <span :class="['ag-status__dot', dotClass[props.status]]" aria-hidden="true" />
    {{ props.label }}
  </span>
</template>
