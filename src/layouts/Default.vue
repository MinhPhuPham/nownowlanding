<template>
  <v-app>
    <v-responsive
      :class="{ 'overflow-y-auto': allowMaxHeight, 'overflow-visible': !allowMaxHeight }"
      :max-height="allowMaxHeight ? '100vh' : ''"
    >
      <Header />
      <v-main>
        <Hero :title="title" :content="content" />
        <slot />
      </v-main>
      <Footer />
    </v-responsive>
    <v-btn v-scroll="onScroll" v-show="fab" fab dark fixed bottom right color="primary" @click="toTop">
      <v-icon>keyboard_arrow_up</v-icon>
    </v-btn>
  </v-app>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero.vue'

export default {
  components: {
    Header,
    Footer,
    Hero,
  },
  computed: {},
  props: {
    allowMaxHeight: Boolean,
    title: String,
    content: String,
  },
  data() {
    return {
      fab: false,
    }
  },
  methods: {
    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop() {
      this.$vuetify.goTo(0)
    },
  },
}
</script>

<style lang="scss" src="./default.scss"></style>
