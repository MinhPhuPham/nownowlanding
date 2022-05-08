const currentLang = () => {
  const lang = Intl.DateTimeFormat()
    .resolvedOptions()
    .locale.toLocaleLowerCase()

  return lang.split('-')[0]
}

const customTrans = (localeData) => {
  const lang = currentLang()
  return localeData[lang] || localeData['ja']
}

module.exports = {
  currentLang,
  customTrans,
}
