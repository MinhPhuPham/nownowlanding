<template>
  <Layout>
    <section class="preview-contain">
      <!-- Heading -->
      <div class="mb-6">
        <!-- Logo -->
        <div class="mb-4">
          <img src="/uploads/appIcon.png" class="rounded-lg" width="40" />
        </div>
        <div class="ml-4">
          <h3>
            {{ localeData.title[this.locale] }}
          </h3>
          <p class="mt-4">
            {{ localeData.description[this.locale] }}
          </p>
        </div>
      </div>
      <a
        class="v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default"
        :href="openAppLink"
        @click="onOpenAppOrAppStore"
      >
        {{ localeData.openButton[this.locale] }}
      </a>
    </section>
  </Layout>
</template>

<script>
import localeData from '~/data/locale.yml'
import { getUrlParam } from '../utils/url-helpers'

export default {
  components: {},
  metaInfo() {
    return {
      title: localeData.title[this.locale],
      description: localeData.description[this.locale],
    }
  },
  data() {
    return {
      locale: this.$i18n.locale,
      localeData: localeData,
      openAppLink: '',
    }
  },
  mounted() {
    const now = new Date().valueOf()
    const targetLink = getUrlParam('link')
    this.openAppLink = `com.sango.widgetphoto://${targetLink}`

    window.location = this.openAppLink
  },
  methods: {
    onOpenAppOrAppStore() {
      setTimeout(() => {
        if (new Date().valueOf() - now > 100) {
          return
        }

        window.location = 'https://apps.apple.com/app/tapnow-widget-for-friends/id1612005183'
      }, 25)

      window.location = this.openAppLink
    },
  },
}
</script>
<style lang="scss" scoped>
.preview-contain {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  margin-top: 30px;
  text-align: center;
  height: 100vh;
}
</style>
