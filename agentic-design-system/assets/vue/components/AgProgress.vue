<script setup lang="ts">
const props = withDefaults(defineProps<{ value: number; max?: number; label?: string }>(), { max: 100 })
const pct = Math.max(0, Math.min(100, (props.value / props.max) * 100))
</script>

<template>
  <div class="ag-progress" role="progressbar" :aria-label="label" :aria-valuenow="value" :aria-valuemin="0" :aria-valuemax="max">
    <div class="ag-progress__fill" :style="{ width: `${pct}%` }" />
  </div>
</template>
