<script lang="ts" setup>
import { reactive } from 'vue'

const state = reactive({
  id: 3,
  image:
    'https://brawlhalla-info.vercel.app/_next/image?url=%2Fimages%2Flegends%2Fbodvar.png&w=96&q=75',
  name: 'Bodvar',
})
</script>

<template>
  <Story title="AppHeader">
    <AppHeader :id="state.id" :image="state.image" :name="state.name" />
  </Story>
</template>
