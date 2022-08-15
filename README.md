# TapNow user barcode webapp with Vuetify + Gridsome

- https://me.tapnow.fun?u=xxxx

## Install

```
yarn
yarn develop
```

To fix install `sharp` package issue on Mac M1:

```
brew install gcc
brew reinstall vips
```

## Notes

- To allow to trigger opening android app, add bellow file. Please get more detail [here](https://developer.android.com/training/app-links/verify-site-associations)

```
static/.well-known/assetlinks.json
```
