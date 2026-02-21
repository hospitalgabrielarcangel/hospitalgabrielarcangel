import Image from "next/image"
import { useTranslations } from "next-intl"

import { PageHeader, PageHeaderHeading } from "@/components/page-header"
import { Shell } from "@/components/shell"

export default function Page() {
  const t = useTranslations("AboutUsPage")
  const pageHeaderHeading = t("pageHeaderHeading").split("\n")

  return (
    <>
      <div className="-mt-20 h-166 overflow-hidden bg-[url('/images/about-us-hero.webp')] bg-cover bg-center px-5 md:h-dvh">
        <div className="md:px-5">
          <PageHeader className="flex max-w-full flex-col gap-y-6 pt-20 pb-8 md:h-dvh">
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
      <Shell variant="vertical" className="w-full">
        <div className="flex flex-col md:w-1/2 md:px-[2.3dvw] md:pt-8 lg:border-r">
          <div className="relative max-w-2xl grow">
            <div className="sticky top-0 -mt-20 h-fit pt-20.25">
              <p className="eyebrow text-muted-foreground py-3">
                {t("whoWeAreEyebrow")}
              </p>
              <h2 className="heading-2xl text-balance">
                {t("whoWeAreHeading")}
              </h2>
            </div>
          </div>
          <div className="subtitle-md max-w-xl space-y-5 pt-10 pb-14 text-balance md:pb-20">
            {t("whoWeAreDescription")
              .split("\n")
              .map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
          </div>
        </div>
        <div className="bg-blue-500/50 md:w-1/2">
          <Image
            src="/images/howwetreat-section.webp"
            alt="EMT"
            width={2160}
            height={2880}
            sizes="(min-width: 1536px) 1536px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px, (min-width: 768px) 768px, (min-width: 640px) 640px, 100vw"
            className="aspect-square h-full w-full object-cover object-center"
          />
        </div>
      </Shell>
      <Shell variant="vertical" className="w-full flex-col md:flex-row-reverse">
        <div className="flex flex-col pt-24 md:w-1/2 md:px-[2.3dvw] md:pt-8 lg:border-r">
          <div className="relative max-w-2xl grow">
            <div className="sticky top-0 -mt-20 h-fit pt-20.25">
              <p className="eyebrow text-muted-foreground pb-3">
                {t("whoWeTreatEyebrow")}
              </p>
              <h2 className="heading-2xl text-balance">
                {t("whoWeTreatHeading")}
              </h2>
            </div>
          </div>
          <div className="subtitle-md max-w-xl space-y-5 pt-10 pb-14 text-balance md:pb-20">
            {t("whoWeTreatDescription")
              .split("\n")
              .map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
          </div>
        </div>
        <div className="pb-5 md:w-1/2 md:pb-0">
          <Image
            src="/images/about-us-hero.webp"
            alt="EMT"
            width={2160}
            height={2880}
            sizes="(min-width: 1536px) 1536px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px, (min-width: 768px) 768px, (min-width: 640px) 640px, 100vw"
            className="aspect-square h-full w-full object-cover object-center"
          />
        </div>
      </Shell>
      <section className="bg-muted px-5">
        <div className="mx-auto max-w-4xl space-y-6 pt-20 pb-24 text-center">
          <div className="space-y-4">
            <p className="eyebrow text-muted-foreground">
              {t("ourApproachEyebrow")}
            </p>
            <h2 className="heading-3xl">{t("ourApproachTitle")}</h2>
          </div>
          <div className="subtitle-md space-y-4">
            {t("ourApproachDescription")
              .split("\n")
              .map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
