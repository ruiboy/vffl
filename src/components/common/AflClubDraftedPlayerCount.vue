<template>
  <div class="player-count">
    <span class="club">Adel</span><span :data-count="playerCount['Adelaide'] || 0" class="count">{{playerCount['Adelaide'] || 0}}</span>
    <span class="club">Bris</span><span :data-count="playerCount['Brisbane Lions'] || 0" class="count">{{playerCount['Brisbane Lions'] || 0}}</span>
    <span class="club">Carl</span><span :data-count="playerCount['Carlton'] || 0" class="count">{{playerCount['Carlton'] || 0}}</span>
    <span class="club">Coll</span><span :data-count="playerCount['Collingwood'] || 0" class="count">{{playerCount['Collingwood'] || 0}}</span>
    <span class="club">Ess</span><span :data-count="playerCount['Essendon'] || 0" class="count">{{playerCount['Essendon'] || 0}}</span>
    <span class="club">Fre</span><span :data-count="playerCount['Fremantle'] || 0" class="count">{{playerCount['Fremantle'] || 0}}</span>
    <span class="club">Geel</span><span :data-count="playerCount['Geelong'] || 0" class="count">{{playerCount['Geelong'] || 0}}</span>
    <span class="club">GCS</span><span :data-count="playerCount['Gold Coast Suns'] || 0" class="count">{{playerCount['Gold Coast Suns'] || 0}}</span>
    <span class="club">GWS</span><span :data-count="playerCount['Greater Western Sydney'] || 0" class="count">{{playerCount['Greater Western Sydney'] || 0}}</span>
    <span class="club">Haw</span><span :data-count="playerCount['Hawthorn'] || 0" class="count">{{playerCount['Hawthorn'] || 0}}</span>
    <span class="club">NM</span><span :data-count="playerCount['Kangaroos'] || 0" class="count">{{playerCount['Kangaroos'] || 0}}</span>
    <span class="club">Melb</span><span :data-count="playerCount['Melbourne'] || 0" class="count">{{playerCount['Melbourne'] || 0}}</span>
    <span class="club">Port</span><span :data-count="playerCount['Port Adelaide'] || 0" class="count">{{playerCount['Port Adelaide'] || 0}}</span>
    <span class="club">Rich</span><span :data-count="playerCount['Richmond'] || 0" class="count">{{playerCount['Richmond'] || 0}}</span>
    <span class="club">SK</span><span :data-count="playerCount['St Kilda'] || 0" class="count">{{playerCount['St Kilda'] || 0}}</span>
    <span class="club">Syd</span><span :data-count="playerCount['Sydney Swans'] || 0" class="count">{{playerCount['Sydney Swans'] || 0}}</span>
    <span class="club">WCE</span><span :data-count="playerCount['West Coast Eagles'] || 0" class="count">{{playerCount['West Coast Eagles'] || 0}}</span>
    <span class="club">WB</span><span :data-count="playerCount['Western Bulldogs'] || 0" class="count">{{playerCount['Western Bulldogs'] || 0}}</span>
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

    computed: {
      playerCount () {
        let ar = [];
        this.players.forEach(p => { if (p.draftedBy) ar[p.aflClub] ? ar[p.aflClub]++ : ar[p.aflClub] = 1 });
        return ar;
      }
    }
  }
</script>

<style scoped lang="scss">
  .player-count {
    margin: 0px 1px 0px 1px;
    font-size: 0.9em;
  }
  
  .club {
    padding-right: 3px;
  }

  .count {
    padding-right: 40px;
    font-weight: bold;
  }

  .count[data-count="0"] {
    color: orangered;
    text-decoration: underline;
    text-decoration-thickness: 3px;
  }
</style>
