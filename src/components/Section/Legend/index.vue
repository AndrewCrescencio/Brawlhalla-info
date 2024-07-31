<script lang="ts" setup>
import { computed } from 'vue'
interface LegendInfo {
  legend_id: number
  legend_name_key: string
  bio_name: string
  bio_aka: string
  bio_quote: string
  bio_quote_about_attrib: string
  bio_quote_from: string
  bio_quote_from_attrib: string
  bio_text: string
  bot_name: string
  weapon_one: string
  weapon_two: string
  strength: string
  dexterity: string
  defense: string
  speed: string
}

const props = defineProps<{ legendInfo: LegendInfo }>()

const legendImage = computed(() => {
  if (!props.legendInfo) return
  return `/images/legends-splash/${props.legendInfo.legend_name_key.replace(
    ' ',
    '-',
  )}-splash.webp`
})
</script>

<template>
  <section>
    <NuxtImg :src="legendImage" width="" class="" />

    <div class="text">
      <hgroup>
        <h1>
          {{ legendInfo.bio_name }}
        </h1>
        <p>{{ legendInfo.bio_aka }}</p>
      </hgroup>

      <blockquote>
        {{ legendInfo.bio_quote }}
        <footer>
          <cite>{{ legendInfo.bio_quote_about_attrib }}</cite>
        </footer>
      </blockquote>

      <p>
        {{ legendInfo.bio_text }}
      </p>
    </div>
  </section>
</template>
<style lang="scss" scoped>
img {
  display: block;
  grid-area: image;
  width: 100%;
  height: auto;
  min-height: 400px;
  max-height: calc(100vh - 120px);
  object-fit: contain;
}

.text {
  margin-top: 32px;
  grid-area: text;
}

@media (min-width: 1024px) {
  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'text image';
    gap: 32px;
  }

  .text {
    margin-top: 0;
  }
}
</style>
