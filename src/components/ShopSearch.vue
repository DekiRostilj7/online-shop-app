<template>
  <div>
    <form class="form-inline mt-2 mt-md-0" @submit.prevent="submit">
      <input
        class="form-control mr-sm-2"
        type="text"
        placeholder="Search"
        aria-label="Search"
        @input="setSearchTerm({ term: $event.target.value})"
      />
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
};
</script>
