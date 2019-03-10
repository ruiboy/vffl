<template>
  <div class="player-list">
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="p in getKickers" :key="p.id" class="player">
        <span class="name">{{p.name}}</span>
        <span class="aflClub">({{p.aflClub.substring(0, 4)}})</span>
        <span class="stats">
          <span class="k highlight">{{p.kicks / 10}}</span>
          <span class="h">{{p.handballs / 10}}</span>
          <span class="m">{{p.marks / 10}}</span>
          <span class="h">{{p.hitouts / 10}}</span>
          <span class="t">{{p.tackles / 10}}</span>
          <span class="g">{{p.goals / 10}}</span>
          <span class="s">{{p.star / 10}}</span>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {mapGetters} from 'vuex'

  export default {
    data () {
      return {
        title: 'Kicks'
      }
    },

    computed: {
      ...mapGetters([
        'getKickers'
      ])
    }
  }
</script>

<style scoped lang="scss">
  .name {
    font-size: 0.8em
  }

  .aflClub {
    font-size: 0.7em
  }

  .stats {
    font-size: 0.6em
  }

  .highlight {
    font-weight: bold;
  }
</style>
