"use client"

// import { useTranslations } from "next-intl"
import { create } from "zustand"

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
  // const t = useTranslations("MenuSidebar")

  return (
    <Sidebar
      position="left"
      size="full"
      status={isMenuSidebarOpen}
      onClickOutside={closeSidebarMenu}
      containerClassName="z-30"
    >
      {/* <section className="container py-20 pb-8 xl:px-[7dvw]">
        <h5 className="heading-lg max-w-lg">{t("title")}</h5>
        <nav className="mt-12 flex w-full flex-col justify-between gap-x-20 gap-y-12 lg:flex-row xl:gap-0">
          <div className="flex w-fit flex-col gap-y-6 xl:w-1/2">
            <div className="flex max-w-74 flex-col gap-y-6 font-semibold">
              <Link
                href={siteConfig.addresses.male.href}
                target="_blank"
                rel="noreferrer"
                onClick={() => closeSidebarMenu()}
              >
                <span>{siteConfig.addresses.male.description}</span>
              </Link>
              <Link
                href={createCallUrl(siteConfig.phoneNumbers.male)}
                target="_blank"
                rel="noreferrer"
                onClick={() => closeSidebarMenu()}
              >
                <span>{formatPhoneNumber(siteConfig.phoneNumbers.male)}</span>
              </Link>
              <Link
                href={createEmailUrl(siteConfig.emails.male)}
                target="_blank"
                rel="noreferrer"
                onClick={() => closeSidebarMenu()}
              >
                <span>{siteConfig.emails.male}</span>
              </Link>
              <IconMenu
                items={
                  siteConfig.footerNav.male.find(
                    (item) => item.title === "socialTitle"
                  )?.items || []
                }
              />
            </div>
          </div>
          <div className="w-full xl:w-1/2">
            <ul className="paragraph flex flex-wrap gap-y-12">
              <li className="xs:w-1/2 w-full space-y-5 md:w-1/3">
                <div className="font-bold">Lorem ipsum</div>
                <ul className="space-y-3">
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                </ul>
              </li>
              <li className="xs:w-1/2 w-full space-y-5 md:w-1/3">
                <div className="font-bold">Lorem ipsum</div>
                <ul className="space-y-3">
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                </ul>
              </li>
              <li className="xs:w-1/2 w-full space-y-5 md:w-1/3">
                <div className="font-bold">Lorem ipsum</div>
                <ul className="space-y-3">
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </section> */}
    </Sidebar>
  )
}

export { type MenuSidebarStore, useMenuSidebarStore, MenuSidebar }
