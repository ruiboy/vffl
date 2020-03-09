<template>
  <div class="club">
    <div class="players">
      <club-players :players="players"></club-players>
    </div>
    <div class="mpl">
      <multi-player-list :players="players"></multi-player-list>
    </div>
    <div class="footer">
      <afl-club-player-count :players="players"></afl-club-player-count>
    </div>
  </div>
</template>

<script>
  import MultiPlayerList from './multiplayerlist/MultiPlayerList.vue'
  import ClubPlayers from './ClubPlayers.vue'
  import AflClubPlayerCount from './AflClubPlayerCount'

  export default {
    components: {
      'multi-player-list': MultiPlayerList,
      'club-players': ClubPlayers,
      'afl-club-player-count': AflClubPlayerCount
    },

    computed: {
      players () {
        return this.$store.getters.getClubPlayers(this.$route.params.name)
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
  }

  .club {
    display: grid;
    grid: 'players mpl mpl mpl mpl' 'footer footer footer footer footer';
    padding: 0;
  }
</style>
