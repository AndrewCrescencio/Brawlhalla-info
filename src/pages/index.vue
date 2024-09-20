<script lang="ts" setup>
import { legendsMock } from '../mock/index.ts'

const legends = ref([...legendsMock])
</script>
<template>
  <AppHero />
  <SectionCtaLegends :legends="legends" />
</template>
