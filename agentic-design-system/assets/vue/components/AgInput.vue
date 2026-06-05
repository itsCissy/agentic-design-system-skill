<script setup lang="ts">
const model = defineModel<string | number>()
withDefaults(defineProps<{
  invalid?: boolean
  placeholder?: string
  type?: string
}>(), {
  invalid: false,
  type: 'text',
})
</script>

<template>
  <input
    v-model="model"
    class="ag-input"
    :class="invalid && 'ag-input--error'"
    :type="type"
    :placeholder="placeholder"
    :aria-invalid="invalid || undefined"
  />
</template>
