<template>
  <div>
    <Parallax />
    <News />
  </div>
</template>

<script>
import News from "../components/News.vue";

import Parallax from "../components/Parallax.vue";
export default {
  name: "App",

  components: {
    News,
    Parallax,
  },

  data: () => ({
    //
  }),
};
</script>

<style >
#app {
}
@font-face {
  font-family: "Luxury";
  src: url("../assets/fonts/Luxury/Medium.ttf") format("ttf");
}
</style>
