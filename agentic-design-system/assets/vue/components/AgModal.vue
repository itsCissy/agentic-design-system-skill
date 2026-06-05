<script setup lang="ts">
defineProps<{ open: boolean; title: string; closeLabel?: string }>()
defineEmits<{ close: [] }>()
</script>

<template>
  <div v-if="open" class="ag-overlay" role="presentation" @mousedown.self="$emit('close')">
    <div class="ag-modal" role="dialog" aria-modal="true" aria-labelledby="ag-modal-title">
      <div class="ag-modal__header">
        <h2 id="ag-modal-title" class="ag-modal__title">{{ title }}</h2>
        <button class="ag-btn ag-btn--ghost ag-icon-btn" :aria-label="closeLabel ?? 'Close'" @click="$emit('close')">×</button>
      </div>
      <div class="ag-modal__body"><slot /></div>
      <div v-if="$slots.footer" class="ag-modal__footer"><slot name="footer" /></div>
    </div>
  </div>
</template>
