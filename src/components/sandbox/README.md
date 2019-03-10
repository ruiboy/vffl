I put this code together while learning Vue and have sprinkled it with comments for myself.

So, me, look first at SandboxMultiPlayerList.vue.

Also look here, right here: 

# vuex

```
new Vue( {                       new Vuex.Store({
  data: {...},        <--->        state: {...},
                                   mutations {...},      call above to make changes (can be rolled back by devtools)
  methods: {...},     <--->        actions: {...},       call above to make changes      
  computed: {...}     <--->        getters: {...}        read only 
})
```

## sample store

```ecmascript 6
// central store for vuex
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

// use a plugin
Vue.use(Vuex);

// modules would usually be in their own files
const module1 = {
  state: {
    loadingStatus: false,
    teamData: '',
    goalies: 'ken farmer'
  },

  // mutations must be synchronous transactions - so can keep track of how state changes
  // if we don't do this, we have state changing from unpredictable sources making the application hard to reason about
  // mutations can be tracked by debug tools for time-travel debugging and so on
  // mutations should never be called by components; they should 'dispatch' actions which in turn 'commit' mutations
  mutations: {
    SET_LOADING_STATUS(state, status) {
      state.loadingStatus = status
    },
    SET_TEAM_DATA(state, teamData) {
      state.teamData = teamData
    }
  },

  // actions can be asynchronous but should not change state; instead commit mutations to effect the actual state changes
  // actions are the front door for components; they should dispatch actions, never commit mutations
  actions: {
    // actions can have payloads, eg a scalar or object containing the action parameters - in this case a team name
    loadTeamData(context, payload) {
      context.commit('SET_LOADING_STATUS', true)
      axios
        .get('http://localhost:8090/drafting/getTeam/' + payload)
        .then(response => {
          context.commit('SET_LOADING_STATUS', false)
          context.commit('SET_TEAM_DATA', response)
        })
        .catch(error => {
          context.commit('SET_LOADING_STATUS', false)
          context.commit('SET_TEAM_DATA', 'error loading data')
          console.log(error)
        })
    }
  },

  getters: {
    getGoaliesPlus(state) {
      return state.goalies + " for the win"
    }
  }
}

export default new Vuex.Store({
  // strict: will make sure that we don't change state except via mutations
  // eg if an 'action' changes state we will get a runtime error slapping us on the wrist
  // however, this is quite expensive (a synchronous deep watcher on the state tree), so only enable in develop
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    module1: module1
  }
});
```

## app structure
Ref: https://vuex.vuejs.org/guide/structure.html

Vuex doesn't really restrict how you structure your code. Rather, it enforces a set of high-level principles:

* Application-level state is centralized in the store.
* The only way to mutate the state is by committing mutations, which are synchronous transactions.
* Asynchronous logic should be encapsulated in, and can be composed with actions.

As long as you follow these rules, it's up to you how to structure your project. If your store file gets too big, simply start splitting the actions, mutations and getters into separate files.

For any non-trivial app, we will likely need to leverage modules. Here's an example project structure:

```
├── index.html
├── main.js
├── api
│   └── ... # abstractions for making API requests
├── components
│   ├── App.vue
│   └── ...
└── store
    ├── index.js          # where we assemble modules and export the store
    ├── actions.js        # root actions
    ├── mutations.js      # root mutations
    └── modules
        ├── cart.js       # cart module
        └── products.js   # products module
```
