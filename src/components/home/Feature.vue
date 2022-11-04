<template>
  <v-container fluid>
    <h2 class="text-center use-text-title2">{{ $t('home.features') }}</h2>

    <v-carousel height="800" class="carousel-custom" :show-arrows-on-hover="true" :hide-delimiter-background="true">
      <v-carousel-item v-for="(item, i) in 6" :key="i">
        <v-sheet class="justify-center" height="100%">
          <v-row align="center" class="fill-height" justify="center">
            <img :src="`/images/tapnow-widget-${i + 1}.webp`" class="carousel-item-img" />
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  components: {},
  data: () => ({}),
}
</script>

<style lang="scss">
.carousel-custom {
  padding-bottom: 50px;
  .v-image__image--cover {
    background-size: contain;
  }

  .v-btn--active {
    color: #f4f947 !important;
  }

  .v-carousel__controls {
    .v-icon {
      font-size: 14px !important;
      color: #000 !important;
    }
    .v-carousel__controls__item {
      margin: 0 !important;
    }
  }
}
.carousel-item-img {
  border-radius: 40px;
  margin: 40px;
  width: 300px;
  max-width: 100%;
}
</style>
