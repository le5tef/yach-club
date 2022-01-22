<template>
  <div>
    <v-row class="no-gutters">
      <v-col cols="12">
        <v-parallax
          style="position: relative"
          class="dark d-flex justify-center align-center"
          height="400"
          :src="mainPost[0].media[0]"
        >
          <div class="title">
            <div
              :style="
                $vuetify.breakpoint.mobile ? 'font-size:40px' : 'font-size:90px'
              "
              class="text-center text"
              :class="$vuetify.breakpoint.mobile ? 'mb-2' : 'mb-8'"
            >
              {{ mainPost[0].title }}
            </div>
            <div
              :style="
                $vuetify.breakpoint.mobile ? 'font-size:30px' : 'font-size:50px'
              "
              class="text-center text"
            >
              {{ mainPost[0].subtitle }}
            </div>
          </div>

          <v-btn
            class="text-h6 hide rounded-0"
            color="rgba(255, 255, 255, 0.699)"
            :width="$vuetify.breakpoint.mobile ? '200px' : '70%'"
          >
            <router-link
              style="text-decoration: none; color: black"
              :to="{ name: 'post', params: { id: mainPost[0].id } }"
            >
              Подробнее
            </router-link></v-btn
          >
        </v-parallax>
      </v-col>
    </v-row>
    <!-- <v-row class="no-gutters">
      <v-col cols="12" md="4" offset-md="2">
        <v-parallax
          style="position: relative"
          class="dark"
          height="500"
          src="../assets/image/test1.jpg"
        >
          <div class="text-center text-h2">
            Открытие школы для детей от 6 лет!
          </div>
          <div class="text-center text-h5">
            Номер телефона во вкладке контактов!
          </div>
        </v-parallax>
      </v-col>
      <v-col cols="12" md="4">
        <v-parallax
          style="position: relative"
          class="dark"
          height="500"
          src="../assets/image/test2.jpg"
        >
          <div class="text-center text-h2">
            Новые яхты уже доступны для заказа!
          </div>
          <div class="text-center text-h5">Звоните в номеру телефона!</div>
        </v-parallax>
      </v-col>
    </v-row> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["mainPost"]),
  },
};
</script>

<style scoped>
.text {
  font-weight: 200;
  font-family: "Roboto";
}
.dark {
  transition: 300ms;
}

.dark .title {
  background: rgba(255, 255, 255, 0);
  padding: 36px;

  transition: 500ms;
}
.dark .title .text {
  color: white;
}

.dark:hover .title {
  background: rgba(255, 255, 255, 0.699);
  padding: 36px;
  transition: 500ms;
}
.dark:hover .title .text {
  color: black;
}
.dark .hide {
  position: absolute;
  display: block;
  left: 50%;
  transform: translateX(-50%);
  display: none;
}
.dark:hover .hide {
  display: block;
  animation: slidein 1200ms forwards;
}
@media (min-width: 0px) and (max-width: 600.98px) {
  .dark:hover .title {
    background: rgba(255, 255, 255, 0.699);
    padding: 16px;

    transition: 500ms;
  }
  .text {
    font-weight: 400;
  }
}
@keyframes slidein {
  from {
    margin-top: 450px;
    opacity: 0;
  }

  to {
    margin-top: 300px;
    opacity: 1;
  }
}
</style>