<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div class="temperature-chart-item">
    <h2>{{ longMonth }}</h2>
    <div>
      <div class="temperature-chart-item--data" v-for="data in props.data" :key="data.day">
        <temperature-chart-item-day
          :month="longMonth"
          :day="data.day"
          :temperature="Math.trunc(data.temperature)"
        ></temperature-chart-item-day>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  computed, defineProps, PropType,
} from 'vue';
import type { TemperatureData } from '../models/weather-model';
import TemperatureChartItemDay from './TemperatureChartItemDay.vue';

const props = defineProps({
  month: {
    type: Number,
    required: true,
  },
  data: {
    type: Array as PropType<TemperatureData[]>,
    required: true,
  },
});

const longMonth = computed<string>(() => {
  switch (props.month) {
    case 1:
      return 'January';
    case 2:
      return 'February';
    case 3:
      return 'March';
    case 4:
      return 'April';
    case 5:
      return 'May';
    case 6:
      return 'June';
    case 7:
      return 'July';
    case 8:
      return 'August';
    case 9:
      return 'September';
    case 10:
      return 'October';
    case 11:
      return 'November';
    default:
      return 'December';
  }
});
</script>

<style scoped lang="scss">
</style>
