<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div>
    <div class="temperature-chart-item" :class="backgroundColour">
      <input
        type="checkbox"
        :checked="initialChecked"
        @input="onCheckedChanged" />
      <p>{{ props.temperature }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  computed, defineProps,
} from 'vue';

const props = defineProps({
  month: {
    type: String,
    required: true,
  },
  day: {
    type: Number,
    required: true,
  },
  temperature: {
    type: Number,
    required: true,
  },
});

const localStorageKey = `${props.month}${props.day}`;
const localStorageItem = localStorage.getItem(localStorageKey) ?? '{}';

const initialChecked = JSON.parse(localStorageItem).isCompleted as boolean;

const backgroundColour = computed<string>(() => {
  const className = 'temperature-chart-item';
  const temp = props.temperature;

  if (temp >= 31) { // 31+
    return `${className}--red`;
  }
  if (temp >= 21) { // 21-30
    return `${className}--pumpkin`;
  }
  if (temp >= 11) { // 11-20
    return `${className}--sunshine`;
  }
  if (temp >= 1) { // 1-10
    return `${className}--lime`;
  }
  if (temp >= -10) { // -10-0
    return `${className}--blue-mint`;
  }
  if (temp >= -20) { // -20--11
    return `${className}--berry-blue`;
  }
  if (temp >= -30) { // -30--21
    return `${className}--lavender-blue`;
  }
  return `${className}--grape`;
});

const onCheckedChanged = (event: Event) => {
  localStorage.setItem(
    localStorageKey,
    JSON.stringify({
      isCompleted: (event.target as HTMLInputElement).checked,
    }),
  );
};
</script>

<style scoped lang="scss">
.temperature-chart-item {
  display: flex;

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
</style>
