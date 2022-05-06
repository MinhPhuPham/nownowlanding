<template>
  <Layout>
    <section></section>
  </Layout>
</template>

<script>
import homeData from '~/data/home.yml'

export default {
  components: {},
  metaInfo() {
    return {
      title: homeData.title[this.locale],
      meta: [{ name: 'description', content: homeData.description[this.locale] }],
    }
  },
  data() {
    return {
      locale: this.$i18n.locale,
    }
  },
  mounted() {
    location.href = `https://apps.apple.com/vn/app/tapnow-widget-for-friends/id1612005183`
  },
}
</script>
