
import { managersService } from '../services/ManagersService'
export const ManagerStore = {
    state: {
      managers: [],
      searchTerm: ''
    },
    mutations: {
      setManagers(state, managers){
        state.managers = managers
      },
      setSearchTerm(state, { term }) {
        state.searchTerm = term
      }
    },
    actions: {
      async fetchManagers(context){
        try {
          const response = await managersService.getAll()
          context.commit('setManagers', response.data)
          return response.data
        } catch (error) { // eslint-disable-line
  
        }
      }
    },
    getters: {
      filteredManagers(state){
        return state.managers.filter((manager) => 
          manager.first_name.toLowerCase().includes(state.searchTerm.toLocaleLowerCase()))
      }
    }
  }

