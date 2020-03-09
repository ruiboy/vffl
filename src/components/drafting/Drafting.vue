<template>
  <div class="drafting">
    <div class="mpl">
      <h1 v-show="loadingStatus">Loading...</h1>
      <multi-player-list :players="players"></multi-player-list>
    </div>
    <div class="clubs">
      <drafting-club
        :name="'THC'"
        :players="getClubPlayers('THC')">
      </drafting-club>
      <drafting-club
        :name="'Austins'"
        :players="getClubPlayers('Austins')">
      </drafting-club>
      <drafting-club
        :name="'Fred'"
        :players="getClubPlayers('Fred')">
      </drafting-club>
      <drafting-club
        :name="'Ruiboys'"
        :players="getClubPlayers('Ruiboys')">
      </drafting-club>
      <drafting-club
        :name="'Cheetahs'"
        :players="getClubPlayers('Cheetahs')">
      </drafting-club>
      <drafting-club
        :name="'Slashers'"
        :players="getClubPlayers('Slashers')">
      </drafting-club>
    </div>
    <div class="footer">
      <drafting-progress-meter :players="players"></drafting-progress-meter>
    </div>
  </div>
</template>

<script>
  import MultiPlayerList from './multiplayerlist/MultiPlayerList.vue'
  import DraftingClub from './DraftingClub.vue'
  import DraftingProgressMeter from './DraftingProgressMeter.vue'
  import {mapState} from 'vuex'

  export default {
    components: {
      'multi-player-list': MultiPlayerList,
      'drafting-club': DraftingClub,
      'drafting-progress-meter': DraftingProgressMeter
    },

    computed: {
      ...mapState({
        loadingStatus: state => state.drafting.loadingStatus,
        players: state => state.drafting.players
      })
    },

    methods: {
      getClubPlayers(clubName) {
        return this.$store.getters.getClubPlayers(clubName)
      }
    }
  }
</script>

<style scoped lang="scss">
  .mpl {
    grid-area: mpl;
  }

  .clubs {
    grid-area: clubs;
  }

  .footer {
    grid-area: footer;
  }

  .drafting {
    display: grid;
    grid: 'mpl mpl mpl mpl clubs' 'footer footer footer footer footer';
    padding: 0;
  }
</style>
