<template>
  <div class="temperature-chart">
    <h1>Mom's Temperature Chart</h1>
    <temperature-chart-legend></temperature-chart-legend>
    <temperature-chart-notes></temperature-chart-notes>
    <div class="temperature-chart--data">
      <div v-for="month in weatherDataByMonth" :key="month.month">
        <temperature-chart-item
          :month="month.month"
          :data="month.data"
          class="temperature-chart--data__item"
          ></temperature-chart-item>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import WeatherData2021 from '../data/wpg-2021';
import TemperatureChartItem from './TemperatureChartItem.vue';
import TemperatureChartLegend from './TemperatureChartLegend.vue';
import TemperatureChartNotes from './TemperatureChartNotes.vue';
import { RawData, DataByMonth, TemperatureData } from '../models/weather-model';

const weatherDataRaw: RawData[] = WeatherData2021.map((data): RawData => {
  const {
    month, day, min, max,
  } = data;

  const isLow = min < -30;
  const isHigh = max > 30;
  let temp: number;

  if (isLow) {
    temp = min;
  } else if (isHigh) {
    temp = max;
  } else {
    temp = (min + max) / 2;
  }

  return {
    month,
    day,
    temperature: temp,
  };
});

const weatherDataByMonth: DataByMonth[] = [];

for (let i = 0; i < weatherDataRaw.length; i += 1) {
  const currentData = weatherDataRaw[i];
  const monthData = weatherDataByMonth.filter((x) => x.month === currentData.month);
  const dataToPush: TemperatureData = {
    day: currentData.day,
    temperature: currentData.temperature,
  };

  if (monthData.length > 0) {
    weatherDataByMonth[currentData.month - 1].data.push(dataToPush);
  } else {
    weatherDataByMonth.push({ month: currentData.month, data: [dataToPush] });
  }
}

</script>

<style scoped lang="scss">
.temperature-chart {
  &--data {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: flex-start;

    &__item {
      width: 100px;
    }
  }
}

</style>
