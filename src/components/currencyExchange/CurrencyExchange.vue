<script lang="ts" setup>
import { ExchangeService } from '../../services';
import CurrencyPair from '../UI/currencyPair/CurrencyPair.vue';
import styles from './CurrencyExchange.module.scss';

const props = defineProps({
  exchangeService: { type: ExchangeService, required: true },
});

const store = props.exchangeService.useStore();
</script>

<template>
  <div :class="[styles.container]">
    <CurrencyPair
      :class="[styles.currencyPair]"
      :currencies="store.currencies"
      :currency="store.from"
      :amount="store.amount"
      @update:currency="props.exchangeService.changeFrom"
      @update:amount="props.exchangeService.changeAmount"
    />
    <CurrencyPair
      :disabled="true"
      :class="[styles.currencyPair]"
      :currencies="store.currencies"
      :currency="store.to"
      :amount="store.convertedAmount"
      @update:currency="props.exchangeService.changeTo"
    />
    <button @click="props.exchangeService.swapCurrencies">swap</button>
  </div>
</template>
