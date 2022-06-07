<template>
  <nav>
    <v-app-bar app color="light" light class="nav-bar" elevate-on-scroll>
      <div class="d-flex align-center container--fluid ma-auto">
        <div>
          <g-link to="/" text class="d-flex align-center">
            <v-img
              alt="TapNow Logo"
              class="shrink rounded mr-2"
              contain
              src="/uploads/appIcon.png"
              transition="scale-transition"
              width="40"
            />
            <v-toolbar-title class="hidden-sm-and-down font-weight-bold" style="color: #11182A">
              Tap Now
            </v-toolbar-title>
          </g-link>
        </div>

        <v-spacer />

        <v-btn to="/term-of-service/" text color="primary" class="mr-2 hidden-sm-and-down">
          <span class="fw-mbold">{{ $t('menu.term_of_service') }}</span>
        </v-btn>

        <v-btn to="/privacy-policy/" text color="primary" class="hidden-sm-and-down">
          <span class="fw-mbold">{{ $t('menu.privacy_policy') }}</span>
        </v-btn>

        <v-btn text @click="drawer = !drawer" class="hidden-md-and-up">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <!-- [MOBILE MENU] -->
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img
            alt="Sango Logo"
            class="shrink mr-2"
            contain
            :src="'/uploads/sango-tech-logo.png'"
            transition="scale-transition"
            width="40"
          />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>
            <a :href="$tp('/')" text> Tap Now </a>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item link to="/term-of-service/">
          <v-icon>mdi-information-outline</v-icon>
          <span class="ml-3 fw-mbold">{{ $t('menu.term_of_service') }}</span>
        </v-list-item>

        <v-list-item link to="/privacy-policy/">
          <v-icon>mdi-card-account-phone-outline</v-icon>
          <span class="ml-3 fw-mbold">{{ $t('menu.privacy_policy') }}</span>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- END [MOBILE MENU] -->
  </nav>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      drawer: false,
    }
  },
  methods: {},
}
</script>
<style lang="scss">
.nav-bar.theme--light {
  background-color: #fff !important;
}
</style>
