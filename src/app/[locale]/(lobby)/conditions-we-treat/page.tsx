import Image from "next/image"
import { useTranslations } from "next-intl"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { PageLink, PageLinkToProp } from "@/components/page-link"

import { PageSection, PageSectionBanner } from "../_components/page-section"

const conditionsWeTreatConfig = [
  {
    title: "mentalHealthArticleHeading",
    description: "mentalHealthArticleDescription",
    href: "mentalHealth",
  },
  {
    title: "dependenciesAndAddictionsArticleHeading",
    description: "dependenciesAndAddictionsArticleDescription",
    href: "dependenciesAndAddictions",
  },
  {
    title: "eatingDisorderArticleHeading",
    description: "eatingDisorderArticleDescription",
    href: "eatingDisorder",
  },
]

const ourApproachConfig = [
  {
    title: "treatmentApproachItem1Title",
    description: "treatmentApproachItem1Description",
  },
  {
    title: "treatmentApproachItem2Title",
    description: "treatmentApproachItem2Description",
  },
  {
    title: "treatmentApproachItem3Title",
    description: "treatmentApproachItem3Description",
  },
]

export default function ConditionsWeTreatPage() {
  const t = useTranslations("ConditionsWeTreatPage")

  return (
    <>
      <section className="bg-muted -mt-20 border-b">
        <div className="container pt-70 pb-12 md:pt-84">
          <div className="max-w-6xl space-y-5">
            <p className="eyebrow text-muted-foreground">{t("eyebrowPage")}</p>
            <h1 className="heading-4xl">{t("headingPage")}</h1>
          </div>
        </div>
        <Image
          src="/images/howwetreat-section.webp"
          alt="EMT"
          width={2160}
          height={2880}
          sizes="(min-width: 1536px) 1536px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px, (min-width: 768px) 768px, (min-width: 640px) 640px, 100vw"
          loading="lazy"
          className="h-128 w-full object-cover object-center lg:h-dvh"
        />
        <div className="container flex flex-col gap-y-5 py-20 lg:flex-row">
          <div className="text-muted-foreground lg:w-1/3">
            <p className="eyebrow">{t("phrasePage")}</p>
          </div>
          <div className="lg:w-2/3">
            <p className="subtitle-md flex flex-col gap-y-5">
              {t("descriptionPage")
                .split("\n")
                .map((paragraph, index) => (
                  <span key={index}>{paragraph}</span>
                ))}
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col-reverse items-stretch md:flex-row-reverse">
        <div className="flex flex-col px-5 md:w-1/2 md:px-[3dvw]">
          {conditionsWeTreatConfig.map((item, index) => (
            <article
              key={index}
              className="flex flex-col items-start gap-y-10 border-b py-10 last:border-b-0 md:py-20"
            >
              <h2 className="heading-xl">{t(item.title)}</h2>
              <p className="paragraph">{t(item.description)}</p>
              <PageLink to={item.href as PageLinkToProp} variant="link">
                {t("learnMoreLink")}
              </PageLink>
            </article>
          ))}
        </div>
        <div className="py-6 md:relative md:w-1/2">
          <div className="px-5 md:sticky md:top-0 md:pl-[3dvw]">
            <Image
              src="/images/howwetreat-section.webp"
              alt="EMT"
              width={2160}
              height={2880}
              sizes="(min-width: 1536px) 1536px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px, (min-width: 768px) 768px, (min-width: 640px) 640px, 100vw"
              loading="lazy"
              className="aspect-3/4 h-128 w-full object-cover object-center md:h-dvh"
            />
          </div>
        </div>
      </section>
      <PageSection
        eyebrow={t("treatmentApproachEyebrow")}
        heading={t("treatmentApproachHeading")}
        description={t("treatmentApproachDescription")}
        link={{
          label: t("learnMoreLink"),
          to: "home",
        }}
        image={{
          src: "/images/howwetreat-section.webp",
          alt: "EMT",
          width: 2160,
          height: 2880,
        }}
        headingHeight
        divider
        className="bg-muted border-y"
      >
        <Accordion className="rounded-none border-r-0 border-b-0 border-l-0">
          {ourApproachConfig.map((item) => (
            <AccordionItem
              key={t(item.title)}
              value={t(item.title)}
              className="p-0"
            >
              <AccordionTrigger className="px-5 py-8 md:px-[3dvw]">
                <span className="subtitle-md font-normal">{t(item.title)}</span>
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-8 md:px-[3dvw]">
                <p className="paragraph text-base">{t(item.description)}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </PageSection>
      <PageSectionBanner
        className="bg-muted pt-20 md:h-100"
        heading={t("bannerHeading")}
      />
    </>
  )
}
