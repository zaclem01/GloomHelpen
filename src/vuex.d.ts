/* eslint-disable */

// vuex.d.ts
import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import { Character } from './types'

declare module '@vue/runtime-core' {
  // declare your own store states
  interface State {
    availableCharacters: Character[]
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}