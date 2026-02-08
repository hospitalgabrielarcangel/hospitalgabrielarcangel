"use client"

import { useTranslations } from "next-intl"
import { create } from "zustand"

import { Shell } from "@/components/shell"

import Sidebar from "./sidebar"

interface MenuSidebarStore {
  isMenuSidebarOpen: boolean
  setIsMenuSidebarOpen: (isMenuSidebarOpen: boolean) => void
  openSidebarMenu: () => void
  closeSidebarMenu: () => void
  toggleSidebarMenu: () => void
}

const useMenuSidebarStore = create<MenuSidebarStore>((set) => ({
  isMenuSidebarOpen: false,
  setIsMenuSidebarOpen: (isMenuSidebarOpen: boolean) =>
    set({ isMenuSidebarOpen }),
  openSidebarMenu: () => set({ isMenuSidebarOpen: true }),
  closeSidebarMenu: () => set({ isMenuSidebarOpen: false }),
  toggleSidebarMenu: () =>
    set((state) => ({ isMenuSidebarOpen: !state.isMenuSidebarOpen })),
}))

function MenuSidebar() {
  const { closeSidebarMenu, isMenuSidebarOpen } = useMenuSidebarStore()
  const t = useTranslations("MenuSidebar")

  return (
    <Sidebar
      position="left"
      size="full"
      status={isMenuSidebarOpen}
      onClickOutside={closeSidebarMenu}
      containerClassName="z-30"
    >
      <Shell className="px-25 pt-25">
        <h5 className="heading-lg max-w-lg">{t("title")}</h5>
      </Shell>
    </Sidebar>
  )
}

export { type MenuSidebarStore, useMenuSidebarStore, MenuSidebar }
