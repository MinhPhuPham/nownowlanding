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

export default {
  components: {},
  metaInfo() {
    return {
      title: customTrans(localeData.title),
      description: customTrans(localeData.description),
      meta: [
        {
          key: 'og:image',
          name: 'og:image',
          content: 'https://me.tapnow.fun/uploads/appIcon.png',
        },
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
      var xhr = new XMLHttpRequest()

      xhr.onreadystatechange = () => {
        console.log(xhr, 'xhr')
        if (xhr.readyState == 4) {
          if (xhr.status != 200) {
            window.location = 'https://apps.apple.com/app/tapnow-widget-for-friends/id1612005183'
          } else {
            window.location = this.openAppLink
          }
        }
      }

      xhr.open('head', this.openAppLink)
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
