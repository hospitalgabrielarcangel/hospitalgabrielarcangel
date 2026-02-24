"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { create } from "zustand"

import { siteConfig } from "@/config/site"
import { createCallUrl, createEmailUrl, formatPhoneNumber } from "@/lib/utils"
import { IconMenu } from "@/components/icon-menu"
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
      <section className="container pt-25 pb-8">
        <h5 className="heading-lg max-w-lg">{t("title")}</h5>
        <nav className="mt-12 flex flex-col gap-y-12">
          <div className="flex max-w-74 flex-col gap-y-6 [&_a]:font-semibold">
            <Link
              href={siteConfig.addresses["male"].href}
              target="_blank"
              rel="noreferrer"
              onClick={() => closeSidebarMenu()}
            >
              <span>{siteConfig.addresses["male"].description}</span>
            </Link>
            <Link
              href={createCallUrl(siteConfig.phoneNumbers["male"])}
              target="_blank"
              rel="noreferrer"
              onClick={() => closeSidebarMenu()}
            >
              <span>{formatPhoneNumber(siteConfig.phoneNumbers["male"])}</span>
            </Link>
            <Link
              href={createEmailUrl(siteConfig.emails["male"])}
              target="_blank"
              rel="noreferrer"
              onClick={() => closeSidebarMenu()}
            >
              <span>{siteConfig.emails["male"]}</span>
            </Link>
            <IconMenu
              items={
                siteConfig.footerNav.male.find(
                  (item) => item.title === "socialTitle"
                )?.items || []
              }
            />
          </div>
        </nav>
      </section>
    </Sidebar>
  )
}

export { type MenuSidebarStore, useMenuSidebarStore, MenuSidebar }
