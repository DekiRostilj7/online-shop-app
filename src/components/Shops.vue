<template>
    <div class="container">
        <h1 class="mt-5">Shops</h1>
        <div>
            <ol>
                <li v-for="(shop, index) in shops" :key="index">
                    <div v-if="!shop.manager_id">
                        <router-link :to='getRoute(shop.id)'>Shop:{{  shop.title }} </router-link><img :src="shop.logo" /><p>No manager</p>
                    </div>
                        <div v-else>
                            <router-link :to='getRoute(shop.id)'>Shop:{{  shop.title }} </router-link><img :src="shop.logo" /> <router-link :to='getRouteM(shop.manager_id)'> Manager:{{  shop.manager.first_name }} </router-link>
                        </div>
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
            shops: 'filteredShops',
        })
    },
    methods: {
        getRoute(id) {
            return `/shops/${id}`
        },
        getRouteM(id) {
            return `/managers/${id}`
        }
    },
    beforeRouteEnter(to, from, next){
        store.dispatch('fetchShops').then(() => {
            next()
        })
    }
}
</script>

