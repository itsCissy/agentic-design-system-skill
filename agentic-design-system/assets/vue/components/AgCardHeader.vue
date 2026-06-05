<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <div class="ag-card__header">
    <div class="ag-card__title-row">
      <slot name="icon" />
      <h3 class="ag-card__title">{{ title }}</h3>
    </div>
    <slot name="action" />
  </div>
</template>
