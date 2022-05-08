const currentLang = () => {
  alert(Intl.DateTimeFormat()
  .resolvedOptions()
  .locale.toLocaleLowerCase())
  return Intl.DateTimeFormat()
    .resolvedOptions()
    .locale.toLocaleLowerCase()
}

module.exports = {
  currentLang,
}
