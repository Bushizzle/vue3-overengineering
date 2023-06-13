<script lang="ts" setup>
import { PropType } from 'vue';
import styles from './CurrencyPair.module.scss';
import DropdownComponent from '../dropdown/Dropdown.vue';
import InputComponent from '../input/Input.vue';

const props = defineProps({
  currencies: { type: Array as PropType<{ label: string; value: string }[]>, required: true },
  currency: { type: String as PropType<string>, required: true },
  amount: { type: Number as PropType<number>, required: true },
  disabled: { type: Boolean as PropType<boolean>, default: false },
});

const emit = defineEmits(['update:currency', 'update:amount']);

function updateCurrency(newCurrency: string) {
  console.log(newCurrency);
  emit('update:currency', newCurrency);
}
function updateAmount(newAmount: string) {
  emit('update:amount', newAmount);
}
</script>

<template>
  <div :class="[styles.container]">
    <DropdownComponent
        :class="[styles.currencySelector]"
        :modelValue="currency"
        :options="currencies"
        @update:modelValue="updateCurrency"
    />
    <InputComponent
        :type="'number'"
        :class="[styles.amountInput]"
        :modelValue="amount"
        :disabled="disabled"
        @update:modelValue="updateAmount"
    />
  </div>
</template>
