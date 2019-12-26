import Vue from 'vue'
import Vuex from 'vuex'
import { AuthStore } from './AuthStore'
import { ShopStore } from './ShopStore'


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    AuthStore,
    ShopStore
  }

})

export default store