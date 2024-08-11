<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError,
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <NuxtLayout>
    <div class="error container">
      <h2>{{ error.statusCode }} - Page</h2>
      <NuxtImg src="/images/emoji_think.webp" width="130" height="135" />
      <p>
        It seems that the page you tried to access does not exist or there was
        an error...
      </p>
      <button @click="handleError">Back to home</button>
    </div>
  </NuxtLayout>
</template>
<style lang="scss" scoped>
.error {
  padding-top: calc(var(--pico-spacing) * 4);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    margin-bottom: var(--pico-spacing);
  }
}
</style>
