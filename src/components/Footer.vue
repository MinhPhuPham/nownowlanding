<template>
  <v-footer dark padless>
    <v-container class="footer" fluid>
      <div class="footer__end-question text-center">
        <h4 class="use-text-subtitle pb-4">
          {{ $t('footer.end_title') }}
        </h4>

        <div class="d-flex align-center justify-center">
          <g-link class="mr-4" to="/">
            <img width="160" src="/images/mobile/app-store.png" alt="app store" />
          </g-link>

          <g-link to="/">
            <img width="160" src="/images/mobile/play-store.png" alt="play store" />
          </g-link>
        </div>
      </div>

      <div class="footer__link d-flex align-center">
        <div class="footer__copyright">
          © 2021 Sango Technologies. All Rights Reserved.
        </div>

        <v-spacer />

        <v-btn href="https://www.tiktok.com/@tapnow_official" target="_blank" fab text small style="fill: white">
          <svg role="img" width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>TikTok</title>
            <path
              d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
            />
          </svg>
        </v-btn>
        <v-btn href="https://www.instagram.com/tapnow_official" target="_blank" fab text small>
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
        <v-btn href="https://twitter.com/tapnow_app" target="_blank" fab text small>
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
      </div>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  components: {},
  data: () => ({}),
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/_media-queries.scss';

.footer {
  &__link {
    @include breakpoints-down('md') {
      flex-direction: row-reverse;
      flex-wrap: wrap;
    }
  }
  &__end-question {
    padding-bottom: 40px;
  }
}
</style>
