import Image from "next/image"
import { useTranslations } from "next-intl"

import { cn } from "@/lib/utils"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { PageLink, type PageLinkToProp } from "@/components/page-link"

import ProgrammesFAQs from "../_components/programmes-faqs"
import { ContactBanner } from "../../_components/contact-banner"
import { PageSectionHeader } from "../../_components/page-section-header"

const programmesConfig = [
  {
    title: "assessmentsHeading",
    description: "assessmentsDescription",
    href: "assessments",
    image: {
      src: "/images/assessment.webp",
      alt: "",
      width: 1080,
      height: 1350,
    },
  },
  {
    title: "therapiesHeading",
    description: "therapiesDescription",
    href: "therapies",
    image: {
      src: "/images/meditation2.webp",
      alt: "",
      width: 1920,
      height: 1080,
    },
  },
  {
    title: "techHeading",
    description: "techDescription",
    href: "tech",
    image: {
      src: "/images/emt-chair.webp",
      alt: "",
      width: 1080,
      height: 1350,
    },
  },
  {
    title: "approachHeading",
    description: "approachDescription",
    href: "approach",
    image: {
      src: "/images/vsm_4-5.webp",
      alt: "",
      width: 1080,
      height: 1350,
    },
  },
]

export default function ResidentialRehabPage() {
  const t = useTranslations("ResidentialRehabPage")

  return (
    <>
      <section className="flex w-full flex-col items-stretch border-t md:flex-row-reverse">
        <div className="flex flex-col pb-20 md:w-1/2">
          <PageHeader
            className="container gap-0 md:h-dvh"
            as="article"
            centered
          >
            <div className="flex flex-col items-center justify-center space-y-4 py-20 text-center md:grow md:py-0">
              <div className="eyebrow text-center">{t("pageEyebrow")}</div>
              <PageHeaderHeading className="heading-4xl">
                {t("pageHeading")}
              </PageHeaderHeading>
            </div>
            <PageHeaderDescription className="subtitle-md text-foreground pb-20 md:h-1/5 md:pb-0">
              {t("pageDescription")}
            </PageHeaderDescription>
          </PageHeader>
          <div className="md:hidden">
            <Image
              src="/images/residential-rehab.webp"
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
            src="/images/residential-rehab.webp"
            alt=""
            width={1080}
            height={1350}
            sizes="(min-width: 1536px) 1536px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px, (min-width: 768px) 768px, (min-width: 640px) 640px, 100vw"
            className="sticky top-0 aspect-square h-dvh w-full object-cover object-center"
          />
        </div>
      </section>
      <PageSectionHeader
        heading={t("sectionHeaderHeading")}
        description={t("sectionHeaderDescription")}
        size="xl"
        centered
        className="border-y py-40"
      />
      {programmesConfig.map((programmesItem, programmesKey) => (
        <section key={programmesItem.title}>
          <div
            className={cn(
              "container flex flex-col-reverse items-center gap-y-10 border-t py-20 md:flex-row-reverse md:border-t-0 md:py-32",
              programmesKey % 2 === 0 && "md:flex-row"
            )}
          >
            <div
              className={cn(
                "flex flex-col gap-y-6 md:w-1/2 md:gap-y-8",
                programmesKey % 2 === 0 ? "md:pr-6" : "md:pl-6"
              )}
            >
              <h2 className="heading-2xl">{t(programmesItem.title)}</h2>
              <div className="space-y-4">
                {t(programmesItem.description)
                  .split("\n")
                  .map((paragraphItem, paragraphKey) => (
                    <p className="paragraph" key={`paragraph-${paragraphKey}`}>
                      {paragraphItem}
                    </p>
                  ))}
              </div>
              <PageLink
                to={programmesItem.href as PageLinkToProp}
                variant="link"
              />
            </div>
            <div className="md:w-1/2">
              <Image
                src={programmesItem.image.src}
                alt={programmesItem.image.alt}
                width={programmesItem.image.width}
                height={programmesItem.image.height}
                sizes="(min-width: 1536px) 1536px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px, (min-width: 768px) 768px, (min-width: 640px) 640px, 100vw"
                loading="lazy"
                className={cn(
                  "aspect-square h-128 object-cover object-center md:h-164",
                  programmesKey % 2 === 0 ? "md:pl-6" : "md:pr-6"
                )}
              />
            </div>
          </div>
        </section>
      ))}
      <ProgrammesFAQs className="border-t" />
      <ContactBanner />
    </>
  )
}
