<template>
  <div>
    <v-app-bar class="header" elevation="0" height="120">
      <v-spacer></v-spacer>

      <v-btn
        text
        href="tel:79265111689"
        target="_blank"
        style="color: #a80814"
        :class="$vuetify.breakpoint.mobile ? 'text-h7' : ''"
        >Контакты</v-btn
      >

      <router-link :to="{ name: 'Home' }">
        <v-img height="100" max-width="100" src="../assets/image/logo2.png"
      /></router-link>

      <v-btn
        href="https://www.google.com/maps/place/55%C2%B040'58.1%22N+37%C2%B041'51.9%22E/@55.6827813,37.6974526,19.25z/data=!4m5!3m4!1s0x0:0x859ecd97e4fe8489!8m2!3d55.682795!4d37.697736?hl=ru"
        target="_blank"
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

<style scoped>
</style>