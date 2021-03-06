import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Register from '../views/Register'
import Shops from '../components/Shops'
import store from './../store'
import Managers from '../views/Managers'
import SingleShop from '../views/SingleShop'
import SingleManager from '../views/SingleManager'
import AddShop from '../views/AddShop'
import AddManager from '../views/AddManager'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name: 'Shops',
    component:Shops,
    meta: {
      guest: true
    }
  },
  {
    path: '/shops/:id',
    name: 'SingleShop',
    component:SingleShop,
    meta: {
      guest: false
    }
  },
  {
    path: '/managers',
    name: 'All managers',
    component: Managers,
    meta: {
      guest: false
    }
  },
  {
    path: '/managers/:id',
    name: 'SingleManager',
    component: SingleManager,
    meta: {
      guest: false
    }
  },
  {
    path: '/my-shop',
    name: 'My Shop',
    meta: {
      guest: false
    }
  },
  {
    path: '/shop/create',
    name: 'Add Shop',
    component: AddShop,
    meta: {
      guest: false
    }
  },
  {
    path: '/manager/create',
    name: 'Add Manager',
    component: AddManager,
    meta: {
      guest: false
    }
  },
  {
    path: '/article/create',
    name: 'Add Article',
    meta: {
      guest: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component:Login,
    meta: {
      guest: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component:Register,
    meta: {
      guest: true
    }
  }]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {                       
  const isUserLoggedIn = store.getters.isUserAuthenticated                                             

  if(!to.meta.guest && !isUserLoggedIn){                      
    return next({                                             
      name: 'Login'
    })
  }
  next()
})

export default router     


