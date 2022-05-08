const currentLang = () => {
  return Intl.DateTimeFormat()
    .resolvedOptions()
    .locale.toLocaleLowerCase()
}

const customTrans = (localeData) => {
  const lang = currentLang()
  return localeData[lang] || localeData['ja-jp']
}

module.exports = {
  currentLang,
  customTrans,
}
