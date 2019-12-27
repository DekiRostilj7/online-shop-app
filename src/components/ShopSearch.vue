<template>
  <div>
    <form class="form-inline mt-2 mt-md-0" @submit.prevent="submit">
      <input class="form-control mr-sm-2" type="text" placeholder="Filter" aria-label="Search" />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="setSearchTerm({ term: $event.target.value})">Filtriraj</button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations({
      setSearchTerm: "setSearchTerm"
    })
  }
}
</script>
