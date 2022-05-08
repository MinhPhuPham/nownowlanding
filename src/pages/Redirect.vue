<template>
  <Layout>
    <section></section>
  </Layout>
</template>

<script>
import localeData from '~/data/locale.yml'
import { currentLang, customTrans } from '../utils/language'

export default {
  components: {},
  metaInfo() {
    return {
      title: customTrans(localeData.title),
    }
  },
  data() {
    return {
      locale: currentLang(),
    }
  },
  mounted() {
    location.href = `https://apps.apple.com/vn/app/tapnow-widget-for-friends/id1612005183`
  },
}
</script>
