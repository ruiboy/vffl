<template>
  <div class="player">
    <div class="name">{{player.name}} ({{player.aflClub}})</div>
    <div>
      Position:
      <select class="pos" v-model="player.pos">
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
      <input class="priority" type="number" v-model="player.priority" maxlength="3"/>
    </div>
    <div class="pos-selectors">
      <button @click="player.pos = 'K'">K</button>
      <button @click="player.pos = 'H'">H</button>
      <button @click="player.pos = 'M'">M</button>
      <button @click="player.pos = 'R'">R</button>
      <button @click="player.pos = 'T'">T</button>
      <button @click="player.pos = 'G'">G</button>
      <button @click="player.pos = 'S'">S</button>
    </div>
    <div class="priority-selectors">
      <button @click="player.priority = 1">1</button>
      <button @click="player.priority = 2">2</button>
      <button @click="player.priority = 3">3</button>
      <button @click="player.priority = 4">4</button>
      <button @click="player.priority = 5">5</button>
      <button @click="player.priority = 10">10</button>
      <button @click="player.priority = 500">meh...</button>
      <button @click="player.priority = 1000; player.pos=''">avoid</button>
    </div>
    <div>
      Comments:
      <textarea class="comments" v-model="player.comments"/>
    </div>
    <div>
      Drafted by
      <select class="draftedBy" v-model="player.draftedBy">
        <option value=""></option>
        <option value="Austins">Austins</option>
        <option value="Cheetahs">Cheetahs</option>
        <option value="Fred">Fred</option>
        <option value="Ruiboys">Ruiboys</option>
        <option value="Slashers">Slashers</option>
        <option value="THC">THC</option>
      </select>
      for
      <input class="cents" type="number" v-model="player.cents"/>
      cents
    </div>
    <div class="team-selectors">
      <button @click="player.draftedBy = 'Austins'">Aust</button>
      <button @click="player.draftedBy = 'Cheetahs'">Che</button>
      <button @click="player.draftedBy = 'Fred'">Fred</button>
      <button @click="player.draftedBy = 'Ruiboys'">Rui</button>
      <button @click="player.draftedBy = 'Slashers'">Sla</button>
      <button @click="player.draftedBy = 'THC'">THC</button>
    </div>
    <div class="money-selectors">
      <button @click="player.cents += 10">10</button>
      <button @click="player.cents += 20">20</button>
      <button @click="player.cents += 30">30</button>
      <button @click="player.cents += 40">40</button>
      <button @click="player.cents += 50">50</button>
      <button @click="player.cents += 60">60</button>
      <button @click="player.cents += 70">70</button>
      <button @click="player.cents += 80">80</button>
      <button @click="player.cents += 90">90</button>
      <button @click="player.cents += 100">$1</button>
      <button @click="player.cents = 0">Clear</button>
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
    }
  }
</script>

<style scoped lang="scss">
  .player {
    padding: 6px;
    border: thin black solid;
    width: 306px;
    height: 350px;
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

  .comments {
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
</style>
