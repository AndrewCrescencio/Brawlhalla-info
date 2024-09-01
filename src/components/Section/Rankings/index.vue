<script lang="ts" setup>
const props = defineProps({
  rankings: { type: Object, required: true },
})
</script>
<template>
  <section class="container">
    <h1>Game Rankings</h1>
    <Pagination>
      <Filter />
    </Pagination>
    <Table v-if="props.rankings" :rankings="props.rankings" />
  </section>
</template>
<style lang="scss" scoped>
section {
  padding-top: calc(var(--pico-block-spacing-vertical) * 3);
}
</style>
