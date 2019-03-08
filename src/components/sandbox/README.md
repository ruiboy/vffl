I put this code together while learning Vue and have sprinkled it with comments for myself.

So, me, look first at SandboxMultiPlayerList.vue.

Also look here, right here: 

```
new Vue( {                       new Vuex.Store({
  data: {...},        <--->        state: {...},
                                   mutations {...},      call above to make changes (can be rolled back by devtools)
  methods: {...},     <--->        actions: {...},       call above to make changes      
  computed: {...}     <--->        getters: {...}        read only 
})
```
