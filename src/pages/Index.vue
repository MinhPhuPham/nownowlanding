<template>
  <Layout>
    <section></section>
  </Layout>
</template>

<script>
import { getUrlParam } from '../utils/url-helpers'
import { customTrans } from '../utils/language'
import localeData from '~/data/locale.yml'

export default {
  components: {},
  metaInfo() {
    return {
      title: customTrans(localeData.title),
    }
  },
  data() {
    return {
      locale: this.$i18n.locale,
    }
  },
  mounted() {
    const userId = getUrlParam('u')
    location.href = `https://me.tapnow.fun/preview?link=https://me.tapnow.fun?u=${userId}`
  },
}
</script>
