<script lang="ts" setup>
import { computed } from 'vue'

const img = useImage()
const backgroundStyles = computed(() => {
  const imgUrl = img('/images/Banner_LegendGrid.webp')
  return {
    backgroundImage: `linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(0, 0, 0, 0.9) 100%
    ),url('${imgUrl}')`,
  }
})
</script>
<template>
  <section class="appHero" :style="backgroundStyles">
    <div class="container">
      <h1>Brawlhalla Info</h1>
      <p>
        information about <NuxtLink to="/legends">legends</NuxtLink> and
        <NuxtLink to="/rankings/1v1/us-e/1">leaderboards</NuxtLink>
      </p>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.appHero {
  height: 70vh;
  background-position: center center;
  background-size: cover;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    h1,
    p {
      color: #fff;
    }
    p {
      font-weight: 500;
    }
  }
}
</style>
