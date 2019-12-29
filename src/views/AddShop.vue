<template>
  <div class="container mt-5">
    <h2>Add Shop</h2>
    <form @submit.prevent>
      <div class="container">
        <label for="title">
          <b>Shop Title</b>
        </label>
        <input
          type="text"
          class="form-control"
          placeholder="Shop Title"
          name="title"
          required
          v-model="shop.title"
        />
        <label for="logo">
          <b>Logo</b>
        </label>
        <input
          type="text"
          class="form-control"
          placeholder="Enter Last Name"
          name="logo"
          required
          v-model="shop.logo"
        />
        <button class="btn btn-primary mt-1" type="submit" @click="handleSubmit()">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import { shopsService } from '../services/ShopsService'
// import { managersService } from '../services/ManagersService'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      shop: {}
    };
  },
  computed:{
        ...mapGetters({
            shops: 'filteredShops',
            // managers: fect
        })
    },
  methods: {
    handleSubmit() {
      shopsService
        .addShop(this.shop)
        .then(() => console.log("rest"))
        .catch(error => console.log(error));
    }
  }
};
</script>


