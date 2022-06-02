<template>
  <v-app>
    <v-responsive
      :class="{ 'overflow-y-auto': allowMaxHeight, 'overflow-visible': !allowMaxHeight }"
      :max-height="allowMaxHeight ? '100vh' : ''"
    >
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
  props: {
    allowMaxHeight: Boolean,
  },
}
</script>

<style lang="scss" src="./default.scss"></style>
