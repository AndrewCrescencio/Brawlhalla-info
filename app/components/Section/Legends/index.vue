<script setup lang="ts">
import { useFetch } from 'nuxt/app'

const { data } = await useFetch('/api/legends')
</script>

<template>
  <section class="container">
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
      </div>
    </template>
  </section>
</template>

<style>
.legends-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(134px, 1fr));
  column-gap: 16px;
  row-gap: 24px;
  @media (min-width: 768px) {
    column-gap: 24px;
    row-gap: calc(var(--pico-typography-spacing-vertical) * 2);
    grid-template-columns: repeat(auto-fill, minmax(144px, 1fr));
  }
}
</style>
