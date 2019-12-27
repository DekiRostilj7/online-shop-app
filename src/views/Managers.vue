<template>
    <div class="container">
        <h1 class="mt-5">Managers</h1>
        <div>
            <ol>
                <li v-for="(manager, index) in managers" :key="index">
                    {{  manager.first_name }} {{ manager.last_name}} <img :src="manager.photo" />
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
            managers: 'filteredManagers'
        })
    },
    methods: {
        getRoute(id) {
            return `/managers/${id}`
        }
    },
    beforeRouteEnter(to, from, next){
        store.dispatch('fetchManagers').then(() => {
            next()
        })
    }
}
</script>

