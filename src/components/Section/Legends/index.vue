<script setup lang="ts">
import { useFetch } from 'nuxt/app'

const { data } = await useFetch('/api/legends')
</script>

<template>
  <h1>Meet the legends</h1>

  <template v-if="data">
    <div class="legends-grid">
      <template v-for="legend in data" :key="legend.legend_id">
        <CardLegend
          :id="legend.legend_id"
          :name="legend.bio_name"
          :image="legend.legend_image"
        />
      </template>
      {{ data }}
    </div>
  </template>
</template>
<style>
.legends-grid {
  /* background-color: red !important; */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(136px, 1fr));
  gap: calc(var(--pico-typography-spacing-vertical) * 2);
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(144px, 1fr));
  }
}
</style>
