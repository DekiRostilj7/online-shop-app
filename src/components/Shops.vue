<template>
    <div class="container">
        <h1 class="mt-5">Shops</h1>
        <div>
            <ol>
                <li v-for="(shop, index) in shops" :key="index">
                    {{  shop.title }} <img :src="shop.logo" />
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
import { shopsService } from '../services/ShopsService'
export default {
    data(){
        return {
            shops: []
        }
    },
    methods: {
        getRoute(id) {
            return `/shops/${id}`
        }
    },
    created() {
        shopsService.getAll()
            .then(response => {
                console.log(response);
                this.shops = response.data;
            } )
    }
}
</script>