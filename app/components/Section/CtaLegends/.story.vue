<script lang="ts" setup>
import { reactive } from 'vue'

const state = reactive({
  legends: [
    {
      bio_name: 'Bödvar',
      legend_image:
        'https://res.cloudinary.com/peetaxd/image/upload/fl_preserve_transparency/v1723145055/brawlhalla-info/legends/bodvar.jpg?_s=public-apps',
      legend_id: '3',
    },
    {
      bio_name: 'Wu Shang',
      legend_image:
        'https://res.cloudinary.com/peetaxd/image/upload/fl_preserve_transparency/v1723145055/brawlhalla-info/legends/wu-shang.jpg?_s=public-apps',
      legend_id: '29',
    },
    {
      bio_name: 'Tezca',
      legend_image:
        'https://res.cloudinary.com/peetaxd/image/upload/fl_preserve_transparency/v1723145055/brawlhalla-info/legends/tezca.jpg?_s=public-apps',
      legend_id: '63',
    },
  ],
})
</script>

<template>
  <Story title="SectionCtaLegends">
    <SectionCtaLegends :legends="state.legends" />
  </Story>
</template>
