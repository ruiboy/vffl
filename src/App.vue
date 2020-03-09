<template>
  <div id="app">
    <app-header/>
    <!-- router components get rendered here -->
    <router-view/>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  export default {
    components: {
      'app-header': Header
    },

    mounted () {
      this.$store.dispatch('loadDraftData')
    }
  }
</script>

<style lang="scss">
  body {
    margin: 0px;
    padding: 0px;
    background: #eeeeff;
  }

  // custom scroll bar
  tbody::-webkit-scrollbar {
    width: 6px;
  }

  tbody::-webkit-scrollbar-thumb {
    background: darkblue;
  }

  tbody::-webkit-scrollbar:horizontal {
    display: none;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
