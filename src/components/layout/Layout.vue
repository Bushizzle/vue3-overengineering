<script lang="ts" setup>
import CurrencyExchange from '../currencyExchange/CurrencyExchange.vue';
import ConversionList from '../conversionList/ConversionList.vue';
import { ExchangeService } from '../../services';

import style from "./Layout.module.scss";

const fcaExchangeService = new ExchangeService<{
  "data": { [code: string]: number }
}>('https://api.exchangeratesapi.io/latest', { apikey: 'PvhDF691O8HtDbfsvuaqujnAwbVZJsqX' });

// const userService = new UserService();
// const { settings: { list_visible } } = userService.useStore();

</script>

<template>
  <CurrencyExchange :service="fcaExchangeService" />
  <ConversionList :service="fcaExchangeService" :isVisible="true" />
</template>
