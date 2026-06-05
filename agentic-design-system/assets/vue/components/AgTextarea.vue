<script setup lang="ts">
const model = defineModel<string>()
withDefaults(defineProps<{ invalid?: boolean; placeholder?: string }>(), { invalid: false })
</script>

<template>
  <textarea
    v-model="model"
    class="ag-input"
    :class="invalid && 'ag-input--error'"
    :placeholder="placeholder"
    :aria-invalid="invalid || undefined"
  />
</template>
