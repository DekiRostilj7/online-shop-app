import Vue from 'vue'
import Vuex from 'vuex'
import { AuthStore } from './AuthStore'
import { ShopStore } from './ShopStore'
import { ManagerStore } from './ManagerStore'



Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    AuthStore,
    ShopStore,
    ManagerStore
  }

})

export default store