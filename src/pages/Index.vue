<template>
  <Layout :title="$t('home.title')" :content="$t('home.description')">
    <Counter />
    <!-- <Feature />
    <LanguageAvaiable /> -->

    <!-- Coming Soon -->
    <v-container fluid>
      <h2 class="text-center use-text-title2">{{ $t('home.coming') }}</h2>

      <v-img
        alt="TapNow Logo"
        class="shrink rounded mx-auto"
        contain
        src="/images/coming-soon.jpeg"
        transition="scale-transition"
        width="500"
      />
    </v-container>
    <!-- End - Coming Soon -->
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
