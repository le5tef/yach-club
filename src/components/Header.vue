<template>
  <div>
    <v-app-bar class="header" elevation="0" height="120">
      <v-spacer></v-spacer>

      <v-btn
        text
        @click="setDialog1(true)"
        target="_blank"
        style="color: #a80814"
        :class="$vuetify.breakpoint.mobile ? 'text-h7' : ''"
        >Контакты</v-btn
      >

      <router-link :to="{ name: 'Home' }">
        <v-img height="100" max-width="100" src="../assets/image/logo2.png"
      /></router-link>

      <v-btn
        @click="setDialog2(true)"
        text
        style="color: #181b48"
        :class="$vuetify.breakpoint.mobile ? 'text-h7' : ''"
      >
        наш Адрес</v-btn
      >

      <v-spacer></v-spacer>
    </v-app-bar>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["setDialog1", "setDialog2"]),
  },
};
</script>

<style scoped>
</style>