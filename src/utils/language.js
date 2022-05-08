const currentLang = () => {
  return Intl.DateTimeFormat()
    .resolvedOptions()
    .locale.toLocaleLowerCase()
}

module.exports = {
  currentLang,
}
