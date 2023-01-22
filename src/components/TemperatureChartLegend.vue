<!-- eslint-disable max-len -->
<template>
  <div class="temperature-chart--legend">
    <div class="temperature-chart--legend__item temperature-chart--legend__item--red">Red</div>
    <div class="temperature-chart--legend__item temperature-chart--legend__item--pumpkin">Pumpkin</div>
    <div class="temperature-chart--legend__item temperature-chart--legend__item--sunshine">Sunshine</div>
    <div class="temperature-chart--legend__item temperature-chart--legend__item--lime">Lime</div>
    <div class="temperature-chart--legend__item temperature-chart--legend__item--blue-mint">Blue Mint</div>
    <div class="temperature-chart--legend__item temperature-chart--legend__item--berry-blue">Berry Blue</div>
    <div class="temperature-chart--legend__item temperature-chart--legend__item--lavender-blue">Lavender Blue</div>
    <div class="temperature-chart--legend__item temperature-chart--legend__item--grape">Grape</div>
  </div>
</template>

<script setup lang="ts">

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
}
</style>
