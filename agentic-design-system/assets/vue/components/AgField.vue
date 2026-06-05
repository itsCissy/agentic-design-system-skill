<script setup lang="ts">
defineProps<{ label: string; forId?: string; error?: string }>()
</script>

<template>
  <div>
    <label class="ag-field-label" :for="forId">{{ label }}</label>
    <slot />
    <div v-if="error" class="ag-error-text">{{ error }}</div>
  </div>
</template>
