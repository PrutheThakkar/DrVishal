import * as React from "react"

const AosInit = () => {
  React.useEffect(() => {
    let aosInstance

    const initAos = async () => {
      const AOS = await import("aos")
      aosInstance = AOS.default

      aosInstance.init({
        duration: 900,
        easing: "ease-out-cubic",
        once: true,
        offset: 80,
        delay: 0,
        mirror: false,
      })

      setTimeout(() => {
        aosInstance.refreshHard()
      }, 500)
    }

    initAos()

    const handleLoad = () => {
      if (aosInstance) {
        aosInstance.refreshHard()
      }
    }

    window.addEventListener("load", handleLoad)

    return () => {
      window.removeEventListener("load", handleLoad)
    }
  }, [])

  return null
}

export default AosInit