<template>
    <div class="container">
        <div>
            <h1> {{shop.title}} </h1>
            <p> Details: {{ shop.title }} </p>
            <p> {{ shop.logo }} </p>
        </div>
    </div>
</template>

<script>
import { shopsService } from '../services/ShopsService'
export default {
    data(){
        return {
            shop: {}
        }
    },

    created(){
        shopsService.getId(this.$route.params.id)
            .then(response => {
                console.log(response);
                this.shop = response.data;
            } )
    }
}
</script>

<style>
.container{
    margin-top: 60px;
}
</style>