<template>
  <v-dialog v-model="dialog" max-width="290">
    <v-card class="pa-6">
      <v-card-title class="text-h5"> Контакты </v-card-title>

      <v-card-text>
        Контакты<br/>
        Наши координаты:<br/>
        55.682795 N 37/697736 E.<br/>
        <br/>
        Тел +7 (926) 511-16-89<br/>
        Whatsapp,Telegram :+7 (926) 511-16-89<br/>
        Почта info@river-port.ru<br/>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  computed: {
    dialog: {
      get() {
        return this.$store.state.dialog1;
      },
      set(value) {
        this.$store.commit("setDialog1", value);
      },
    },
  },
};
</script>