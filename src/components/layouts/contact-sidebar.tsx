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
import { Icons } from "@/components/icons"
import Sidebar from "@/components/layouts/sidebar"

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
      size="lg"
      status={isContactSidebarOpen}
      onClickOutside={closeContactSidebar}
      containerClassName="z-70"
    >
      <div>
        <div className="flex items-center justify-between p-5">
          <h2 className="heading-xl tracking-tighter">{t("title")}</h2>
          <Button
            size="icon-sm"
            variant="outline"
            className="text-muted-foreground text-lg"
            onClick={() => closeContactSidebar()}
          >
            <Icons.close className="size-5" aria-label="Close" />
          </Button>
        </div>
        <div className="flex flex-col gap-y-12 border-t px-5 py-15 md:flex-row md:items-center md:justify-between md:gap-y-0">
          <h2 className="heading-lg md:w-40">{t("callUsTitle")}</h2>
          <Button
            variant="link"
            className="subtitle-md flex w-fit flex-col items-start gap-y-0.5 rounded-none px-0 underline underline-offset-4"
            onClick={() => closeContactSidebar()}
            render={
              <Link
                href={createCallUrl(siteConfig.phoneNumbers.male)}
                title={t("callUsLabel")}
                aria-label={t("callUsLabel")}
                target="_blank"
                rel="noreferrer"
              />
            }
            nativeButton={false}
          >
            {formatPhoneNumber(siteConfig.phoneNumbers.male)}
          </Button>
        </div>
        <div className="flex flex-col gap-y-12 border-t px-5 py-15 md:flex-row md:items-center md:justify-between md:gap-y-0">
          <h2 className="heading-lg md:w-40">{t("messageUsTitle")}</h2>
          <div className="space-x-4">
            <Button
              variant="outline"
              size="lg"
              onClick={() => closeContactSidebar()}
              className="uppercase"
              render={
                <Link
                  href={createEmailUrl(siteConfig.emails.male)}
                  title={t("emailLabel")}
                  aria-label={t("emailLabel")}
                  target="_blank"
                  rel="noreferrer"
                />
              }
              nativeButton={false}
            >
              Email
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => closeContactSidebar()}
              className="uppercase"
              render={
                <Link
                  href={createWhatsappUrl(siteConfig.phoneNumbers.male)}
                  title={t("callUsLabel")}
                  aria-label={t("callUsLabel")}
                  target="_blank"
                  rel="noreferrer"
                />
              }
              nativeButton={false}
            >
              WhatsApp
            </Button>
          </div>
        </div>
        <div className="border-t px-5 pt-15 pb-5">
          <ContactForm />
        </div>
      </div>
    </Sidebar>
  )
}

export { ContactSidebar, useContactSidebarStore, type ContactSidebarStore }
