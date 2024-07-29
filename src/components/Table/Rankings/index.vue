<script lang="ts" setup>
const props = defineProps({
  rankings: { type: Object, required: true },
})
</script>
<template>
  <!-- {{ props.rankings }} -->
  <div class="tableRankings">
    <div class="tableRankings__container">
      <table>
        <thead>
          <tr>
            <!-- <th scope="col">Planet</th>
          <th scope="col">Diameter (km)</th>
          <th scope="col">Distance to Sun (AU)</th>
          <th scope="col">Orbit (days)</th> -->
            <th>Rank</th>
            <th>Region</th>
            <th>Name</th>
            <th>Tier</th>
            <th>Win-Loss</th>
            <th>Season Rating</th>
            <th>Peak Rating</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="player in rankings" :key="player.rank">
            <th scope="row">{{ player.rank }}</th>
            <td>{{ player.region }}</td>
            <td>{{ player.name ? player.name : player.teamname }}</td>
            <td>{{ player.tier }}</td>
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
  // background-color: red;

  &__container {
    // transform: rotateX(180deg);
    overflow: auto;
    max-height: 70dvh;
    table {
      // transform: rotateX(180deg);
    }
  }
}
</style>
