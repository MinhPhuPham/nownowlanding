<template>
  <Layout>
    <section></section>
  </Layout>
</template>

<script>
import { getUrlParam } from '../utils/url-helpers'
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
    const userId = getUrlParam('u')
    location.href = `https://tapnow.fun/?link=https://me.tapnow.fun/redirect?u=${userId}&isi=1612005183&ibi=com.sango.widgetphoto&efr=1`
  },
}
</script>
