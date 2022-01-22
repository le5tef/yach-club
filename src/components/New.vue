<template>
  <div class="post">
    <!-- <div class="post__image"></div> -->
    <v-img class="post__image" :src="post.media[0]" />
    <div class="post__content">
      <div class="post__inside">
        <h3 class="post__title">{{ post.title }}</h3>
        <p
          class="post__excerpt"
          v-html="post.subtitle.slice(0, 70) + '...'"
        ></p>

        <v-btn>
          <router-link
            :to="{ name: 'post', params: { id: post.id } }"
            class="post__button"
            >Подробнее</router-link
          >
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    post: {
      type: Object,
    },
  },
  computed: {
    ...mapState(["posts"]),
  },
};
</script>

<style lang="scss" scoped>
$primary: #042a4f;
$accent: #e65891;
$secondary: #ccc;
$bg-color: #f4f4f4;
$text-color: #2a2a2a;
$line-height: 1.25;

* {
  box-sizing: border-box;
}

body {
  font-family: "Lato", sans-serif;
  line-height: $line-height;
  background-color: $bg-color;
  color: $text-color;
  font-weight: 500;
}

.container {
  max-width: 1580px;
  background-image: linear-gradient(160deg, #0094e986 0%, #80d0c785 100%);
  padding: 1rem;
}

h1 {
  text-align: center;
}

button {
  font-size: 1rem;
  padding: 0.35em 0.75em;
  line-height: 1;
  background-color: transparent;
  border: 0.125rem solid $text-color;
  border-radius: 2rem;
  cursor: pointer;
  transition: 0.1s;
  outline: 0;

  .fa {
    font-size: 0.75em;
    margin-left: 0.5em;
  }

  &.btn--primary {
    border-color: $primary;
    color: $primary;
  }

  &.btn--accent {
    border-color: $accent;
    color: $accent;
  }
}

.posts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2.5rem;

  @media (max-width: 1140px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
}

$excerpt-height: 5rem * $line-height;
// title (fontSize + marginBottom) + excerpt + button (marginTop + 2 * paddingTopBottom + fontSize + borderWidth) + safe-space
$content-height: (1.35rem + 1rem) + $excerpt-height +
  (1rem + 2 * 0.35rem + 1rem) + 0.25rem + 0.1rem;
// title (fontSize + marginBottom) + excerpt (2 lines)
$content-height-collapsed: (1.35rem + 1rem) + (2rem * $line-height);
$content-overlap-collapsed: 3rem;
$content-overlap: ($content-height - $content-height-collapsed) +
  $content-overlap-collapsed;

.post {
  &__image {
    width: 100%;
    height: 240px;
    position: relative;
    overflow: hidden;

    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
    }

    // image
    &:before {
      background-size: cover;
      background-position: center center;
      transform: scale(1);
      filter: blur(0);
      transition: 2s cubic-bezier(0, 0.6, 0.2, 1);
    }

    // overlay
    &:after {
      // background-color: $primary;

      background: linear-gradient(30deg, $primary 0%, $accent 100%);
      background-size: 100% 300%;
      background-position: bottom left;
      opacity: 0.15;
      transition: 2s cubic-bezier(0, 0.6, 0.2, 1);
    }

    &--1:before {
      background-image: url("../assets/image/1.jpg");
    }
    &--2:before {
      background-image: url("../assets/image/2.jpg");
    }
    &--3:before {
      background-image: url("../assets/image/3.jpg");
    }
  }

  &__content {
    margin: -1 * $content-overlap-collapsed 1.5rem 0;
    padding: 1.5rem;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.15);
    transition: margin 0.2s ease-in-out;
    position: relative;
    z-index: 1;
    user-select: none;
  }

  &__inside {
    overflow: hidden;
    height: $content-height-collapsed;
    transition: height 0.2s ease-in-out;
  }

  &__title {
    font-size: 1.35rem;
    line-height: 1;
    margin: 0 0 1rem;
    font-weight: 300;
    color: $primary;
  }

  &__excerpt {
    overflow: hidden;
    margin: 0;
    max-height: $excerpt-height;
    position: relative;
  }

  &__button {
    text-decoration: none;
    color: black;
  }
}

/* ====== HOVER ====== */

.post:hover {
  .post {
    &__content {
      margin-top: -1 * $content-overlap;
    }

    &__inside {
      height: $content-height;
    }

    &__image {
      &:after {
        opacity: 0.5;
      }

      &:before {
        transform: scale(1.1);
        filter: blur(10px);
      }
    }
  }
}
</style>