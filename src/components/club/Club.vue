<template>
  <div class="club">
    <div class="players">
      <club-players :players="players"></club-players>
    </div>
    <div class="mpl">
      <multi-player-list :players="players"></multi-player-list>
    </div>
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
  import MultiPlayerList from '../teambuilder/MultiPlayerList.vue'
  import ClubPlayers from './ClubPlayers.vue'

  export default {
    components: {
      'multi-player-list': MultiPlayerList,
      'club-players': ClubPlayers
    },

    computed: {
      players () {
        return this.$store.getters.getClubPlayers(this.$route.params.name)
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
  .players {
    grid-area: players;
  }

  .mpl {
    grid-area: mpl;
  }

  .footer {
    grid-area: footer;
    font-size: 0.8em;;
  }

  .club {
    display: grid;
    grid: 'players mpl mpl mpl mpl' 'footer footer footer footer footer';
    padding: 0;
  }
</style>
