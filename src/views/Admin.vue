<template>
  <v-container class="fill-height" style="height: 100%">
    <v-row class="fill-height">
      <v-col
        v-if="!auth"
        cols="7"
        sm="8"
        md="5"
        lg="4"
        offset-md="2"
        offset-lg="3"
        class="d-flex align-center"
      >
        <v-text-field
          hide-details
          v-model="password"
          label="Пароль"
          outlined
          clearable
        ></v-text-field>
      </v-col>
      <v-col
        cols="5"
        sm="4"
        md="3"
        lg="2"
        class="d-flex align-center justify-center"
      >
        <v-btn @click="httpGetAsync(password)">Войти</v-btn>
      </v-col>
      <v-col v-if="auth">ааааааа</v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      password: "",
      auth: localStorage.getItem("Ok") == 200 ? true : false,
    };
  },
  methods: {
    ...mapActions(["httpGetAsync"]),
  },
};
</script>