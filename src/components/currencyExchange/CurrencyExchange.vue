<script lang="ts" setup>
import { ExchangeService } from '../../services';
import CurrencyPair from '../UI/currencyPair/CurrencyPair.vue';
import styles from './CurrencyExchange.module.scss';

const props = defineProps({
  exchangeService: { type: ExchangeService, required: true },
});

const store = props.exchangeService.useStore();

const changeAmount = props.exchangeService.changeAmount;
const changeFrom = props.exchangeService.changeFrom;
const changeTo = props.exchangeService.changeTo;

</script>

<template>
  <div :class="[styles.container]">
    <CurrencyPair
        :class="[styles.currencyPair]"
        :currencies="store.currencies"
        :currency.sync="store.from"
        :amount.sync="store.amount"
        @update:currency="changeFrom"
        @update:amount="changeAmount"
    />
    <CurrencyPair
        :class="[styles.currencyPair]"
        :currencies="store.currencies"
        :currency.sync="store.to"
        :amount="store.amount * store.rate"
        @update:currency="changeTo"
        :disabled="true"
    />
  </div>
</template>