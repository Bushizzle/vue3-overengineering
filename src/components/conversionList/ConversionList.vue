<script lang="ts" setup>
import { ExchangeService } from '../../services';
import styles from './ConversionList.module.scss';

const props = defineProps({
  exchangeService: { type: ExchangeService, required: true },
});

const exchangeStore = props.exchangeService.useStore();
</script>

<template>
  <div :class="[styles.container]">
    <div :class="[styles.list]">
      <h2>{{ exchangeStore.from }} -> {{ exchangeStore.to }}</h2>
      <ul>
        <li
            v-for="unit in exchangeStore.units"
            :key="`${exchangeStore.from}-${exchangeStore.to}-${unit}`"
        >
          {{ unit }} {{ exchangeStore.from }} = {{ (unit * exchangeStore.rate).toFixed(2) }} {{ exchangeStore.to }}
        </li>
      </ul>
    </div>
    <div :class="[styles.list]">
      <h2>{{ exchangeStore.to }} -> {{ exchangeStore.from }}</h2>
      <ul>
        <li
            v-for="unit in exchangeStore.units"
            :key="`${exchangeStore.to}-${exchangeStore.from}-${unit}`"
        >
          {{ unit }} {{ exchangeStore.to }} = {{ (unit / exchangeStore.rate).toFixed(2) }} {{ exchangeStore.from }}
        </li>
      </ul>
    </div>
  </div>
</template>