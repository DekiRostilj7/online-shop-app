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
      </div>
    </form>
  </div>
</template>

<script>
import { shopsService } from "../services/ShopsService";
export default {
  data() {
    return {
      shop: {}
    };
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
