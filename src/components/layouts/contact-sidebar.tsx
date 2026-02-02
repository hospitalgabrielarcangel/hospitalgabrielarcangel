"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { create } from "zustand"

import { siteConfig } from "@/config/site"
import {
  createCallUrl,
  createEmailUrl,
  createWhatsappUrl,
  formatPhoneNumber,
} from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/forms/contact-form"

import Sidebar from "./sidebar"

interface ContactSidebarStore {
  isContactSidebarOpen: boolean
  setIsContactSidebarOpen: (isContactSidebarOpen: boolean) => void
  openContactSidebar: () => void
  closeContactSidebar: () => void
}

const useContactSidebarStore = create<ContactSidebarStore>((set) => ({
  isContactSidebarOpen: false,
  setIsContactSidebarOpen: (isContactSidebarOpen: boolean) =>
    set({ isContactSidebarOpen }),
  openContactSidebar: () => set({ isContactSidebarOpen: true }),
  closeContactSidebar: () => set({ isContactSidebarOpen: false }),
}))

function ContactSidebar() {
  const { closeContactSidebar, isContactSidebarOpen } = useContactSidebarStore()
  const t = useTranslations("ContactSidebar")

  return (
    <Sidebar
      position="right"
      width="lg"
      status={isContactSidebarOpen}
      onClickOutside={closeContactSidebar}
      containerClassName="md:rounded-l-2xl z-70"
    >
      <div>
        <div className="flex items-center justify-between p-5">
          <span className="font-header text-3xl tracking-tighter">
            {t("title")}
          </span>
          <Button
            size="icon"
            variant="ghost"
            className="text-muted-foreground text-lg"
            onClick={() => closeContactSidebar()}
          >
            X
          </Button>
        </div>
        <div className="[&>div]:[&>span]:font-header [&>div]:flex [&>div]:flex-col [&>div]:gap-y-12 [&>div]:border-t [&>div]:px-5 [&>div]:py-15 [&>div]:md:flex-row [&>div]:md:items-center [&>div]:md:justify-between [&>div]:md:gap-y-0 [&>div]:[&>span]:text-[1.7rem] [&>div]:[&>span]:leading-9 [&>div]:[&>span]:tracking-tighter">
          <div>
            <span className="md:w-40">{t("callUsTitle")}</span>
            <Button
              asChild
              variant="link"
              className="text-foreground hover:text-accent-foreground group flex w-fit flex-col items-start gap-y-0.5 rounded-none px-0"
              onClick={() => closeContactSidebar()}
            >
              <Link
                href={createCallUrl(siteConfig.phoneNumbers.male)}
                title={t("callUsLabel")}
                aria-label={t("callUsLabel")}
                target="_blank"
                rel="noreferrer"
              >
                <span className="border-foreground group-hover:border-primary border-b text-xl">
                  {formatPhoneNumber(siteConfig.phoneNumbers.male)}
                </span>
              </Link>
            </Button>
          </div>
          <div>
            <span className="md:w-40">{t("messageUsTitle")}</span>
            <div className="space-x-4">
              <Button
                asChild
                variant="outline"
                size="lg"
                onClick={() => closeContactSidebar()}
                className="uppercase"
              >
                <Link
                  href={createEmailUrl(siteConfig.emails.contact)}
                  title={t("emailLabel")}
                  aria-label={t("emailLabel")}
                  target="_blank"
                  rel="noreferrer"
                >
                  Email
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                onClick={() => closeContactSidebar()}
                className="uppercase"
              >
                <Link
                  href={createWhatsappUrl(siteConfig.phoneNumbers.male)}
                  title={t("callUsLabel")}
                  aria-label={t("callUsLabel")}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 border-t px-5 pt-15 pb-5">
          <span className="font-header text-[1.7rem] leading-9 tracking-tighter">
            {t("emailUsTitle")}
          </span>
          <ContactForm />
        </div>
      </div>
    </Sidebar>
  )
}

export { type ContactSidebarStore, useContactSidebarStore, ContactSidebar }
