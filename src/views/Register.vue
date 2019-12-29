<template>
  <div class="container mt-5">
    <form @submit.prevent>
      <div class="container">
        <label for="f_name">
          <b>First Name</b>
        </label>
        <input
          type="text"
          class="form-control"
          placeholder="Enter First Name"
          name="f_name"
          required
          v-model="user.first_name"
        />
        <label for="l_name">
          <b>Last Name</b>
        </label>
        <input
          type="text"
          class="form-control"
          placeholder="Enter Last Name"
          name="l_name"
          required
          v-model="user.last_name"
        />
        <label for="uname">
          <b>Email</b>
        </label>
        <input
          type="email"
          class="form-control"
          placeholder="Enter Email"
          name="uname"
          required
          v-model="user.email"
        />
        <label for="psw">
          <b>Password</b>
        </label>
        <input
          class="form-control"
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
          v-model="user.password"
        />
        <label for="con_psw">
          <b>Confirm Password</b>
        </label>
        <input
          class="form-control"
          type="password"
          placeholder="Confirm Password"
          name="con_psw"
          required
          v-model="user.password_confirmation"
        />
        <br />
        <p>
          <input type="checkbox" required name="terms" /> I accept the
          <u>Terms and Conditions</u>
        </p>
        <button class="btn btn-primary mt-1" type="submit" @click="submit()">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
import { authService } from "../services/AuthSevice";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      user: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: ""
      }
    };
  },
  methods: {
    ...mapActions({
      login: "login"
    }),
    submit() {
      authService
        .register(this.user)
        .then(() => {
          this.login({
            email: this.user.email,
            password: this.user.password
          });
          this.$router.push({
            name: "Shops"
          });
        })
    }
  }
};
</script>

