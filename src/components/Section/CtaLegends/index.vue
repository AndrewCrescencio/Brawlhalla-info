<script lang="ts" setup>
defineProps({ legends: { type: Array, required: true } })
</script>
<template>
  <section class="container">
    <hgroup>
      <h2>Meet the legends</h2>
      <p>
        learn more about the legends' lore, their stats, and the weapons they
        use.
      </p>
    </hgroup>
    <div class="legends">
      <NuxtLink
        v-for="legend in legends"
        :key="legend.legend_id"
        class="legends__card"
        :to="{ name: 'legend-id', params: { id: legend.legend_id } }"
      >
        <NuxtImg :src="legend.legend_image" width="85" height="85" :alt="`${legend.bio_name} character photo`"/>
        <p>{{ legend.bio_name }}</p>
      </NuxtLink>
    </div>
    <NuxtLink to="/legends" role="button">See all legends</NuxtLink>
  </section>
</template>
<style lang="scss" scoped>
hgroup {
  margin-bottom: calc(var(--pico-spacing) * 3);
}
section {
  padding-top: calc(var(--pico-spacing) * 4);
  padding-bottom: calc(var(--pico-spacing) * 4);
}

.legends {
  display: flex;
  gap: var(--pico-spacing);
  &__card {
    cursor: pointer;
    align-items: center;
    gap: var(--pico-spacing);
    line-height: 1;
    transition: all 200ms ease-in;
    &:hover {
      transform: scale(1.05);
    }

    p {
      padding-top: var(--pico-spacing);
      font-size: 0.75rem;
    }
  }
}

a {
  text-decoration: none;
}
</style>
