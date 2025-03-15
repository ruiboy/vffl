<template>
  <div class="util">
    <div class="xml-clubs">
      <xml-club
        :name="'Cheetahs'"
        :players="getClubPlayers('Cheetahs')">
      </xml-club>
      <xml-club
        :name="'Ruiboys'"
        :players="getClubPlayers('Ruiboys')">
      </xml-club>
      <xml-club
        :name="'Slashers'"
        :players="getClubPlayers('Slashers')">
      </xml-club>
      <xml-club
        :name="'THC'"
        :players="getClubPlayers('THC')">
      </xml-club>
    </div>
  </div>
</template>

<script>
  import XmlClub from './XmlClub.vue'
  import {mapState} from 'vuex'

  export default {
    components: {
      'xml-club': XmlClub,
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
  .xml-clubs {
    padding: 5;
  }
</style>
