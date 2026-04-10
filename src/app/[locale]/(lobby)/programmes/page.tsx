import { type Metadata } from "next"
import Image from "next/image"
import { env } from "@/env.mjs"
import type { LocaleParams } from "@/types"
import { useTranslations } from "next-intl"
import { getTranslations } from "next-intl/server"

import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { PageLink, type PageLinkToProp } from "@/components/page-link"

import { ApproachSection } from "../_components/approach-section"
import { ContactBanner } from "../_components/contact-banner"
import { PageSectionHeader } from "../_components/page-section"

export async function generateMetadata({
  params,
}: LocaleParams): Promise<Metadata> {
  const { locale } = await params

  const t = await getTranslations({
    locale: locale,
    namespace: "ProgrammesPage",
  })

  return {
    metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  }
}

const programmesConfig = [
  {
    title: "residentialProgrammeHeading",
    description: "residentialProgrammeDescription",
    href: "residentialProgramme",
    image: {
      src: "/images/meditation.webp",
      alt: "residentialProgrammeImageAlt",
      width: 2160,
      height: 2880,
    },
  },
  {
    title: "aftercareHeading",
    description: "aftercareDescription",
    href: "aftercareProgramme",
    image: {
      src: "/images/nurse.webp",
      alt: "aftercareImageAlt",
      width: 2160,
      height: 2880,
    },
  },
]

const faqsConfig = [
  {
    title: "faqsItem1Title",
    description: "faqsItem1Description",
  },
  {
    title: "faqsItem2Title",
    description: "faqsItem2Description",
  },
  {
    title: "faqsItem3Title",
    description: "faqsItem3Description",
  },
  {
    title: "faqsItem4Title",
    description: "faqsItem4Description",
  },
  {
    title: "faqsItem5Title",
    description: "faqsItem5Description",
  },
  {
    title: "faqsItem6Title",
    description: "faqsItem6Description",
  },
  {
    title: "faqsItem7Title",
    description: "faqsItem7Description",
  },
]

export default function ProgrammesPage() {
  const t = useTranslations("ProgrammesPage")

  return (
    <>
      <section className="bg-muted -mt-20 border-b">
        <div className="container pt-70 pb-12 md:pt-84">
          <div className="max-w-6xl space-y-5">
            <p className="eyebrow text-muted-foreground">
              {t("headerEyebrowPage")}
            </p>
            <h1 className="heading-4xl">{t("headerHeadingPage")}</h1>
          </div>
        </div>
        <Image
          src="/images/vsm.webp"
          alt={t("headerImageAlt")}
          width={1920}
          height={1080}
          sizes="(min-width: 1536px) 1536px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px, (min-width: 768px) 768px, (min-width: 640px) 640px, 100vw"
          loading="lazy"
          className="h-128 w-full object-cover object-center lg:h-dvh"
        />
        <div className="container flex flex-col gap-y-5 py-20 lg:flex-row">
          <div className="text-muted-foreground lg:w-1/3">
            <p className="eyebrow">{t("methodEyebrow")}</p>
          </div>
          <div className="lg:w-2/3">
            <p className="subtitle-md flex flex-col gap-y-5">
              {t("methodDescription")
                .split("\n")
                .map((paragraph, index) => (
                  <span key={index}>{paragraph}</span>
                ))}
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container pt-20">
          <h2 className="heading-3xl font-medium">{t("programmesHeading")}</h2>
        </div>
        {programmesConfig.map((programmeItem, programmeKey) => (
          <article key={programmeItem.title}>
            <div
              className={cn(
                "container flex flex-col-reverse items-center gap-y-10 border-t py-20 md:flex-row-reverse md:border-t-0 md:py-32",
                programmeKey % 2 === 0 && "md:flex-row"
              )}
            >
              <div
                className={cn(
                  "flex flex-col gap-y-6 md:w-1/2 md:gap-y-8",
                  programmeKey % 2 === 0 ? "md:pr-6" : "md:pl-6"
                )}
              >
                <h2 className="heading-2xl">{t(programmeItem.title)}</h2>
                <div className="space-y-4">
                  {t(programmeItem.description)
                    .split("\n")
                    .map((paragraphItem, paragraphKey) => (
                      <p
                        className="paragraph"
                        key={`${programmeItem.description}-${paragraphKey}`}
                      >
                        {paragraphItem}
                      </p>
                    ))}
                </div>
                <PageLink
                  to={programmeItem.href as PageLinkToProp}
                  variant="link"
                />
              </div>
              <div className="md:w-1/2">
                <Image
                  src={programmeItem.image.src}
                  alt={programmeItem.image.alt}
                  width={programmeItem.image.width}
                  height={programmeItem.image.height}
                  sizes="(min-width: 1536px) 1536px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px, (min-width: 768px) 768px, (min-width: 640px) 640px, 100vw"
                  loading="lazy"
                  className={cn(
                    "aspect-square h-128 object-cover object-center md:h-164",
                    programmeKey % 2 === 0 ? "md:pl-6" : "md:pr-6"
                  )}
                />
              </div>
            </div>
          </article>
        ))}
      </section>
      <ApproachSection className="border-y" />
      <section className="container flex flex-col py-20 md:flex-row">
        <div className="flex flex-col pb-8 md:w-2/5 md:pb-0">
          <div className="relative max-w-lg grow">
            <div className="sticky top-0 -mt-24 h-fit pt-24.25">
              <p className="eyebrow text-muted-foreground py-3">FAQS</p>
              <h2 className="heading-3xl">{t("faqsHeading")}</h2>
            </div>
          </div>
        </div>
        <div className="md:w-3/5 md:pr-[3dvw]">
          <Accordion className="rounded-none border-none">
            {faqsConfig.map((item) => (
              <AccordionItem key={t(item.title)} value={t(item.title)}>
                <AccordionTrigger className="px-5 py-8">
                  <h3 className="subtitle-md font-normal">{t(item.title)}</h3>
                </AccordionTrigger>
                <AccordionContent className="sapce-y-4 px-5 pb-8">
                  {t(item.description)
                    .split("\n")
                    .map((paragraph, index) => (
                      <p className="paragraph max-w-2xl text-base" key={index}>
                        {paragraph}
                      </p>
                    ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <PageSectionHeader
            heading={t("faqFooterHeading")}
            description={t("faqFooterDescription")}
            link={{
              to: "contact",
            }}
            size="sm"
            className="pb-0"
          />
        </div>
      </section>
      <ContactBanner />
    </>
  )
}
