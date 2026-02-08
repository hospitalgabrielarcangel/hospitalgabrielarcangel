"use client"

import { type CSSProperties } from "react"
import { motion } from "motion/react"
import { useTranslations } from "next-intl"

import { Button } from "@/components/ui/button"

import { useMenuSidebarStore } from "./layouts/menu-sidebar"

interface MenuButtonProps {
  className?: string
  style?: CSSProperties
}

export function MenuButton({ className, style }: MenuButtonProps) {
  const { isMenuSidebarOpen, toggleSidebarMenu } = useMenuSidebarStore()
  const t = useTranslations("MenuButton")

  return (
    <Button
      variant="ghost"
      className={className}
      style={style}
      onClick={toggleSidebarMenu}
    >
      <div className="relative block h-3 w-8">
        <motion.span
          initial={{
            rotate: 0,
            bottom: "auto",
            right: "auto",
            margin: 0,
          }}
          animate={{
            rotate: isMenuSidebarOpen ? 135 : 0,
            bottom: isMenuSidebarOpen ? 0 : "auto",
            right: isMenuSidebarOpen ? 0 : "auto",
            margin: isMenuSidebarOpen ? "auto" : 0,
          }}
          transition={{
            duration: 0.4,
          }}
          className="bg-primary absolute top-0 left-0 h-0.75 w-4/5"
          aria-hidden
        />
        <motion.span
          initial={{
            rotate: 0,
            top: "auto",
            left: "auto",
            margin: 0,
          }}
          animate={{
            rotate: isMenuSidebarOpen ? -135 : 0,
            top: isMenuSidebarOpen ? 0 : "auto",
            left: isMenuSidebarOpen ? 0 : "auto",
            margin: isMenuSidebarOpen ? "auto" : 0,
          }}
          transition={{
            duration: 0.4,
          }}
          className="bg-primary absolute right-0 bottom-0 h-0.75 w-4/5"
          aria-hidden
        />
        <span className="sr-only">{t("label")}</span>
      </div>
    </Button>
  )
}
