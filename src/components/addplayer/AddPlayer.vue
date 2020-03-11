<template>
  <div class="add-player">
    <h1>Add Player</h1>
    <form>
      Name
      <input class="name" v-model="player.name"/>
      Club
      <select class="afl-club" v-model="player.aflClub">
        <option value="Adelaide">Adel</option>
        <option value="Brisbane Lions">Bris</option>
        <option value="Carlton">Carl</option>
        <option value="Collingwood">Coll</option>
        <option value="Essendon">Ess</option>
        <option value="Fremantle">Fre</option>
        <option value="Geelong">Geel</option>
        <option value="Gold Coast Suns">GCS</option>
        <option value="Greater Western Sydney">GWS</option>
        <option value="Hawthorn">Haw</option>
        <option value="Kangaroos">NM</option>
        <option value="Melbourne">Melb</option>
        <option value="Port Adelaide">Port</option>
        <option value="Richmond">Rich</option>
        <option value="St Kilda">SK</option>
        <option value="Sydney Swans">Syd</option>
        <option value="West Coast Eagles">WCE</option>
        <option value="Western Bulldogs">WB</option>
      </select>
      <button type="submit" @click="insert">Add</button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        player: {
          name: '',
          aflClub: 'Adelaide'
        }
      }
    },

    methods: {
      insert() {
        this.$store.dispatch('addPlayer', {player: this.player})
      }
    }
  }
</script>

<style scoped lang="scss">
  .add-player {
    margin: 10px;
  }

  .add-player h1 {
    font-size: 1em;
  }
</style>
