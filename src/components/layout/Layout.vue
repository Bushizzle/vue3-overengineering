<script lang="ts" setup>
import CurrencyExchange from '../currencyExchange/CurrencyExchange.vue';
import ConversionList from '../conversionList/ConversionList.vue';
import { ExchangeService, UserService} from '../../services';
import { FCS, FCSResponse } from '../../settings'
// import style from "./Layout.module.scss";


// services initialization
// in the future some framework may be responsible for services initialization and their dependency graphs
const fcaExchangeService = new ExchangeService<FCSResponse>(FCS.endpoint, { apikey: FCS.apikey });
const userService = new UserService();
const userStore = userService.useStore();

</script>

<template>
  <CurrencyExchange :exchangeService="fcaExchangeService" :userService="userService"/>
  <ConversionList :exchangeService="fcaExchangeService" v-show="userStore.list_visible"  />
</template>
