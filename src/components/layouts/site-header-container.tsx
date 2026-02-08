"use client"

import * as React from "react"
import type { LayoutProps } from "@/types"
import { motion, useMotionValueEvent, useScroll } from "motion/react"

export function SiteHeaderContainer({ children }: LayoutProps) {
  const { scrollYProgress } = useScroll()
  const [isOnTop, setIsOnTop] = React.useState(true)

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number" && scrollYProgress.get() > 0) {
      setIsOnTop(false)
    } else {
      setIsOnTop(true)
    }
  })

  return (
    <div className="sticky top-0 z-50 w-full">
      <div className="relative">
        {children}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: isOnTop ? 0 : 1,
          }}
          transition={{
            duration: 0.3,
          }}
          className="absolute inset-0 -z-10 bg-[#fcf7f11a] backdrop-blur-xl"
        />
      </div>
    </div>
  )
}
