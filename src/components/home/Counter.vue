<template>
  <div class="counter-wrap">
    <v-container class="max-md">
      <v-row justify="center" align="center" class="counter-inner spacing6">
        <v-col md="4" class="px-6">
          <div class="counter-item">
            <div v-if="loaded" class="text">
              <h3 class="use-text-title2">
                +<span
                  v-countUp:onWindowScroll.once="{
                    watchedElId: 'watched_counter',
                    startValue: 0,
                    endValue: 100,
                    options: { duration: 1 },
                  }"
                />K
              </h3>
              <p class="use-text-subtitle2">
                <v-icon>
                  mdi-cloud-download-outline
                </v-icon>
                {{ $t('home.counter_downloads') }}
              </p>
            </div>
          </div>
        </v-col>
        <v-col md="4" class="px-6">
          <div class="counter-item">
            <div v-if="loaded" class="text">
              <h3 class="use-text-title2">
                +<span
                  v-countUp:onWindowScroll.once="{
                    watchedElId: 'watched_counter',
                    startValue: 0,
                    endValue: 50,
                    options: { duration: 1 },
                  }"
                />K
              </h3>
              <p class="use-text-subtitle2">
                <v-icon>
                  mdi-swap-horizontal
                </v-icon>
                {{ $t('home.counter_transaction') }}
              </p>
            </div>
          </div>
        </v-col>
        <v-col md="4" class="px-6">
          <div class="counter-item">
            <div v-if="loaded" class="text">
              <h3 class="use-text-title2">
                +<span
                  v-countUp:onWindowScroll.once="{
                    watchedElId: 'watched_counter',
                    startValue: 0,
                    endValue: 10,
                    options: { duration: 1 },
                  }"
                />K
              </h3>
              <p class="use-text-subtitle2">
                <v-icon> mdi-star-outline </v-icon>
                {{ $t('home.counter_ratting') }}
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => ({
    loaded: false,
  }),
  mounted() {
    setTimeout(() => {
      this.loaded = true
    }, 200)
  },
}
</script>

<style lang="scss" scoped>
$palette-primary-main: var(--v-primary-base);
$palette-primary-light: var(--v-primarylight-base);
@import '~/assets/styles/_media-queries.scss';

.counter-item {
  text-align: center;
  min-width: 200px;

  p {
    text-transform: capitalize;

    i {
      font-size: 36px;
      line-height: 42px;
    }

    h3 {
      position: relative;
    }
  }

  .text .use-text-subtitle2 {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 15px;
  }
}

.counter-inner {
  > div {
    position: relative;
    &:after {
      content: '';
      height: 35%;
      position: absolute;
      right: 0;
      top: 25%;
      @include breakpoints-up('sm') {
        border-left: 2px solid #b6bdca;
      }
    }
  }
  > div:last-child {
    &:after {
      display: none;
    }
  }
}
</style>
