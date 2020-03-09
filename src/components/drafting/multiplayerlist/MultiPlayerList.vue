<template>
  <div class="multi-player-list">
    <player-list
      :title="'Kicks'"
      :position="'k'"
      :players="getKickers"
      :playerToSelect="selectedPlayer"
      v-on:playerSelected="playerSelected($event)">
    </player-list>
    <player-list
      :title="'Handballs'"
      :position="'h'"
      :players="getHandballers"
      :playerToSelect="selectedPlayer"
      v-on:playerSelected="playerSelected($event)">
    </player-list>
    <player-list
      :title="'Marks'"
      :position="'m'"
      :players="getMarkers"
      :playerToSelect="selectedPlayer"
      v-on:playerSelected="playerSelected($event)">
    </player-list>
    <player-list
      :title="'Hitouts'"
      :position="'r'"
      :players="getRuckmen"
      :playerToSelect="selectedPlayer"
      v-on:playerSelected="playerSelected($event)">
    </player-list>
    <player-list
      :title="'Tackles'"
      :position="'t'"
      :players="getTacklers"
      :playerToSelect="selectedPlayer"
      v-on:playerSelected="playerSelected($event)">
    </player-list>
    <player-list
      :title="'Goals'"
      :position="'g'"
      :players="getGoalKickers"
      :playerToSelect="selectedPlayer"
      v-on:playerSelected="playerSelected($event)">
    </player-list>
    <player-list
      :title="'Stars'"
      :position="'s'"
      :players="getStars"
      :playerToSelect="selectedPlayer"
      v-on:playerSelected="playerSelected($event)">
    </player-list>
    <player
      v-if="selectedPlayer !== null"
      :player="selectedPlayer"
      v-on:playerClosed="playerSelected(null)">
    </player>
  </div>
</template>

<script>
  import PlayerList from './PlayerList.vue'
  import Player from './Player.vue'

  export default {
    components: {
      'player-list': PlayerList,
      'player': Player
    },

    props: {
      players: {
        required: true,
        type: Array
      }
    },

    data () {
      return {
        selectedPlayer: null
      }
    },

    methods: {
      playerSelected(player) {
        this.selectedPlayer = player
      }
    },

    computed: {
      getKickers() {
        return [...this.players].sort((a, b) => (a.kicks > b.kicks) ? -1 : (a.kicks < b.kicks) ? 1 : 0);
      },
      getHandballers() {
        return [...this.players].sort((a, b) => (a.handballs > b.handballs) ? -1 : (a.handballs < b.handballs) ? 1 : 0);
      },
      getMarkers() {
        return [...this.players].sort((a, b) => (a.marks > b.marks) ? -1 : (a.marks < b.marks) ? 1 : 0);
      },
      getRuckmen() {
        return [...this.players].sort((a, b) => (a.hitouts > b.hitouts) ? -1 : (a.hitouts < b.hitouts) ? 1 : 0);
      },
      getTacklers() {
        return [...this.players].sort((a, b) => (a.tackles > b.tackles) ? -1 : (a.tackles < b.tackles) ? 1 : 0);
      },
      getGoalKickers() {
        return [...this.players].sort((a, b) => (a.goals > b.goals) ? -1 : (a.goals < b.goals) ? 1 : 0);
      },
      getStars() {
        return [...this.players].sort((a, b) => (a.star > b.star) ? -1 : (a.star < b.star) ? 1 : 0);
      }
    },
  }
</script>

<style scoped lang="scss">
  .multi-player-list div {
    float: left;
  }
</style>
