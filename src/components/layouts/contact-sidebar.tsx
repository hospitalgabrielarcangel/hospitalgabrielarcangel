"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { create } from "zustand"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"

import Sidebar from "./sidebar"

export interface ContactSidebarStore {
  isSidebarOpen: boolean
  setIsSidebarOpen: (isSidebarOpen: boolean) => void
  openSidebar: () => void
  closeSidebar: () => void
}

export const useContactSidebarStore = create<ContactSidebarStore>((set) => ({
  isSidebarOpen: false,
  setIsSidebarOpen: (isSidebarOpen: boolean) => set({ isSidebarOpen }),
  openSidebar: () => set({ isSidebarOpen: true }),
  closeSidebar: () => set({ isSidebarOpen: false }),
}))

export function ContactSidebar() {
  const { closeSidebar, isSidebarOpen } = useContactSidebarStore()
  const tContact = useTranslations("Contact")
  const tGender = useTranslations("Gender")

  return (
    <Sidebar
      position="right"
      width="lg"
      status={isSidebarOpen}
      onClickOutside={closeSidebar}
      containerClassName="md:rounded-l-2xl"
    >
      <div>
        <div className="flex items-center justify-between p-5">
          <span className="font-header text-3xl tracking-tighter">
            {tContact("title")}
          </span>
          <Button
            size="icon"
            variant="ghost"
            className="text-muted-foreground text-lg"
            onClick={() => closeSidebar()}
          >
            X
          </Button>
        </div>
        <div className="[&>div]:[&>span]:font-header [&>div]:flex [&>div]:flex-col [&>div]:gap-y-12 [&>div]:border-t [&>div]:px-5 [&>div]:py-15 [&>div]:md:flex-row [&>div]:md:items-center [&>div]:md:justify-between [&>div]:md:gap-y-0 [&>div]:[&>span]:text-[1.7rem] [&>div]:[&>span]:leading-9 [&>div]:[&>span]:tracking-tighter">
          <div>
            <span className="w-40">{tContact("callNow")}</span>
            <div key={siteConfig.phoneNumbers[0]!.title}>
              <Button
                asChild
                variant="link"
                className="text-foreground hover:text-accent-foreground group flex w-fit flex-col items-start gap-y-0.5 rounded-none px-0"
                onClick={() => closeSidebar()}
              >
                <Link
                  aria-label={`${tContact("label")} - ${tGender(siteConfig.phoneNumbers[0]!.title)}`}
                  title={`${tContact("label")} - ${tGender(siteConfig.phoneNumbers[0]!.title)}`}
                  target="_blank"
                  rel="noreferrer"
                  href={siteConfig.phoneNumbers[0]!.callUrl}
                >
                  <span className="border-foreground group-hover:border-primary border-b text-xl">
                    {siteConfig.phoneNumbers[0]!.displayNumber}
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="[&>div]:[&>span]:font-header [&>div]:flex [&>div]:flex-col [&>div]:gap-y-12 [&>div]:border-t [&>div]:px-5 [&>div]:py-15 [&>div]:md:flex-row [&>div]:md:items-center [&>div]:md:justify-between [&>div]:md:gap-y-0 [&>div]:[&>span]:text-[1.7rem] [&>div]:[&>span]:leading-9 [&>div]:[&>span]:tracking-tighter">
          <div>
            <span className="w-40">{tContact("messageUs")}</span>
            <div className="space-x-4">
              <Button
                asChild
                variant="outline"
                size="lg"
                onClick={() => closeSidebar()}
                className="uppercase"
              >
                <Link
                  aria-label={`${tContact("label")} - ${tGender(siteConfig.phoneNumbers[0]!.title)}`}
                  title={`${tContact("label")} - ${tGender(siteConfig.phoneNumbers[0]!.title)}`}
                  target="_blank"
                  rel="noreferrer"
                  href={siteConfig.phoneNumbers[0]!.whatsappUrl}
                >
                  Email
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                onClick={() => closeSidebar()}
                className="uppercase"
              >
                <Link
                  aria-label={`${tContact("label")} - ${tGender(siteConfig.phoneNumbers[1]!.title)}`}
                  title={`${tContact("label")} - ${tGender(siteConfig.phoneNumbers[1]!.title)}`}
                  target="_blank"
                  rel="noreferrer"
                  href={siteConfig.phoneNumbers[1]!.callUrl}
                >
                  WhatsApp
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  )
}
