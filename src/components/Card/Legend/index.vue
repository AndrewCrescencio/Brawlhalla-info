<script lang="ts" setup>
defineProps({
  name: { type: String, required: true },
  image: { type: String, required: true },
  id: { type: Number, required: true },
})
</script>

<template>
  <div :id="id" class="card-legend">
    <img
      class="card-legend__image"
      :src="image"
      :alt="`photo of the character ${name} from brawlhalla`"
      loading="lazy"
    />
    <p>{{ name }}</p>
  </div>
</template>
<style lang="scss" scoped>
.card-legend {
  // background-color: blue;
  text-align: center;
  &__image {
    width: 100%;
    border-radius: 8px;
    margin-bottom: var(--pico-typography-spacing-vertical);
  }
  p {
    margin-bottom: 0;
  }
}
</style>
