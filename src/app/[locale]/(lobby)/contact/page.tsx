import { type Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { env } from "@/env.mjs"
import type { LocaleParams } from "@/types"
import { useTranslations } from "next-intl"
import { getTranslations } from "next-intl/server"

import { siteConfig } from "@/config/site"
import {
  createCallUrl,
  createEmailUrl,
  createWhatsappUrl,
  formatPhoneNumber,
} from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/forms/contact-form"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"

export async function generateMetadata({
  params,
}: LocaleParams): Promise<Metadata> {
  const { locale } = await params

  const t = await getTranslations({
    locale: locale,
    namespace: "ContactPage",
  })

  return {
    metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
    title: t("pageHeading"),
    description: t("pageDescription"),
  }
}

export default function ContactPage() {
  const t = useTranslations("ContactPage")

  return (
    <>
      <section className="flex w-full flex-col items-stretch border-t md:flex-row">
        <div className="flex flex-col md:w-1/2">
          <PageHeader
            className="container gap-0 md:h-dvh"
            as="article"
            centered
          >
            <PageHeaderHeading className="heading-4xl flex items-center py-20 text-center md:grow md:py-0">
              {t("pageHeading")}
            </PageHeaderHeading>
            <PageHeaderDescription className="subtitle-md text-foreground pb-20 md:h-1/5 md:pb-0">
              {t("pageDescription")}
            </PageHeaderDescription>
          </PageHeader>
          <div className="md:hidden">
            <Image
              src="/images/contact.webp"
              alt=""
              width={1080}
              height={1350}
              sizes="(min-width: 1536px) 1536px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px, (min-width: 768px) 768px, (min-width: 640px) 640px, 100vw"
              className="aspect-square w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="relative hidden md:block md:w-1/2">
          <Image
            src="/images/contact.webp"
            alt=""
            width={1080}
            height={1350}
            sizes="(min-width: 1536px) 1536px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px, (min-width: 768px) 768px, (min-width: 640px) 640px, 100vw"
            className="sticky top-0 aspect-square h-dvh w-full object-cover object-center"
          />
        </div>
      </section>
      <section className="flex w-full flex-col items-stretch border-t md:flex-row">
        <div className="flex flex-col px-5 pt-20 md:w-2/5 md:pl-[3vw]">
          <div className="space-y-4">
            <h2 className="heading-2xl">{t("sectionHeading")}</h2>
            <p className="paragraph">{t("sectionDescription")}</p>
          </div>
        </div>
        <div className="border-l px-5 py-20 md:w-3/5 md:pr-[3vw]">
          <div className="border-b pb-20">
            <p className="heading-lg">{t("maleContactTitle")}</p>
            <div className="mt-8 flex flex-col gap-y-5">
              <div className="space-x-4">
                <Button
                  variant="outline"
                  size="lg"
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
              <div>
                <Button
                  variant="link"
                  className="subtitle-md flex w-fit flex-col items-start gap-y-0.5 rounded-none px-0 underline underline-offset-4"
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
            </div>
          </div>
          <div className="border-b py-20">
            <p className="heading-lg">{t("maleContactTitle")}</p>
            <div className="mt-12 flex flex-col gap-y-5">
              <div className="space-x-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase"
                  render={
                    <Link
                      href={createEmailUrl(siteConfig.emails.female)}
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
                  className="uppercase"
                  render={
                    <Link
                      href={createWhatsappUrl(siteConfig.phoneNumbers.female)}
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
              <div>
                <Button
                  variant="link"
                  className="subtitle-md flex w-fit flex-col items-start gap-y-0.5 rounded-none px-0 underline underline-offset-4"
                  render={
                    <Link
                      href={createCallUrl(siteConfig.phoneNumbers.female)}
                      title={t("callUsLabel")}
                      aria-label={t("callUsLabel")}
                      target="_blank"
                      rel="noreferrer"
                    />
                  }
                  nativeButton={false}
                >
                  {formatPhoneNumber(siteConfig.phoneNumbers.female)}
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
