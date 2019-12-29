<template>
  <div class="container mt-5">
    <form @submit.prevent="submit">
      <div>
        <img src="../assets/signup-image.png" alt="sing up image">
      </div>
      <div class="container">
        <label for="uname">
          <b>Email</b>
        </label>
        <input type="email" class="form-control" placeholder="Enter Email" name="email" required v-model="email"/>
        <label for="psw">
          <b>Password</b>
        </label>
        <input class="form-control" type="password" placeholder="Enter Password" name="psw" required v-model="password"/>
        <button class="btn btn-primary mt-1" type="submit" @click="submit()">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data(){
    return {
      password:'',
      email:''
    }
  },
  methods:{
        ...mapActions({
            login: 'login'                              
        }),

        submit() {
            this.login({
                email: this.email,
                password: this.password               
            }).then(() => {                    
                this.$router.push({
                    name: 'Shops'
                })
            })
        }
    }
};
</script>
