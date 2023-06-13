<script lang="ts" setup>
import { PropType, defineProps} from 'vue';
import styles from './Dropdown.module.scss';

interface Option {
  label: string;
  value: string;
}

const props = defineProps({
  modelValue: {
    type: String as PropType<string>,
    required: true,
  },
  options: {
    type: Array as PropType<Option[]>,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue']);

function updateValue(event: Event) {
  emit('update:modelValue', (event.target as HTMLSelectElement).value);
}
</script>

<template>
  <div :class="[styles.container]">
    <select
        :class="[styles.dropdown]"
        :value="modelValue"
        @change="updateValue"
    >
      <option
          v-for="option in options"
          :key="option"
          :value="option"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>
