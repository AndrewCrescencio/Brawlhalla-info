<script lang="ts" setup>
const props = defineProps({ ranking: { type: String, required: true } })

const rankingImage = computed(() => {
  if (props.ranking.startsWith('Diamond')) {
    return '/images/tier/diamond.png'
  } else if (props.ranking.startsWith('Platinum')) {
    return '/images/tier/platinum.png'
  } else if (props.ranking.startsWith('Valhallan')) {
    return '/images/tier/valhallan.png'
  } else if (props.ranking.startsWith('Gold')) {
    return '/images/tier/gold.png'
  } else if (props.ranking.startsWith('Silver')) {
    return '/images/tier/silver.png'
  } else {
    return ''
  }
})
</script>
<template>
  <NuxtImg :src="rankingImage" alt="" width="52" />
</template>
