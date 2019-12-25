<template>
  <div class="container mt-5">
    <form >
      <div class="container">
          <label for="f_name">
          <b>First Name</b>
        </label>
        <input type="text" class="form-control" placeholder="Enter First Name" name="f_name" required v-model="first_name"/>
        <label for="l_name">
          <b>Last Name</b>
        </label>
        <input type="text" class="form-control" placeholder="Enter Last Name" name="l_name" required v-model="last_name"/>
        <label for="uname">
          <b>Email</b>
        </label>
        <input type="email" class="form-control" placeholder="Enter Email" name="uname" required v-model="email"/>
        <label for="psw">
          <b>Password</b>
        </label>
        <input class="form-control" type="password" placeholder="Enter Password" name="psw" required v-model="password"/>
        <label for="con_psw">
          <b>Confirm Password</b>
        </label>
        <input class="form-control" type="password" placeholder="Confirm Password" name="con_psw" required v-model="password_confirmation"/>
        <button class="btn btn-primary mt-1" type="submit">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
import { authService } from '../services/AuthSevice'
export default {
    data(){
        return{
            user:{
            first_name: 'first_name',
            last_name: 'last_name',
            email: 'email',
            password: 'password',
            password_confirmation: 'password_confirmation'
            }
        }
    },
    methods:{
        submit(user){
            authService.register(user)
        }
    }
};
</script>
