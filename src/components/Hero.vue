<template>
  <div class="hero">
    <v-container fluid>
      <v-row no-gutters>
        <v-col cols="12" class="text-center">
          <p class="hero__sub-caption"></p>
          <h1 class="hero__caption">
            {{ title }}
          </h1>

          <p class="hero__desc py-6">
            {{ content }}
          </p>

          <div class="d-flex justify-center">
            <g-link
              class="pr-4"
              href="https://apps.apple.com/app/tapnow-widget-for-friends/id1612005183"
              color="primary"
            >
              <img width="160" src="/images/mobile/app-store.png" alt="app store" />
            </g-link>

            <g-link color="primary" href="https://play.google.com/store/apps/details?id=com.sangotech.tapnow">
              <img width="160" src="/images/mobile/play-store.png" alt="app store" />
            </g-link>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    title: String,
    content: String,
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/_media-queries.scss';

.hero {
  margin-bottom: 40px;
  padding: 80px 0;
  color: #fff;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #000000;
  background-position: right;

  &__caption {
    font-size: 65px;
    line-height: 1.2;
    font-weight: 700;
  }

  &__desc {
    color: var(--v-accent-lighten5);
    font-size: 23px;
  }

  &__preview-app {
    img {
      display: block;
      max-width: 400px;
      width: 100%;
      margin: 0 auto;
    }
  }

  @include breakpoints-down('sm') {
    background-image: none;
    padding: 30px 0;

    &__caption {
      font-size: 40px;
    }
  }
}
</style>
