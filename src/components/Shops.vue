<template>
    <div class="container">
        <h1 class="mt-5">Shops</h1>
        <div>
            <ol>
                <li v-for="(shop, index) in shops" :key="index">
                    <router-link :to='getRoute(shop.id)'>{{  shop.title }} </router-link><img :src="shop.logo" />
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '../store/index.js'
export default {
    computed:{
        ...mapGetters({
            shops: 'filteredShops'
        })
    },
    methods: {
        getRoute(id) {
            return `/shops/${id}`
        }
    },
    beforeRouteEnter(to, from, next){
        store.dispatch('fetchShops').then(() => {
            next()
        })
    }
}
</script>

