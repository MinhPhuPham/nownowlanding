<template>
  <Layout :title="$t('home.title')" :content="$t('home.description')">
    <Feature />
    <!-- <LanguageAvaiable /> -->

    <Counter />
  </Layout>
</template>

<script>
import { getUrlParam } from '../utils/url-helpers'
import { customTrans } from '../utils/language'
import localeData from '~/data/locale.yml'
import Counter from '../components/home/Counter.vue'
import Feature from '../components/home/Feature.vue'
import LanguageAvaiable from '../components/home/LanguageAvaiable.vue'

export default {
  components: {
    Counter,
    Feature,
    LanguageAvaiable,
  },
  metaInfo() {
    return {
      title: customTrans(localeData.title),
      description: customTrans(localeData.description),
      meta: [
        {
          key: 'description',
          name: 'description',
          content: customTrans(localeData.description),
        },
      ],
    }
  },
  data() {
    return {
      locale: this.$i18n.locale,
    }
  },
  mounted() {
    const userId = getUrlParam('u')
    if (userId) {
      location.href = `https://me.tapnow.fun/preview?link=https://me.tapnow.fun?u=${userId}`
    }
  },
}
</script>
