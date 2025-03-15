<template>
  <div class="club">
    <div class="players">
      <club-players :players="players"></club-players>
    </div>
    <div class="mpl">
      <multi-player-list :players="players"></multi-player-list>
    </div>
    <div class="footer">
      <drafted-player-progress-meter
        :players="players"
        :denominator="30">
      </drafted-player-progress-meter>
      <afl-club-drafted-player-count :players="players"></afl-club-drafted-player-count>
    </div>
  </div>
</template>

<script>
  import MultiPlayerList from './multiplayerlist/MultiPlayerList.vue'
  import ClubPlayers from './ClubPlayers.vue'
  import DraftedPlayerProgressMeter from '../common/DraftedPlayerProgressMeter.vue'
  import AflClubDraftedPlayerCount from '../common/AflClubDraftedPlayerCount'

  export default {
    components: {
      'multi-player-list': MultiPlayerList,
      'club-players': ClubPlayers,
      'drafted-player-progress-meter': DraftedPlayerProgressMeter,
      'afl-club-drafted-player-count': AflClubDraftedPlayerCount
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
