<template>
  <div>
    <v-row class="no-gutters" id="parallax">
      <v-col cols="12" onclick="">
        <v-img
          style="position: relative"
          class="dark d-flex justify-center align-center"
          height="400"
          :src="
            mainPost[0].media.length > 1
              ? mainPost[0].media[1]
              : mainPost[0].media[0]
          "
        >
          <div class="title mt-8">
            <div

              class="text-center text"
              :class="$vuetify.breakpoint.mobile ? 'font-50' : 'font-90'"
            >
              {{ mainPost[0].title }}
            </div>
            <!-- <div
              :style="
                $vuetify.breakpoint.mobile ? 'font-size:30px' : 'font-size:50px'
              "
              class="text-center text"
            >
              {{
                mainPost[0].subtitle
                  ? mainPost[0].subtitle
                  : mainPost[0].description.length > 50
                  ? mainPost[0].description.slice(0, 70)
                  : mainPost[0].description
              }}
            </div> -->
          </div>

          <v-btn
            class="text-h6 hide rounded-0 justify-center"
            color="rgba(255, 255, 255, 0.699)"
            :to="{ name: 'post', params: { id: mainPost[0].id } }"
            :width="$vuetify.breakpoint.mobile ? '200px' : '400px'"
          >
            Подробнее
          </v-btn>
        </v-img>
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

<style >
.text {
  font-weight: 200;
  font-family: "Roboto";
}

.font-50{
  font-size: 50px;
  line-height: 50px;
}

.font-90{
  font-size: 90px;
  line-height: 90px;
}

.dark {
  transition: 300ms;
}
.v-image__image {
  /*background-position: unset !important;*/
  transition: 1200ms;
}
.v-image:hover .v-image__image {
  /*background-position: center !important;*/
}
.dark .title {
  background: rgba(255, 255, 255, 0);
  padding: 36px;

  transition: 500ms;
}
.dark .title .text {
  color: white;
  font-weight: 100;
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
  display: none;
  left: 50%;
  transform: translateX(-50%);
}
.dark:hover .hide {
  display: flex;
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
    margin-top: 200px;
    opacity: 0;
  }

  to {
    margin-top: 50px;
    opacity: 1;
  }
}
</style>