<script setup lang="ts">
import { ref, computed } from 'vue'

export interface AgSelectOption {
  value: string
  label: string
  disabled?: boolean
}

const model = defineModel<string | undefined>()
const props = withDefaults(defineProps<{ options: AgSelectOption[]; placeholder?: string; label?: string }>(), {
  placeholder: 'Select...',
})
const open = ref(false)
const selected = computed(() => props.options.find((option) => option.value === model.value))
function select(option: AgSelectOption) {
  if (option.disabled) return
  model.value = option.value
  open.value = false
}
</script>

<template>
  <div class="ag-select">
    <button
      type="button"
      :class="['ag-select__trigger', open && 'is-open', !selected && 'is-placeholder']"
      aria-haspopup="listbox"
      :aria-expanded="open"
      :aria-label="label"
      @click="open = !open"
    >
      <span>{{ selected?.label ?? placeholder }}</span>
      <span class="ag-select__chev" aria-hidden="true">⌄</span>
    </button>
    <ul v-if="open" class="ag-select__menu" role="listbox">
      <li
        v-for="option in options"
        :key="option.value"
        role="option"
        :aria-selected="option.value === model"
        :aria-disabled="option.disabled || undefined"
        :class="['ag-select__item', option.disabled && 'is-disabled']"
        @click="select(option)"
      >
        {{ option.label }}
        <span v-if="option.value === model" class="ag-select__check" aria-hidden="true">✓</span>
      </li>
    </ul>
  </div>
</template>
