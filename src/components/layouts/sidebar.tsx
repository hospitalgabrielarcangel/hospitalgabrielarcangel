"use client"

import { useEffect } from "react"
import { type LayoutProps } from "@/types"
import { AnimatePresence, motion } from "motion/react"

import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"
import { useScrollLock } from "@/hooks/use-scroll-lock"

interface SidebarProps extends LayoutProps {
  position?: "right" | "left"
  width?: "xs" | "sm" | "md" | "lg" | "xl" | "full"
  status?: boolean
  onClickOutside?: () => void
  containerClassName?: string
}

const sidebarWidth = {
  xs: "380px",
  sm: "480px",
  md: "580px",
  lg: "680px",
  xl: "780px",
  full: "100dvw",
}

export default function Sidebar({
  children,
  position = "left",
  width = "md",
  status,
  onClickOutside,
  containerClassName,
}: SidebarProps) {
  const { lockScroll, unlockScroll } = useScrollLock()
  const isMobile = useIsMobile()
  const w = isMobile ? sidebarWidth.full : sidebarWidth[width]

  useEffect(() => {
    if (!status) return
    lockScroll()
    return () => unlockScroll()
  }, [status, lockScroll, unlockScroll])

  return (
    <AnimatePresence>
      {status && (
        <>
          <motion.div
            initial={{ width: "0" }}
            animate={{
              width: w,
            }}
            exit={{ width: "0" }}
            transition={{
              duration: 0.5,
              type: "spring",
            }}
            className={cn(
              "bg-sidebar-accent fixed inset-y-0 z-70 overflow-x-hidden overflow-y-scroll",
              position === "right" ? "right-0" : "left-0",
              containerClassName
            )}
          >
            <div
              style={{
                width: w,
              }}
              className={cn(
                "absolute",
                position === "right" ? "left-0" : "right-0"
              )}
            >
              {children}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
              type: "spring",
            }}
            className="fixed inset-0 z-60 bg-black"
            onClick={() => onClickOutside && onClickOutside()}
          />
        </>
      )}
    </AnimatePresence>
  )
}
