<template>
    <div class="container">
        <div>
            <h1> {{  manager.first_name + ' ' + manager.last_name }} </h1>
            <p> Details: {{ manager.email }} </p> 
            <p> {{ manager.email }} </p> 
        </div>
    </div>
</template>

<script>
import { managersService } from '../services/ManagersService'
export default {
    data(){
        return {
            manager: {}
        }
    },

    created(){
        managersService.getId(this.$route.params.id)
            .then(response => {
                this.manager = response.data;
            } )
    }
}

</script>

<style>
.container{
    margin-top: 60px;
}
</style>

