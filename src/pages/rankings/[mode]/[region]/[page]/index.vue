<script setup lang="ts">
import { useFetch, useRoute } from 'nuxt/app'
const route = useRoute()

const { mode, region, page } = route.params

const { data } = await useFetch(`/api/rankings/${mode}/${region}/${page}`)
</script>

<template>
  <h1>Game Rankings</h1>
  <Filter />
  <Pagination />
  <Table v-if="data" :rankings="data" />
</template>
