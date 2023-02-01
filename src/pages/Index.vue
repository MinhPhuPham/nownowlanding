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
      location.href = `https://dulcet-rabanadas-26b071.netlify.app/preview?link=https://dulcet-rabanadas-26b071.netlify.app?u=${userId}`
      return
    }

    const sharedId = getUrlParam('shareId')
    if (sharedId) {
      location.href = `https://tapno.onelink.me/pJnR/trdnhuk0`
      return
    }

    const groupId = getUrlParam('g')
    if (groupId) {
      location.href = `https://dulcet-rabanadas-26b071.netlify.app/preview?link=https://dulcet-rabanadas-26b071.netlify.app?g=${groupId}`
    }
  },
}
</script>
