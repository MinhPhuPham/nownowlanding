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
            {{ customTrans(localeData.title) }}
          </h3>
          <p class="mt-4">
            {{ customTrans(localeData.description) }}
          </p>
        </div>
      </div>
      <a
        class="v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default"
        :href="openAppLink"
        @click="onOpenAppOrAppStore"
      >
        {{ customTrans(localeData.openButton) }}
      </a>
    </section>
  </Layout>
</template>

<script>
import localeData from '~/data/locale.yml'
import { customTrans } from '../utils/language'
import { getUrlParam } from '../utils/url-helpers'

export default {
  components: {},
  metaInfo() {
    return {
      title: customTrans(localeData.title),
      description: customTrans(localeData.description),
    }
  },
  data() {
    return {
      localeData: localeData,
      openAppLink: '',
    }
  },
  mounted() {
    const targetLink = getUrlParam('link')
    this.openAppLink = `com.sango.widgetphoto://?link=${targetLink}`

    window.location = this.openAppLink
  },
  methods: {
    customTrans(localeData) {
      return customTrans(localeData)
    },
    onOpenAppOrAppStore() {
      const now = new Date().valueOf()

      // setTimeout(() => {
      //   if (new Date().valueOf() - now > 100) {
      //     return
      //   }

      //   window.location = 'https://apps.apple.com/app/tapnow-widget-for-friends/id1612005183'
      // }, 25)
      var xhr = new XMLHttpRequest()

      xhr.onreadystatechange = () => {
        console.log(xhr, 'xhr')
        if (xhr.readyState == 4) {
          if (hr.status != 200) {
            window.location = 'https://apps.apple.com/app/tapnow-widget-for-friends/id1612005183'
          } else {
            window.location = this.openAppLink
          }
        }
      }

      xhr.open('head', this.openAppLink)
      xhr.send(null)

      // try {
      //   window.location = this.openAppLink
      // } catch {
      //   window.location = 'https://apps.apple.com/app/tapnow-widget-for-friends/id1612005183'
      // }
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
