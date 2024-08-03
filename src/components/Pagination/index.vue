<script setup lang="ts">
import { useRoute } from 'nuxt/app'
const route = useRoute()

const { mode, region, page } = route.params
</script>

<template>
  <div class="pagination">
    <NuxtLink
      v-if="Number(page) > 1"
      role="button"
      :to="{
        name: 'rankings-mode-region-page',
        params: { mode, region, page: Number(page) - 1 },
      }"
    >
      <IconArrowBack />
      <span class="sr-only">prev</span>
    </NuxtLink>
    <button v-else disabled>
      <IconArrowBack />
      <span class="sr-only">prev</span>
    </button>
    <NuxtLink
      v-if="Number(page) < 1000"
      role="button"
      :to="{
        name: 'rankings-mode-region-page',
        params: { mode, region, page: Number(page) + 1 },
      }"
    >
      <IconArrowFoward />
      <span class="sr-only">next</span>
    </NuxtLink>
    <button v-else disabled>
      <IconArrowFoward />
      <span class="sr-only">next</span>
    </button>
  </div>
</template>
<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: space-between;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>
