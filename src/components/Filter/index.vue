<script lang="ts" setup>
import { navigateTo, useRoute, useRouter } from 'nuxt/app'
import { reactive, ref, watch, onMounted } from 'vue'

const router = useRouter()
const route = useRoute()

const regions = ref([
  'all',
  'us-e',
  'eu',
  'sea',
  'brz',
  'aus',
  'us-w',
  'jpn',
  'sa',
  'me',
])

const modes = ref(['1v1', '2v2'])

const filter = reactive({
  region: route.params.region,
  mode: route.params.mode,
})

async function navigateToRankings() {
  await nextTick()
  await navigateTo({
    path: `/rankings/${filter.mode}/${filter.region}/1`,
  })
}

onMounted(() => {
  const { region, mode } = route.params
  if (region && regions.value.includes(region as string)) {
    filter.region = region as string
  }
  if (mode && modes.value.includes(mode as string)) {
    filter.mode = mode as string
  }
})
</script>

<template>
  <div class="filter">
    <label for="region">
      Region
      <!-- {{ filter.region }} -->
      <select
        name="region"
        id="region"
        v-model="filter.region"
        @change="navigateToRankings"
      >
        <template v-for="region in regions" :key="region">
          <option :value="region">{{ region }}</option>
        </template>
      </select>
    </label>

    <label for="mode">
      Mode
      <!-- {{ filter.mode }} -->
      <select
        name="mode"
        id="mode"
        v-model="filter.mode"
        @change="navigateToRankings"
      >
        <template v-for="mode in modes" :key="mode">
          <option :value="mode">{{ mode }}</option>
        </template>
      </select>
    </label>
  </div>
</template>
<style lang="scss" scoped>
.filter {
  display: flex;
  justify-content: space-evenly;
}
</style>
