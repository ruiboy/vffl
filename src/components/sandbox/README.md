I put this code together while learning Vue and have sprinkled it with comments for myself.

So, me, look first at SandboxMultiPlayerList.vue.

Also look here, right here: 

#vuex

```
new Vue( {                       new Vuex.Store({
  data: {...},        <--->        state: {...},
                                   mutations {...},      call above to make changes (can be rolled back by devtools)
  methods: {...},     <--->        actions: {...},       call above to make changes      
  computed: {...}     <--->        getters: {...}        read only 
})
```

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
