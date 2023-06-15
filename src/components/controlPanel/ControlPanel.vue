<script lang="ts" setup>
import { UserService } from '../../services';
import styles from './ControlPanel.module.scss';

const props = defineProps({
  userService: { type: UserService, required: true },
});

const store = props.userService.useStore();

const toggleConversionListVisibility = (): void => {
  props.userService.toggleVisibility('list_visible');
};

const toggleChartVisibility = (): void => {
  props.userService.toggleVisibility('chart_visible');
};
</script>

<template>
  <div :class="[styles.container]">
    <label :class="[styles.checkboxContainer]">
      <input v-model="store.list_visible" type="checkbox" @change="toggleConversionListVisibility" />
      Show Conversion List
    </label>

    <label :class="[styles.checkboxContainer]">
      <input v-model="store.chart_visible" type="checkbox" @change="toggleChartVisibility" />
      Show Chart
    </label>
  </div>
</template>
