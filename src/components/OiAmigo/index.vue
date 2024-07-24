<script setup lang="ts">
const { msg } = defineProps({ msg: { type: String, required: true } })
</script>
<template>
  <section class="container">
    <h1>{{ msg }}</h1>
    <a role="button" target="_blank" href="https://brawlhalla-info.vercel.app/"
      >Brawlhalla Info</a
    >
  </section>
</template>
