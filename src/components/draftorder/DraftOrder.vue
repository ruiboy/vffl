<template>
  <div class="player-list">
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
</template>

<script>
  export default {
    computed: {
      players () {
        return this.$store.getters.getDraftedPlayers
      }
    }
  }
</script>

<style scoped lang="scss">
  .player-list {
    border: thin gray solid;
  }

  .player-list tbody {
    // make only the table body scroll within a view port
    display: block;
    height: 694px;
    overflow: scroll;
  }

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
