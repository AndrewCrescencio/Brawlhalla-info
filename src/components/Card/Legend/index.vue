<script lang="ts" setup>
defineProps({
  name: { type: String, required: true },
  image: { type: String, required: true },
  id: { type: Number, required: true },
})
</script>

<template>
  <NuxtLink :to="{ name: 'legend-id', params: { id } }" class="card-legend">
    <div class="card-legend__image">
      <NuxtImg
        :src="image"
        :alt="`photo of the character ${name} from brawlhalla`"
        loading="lazy"
        width="120"
        height="120"
      />
    </div>

    <p>{{ name }}</p>
  </NuxtLink>
</template>
<style lang="scss" scoped>
.card-legend {
  width: 100%;
  text-align: center;
  text-decoration: none;
  padding: 12px;

  background-color: rgba(255, 255, 255, 0.05);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;

  @media (prefers-color-scheme: light) {
    background-color: #f3f3f3;

    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  }

  &__image {
    margin-bottom: var(--pico-typography-spacing-vertical);

    @media (min-width: 768px) {
      margin-bottom: calc(var(--pico-typography-spacing-vertical) * 0.8);
    }

    @media (prefers-color-scheme: light) {
      background-color: #ddd;
    }

    img {
      width: 100%;
      border-radius: 8px;
      transition: transform 0.2s;
      position: relative;
      margin: 0;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  p {
    color: var(--pico-h1-color);
    font-weight: 900;
    margin-bottom: 0;
  }
}
</style>
