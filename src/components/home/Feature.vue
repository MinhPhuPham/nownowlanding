<template>
  <v-container fluid>
    <h2 class="text-center use-text-title">Features</h2>

    <!-- Start - Share your status to your friends -->
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="illustration-left">
          <svg class="deco-primary">
            <use xlink:href="/images/deco-feature.svg#main" />
          </svg>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="text">
          <h4>
            Share your status to your friends
          </h4>
          <p class="use-text-subtitle2">
            {{ $t('mobileLanding.feature_desc1') }}
          </p>
        </div>
      </div>
    </div>
    <!-- End - Share your status to your friends -->

    <!-- Start - Can see your image status more fast -->
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="text">
          <h4>
            Can see your image status more fast
          </h4>
          <p class="use-text-subtitle2">
            {{ $t('mobileLanding.feature_desc1') }}
          </p>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="illustration-left">
          <svg class="deco-primary">
            <use xlink:href="/images/deco-feature.svg#main" />
          </svg>
        </div>
      </div>
    </div>
    <!-- End - Can see your image status more fast -->

    <!-- Start - Rewind moments and view histories -->
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="illustration-left">
          <svg class="deco-primary">
            <use xlink:href="/images/deco-feature.svg#main" />
          </svg>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="text">
          <h4>
            Rewind moments and view histories
          </h4>
          <p class="use-text-subtitle2">
            {{ $t('mobileLanding.feature_desc1') }}
          </p>
        </div>
      </div>
    </div>
    <!-- End - Rewind moments and view histories -->
  </v-container>
</template>

<script>
export default {
  components: {},
  data: () => ({}),
}
</script>

<style lang="scss" scoped>
.illustration-left {
  position: relative;
}
.deco-primary {
  width: 450px;
  height: 450px;
  position: absolute;
  top: 80px;

  fill: #d1c4e9;
}
</style>
