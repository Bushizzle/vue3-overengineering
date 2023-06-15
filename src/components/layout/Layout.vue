<script lang="ts" setup>
import CurrencyExchange from '../currencyExchange/CurrencyExchange.vue';
import ConversionList from '../conversionList/ConversionList.vue';
import ControlPanel from '../controlPanel/ControlPanel.vue';
import { ExchangeService, UserService } from '../../services';
import { FCS, FCSResponse } from '../../dataProviders';
// import style from "./Layout.module.scss";

// services initialization
// in the future some framework may be responsible for services initialization and their composition
const fcaExchangeService = new ExchangeService<FCSResponse>(FCS.endpoint, { apikey: FCS.apikey });
const userService = new UserService();
const userStore = userService.useStore();
</script>

<template>
  <ControlPanel :user-service="userService" />
  <CurrencyExchange :exchange-service="fcaExchangeService" :user-service="userService" />
  <ConversionList v-show="userStore.list_visible" :exchange-service="fcaExchangeService" />
</template>
