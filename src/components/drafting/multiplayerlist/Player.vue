<template>
  <div class="player">
    <div class="title" @click="toggleAflClubSetter">
      <span class="name">{{player.name}}</span>
      <span class="club">{{player.aflClub}}</span>
    </div>
    <div>
      Position
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
      Priority
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
      <button @click="priority = 1000; pos=''; comment='Injured'" title="Injured">Inj</button>
      <button @click="priority = 1000; pos=''; comment='Delisted'" title="Delisted">Dl</button>
      <button @click="priority = 1000; pos=''; comment='Retired'" title="Retired">Rt</button>
      <button @click="priority = 500; pos=''">Clear</button>
    </div>
    <div>
      Comments
      <textarea class="comment" v-model.lazy="comment"/>
    </div>
    <div>
      Drafted by
      <select class="draftedBy" v-model="draftedBy">
        <option value=""></option>
        <option value="Cheetahs">Cheetahs</option>
        <option value="KC">KFC</option>
        <option value="Ruiboys">Ruiboys</option>
        <option value="Slashers">Slashers</option>
        <option value="THC">THC</option>
      </select>
      for
      <input class="cents" type="number" v-model="cents"/>
      cents
    </div>
    <div class="team-selectors">
      <button class="cheetahs" @click="draftedBy = 'Cheetahs'">Che</button>
      <button class="kfc" @click="draftedBy = 'KC'">KFC</button>
      <button class="ruiboys" @click="draftedBy = 'Ruiboys'">Rui</button>
      <button class="slashers" @click="draftedBy = 'Slashers'">Sla</button>
      <button class="thc" @click="draftedBy = 'THC'">THC</button>
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
    </div>
    <div class="clear-selectors">
      <button @click="cents = 0; draftedBy =''">Clear</button>
    </div>
    <div id="afl-club-popup">
      New Club:
      <select class="afl-club" v-model="aflClub">
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
      <button @click="toggleAflClubSetter">x</button>
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
      aflClub: {
        get () {
          return this.player.aflClub
        },
        set (value) {
          this.$store.dispatch('setAflClub', {player: this.player, value: value})
        }
      },

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
      toggleAflClubSetter () {
        const el = document.getElementById('afl-club-popup')
        el.style.display = (!el.style.display || el.style.display === 'none') ? 'block' : 'none'
      },

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
    height: 351px;
    // needed so can absolute position children
    position: relative;
  }

  .player div {
    margin: 5px;
  }

  .player button {
    background-color: lightgray;
  }

  .team-selectors button {
    width: 45px;
  }

  .team-selectors button.cheetahs {
    background-color: navy;
    color: white;
  }

  .team-selectors button.kfc {
    background: linear-gradient(red 50%, black 50%);
    color: white;
  }

  .team-selectors button.ruiboys {
    background: linear-gradient(blue 50%, black 50%);
    color: yellow;
  }

  .team-selectors button.slashers {
    background: linear-gradient(greenyellow 50%, yellow 50%);
    color: black;
  }

  .team-selectors button.thc {
    background-color: orange;
    color: black;
  }


  .name {
    font-size: 1.2em;
    font-weight: bold;
  }

  .club {
    font-size: 0.9em;
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
    height: 80px;
  }

  .cents {
    width: 50px;
  }

  .pos-selectors button,
  .priority-selectors button,
  .team-selectors button,
  .money-selectors button,
  .clear-selectors button {
    font-size: 0.8em;
    margin: 0px;
    padding: 1px 4px 1px 4px;
  }

  .close {
    position: absolute;
    top: 8px;
    right: 8px;
  }

  #afl-club-popup {
    position: absolute;
    top: 8px;
    left: 6px;
    padding: 10px;
    border: thin solid black;
    background-color: lightgray;
    display: none;
  }
</style>
