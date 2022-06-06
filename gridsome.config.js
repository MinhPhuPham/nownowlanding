/**
 * See more: https://gridsome.org/docs/config
 */
module.exports = {
  siteName: '',
  titleTemplate: '%s',
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "articles/**/*.md",
        typeName: "Article",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      },
    },
    {
      use: "gridsome-plugin-i18n",
      options: {
        locales: [
          'ja-jp',
          'en-gb'
        ],
        pathAliases: {
          'ja-jp': 'jp',
          'en-gb': 'en'
        },
        fallbackLocale: 'en-gb',
        defaultLocale: 'en-gb',
        enablePathRewrite: true,
        rewriteDefaultLanguage: false,
        messages: {
          'ja-jp': require('./src/locales/ja.json'),
          'en-gb': require('./src/locales/en.json'),
        }
      }
    },
  ],
  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs"]
    }
  }
}
