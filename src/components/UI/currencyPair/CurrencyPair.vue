<script lang="ts" setup>
import { PropType } from 'vue';
import DropdownComponent from '../dropdown/Dropdown.vue';
import InputComponent from '../input/Input.vue';
import styles from './CurrencyPair.module.scss';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  currencies: { type: Array as PropType<{ label: string; value: string }[]>, required: true },
  currency: { type: String as PropType<string>, required: true },
  amount: { type: Number as PropType<number>, required: true },
  disabled: { type: Boolean as PropType<boolean>, default: false },
});

const emit = defineEmits(['update:currency', 'update:amount']);

function updateCurrency(newCurrency: string): void {
  emit('update:currency', newCurrency);
}

function updateAmount(newAmount: string): void {
  emit('update:amount', newAmount);
}
</script>

<template>
  <div :class="[styles.container]">
    <DropdownComponent
      :class="[styles.currencySelector]"
      :model-value="currency"
      :options="currencies"
      @update:model-value="updateCurrency"
    />
    <InputComponent
      :type="'number'"
      :class="[styles.amountInput]"
      :model-value="amount"
      :disabled="disabled"
      @update:model-value="updateAmount"
    />
  </div>
</template>
