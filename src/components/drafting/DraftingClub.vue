<template>
  <div class="club">
    <h1>
      <router-link :to="{path: '/club/' + name}">{{ name }}</router-link>
    </h1>
    <ul>
      <li>players: <span class="value">{{ playerCount }}</span><span v-if="allDone" class="done">DONE!</span></li>
      <li>paid: <span class="value">{{ totalPaid }}</span></li>
      <li>
        to get: <span class="value">{{ playerCountRemaining }}</span>
        from <span class="value">{{ totalRemaining }}</span>
      </li>
      <li :class="{overspent : overspent}">to spend each: <span v-if="!allDone" class="value important">{{ remainingPerPlayer }}</span></li>
      <li>max one player: <span v-if="!allDone" class="value important">{{ maxOnePlayer }}</span></li>
      <li>
        k <span class="value">{{ countPos('K') }}</span>
        h <span class="value">{{ countPos('H') }}</span>
        m <span class="value">{{ countPos('M') }}</span>
        r <span class="value">{{ countPos('R') }}</span>
        t <span class="value">{{ countPos('T') }}</span>
        g <span class="value">{{ countPos('G') }}</span>
        s <span class="value">{{ countPos('S') }}</span>
        ? <span class="value">{{ countPos('') }}</span>
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

      allDone () {
        return this.playerCountRemaining === 0
      },

      totalPaid () {
        return this.players.reduce((total, p) => total + p.cents, 0) / 100
      },

      totalRemaining () {
        return Math.round((35 - this.totalPaid) * 100) / 100
      },

      remainingPerPlayer () {
        return Math.round(this.totalRemaining / this.playerCountRemaining * 100) / 100
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
    width: 174px;
    height: 117px;
  }

  .club h1 {
    font-size: 1.2em;
    margin: 0 0 0 5px;
  }

  .club h1 a {
    color: black;
  }

  .club ul {
    margin: 0;
    padding: 0 0 0 5px;
    color: #333333;
  }

  .club li {
    list-style: none;
    height: 15px;
  }

  .done,
  .value {
    font-weight: bold;
    color: black;
  }

  .important {
    text-decoration: underline;
  }

  .overspent {
    background-color: orangered;
  }
</style>
