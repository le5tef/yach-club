<template>
  <v-app>
    <Header />
    <v-main>
      <router-view></router-view>
    </v-main>
    <Dialog1 />
    <Dialog2 />
    <Footer />
  </v-app>
</template>
<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Dialog1 from "./components/contactsDialog.vue";
import Dialog2 from "./components/adressDialog.vue";
import { mapActions } from "vuex";
export default {
  components: {
    Footer,
    Header,
    Dialog1,
    Dialog2,
  },
  methods: {
    ...mapActions(["checkAuth"]),
  },
  mounted: function () {
    // this.checkAuth();
  },
};
</script>
