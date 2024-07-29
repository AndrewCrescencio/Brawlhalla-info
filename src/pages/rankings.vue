<script setup lang="ts">
import { useFetch } from 'nuxt/app'

const { data } = await useFetch('/api/rankings')
</script>

<template>
  <h1>rankings page</h1>
  <TableRankings v-if="data" :rankings="data" />
</template>
