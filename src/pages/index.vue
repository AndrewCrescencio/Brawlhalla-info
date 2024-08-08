<script lang="ts" setup>
import { legendsMock } from '../mock/index.ts'

const legends = ref([...legendsMock])
</script>
ref([...legendsMock])

<template>
  <AppHero />
  <SectionCtaLegends :legends="legends" />
</template>
