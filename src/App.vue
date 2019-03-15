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
    }
  }
</script>

<style lang="scss">
  body {
    margin: 0px;
    padding: 0px;
  }

  // custom scroll bar
  tbody::-webkit-scrollbar {
    width: 6px;
  }

  tbody::-webkit-scrollbar-thumb {
    background: darkolivegreen;
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
