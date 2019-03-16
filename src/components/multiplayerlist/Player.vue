<template>
  <div class="player">
    <div class="name">{{player.name}} ({{player.aflClub}})</div>
    <div>
      Position:
      <select class="pos" v-model="pos">
        <option value=""></option>
        <option value="K">Kicks</option>
        <option value="H">Handballs</option>
        <option value="M">Marks</option>
        <option value="R">Hitouts</option>
        <option value="T">Tackles</option>
        <option value="G">Goals</option>
        <option value="S">Star</option>
      </select>
      Priority:
      <input class="priority" type="number" v-model="priority" maxlength="3"/>
    </div>
    <div class="pos-selectors">
      <button @click="pos = 'K'">K</button>
      <button @click="pos = 'H'">H</button>
      <button @click="pos = 'M'">M</button>
      <button @click="pos = 'R'">R</button>
      <button @click="pos = 'T'">T</button>
      <button @click="pos = 'G'">G</button>
      <button @click="pos = 'S'">S</button>
    </div>
    <div class="priority-selectors">
      <button @click="priority = 1">1</button>
      <button @click="priority = 2">2</button>
      <button @click="priority = 3">3</button>
      <button @click="priority = 4">4</button>
      <button @click="priority = 5">5</button>
      <button @click="priority = 1000; pos=''">Avoid</button>
      <button @click="priority = 500; pos=''">Clear</button>
    </div>
    <div>
      Comments:
      <textarea class="comment" v-model.lazy="comment"/>
    </div>
    <div>
      Drafted by
      <select class="draftedBy" v-model="draftedBy">
        <option value=""></option>
        <option value="Austins">Austins</option>
        <option value="Cheetahs">Cheetahs</option>
        <option value="Fred">Fred</option>
        <option value="Ruiboys">Ruiboys</option>
        <option value="Slashers">Slashers</option>
        <option value="THC">THC</option>
      </select>
      for
      <input class="cents" type="number" v-model="cents"/>
      cents
    </div>
    <div class="team-selectors">
      <button @click="draftedBy = 'Austins'">Aust</button>
      <button @click="draftedBy = 'Cheetahs'">Che</button>
      <button @click="draftedBy = 'Fred'">Fred</button>
      <button @click="draftedBy = 'Ruiboys'">Rui</button>
      <button @click="draftedBy = 'Slashers'">Sla</button>
      <button @click="draftedBy = 'THC'">THC</button>
    </div>
    <div class="money-selectors">
      <button @click="cents += 100">$1</button>
      <button @click="cents += 10">10</button>
      <button @click="cents += 20">20</button>
      <button @click="cents += 30">30</button>
      <button @click="cents += 40">40</button>
      <button @click="cents += 50">50</button>
      <button @click="cents += 60">60</button>
      <button @click="cents += 70">70</button>
      <button @click="cents += 80">80</button>
      <button @click="cents += 90">90</button>
      <button @click="cents = 0">Clear</button>
    </div>
    <button class="close" @click="closePlayer">x</button>
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
      },

      draftedBy: {
        get () {
          return this.player.draftedBy
        },
        set (value) {
          this.$store.dispatch('setPlayerDraftedBy', {player: this.player, value: value})
        }
      },

      cents: {
        get () {
          return this.player.cents
        },
        set (value) {
          this.$store.dispatch('setPlayerCents', {player: this.player, value: value})
        }
      }
    },

    methods: {
      closePlayer () {
        this.$emit('playerClosed');
      }
    }
  }
</script>

<style scoped lang="scss">
  .player {
    padding: 6px;
    border: thin black solid;
    width: 306px;
    height: 350px;
    // needed so can absolute position children
    position: relative;
  }

  .player div {
    margin: 5px;
  }

  .name {
    font-size: 1.2em;
    font-weight: bold;
  }

  .pos,
  .priority,
  .draftedBy,
  .cents {
    font-size: 0.8em;
  }

  .priority {
    width: 50px
  }

  .comment {
    width: 283px;
    height: 100px;
  }

  .cents {
    width: 50px;
  }

  .pos-selectors,
  .priority-selectors,
  .team-selectors,
  .money-selectors {
    font-size: 0.8em;
  }

  .money-selectors button {
    padding: 3px;
  }

  .close {
    position: absolute;
    top: 8px;
    right: 8px;
  }
</style>
