
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
          context.commit('setShops', response.data)
          return response.data
        } catch (error) { // eslint-disable-line
  
        }
      }
    },
    
  }