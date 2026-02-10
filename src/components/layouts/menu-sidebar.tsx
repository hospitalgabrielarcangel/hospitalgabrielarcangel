"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { create } from "zustand"

import { siteConfig } from "@/config/site"
import { createCallUrl, formatPhoneNumber } from "@/lib/utils"
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
  const tGenres = useTranslations("Genres")

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
        <nav className="mt-10">
          <ul className="flex max-w-56 flex-col gap-y-8 font-medium">
            {siteConfig.genres.map((item) => (
              <div
                key={siteConfig.addresses[item].title}
                className="flex flex-col gap-y-4"
              >
                <Link
                  href={siteConfig.addresses[item].href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-start gap-y-0.5"
                  onClick={() => closeSidebarMenu()}
                >
                  <span>{tGenres(siteConfig.addresses[item].title)}</span>
                  <span>{siteConfig.addresses[item].description}</span>
                </Link>
                <Link
                  href={createCallUrl(siteConfig.phoneNumbers[item])}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-start gap-y-0.5"
                  onClick={() => closeSidebarMenu()}
                >
                  <span>
                    {formatPhoneNumber(siteConfig.phoneNumbers[item])}
                  </span>
                </Link>
              </div>
            ))}
          </ul>
        </nav>
      </Shell>
    </Sidebar>
  )
}

export { type MenuSidebarStore, useMenuSidebarStore, MenuSidebar }
