<template>
  <div class="player-count">
    <span class="club">Adel</span><span class="count">{{getPlayerCount('Adelaide')}}</span>
    <span class="club">Bris</span><span class="count">{{getPlayerCount('Brisbane Lions')}}</span>
    <span class="club">Carl</span><span class="count">{{getPlayerCount('Carlton')}}</span>
    <span class="club">Coll</span><span class="count">{{getPlayerCount('Collingwood')}}</span>
    <span class="club">Ess</span><span class="count">{{getPlayerCount('Essendon')}}</span>
    <span class="club">Fre</span><span class="count">{{getPlayerCount('Fremantle')}}</span>
    <span class="club">Geel</span><span class="count">{{getPlayerCount('Geelong')}}</span>
    <span class="club">GCS</span><span class="count">{{getPlayerCount('Gold Coast Suns')}}</span>
    <span class="club">GWS</span><span class="count">{{getPlayerCount('Greater Western Sydney')}}</span>
    <span class="club">Haw</span><span class="count">{{getPlayerCount('Hawthorn')}}</span>
    <span class="club">NM</span><span class="count">{{getPlayerCount('Kangaroos')}}</span>
    <span class="club">Melb</span><span class="count">{{getPlayerCount('Melbourne')}}</span>
    <span class="club">Port</span><span class="count">{{getPlayerCount('Port Adelaide')}}</span>
    <span class="club">Rich</span><span class="count">{{getPlayerCount('Richmond')}}</span>
    <span class="club">SK</span><span class="count">{{getPlayerCount('St Kilda')}}</span>
    <span class="club">Syd</span><span class="count">{{getPlayerCount('Sydney Swans')}}</span>
    <span class="club">WCE</span><span class="count">{{getPlayerCount('West Coast Eagles')}}</span>
    <span class="club">WB</span><span class="count">{{getPlayerCount('Western Bulldogs')}}</span>
  </div>
</template>

<script>
  export default {
    props: {
      players: {
        required: true,
        type: Array
      }
    },

    methods: {
      getPlayerCount (aflClub) {
        return this.players.filter(p => p.aflClub === aflClub).length
      }
    }
  }
</script>

<style scoped lang="scss">
  .player-count {
    margin: 1px 1px 1px 1px;
    font-size: 0.9em;
  }
  .club {
    padding-right: 3px;
  }

  .count {
    padding-right: 5px;
    font-weight: bold;
  }
</style>
