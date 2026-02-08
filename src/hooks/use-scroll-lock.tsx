import * as React from "react"

export function useScrollLock() {
  const [isLocked, setIsLocked] = React.useState(false)

  const lockScroll = () => {
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = "hidden"
    document.body.style.scrollBehavior = "touch"
    document.body.style.paddingRight = `${scrollBarWidth}px`
    document.body.ontouchstart = (e) => {
      e.preventDefault()
    }
    setIsLocked(true)
  }

  const unlockScroll = () => {
    document.body.style.overflow = "auto"
    document.body.style.scrollBehavior = "auto"
    document.body.style.paddingRight = "0px"
    setIsLocked(false)
  }

  return { isLocked, lockScroll, unlockScroll }
}
