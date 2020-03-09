<template>
  <div class="progress-meter">
    <div class="done" :style="'width:' + percentage + '%'"></div>
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
      percentage () {
        return this.players.filter(p => p.draftedBy).length / 180 * 100
      }
    }
  }
</script>

<style scoped lang="scss">
  .progress-meter {
    width: 1395px;
    height: 10px;
    display: flex;
    background-color: darkblue;
  }

  .done {
    background-color: gold;
  }
</style>
