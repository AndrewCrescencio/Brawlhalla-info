<script lang="ts" setup>
import { reactive } from 'vue'

const state = reactive({
  ranking: 'Gold',
})
</script>

<template>
  <Story title="RankingBadge">
    <RankingBadge :ranking="state.ranking" />
  </Story>
</template>
