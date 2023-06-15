<script lang="ts" setup>
import { PropType, defineProps } from 'vue';
import styles from './Input.module.scss';

const props = defineProps({
  modelValue: {
    type: Number as PropType<number>,
    required: true,
  },
  placeholder: {
    type: String as PropType<string>,
    default: '',
  },
  type: {
    type: String as PropType<string>,
    default: 'text',
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);

function updateValue(event: Event): void {
  emit('update:modelValue', (event.target as HTMLInputElement).value);
}
</script>

<template>
  <div :class="[styles.container]">
    <input
        :type="type"
        :class="[styles.input]"
        :value="modelValue"
        :disabled="disabled"
        @input="updateValue"
    />
  </div>
</template>
