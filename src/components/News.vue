<template>
  <div id="app">
    <div class="container my-8 pa-8 rounded">
      <v-row class="no-gutters">
        <v-col
          v-for="(post, id) in filteredPosts"
          :key="id"
          cols="12"
          sm="6"
          md="4"
          class="pa-4"
        >
          <New :post="post" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import New from "../components/New.vue";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["filteredPosts"]),
  },
  components: {
    New,
  },
};
</script>
<style lang="scss" scoped>
.container {
  max-width: 1580px;
  background-image: linear-gradient(160deg, #0094e986 0%, #80d0c785 100%);
  padding: 1rem;
}
</style>