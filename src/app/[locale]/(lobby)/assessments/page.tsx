import { type Metadata } from "next"
import Image from "next/image"
import { env } from "@/env.mjs"
import type { LocaleParams } from "@/types"
import { useTranslations } from "next-intl"
import { getTranslations } from "next-intl/server"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"

import { ContactBanner } from "../_components/contact-banner"
import { PageSectionHeader } from "../_components/page-section-header"

export async function generateMetadata({
  params,
}: LocaleParams): Promise<Metadata> {
  const { locale } = await params

  const t = await getTranslations({
    locale: locale,
    namespace: "AssessmentsPage",
  })

  return {
    metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
    title: t("pageHeading"),
    description: t("pageDescription"),
  }
}

const assessmentsConfig = [
  {
    title: "specialisedLaboratoryTestsTitle",
    description: "specialisedLaboratoryTestsDescription",
  },
  {
    title: "geneticTestingTitle",
    description: "geneticTestingDescription",
  },
  {
    title: "stateOfTheArtImagingDiagnosticsTitle",
    description: "stateOfTheArtImagingDiagnosticsDescription",
  },
  {
    title: "functionalHealthAssessmentsTitle",
    description: "functionalHealthAssessmentsDescription",
  },
  {
    title: "sleepAssessmentTitle",
    description: "sleepAssessmentDescription",
  },
  {
    title: "psychiatricScreeningTitle",
    description: "psychiatricScreeningDescription",
  },
  {
    title: "lifestyleAndNutritionalAssessmentTitle",
    description: "lifestyleAndNutritionalAssessmentDescription",
  },
  {
    title: "psychologicalAssessmentTitle",
    description: "psychologicalAssessmentDescription",
  },
  {
    title: "additionalAssessmentsTitle",
    description: "additionalAssessmentsDescription",
  },
]

export default function AssessmentsPage() {
  const t = useTranslations("AssessmentsPage")

  return (
    <>
      <section className="flex w-full flex-col items-stretch border-t border-b md:flex-row-reverse">
        <div className="flex flex-col md:w-1/2">
          <PageHeader className="container gap-0 md:h-dvh" as="div" centered>
            <PageHeaderHeading className="heading-4xl flex items-center py-20 text-center md:grow md:py-0">
              {t("pageHeading")}
            </PageHeaderHeading>
            <PageHeaderDescription className="subtitle-md text-foreground pb-20 md:h-1/5 md:pb-0">
              {t("pagePhrase")}
            </PageHeaderDescription>
          </PageHeader>
          <div className="md:hidden">
            <Image
              src="/images/assessment.webp"
              alt={t("headerImageAlt")}
              width={2160}
              height={2880}
              sizes="(min-width: 1536px) 1536px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px, (min-width: 768px) 768px, (min-width: 640px) 640px, 100vw"
              className="aspect-square w-full object-cover object-center"
            />
          </div>
          <article>
            <p className="subtitle-md px-5 py-10 md:px-[3dvw]">
              {t("pageDescription")}
            </p>
            <Accordion className="rounded-none border-none">
              {assessmentsConfig.map((item) => (
                <AccordionItem
                  key={t(item.title)}
                  value={t(item.title)}
                  className="p-0"
                >
                  <AccordionTrigger className="px-5 py-8 md:px-[3dvw]">
                    <span className="subtitle-md font-normal">
                      {t(item.title)}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="paragraph space-y-4 px-5 pb-8 text-base md:px-[3dvw]">
                    {t(item.description)
                      .split("\n")
                      .map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </article>
        </div>
        <div className="relative hidden md:block md:w-1/2">
          <Image
            src="/images/assessment.webp"
            alt={t("headerImageAlt")}
            width={2160}
            height={2880}
            sizes="(min-width: 1536px) 1536px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px, (min-width: 768px) 768px, (min-width: 640px) 640px, 100vw"
            className="sticky top-0 aspect-square h-dvh w-full object-cover object-center"
          />
        </div>
      </section>
      <PageSectionHeader
        heading={t("ourApproachHeading")}
        description={t("ourApproachDescription")}
        eyebrow={t("ourApproachEyebrow")}
        className="bg-muted pb-24"
        size="lg"
        link={{
          to: "approach",
        }}
        centered
      />
      <ContactBanner muted />
    </>
  )
}
