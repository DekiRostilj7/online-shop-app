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
    </nav>
  </header>
</template>
<script>
import { mapGetters } from "vuex";
import ShopSearch from "../ShopSearch";
export default {
  components: {
    ShopSearch
  },
  computed: {
    ...mapGetters({
      isUserAuthenticated: "isUserAuthenticated"
    })
  }
};
</script>