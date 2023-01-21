<template>
  <div class="temperature-chart">
    <h1>Mom's Temperature Chart</h1>
    <div class="temperature-chart--legend">
      <div class="temperature-chart--legend__item temperature-chart--legend__item--red">Red</div>
      <div class="temperature-chart--legend__item
      temperature-chart--legend__item--pumpkin">Pumpkin</div>
      <div class="temperature-chart--legend__item
      temperature-chart--legend__item--sunshine">Sunshine</div>
      <div class="temperature-chart--legend__item
      temperature-chart--legend__item--lime">Lime</div>
      <div class="temperature-chart--legend__item
      temperature-chart--legend__item--blue-mint">Blue Mint</div>
      <div class="temperature-chart--legend__item
      temperature-chart--legend__item--berry-blue">Berry Blue</div>
      <div class="temperature-chart--legend__item
      temperature-chart--legend__item--lavender-blue">Lavender Blue</div>
      <div class="temperature-chart--legend__item
      temperature-chart--legend__item--grape">Grape</div>
    </div>
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
  &--legend {
    margin: auto;
    width: 200px;
    text-align: left;
    &__item {
      &--red {
        background-color: red;
        color: white;
      }
      &--pumpkin {
        background-color: rgb(152, 59, 36);
        color: white;
      }
      &--sunshine {
        background-color: rgb(225, 202, 89);
      }
      &--lime {
        background-color: rgb(95, 219, 95);
      }
      &--blue-mint {
        background-color: rgb(8, 124, 148);
        color: white;
      }
      &--berry-blue {
        background-color: rgb(80, 78, 231);
        color: white;
      }
      &--lavender-blue {
        background-color: rgb(127, 127, 225);
        color: white;
      }
      &--grape {
        background-color: rgb(105, 21, 200);
        color: white;
      }
    }
  }

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
