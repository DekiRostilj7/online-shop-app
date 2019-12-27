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
        <select v-model="shop.manager_id" class="form-control">
                <option></option>
                <option
                  v-for="shop in shops"
                  :key="shop.manager_id"
                  v-bind:value="manager.id"
                  v-show="shop.manager_id === null"
                >{{ manager.first_name+ ' ' +manager.last_name }}</option>
              </select>
      </div>
    </form>
  </div>
</template>

<script>
import { shopsService } from "../services/ShopsService";
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
