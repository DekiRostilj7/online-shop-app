<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <router-link class="nav-link" to="/register" v-if="!isUserAuthenticated">Register</router-link>
      <router-link class="nav-link" to="/login" v-if="!isUserAuthenticated">Login</router-link>
      <router-link class="nav-link" to="/">Shops</router-link>
      <router-link class="nav-link" to="/managers" v-if="isUserAuthenticated">All Managers</router-link>
      <router-link class="nav-link" to="/my-shop" v-if="isUserAuthenticated">My Shop</router-link>
      <router-link class="nav-link" to="/shop/create" v-if="isUserAuthenticated">Add Shop</router-link>
      <router-link class="nav-link" to="/article/create" v-if="isUserAuthenticated">Add Article</router-link>
      <ShopSearch />
      <!-- <button class="btn btn-primary mt-1" v-if="isUserAuthenticated" @click="onLogout">Logout</button> -->



      <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
      </button>-->
     
        <!-- <form class="form-inline mt-2 mt-md-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> -->
      
    </nav>
  </header>
</template>
<script>
import { mapGetters } from 'vuex'
import ShopSearch from '../ShopSearch'
export default {
  components:{
    ShopSearch
  },
  computed:{
    ...mapGetters({
      isUserAuthenticated: 'isUserAuthenticated' 
    })
  }
}
</script>