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
    <div class="footer">
      Adel {{getAflClubPlayerCount('Adelaide')}} &nbsp; &nbsp;
      Bris {{getAflClubPlayerCount('Brisbane Lions')}} &nbsp; &nbsp;
      Carl {{getAflClubPlayerCount('Carlton')}} &nbsp; &nbsp;
      Coll {{getAflClubPlayerCount('Collingwood')}} &nbsp; &nbsp;
      Ess {{getAflClubPlayerCount('Essendon')}} &nbsp; &nbsp;
      Fre {{getAflClubPlayerCount('Fremantle')}} &nbsp; &nbsp;
      Geel {{getAflClubPlayerCount('Geelong')}} &nbsp; &nbsp;
      GCS {{getAflClubPlayerCount('Gold Coast Suns')}} &nbsp; &nbsp;
      GWS {{getAflClubPlayerCount('Greater Western Sydney')}} &nbsp; &nbsp;
      Haw {{getAflClubPlayerCount('Hawthorn')}} &nbsp; &nbsp;
      NM {{getAflClubPlayerCount('Kangaroos')}} &nbsp; &nbsp;
      Melb {{getAflClubPlayerCount('Melbourne')}} &nbsp; &nbsp;
      Port {{getAflClubPlayerCount('Port Adelaide')}} &nbsp; &nbsp;
      Rich {{getAflClubPlayerCount('Richmond')}} &nbsp; &nbsp;
      SK {{getAflClubPlayerCount('St Kilda')}} &nbsp; &nbsp;
      Syd {{getAflClubPlayerCount('Sydney Swans')}} &nbsp; &nbsp;
      WCE {{getAflClubPlayerCount('West Coast Eagles')}} &nbsp; &nbsp;
      WB {{getAflClubPlayerCount('Western Bulldogs')}}
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      players () {
        return this.$store.getters.getDraftedPlayers
      }
    },

    methods: {
      getAflClubPlayerCount (aflClub) {
        return this.players.filter(p => p.aflClub == aflClub).length
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

  // put a line every 6th row
  .player-list tr:nth-child(6n+0) td {
    border-bottom: thin gray solid;
  }

  .footer {
    font-size: 0.8em;;
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
