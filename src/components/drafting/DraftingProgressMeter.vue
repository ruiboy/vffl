<template>
  <div class="progress-meter">
    <span
      v-for="p in players"
      :key="p.id"
      class="increment done"
    ></span>
    <span
      v-for="p in playersRemaining"
      :key="p.id"
      class="increment not-done"
    ></span>
  </div>
</template>

<script>
  export default {
    computed: {
      players () {
        return this.$store.getters.getDraftedPlayers
      },

      playersRemaining () {
        return 180 - this.players.length
      }
    }
  }
</script>

<style scoped lang="scss">
  .progress-meter {
    width: 1395px;
    height: 10px;
    display: flex;
  }

  .increment {
    width: 100px;
  }

  .done {
    background-color: darkblue;
  }

  .not-done {
    background-color: grey;
  }
</style>
