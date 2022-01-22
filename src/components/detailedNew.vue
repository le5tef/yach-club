<template>
  <div class="wrapper" width="100%">
    <v-container>
      <v-row>
        <v-col cols="12" md="8" offset-md="2" class="pa-sm-8">
          <v-carousel
            :show-arrows="posts[currPage - 1].media.length > 1 ? true : false"
            :hide-delimiters="
              posts[currPage - 1].media.length > 1 ? false : true
            "
          >
            <v-carousel-item
              v-for="(item, i) in posts[currPage - 1].media"
              :key="i"
              :src="item"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
          <div class="mt-4 px-8 py-md-8 px-md-16 details rounded-xl">
            <h1>
              {{ posts[currPage - 1].title }}
            </h1>
            <p class="my-4">{{ posts[currPage - 1].subtitle }}</p>
            <h4 style="font-weight: 300"><i>18:03 17.01.2022</i></h4>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      currPage: this.$route.params.id,
    };
  },
  computed: {
    ...mapState(["posts"]),
  },
};
</script>

<style scoped>
.wrapper {
  background: linear-gradient(
    180deg,
    rgba(87, 129, 187, 1) 0%,
    rgba(124, 160, 186, 1) 100%
  );
}
.details {
  padding: 10px;
  background: white;
}
</style>