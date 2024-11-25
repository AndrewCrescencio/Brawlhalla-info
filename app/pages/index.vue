<script lang="ts" setup>
import { legendsMock } from '../mock/index.js'

const legends = ref([...legendsMock])
</script>

<template>
  <AppHero />
  <SectionCtaLegends :legends="legends" />
</template>
