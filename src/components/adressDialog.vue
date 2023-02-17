<template>
  <v-dialog v-model="dialog" max-width="290">
    <v-card class="pa-6">
      <v-card-title class="text-h5"> Адрес </v-card-title>

      <v-card-text>
        Москва, Нагатинский затон, набережная ЖК «Ривер парк», ул.Корабельная 17
        корп 1.
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  computed: {
    dialog: {
      get() {
        return this.$store.state.dialog2;
      },
      set(value) {
        this.$store.commit("setDialog2", value);
      },
    },
  },
};
</script>