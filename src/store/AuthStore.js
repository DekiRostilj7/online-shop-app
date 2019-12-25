import { authService } from '../services/AuthSevice'

export const AuthStore = {
    state: {               
        token: localStorage.getItem('token'),          
        errors: null
    },              

    mutations: {
        setToken(state, token){         
            state.token = token
        },
        setErrors(state, errors){
            state.errors = errors
        }
    },

    actions: {
        async login(context, { email, password }){        
            try {
                const response = await authService.login(email,password)     
                context.commit('setToken', response.data.token)                 
                context.commit('setErrors', null)
                authService.setHeaders({
                    Authorization: `Bearer ${response.data.token}`
                })
                localStorage.setItem('token', response.data.token)             
                return response 
            } catch(exception) {                                               
                context.commit('setErrors', exception)
            }
        },
        logout(context){
            context.commit('setToken', null)
            localStorage.removeItem('token')
        }
    },

    getters:{
        isUserAuthenticated(state){
            return !!state.token
        }
    }
    
}

