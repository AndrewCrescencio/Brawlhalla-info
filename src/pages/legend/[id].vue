<script setup lang="ts">
import { useFetch, useRoute } from 'nuxt/app'
const route = useRoute()

const { data, loading } = await useFetch('/api/legend', {
  query: { id: route.params.id },
})
</script>

<template>
  <SectionLegend :legend-info="data" v-if="!loading" />
</template>
