<template>
  <div class="club">
    <h1>
      <router-link :to="{path: '/club/' + name}">{{ name }}</router-link>
    </h1>
    <ul>
      <li>Players Drafted: {{ playerCount }}</li>
      <li>Paid: {{ totalPaid }}</li>
      <li>To Get: {{ playerCountRemaining }} from {{ totalRemaining }}</li>
      <li :class="{overspent : overspent}">To Spend Each: {{ remainingPerPlayer }}</li>
      <li>Max One Player: {{ maxOnePlayer }}</li>
      <li>
        {{ countPos('K') }}k
        {{ countPos('H') }}h
        {{ countPos('M') }}m
        {{ countPos('R') }}r
        {{ countPos('T') }}t
        {{ countPos('G') }}g
        {{ countPos('S') }}s
        {{ countPos('') }}x
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        required: true,
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
        return 30 - this.playerCount;
      },

      totalPaid () {
        return this.players.reduce((total, p) => total + p.cents, 0) / 100
      },

      totalRemaining () {
        return Math.round((35 - this.totalPaid) * 100) / 100
      },

      remainingPerPlayer () {
        return Math.round(this.totalRemaining / this.playerCountRemaining * 10000) / 10000
      },

      maxOnePlayer () {
        return Math.round((this.totalRemaining - (this.playerCountRemaining * 0.2) + 0.2) * 100) / 100
      },

      overspent () {
        return this.remainingPerPlayer < 0.2
      }
    },

    methods: {
      countPos (pos) {
        return this.players.filter((p) => p.pos === pos).length;
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
    font-size: 1.2em;
    margin: 0 0 0 2px;
  }

  .club ul {
    margin: 0;
    padding: 0 0 0 10px;
  }

  .club li {
    list-style: none;
    height: 15px;
  }

  .overspent {
    background-color: orangered;
  }
</style>
