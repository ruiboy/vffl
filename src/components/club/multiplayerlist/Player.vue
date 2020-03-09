<template>
  <div class="player">
    <div>
      <span class="name">{{player.name}}</span>
      <span class="club">{{player.aflClub}}</span>
    </div>
    <div class="pos-selectors">
      <button @click="pos = 'K'">K</button>
      <button @click="pos = 'H'">H</button>
      <button @click="pos = 'M'">M</button>
      <button @click="pos = 'R'">R</button>
      <button @click="pos = 'T'">T</button>
      <button @click="pos = 'G'">G</button>
      <button @click="pos = 'S'">S</button>
      <button @click="pos = ''">Not sure</button>
    </div>
    <div class="priority-selectors">
      <button @click="priority = 1000">Unavailable</button>
      <button @click="priority = 500">Available</button>
    </div>
    <div>
      Comments:
      <textarea class="comment" v-model.lazy="comment"/>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      player: {
        required: false,
        type: Object
      }
    },

    computed: {
      pos: {
        get () {
          return this.player.pos
        },
        set (value) {
          this.$store.dispatch('setPlayerPos', {player: this.player, value: value})
        }
      },

      priority: {
        get () {
          return this.player.priority
        },
        set (value) {
          this.$store.dispatch('setPlayerPriority', {player: this.player, value: value})
        }
      },

      comment: {
        get () {
          return this.player.comment
        },
        set (value) {
          this.$store.dispatch('setPlayerComment', {player: this.player, value: value})
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .player {
    padding: 6px;
    border: thin black solid;
    width: 286px;
    height: 350px;
  }

  .player div {
    margin: 5px;
  }

  .name {
    font-size: 1.2em;
    font-weight: bold;
  }

  .club {
    font-size: 0.9em;
    font-weight: bold;
  }

  .pos {
    font-size: 0.8em;
  }

  .comment {
    width: 263px;
    height: 100px;
  }

  .pos-selectors,
  .priority-selectors {
    font-size: 0.8em;
  }
</style>
