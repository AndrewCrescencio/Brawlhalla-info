<script lang="ts" setup>
defineProps({
  name: { type: String, required: true },
  image: { type: String, required: true },
  id: { type: Number, required: true },
})
</script>

<template>
  <div class="card-legend">
    <NuxtImg
      class="card-legend__image"
      :src="image"
      :alt="`photo of the character ${name} from brawlhalla`"
      loading="lazy"
      width="134"
      height="134"
    />
    <p>{{ name }}</p>
  </div>
</template>
<style lang="scss" scoped>
.card-legend {
  width: 100%;
  text-align: center;
  &__image {
    width: 100%;
    border-radius: 8px;
    margin-bottom: var(--pico-typography-spacing-vertical);
    @media (min-width: 768px) {
      margin-bottom: calc(var(--pico-typography-spacing-vertical) * 0.8);
    }
  }
  p {
    margin-bottom: 0;
  }
}
</style>
