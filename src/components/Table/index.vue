<script lang="ts" setup>
const props = defineProps({
  rankings: { type: Object, required: true },
})
</script>
<template>
  <div class="tableRankings">
    <div class="tableRankings__container">
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Region</th>
            <th>Name</th>
            <th>Tier</th>
            <th style="min-width: 180px">Win-Loss</th>
            <th>Season Rating</th>
            <th>Peak Rating</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="player in props.rankings" :key="player.rank">
            <th scope="row">{{ player.rank }}</th>
            <td>{{ player.region }}</td>
            <td>
              {{ player.name ? player.name : player.teamname }}
            </td>
            <td v-if="player.tier">
              <RankingBadge :ranking="player.tier" />
            </td>
            <td>{{ player.wins }} - {{ player.games - player.wins }}</td>
            <td>{{ player.rating }}</td>
            <td>{{ player.peak_rating }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.tableRankings {
  margin-top: 16px;
  &__container {
    overflow: auto;
    max-height: 70dvh;
  }
}
</style>
