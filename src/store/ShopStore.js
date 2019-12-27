
import { shopsService } from '../services/ShopsService'
export const ShopStore = {
    state: {
      shops: [],
      searchTerm: ''
    },
    mutations: {
      setShops(state, shops){
        state.shops = shops
      },
      setSearchTerm(state, { term }) {
        state.searchTerm = term
      }
    },
    actions: {
      async fetchShops(context){
        try {
          const response = await shopsService.getAll()
          context.commit('setShops', response.data.data)
          return response.data
        } catch (error) { // eslint-disable-line
  
        }
      }
    },
    getters: {
      filteredShops(state){
        return state.shops.filter((shop) => 
          shop.title.toLowerCase().includes(state.searchTerm.toLocaleLowerCase()))
      }
    }
  }

