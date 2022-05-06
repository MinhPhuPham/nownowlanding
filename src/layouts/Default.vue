<template>
  <v-app>
    <v-responsive class="overflow-y-auto" max-height="100vh">
      <Header />
      <v-main>
        <slot />
      </v-main>
      <Footer />
    </v-responsive>
  </v-app>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  components: {
    Header,
    Footer,
  },
  computed: {},
}
</script>

<style lang="scss" src="./default.scss"></style>
