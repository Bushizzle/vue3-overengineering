<script lang="ts" setup>
import { ExchangeService } from '../../services';
import CurrencyPair from '../UI/currencyPair/CurrencyPair.vue';
import styles from './CurrencyExchange.module.scss';

const props = defineProps({
  service: { type: ExchangeService, required: true },
});

const store = props.service.useStore();

</script>

<template>
  <div :class="[styles.container]">
    <CurrencyPair
        :class="[styles.currencyPair]"
        :currencies="store.currencies"
        :currency.sync="store.from"
        :amount.sync="store.amount"
        @update:currency="store.changeFrom"
        @update:amount="store.changeAmount"
    />
    <CurrencyPair
        :class="[styles.currencyPair]"
        :currencies="store.currencies"
        :currency.sync="store.to"
        :amount.sync="store.amount * store.rate"
        @update:currency="store.changeTo"
    />
  </div>
</template>