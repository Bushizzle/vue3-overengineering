<script lang="ts" setup>
import styles from './ControlPanel.module.scss';
import { UserService } from '../../services';

const props = defineProps({
  userService: { type: UserService, required: true },
});

const store = props.userService.useStore();

const toggleConversionListVisibility = () => {
  props.userService.toggleVisibility('list_visible');
};

const toggleChartVisibility = () => {
  props.userService.toggleVisibility('chart_visible');
};
</script>

<template>
  <div :class="[styles.container]">
    <label :class="[styles.checkboxContainer]">
      <input
          type="checkbox"
          v-model="store.list_visible"
          @change="toggleConversionListVisibility"
      >
      Show Conversion List
    </label>

    <label :class="[styles.checkboxContainer]">
      <input
          type="checkbox"
          v-model="store.chart_visible"
          @change="toggleChartVisibility"
      >
      Show Chart
    </label>
  </div>
</template>