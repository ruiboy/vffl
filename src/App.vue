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
    background-color: #202020;
    color: lightgray;
  }

  input,
  select,
  textarea {
    background-color: #303030;
    color: lightgray;
    border: thin solid #404040;
  }

  button {
    background-color: #303030;
    color: lightgray;
    border-color: #404040;
  }

  // custom scroll bar
  tbody::-webkit-scrollbar {
    width: 10px;
  }

  tbody::-webkit-scrollbar-thumb {
    background: darkolivegreen;
  }

  tbody::-webkit-scrollbar-corner {
    background: #202020;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
