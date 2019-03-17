<template>
  <div class="player-list">
    <div class="players">
      <table>
        <tbody>
        <tr class="player"
            v-for="p in players"
            :id="p.id"
            :key="p.id">
          <td class="name">{{p.name}}</td>
          <td class="aflClub" :title="p.aflClub">{{p.aflClub}}</td>
          <td class="drafted-by">{{p.draftedBy}}</td>
          <td class="paid">{{p.cents / 100}}</td>
          <td class="drafted-ts">{{new Date(p.draftedTs).toLocaleString()}}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="chart">
      <chart-players-per-afl-club></chart-players-per-afl-club>
    </div>
  </div>
</template>

<script>
  import ChartPlayersPerAflClub from './ChartPlayersPerAflClub.vue'

  export default {
    components: {
      'chart-players-per-afl-club': ChartPlayersPerAflClub
    },

    computed: {
      players () {
        return this.$store.getters.getDraftedPlayers
      }
    },

    methods: {
      getAflClubPlayerCount (aflClub) {
        return this.players.filter(p => p.aflClub === aflClub).length
      }
    }
  }
</script>

<style scoped lang="scss">
  .player-list {
    border: thin gray solid;
  }

  .player-list div {
    float: left;
  }

  .player-list tbody {
    // make only the table body scroll within a view port
    display: block;
    height: 694px;
    font-size: 0.8em;
    overflow: scroll;
  }

  // put a line every 6th row
  .player-list tr:nth-child(6n+0) td {
    border-bottom: thin gray solid;
  }

  // three selectors below add row numbers at start of each table row
  .player-list table {
    counter-reset: rowNumber;
  }

  .player-list table tr {
    counter-increment: rowNumber;
  }

  .player-list table tr td:first-child::before {
    content: counter(rowNumber);
    min-width: 1em;
    margin-right: 0.5em;
    font-size: 0.6em;
  }
</style>
