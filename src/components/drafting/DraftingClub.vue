<template>
  <div class="club">
    <h1>{{ name }}</h1>
    <ul>
      <li>Players Drafted: {{ playerCount }}</li>
      <li>Paid: {{ totalPaid }}</li>
      <li>To Get: {{ playerCountRemaining }}</li>
      <li>To Spend: {{ totalRemaining }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        required: false,
        type: String
      },
      players: {
        required: true,
        type: Array
      }
    },

    computed: {
      playerCount () {
        return this.players.length;
      },

      playerCountRemaining () {
        return 30 - this.players.length;
      },

      totalPaid () {
        return this.players.reduce((total, p) => total + p.cents, 0) / 100
      },

      totalRemaining () {
        return this.players.reduce((total, p) => total - p.cents, 3500) / 100
      }
    }
  }
</script>

<style scoped lang="scss">
  .club {
    border: thin black solid;
    font-size: 0.8em;
    width: 170px;
    height: 116px;
  }

  .club h1 {
    font-size: 1.4em;
  }
</style>
