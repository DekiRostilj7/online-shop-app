<template>
  <div>
    <div class="container mt-5">
      <h2>Add Manager</h2>
      <form @submit.prevent>
        <div class="container">
          <label for="fname">
            <b>First Name</b>
          </label>
          <input
            type="text"
            class="form-control"
            placeholder="First Name"
            name="fname"
            required
            v-model="manager.first_name"
          />
          <label for="lname">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            class="form-control"
            placeholder="Last Name"
            name="lname"
            required
            v-model="manager.last_name"
          />
          <label for="photo">
            <b>Photo</b>
          </label>
          <input
            type="text"
            class="form-control"
            placeholder="Add your photo"
            name="photo"
            required
            v-model="manager.photo"
          />
        <button class="btn btn-primary mt-1" type="submit" @click="handleSubmit()">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { managersService } from "../services/ManagersService";
export default {
  data() {
    return {
      manager: {}
    };
  },
  methods: {
    handleSubmit() {
      managersService
        .addManager(this.manager)
        .then(() => {                    
                this.$router.push({
                    name: 'All managers'
                })
            })
    }
  }
};
</script>


