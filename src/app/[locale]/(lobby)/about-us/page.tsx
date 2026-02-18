import Image from "next/image"
import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"

import {
  PageHeader,
  // PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Shell } from "@/components/shell"

export default function Page() {
  const t = useTranslations("AboutUsPage")
  const pageHeaderHeading = t("pageHeaderHeading").split("\n")
  const whoWeAreDescription = t("whoWeAreDescription").split("\n")

  return (
    <>
      <div className="-mt-20 h-166 overflow-hidden bg-[url('/images/about-us-hero.webp')] bg-cover bg-center px-5 md:h-dvh">
        <div className="md:px-5">
          <PageHeader className="flex max-w-full flex-col gap-y-6 pt-20 pb-8 md:h-dvh">
            {/* <PageHeaderDescription
              className="heading-xl animate-fade-up mx-auto mt-16 text-white md:px-4 lg:mt-0"
              style={{ animationDelay: "0.3s", animationFillMode: "both" }}
            >
              {t("pageHeaderDescription")}
            </PageHeaderDescription> */}
            <div className="basis-[10dvh] md:basis-[16dvh]" />
            <PageHeaderHeading className="animate-fade-up heading-4xl flex w-full flex-col justify-between gap-6 text-white">
              <span
                className="animate-fade-up"
                style={{ animationDelay: "0.2s", animationFillMode: "both" }}
              >
                {pageHeaderHeading[0]}
                <br />
                {pageHeaderHeading[1]}
              </span>
              <span className="basis-[20dvh] md:basis-[10dvh]" />
              <span
                className="animate-fade-up text-right"
                style={{ animationDelay: "0.3s", animationFillMode: "both" }}
              >
                {pageHeaderHeading[2]}
                <br />
                {pageHeaderHeading[3]}
              </span>
            </PageHeaderHeading>
          </PageHeader>
        </div>
      </div>
      <Shell variant="vertical" className="w-full flex-col-reverse">
        <div className="pt-16 pb-20 pl-5 md:w-1/2 md:pt-8 md:pl-[2.3dvw] lg:border-r">
          <p className="eyebrow text-muted-foreground py-3">
            {t("whoWeAreEyebrow")}
          </p>
          <h2 className="heading-2xl text-balance">{t("whoWeAreHeading")}</h2>
          <div className="hidden h-74 lg:block" />
          <div className="subtitle-md max-w-lg text-balance">
            <p className="mt-6 lg:mt-0">{whoWeAreDescription[0]}</p>
            <p className="mt-4">{whoWeAreDescription[1]}</p>
          </div>
        </div>
        <div className="bg-[url('/images/howwetreat-section.webp')] bg-cover bg-center pt-6 md:w-1/2 md:py-6" />
      </Shell>
      <Shell
        variant="vertical"
        className="w-full flex-col-reverse md:flex-row-reverse"
      >
        <div className="pt-16 pr-5 pb-20 md:w-1/2 md:pt-8 md:pr-[2.3dvw] md:pl-[2.2dvw] lg:border-r">
          <p className="eyebrow text-muted-foreground py-3">
            {t("whoWeAreEyebrow")}
          </p>
          <h2 className="heading-2xl text-balance">{t("whoWeAreHeading")}</h2>
          <div className="hidden h-74 lg:block" />
          <div className="subtitle-md max-w-lg text-balance">
            <p className="mt-6 lg:mt-0">{whoWeAreDescription[0]}</p>
            <p className="mt-4">{whoWeAreDescription[1]}</p>
          </div>
        </div>
        <div className="bg-[url('/images/howwetreat-section.webp')] bg-cover bg-center pt-6 md:w-1/2 md:py-6" />
      </Shell>
    </>
  )
}
