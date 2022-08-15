const PlatformUtil = {
  isIOSPaltform: () => {
    const userAgent = navigator.userAgent || navigator.vendor
    if (/android/i.test(userAgent)) {
      return false
    } else {
      return true
    }
  },
}

module.exports = PlatformUtil
