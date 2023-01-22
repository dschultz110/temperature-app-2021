<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div class="temperature-chart-notes">
    <textarea
      class="temperature-chart-notes--textarea"
      v-model="notes"
      rows="5"
      @input="onNotesChanged"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const localStorageKey = 'temperatureChartNotes';
const localStorageItem = localStorage.getItem(localStorageKey) ?? '';

const notes = ref(JSON.parse(localStorageItem).notes);

const onNotesChanged = (event: Event): void => {
  localStorage.setItem(
    localStorageKey,
    JSON.stringify({
      notes: (event.target as HTMLTextAreaElement).value,
    }),
  );
};
</script>

<style scoped lang="scss">
.temperature-chart-notes {
  &--textarea{
    width: 80%;
    margin: auto;
    margin-top: 20px;
    overflow: scroll;
  }
}
</style>
