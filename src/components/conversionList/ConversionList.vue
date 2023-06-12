<script lang="ts" setup>
import { PropType } from 'vue';
import styles from './ConversionList.module.scss';
import {ExchangeService} from "../../services";

const props = defineProps({
  isVisible: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  service: { type: ExchangeService, required: true },
});

const store = props.service.useStore();
</script>

<template>
  <div v-show="isVisible" :class="[styles.container]">
    <div :class="[styles.list]">
      <h2>{{ store.from }} -> {{ store.to }}</h2>
      <ul>
        <li
            v-for="unit in store.units"
            :key="`${store.from}-${store.to}-${unit}`"
        >
          {{ unit }} {{ store.from }} = {{ (unit * store.rate).toFixed(2) }} {{ to }}
        </li>
      </ul>
    </div>
    <div :class="[styles.list]">
      <h2>{{ store.to }} -> {{ store.from }}</h2>
      <ul>
        <li
            v-for="unit in store.units"
            :key="`${store.to}-${store.from}-${unit}`"
        >
          {{ unit }} {{ store.to }} = {{ (unit / store.rate).toFixed(2) }} {{ store.from }}
        </li>
      </ul>
    </div>
  </div>
</template>