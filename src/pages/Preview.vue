<template>
  <Layout :maxHeight="true" :standAlone="true">
    <section class="preview-contain">
      <!-- Heading -->
      <div class="mb-6">
        <!-- Logo -->
        <div class="mb-4">
          <img src="/uploads/appIcon.png" class="rounded-lg" width="40" />
        </div>
        <div>
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
import PlatformUtil from '../utils/platform-detection'

export default {
  components: {},
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
      localeData: localeData,
      openAppLink: '',
    }
  },
  mounted() {
    this.onDetectLinkForOpen()
  },
  methods: {
    customTrans(localeData) {
      return customTrans(localeData)
    },
    onDetectLinkForOpen() {
      const targetLink = getUrlParam('link')
      if (PlatformUtil.isIOSPaltform()) {
        this.openAppLink = `com.sango.widgetphoto://?link=${targetLink}`
      } else {
        this.openAppLink = `com.sangotech.tapnow://me.tapnow.fun/preview/?link=${targetLink}`
      }
    },
    onOpenAppOrAppStore() {
      var xhr = new XMLHttpRequest()
      xhr.onreadystatechange = () => {
        console.log(xhr, 'xhr')

        alert('1-xhr.readyState:' + xhr.readyState)

        if (xhr.readyState == 4) {
          alert('2-xhr.status' + xhr.status)

          if (xhr.status != 200) {
            // if (PlatformUtil.isIOSPaltform()) {
            //   window.location = 'https://apps.apple.com/app/tapnow-widget-for-friends/id1612005183'
            // } else {
            //   window.location = 'https://play.google.com/store/apps/details?id=com.sangotech.tapnow'
            // }
            alert('errrorrr')
            alert('3-xhr.responseText:' + xhr.responseText)
            alert('4-xhr.getAllResponseHeaders' + xhr.getAllResponseHeaders())

            const targetLink = getUrlParam('link')
            window.location = `com.sango.widgetphoto://?link=${targetLink}`
          } else {
            alert('success', xhr.readyState, xhr.getAllResponseHeaders())
            // window.location = this.openAppLink
          }
        }
      }

      alert('5-xhr.open')
      xhr.open('head', this.openAppLink, false)
      xhr.send(null)
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
.v-btn {
  background-color: #f4f947 !important;
  font-weight: bold;
}
</style>
