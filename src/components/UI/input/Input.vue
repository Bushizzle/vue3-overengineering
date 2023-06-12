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
});

const emit = defineEmits(['update:modelValue']);

function updateValue(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).value);
}
</script>

<template>
  <div :class="[styles.container]">
    <input
        :type="type"
        :class="[styles.input]"
        :value="modelValue"
        @input="updateValue"
    />
  </div>
</template>
