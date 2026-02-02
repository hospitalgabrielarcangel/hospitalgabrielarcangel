"use client"

import { useTranslations } from "next-intl"

import { cn } from "@/lib/utils"

import { useMenuSidebarStore } from "./layouts/menu-sidebar"

export function MenuButton() {
  const { isMenuSidebarOpen, toggleSidebarMenu } = useMenuSidebarStore()
  const t = useTranslations("MenuButton")

  return (
    <div className="p-2 hover:cursor-pointer" onClick={toggleSidebarMenu}>
      <div className="relative block h-2.5 w-8 [&>span]:transition-all [&>span]:duration-300">
        <span
          className={cn(
            "bg-primary absolute top-0 left-0 h-0.5 w-4/5",
            isMenuSidebarOpen && "inset-0 m-auto rotate-45"
          )}
        />
        <span
          className={cn(
            "bg-primary absolute right-0 bottom-0 h-0.5 w-4/5",
            isMenuSidebarOpen && "inset-0 m-auto -rotate-45"
          )}
        />
        <span className="sr-only">{t("label")}</span>
      </div>
    </div>
  )
}
