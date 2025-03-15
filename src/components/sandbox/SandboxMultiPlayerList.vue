<!-- a Vue component consists of a template, a Vue 'class' (script), and style -->
<template>
  <div class="mpl">
    <ul class="mpl-list">
      <!--
        use v-for to loop arrays
        Vue does some optimization by 'patching' dom elements rather than reordering them if the order of items
        in the array changes.  Providing a key (eg unique id) for each item allows Vue to keep track of them.
        So provide a key whenever possible, unless the contents of the render are dead simple and barely change.
        (style guide recommends to split mutli-attrib tags over multiple lines)
      -->
      <li
        v-for="k in kickers"
        :key="k.id">
        {{k.name}} -- {{k.stat}}
      </li>
    </ul>

    <!-- can also use v-for to loop the properties of an object -->
    <ul class="mpl-list">
      <li v-for="(value, key) in kickers[0]">
        {{key}} -- {{value}}
      </li>
    </ul>

    <!--
      kebab-case is recommended in dom templates because works better with html case insensitivity,
      but kebab-case will match with PascalCase named registered components too, so component could
      be named PlayerList, and using <player-list> here will still work.
      An empty element is recommended (eg <sandbox-player-line></sandbox-player-line>) as it indicates the element does/will
      have content.  However if being compiled by babel+webpack a closed element (eg <sandbox-player-line/>) can be
      used as the transpilation will sort it out for you.
     -->
    <sandbox-player-line>
      <!--
        content can be placed into 'slots' in the sandbox-player-line component.
        data/props can be bound in the rendered slots, but comes from the context of the parent component.
        this can be useful if sandbox-player-line is some kind of generic layout compenent
      -->
      <div slot='A'>
        Slot A content.
      </div>
      <div slot='B'>
        Slot B content - resolved from parent component: {{colour}}
      </div>
    </sandbox-player-line>

    <!--
      dynamically render components according to some condition.
      (Could also use v-bind:is="nameOfComponent" if nameOfComponent resolves to a component name)

      v-if: is lazy and will only render component when condition first becomes true
      when condition becomes false again v-if will destroy the component; it will have any changed data
      also destroyed (eg local 'data' or content of input fields); prevent this using <keep-alive>

      v-show: conversely, v-show will render component initially and will never destroy it; state is always kept

      Generally speaking, v-if has higher toggle costs while v-show has higher initial render costs. So prefer v-show
      if you need to toggle something very often, and prefer v-if if the condition is unlikely to change at runtime.
    -->
    <component is='sandbox-player-line-green' v-if='colour === "Green"'>v-if; no keep-alive (data will be lost)</component>
    <keep-alive>
      <component is='sandbox-player-line-blue' v-if='colour === "Blue"'>v-if; keep-alive</component>
    </keep-alive>

    <component is='sandbox-player-line-green' v-show='colour === "Green"'>v-show</component>
    <component is='sandbox-player-line-blue' v-show='colour === "Blue"'>v-show</component>

    <!--
      two-way binding of element to data is done with v-model (not very flux though is it)
      model 'modifiers' can be used to eg only bind to model lazily; ie as field is exited

      (Aside: events also have modifiers...)
    -->
    <p>Colour: <input type="text" v-model="colour"/> You typed: {{colour}}</p>
    <p>Lazy Colour: <input type="text" v-model.lazy="lazyColour"/> You typed: {{lazyColour}}</p>

    <!-- binding checkboxes -->
    <div id="quarks">
      Up <input type="checkbox" value="up" v-model="quarks"/>
      Down <input type="checkbox" value="down" v-model="quarks"/>
      Charm <input type="checkbox" value="charm" v-model="quarks"/>
      You chose: {{quarks}}
    </div>

    <button @click="changeColour">Change Colour</button>
    <button @click="addPlayer">Add another kicker (via event to parent which updates props)</button>
    <button @click="addPlayerViaBus">Add another kicker (via event bus)</button>

    <!-- async data -->
    <hr/>
    <p> Bitcoin: {{bitcoin}} </p>
  </div>
</template>

<script>
  // import local components
  import SandboxPlayerLine from './SandboxPlayerLine.vue'
  import SandboxPlayerLineGreen from './SandboxPlayerLineGreen.vue'
  import SandboxPlayerLineBlue from './SandboxPlayerLineBlue.vue'

  // an event bus; a way of communicating between disparate components without going via parents hierarchy.
  // typically this would be created in src/main.js once only and then can be referenced by all components everywhere with
  // eg     import {bus} from '../main.js'         but created here for the sake of demonstration only
  import Vue from "vue"
  export const bus = new Vue()

  // import helpers
  import axios from "axios"

  // export a default object from this file... ES6
  export default {
    // register local components
    components: {
      'sandbox-player-line': SandboxPlayerLine,
      'sandbox-player-line-green': SandboxPlayerLineGreen,
      'sandbox-player-line-blue': SandboxPlayerLineBlue
    },

    // Announce we want to receive props (from parent component) - name is same as would be in data.
    // In this case validation is used to indicate eg prop is mandatory and must be an array.
    // Alternatively, without validation, an abbreviated syntax of  props: ['prop1', 'prop2']  can be used.
    //
    // When a JS reference type (array or object) is passed liked this, it is a reference to the object in the
    // parent (cf a JS primitive type like boolean, string or number) - so beware when changing contained values.
    //
    // see App.vue for where this props is passed from.
    props: {
      kickers: {
        required: true,
        type: Array
      }
    },

    // shorthand for  data: function()...  ES6
    data () {
      return {
        // kickers: [],   getting this from props
        colour: 'Green',
        lazyColour: '',
        quarks: [],
        bitcoin: ''
      }
    },

    methods: {
      changeColour()
      {
        this.colour = (this.colour === 'Blue') ? 'Green' : 'Blue';
      }
      ,
      addPlayer()
      {
        // emit an event up to the parent
        this.$emit('addPlayer', 'New guy');
      }
      ,
      addPlayerViaBus()
      {
        // emit an event via the bus (created in main.js)
        bus.$emit('addPlayerViaBus', 'New gal');
      }
    }
    ,

    // a life-cycle hook; called when this object is created
    created()
    {
      // listen to an event on the bus
      // use fat arrow function ... ES6
      bus.$on('addPlayerViaBus', (data) => {
        this.kickers.push({
          id: this.kickers.length + 1,
          name: data,
          stat: 14.5
        })
      })
    },

    mounted () {
      // axios (or Fetch API) can be used for async data loading
      axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (this.bitcoin = response))
        .catch(error => console.log(error));
    }
  }
</script>

<!--
  All styles are added globally to the rendered html head tag.

  With 'scoped' the style gets applied only to elements in this component.
  It does this by adding a unique data attribute to all elements generated by this component
  and using that in the style selector.  This is the recommended approach (except for root components).

  Without scoped all styles just get added to the page with no data selector, and so last in wins.

  It is recommended to NOT use element selectors (eg button) with scoped, use class selectors (eg .btn_thing).
-->
<style scoped lang="scss">
  .mpl {
    background-color: lightblue;
  }

  ul.mpl-list {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
  }

  ul.mpl-list li {
    flex-grow: 1;
    flex-basis: 200px;
    padding: 1px;
    border: thin black solid;
  }
</style>
