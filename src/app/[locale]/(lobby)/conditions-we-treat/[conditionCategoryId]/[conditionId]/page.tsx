import { type Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { env } from "@/env.mjs"
import { Link } from "@/i18n/routing"
import { getTranslations } from "next-intl/server"

import { conditionsWeTreatConfig } from "@/config/treatment"
import { cn, toPascalCase } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { PageLink, type PageLinkToProp } from "@/components/page-link"

import { ContactBanner } from "../../../_components/contact-banner"
import {
  PageSection,
  PageSectionHeader,
} from "../../../_components/page-section"

export interface ConditionPageProps {
  readonly params: Promise<{
    conditionId: string
    locale: string
  }>
}

export async function generateMetadata({
  params,
}: ConditionPageProps): Promise<Metadata> {
  const { conditionId, locale } = await params

  const [conditionTreatment] = conditionsWeTreatConfig
    .map((conditionCategory) => {
      const conditionTreatmentItem = conditionCategory.conditions.find(
        (item) => item.name === conditionId
      )
      if (!!conditionTreatmentItem) {
        return conditionTreatmentItem
      }
    })
    .filter(Boolean)

  if (!conditionTreatment) {
    notFound()
  }

  const t = await getTranslations({
    locale: locale,
    namespace: toPascalCase(conditionTreatment.name),
  })

  return {
    metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
    title: t("pageHeading"),
    description: t("conditionDescription"),
  }
}

const conditionPageLinkTo = [
  "approach",
  "ourTeam",
  "programmes",
] satisfies PageLinkToProp[]

export default async function ConditionPage({ params }: ConditionPageProps) {
  const { conditionId, locale } = await params

  const [conditionTreatment] = conditionsWeTreatConfig
    .map((conditionCategory) => {
      const conditionTreatmentItem = conditionCategory.conditions.find(
        (item) => item.name === conditionId
      )
      if (!!conditionTreatmentItem) {
        return conditionTreatmentItem
      }
    })
    .filter(Boolean)

  if (!conditionTreatment) {
    notFound()
  }

  const t = await getTranslations({
    locale: locale,
    namespace: "ConditionTreatmentPage",
  })

  const tCondition = await getTranslations({
    locale: locale,
    namespace: toPascalCase(conditionTreatment.name),
  })

  return (
    <>
      <section className="bg-muted -mt-20 border-b">
        <div className="container pt-70 pb-12 md:pt-84">
          <div className="max-w-6xl space-y-5">
            <p className="eyebrow text-muted-foreground">{t("pageEyebrow")}</p>
            <h1 className="heading-4xl">{tCondition("pageHeading")}</h1>
          </div>
        </div>
      </section>
      <section className="bg-muted border-b">
        <div className="container flex flex-col items-stretch md:flex-row">
          <div className="space-y-5 border-b pt-12 pb-12 md:relative md:w-1/2 md:border-r md:border-b-0 md:pt-10 md:pr-8 md:pb-20">
            <div className="max-w-2xl space-y-5 md:sticky md:top-0 md:-mt-24 md:pt-24.25">
              <h2 className="heading-2xl">{tCondition("conditionHeading")}</h2>
              <div className="space-y-4">
                {tCondition("conditionDescription")
                  .split("\n")
                  .map((paragraph, index) => (
                    <p
                      className="paragraph"
                      key={`condition-description-${index}`}
                    >
                      {paragraph}
                    </p>
                  ))}
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:pb-8">
            <article className="space-y-6 border-b py-12 md:pt-10 md:pb-20 md:pl-8">
              <h3 className="subtitle-lg font-medium">
                {tCondition("whatIsHeading")}
              </h3>
              <div className="paragraph space-y-4">
                {tCondition("whatIsDescription")
                  .split("\n")
                  .map((whatIsParagraph, whatIsKey) => (
                    <p key={whatIsKey}>{whatIsParagraph}</p>
                  ))}
              </div>
            </article>
            <article className="space-y-6 py-12 md:pl-8">
              <h3 className="subtitle-lg font-medium">
                {tCondition("signsTitle")}
              </h3>
              <p className="paragraph">{tCondition("signsDescription")}</p>
              <ul className="space-y-6">
                {conditionTreatment.symptoms.map((symptoms, symptomsKey) => (
                  <li className="space-y-4" key={`symtoms-${symptomsKey}`}>
                    <h4 className="subtitle-md">
                      {tCondition(`symptoms${symptomsKey + 1}Title`)}
                    </h4>
                    <ul className="text-muted-foreground paragraph list-disc space-y-3 pl-10 text-sm">
                      {[...Array(symptoms).keys()].map((symptomItemKey) => (
                        <li
                          key={`symptom-${symptomsKey + 1}-item-${symptomItemKey}`}
                        >
                          <p>
                            {tCondition(
                              `symptom${symptomsKey + 1}Item${symptomItemKey + 1}`
                            )}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
              <p className="paragraph">{t("conditionMessage")}</p>
            </article>
          </div>
        </div>
      </section>
      {conditionTreatment.dependencies && (
        <PageSection
          eyebrow={t("dependenciesEyebrow")}
          heading={tCondition("dependenciesHeading")}
          description={tCondition("dependenciesDescription")}
          image={{
            src: conditionTreatment.dependencies.image.src,
            alt: conditionTreatment.dependencies.image.alt,
            width: conditionTreatment.dependencies.image.width,
            height: conditionTreatment.dependencies.image.height,
          }}
          className="bg-muted border-b lg:border-t"
          headingHeight
          imageBetween
          rowReverse
          divider
        >
          <Accordion className="rounded-none border-none">
            {conditionTreatment.dependencies.items.map(
              (addictionTypeItem, addictionTypeKey) => (
                <AccordionItem
                  key={`addiction-type-${addictionTypeKey}`}
                  value={`addiction-type-${addictionTypeKey}`}
                  className="p-0"
                >
                  <AccordionTrigger className="py-8 md:px-5 md:pr-[3dvw]">
                    <span className="subtitle-md font-normal">
                      {tCondition(
                        `dependenciesItem${addictionTypeKey + 1}Title`
                      )}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-8 md:pr-[3dvw]">
                    <p className="paragraph text-base">
                      {tCondition(
                        `dependenciesItem${addictionTypeKey + 1}Description`
                      )}
                    </p>
                    <div className="mt-5 w-fit">
                      <Link
                        href={addictionTypeItem}
                        className="text-sm font-medium tracking-wide uppercase"
                      >
                        {t("dependenciesLink")}
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )
            )}
          </Accordion>
        </PageSection>
      )}
      <PageSectionHeader
        eyebrow={t("howWeTreatEyebrow")}
        heading={tCondition("howWeTreatHeading")}
        description={tCondition("howWeTreatDescription")}
        centered
        size="lg"
        className="border-b"
      />
      <div className="py-20 md:container md:px-[3.5dvw] md:py-20">
        <video
          className="size-full object-cover"
          width={1920}
          height={1080}
          controls={false}
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          controlsList="nodownload noplaybackrate"
        >
          <source src="/video/video-home.mp4" type="video/mp4" />
        </video>
      </div>
      {conditionTreatment.sectionsImages.map(
        (conditionSectionItem, conditionSectionKey) => (
          <section key={`condition-section-item-${conditionSectionKey}`}>
            <div
              className={cn(
                "container flex flex-col-reverse items-center gap-y-10 border-t py-20 md:flex-row-reverse md:border-t-0 md:py-32",
                conditionSectionKey % 2 === 0 && "md:flex-row"
              )}
            >
              <div
                className={cn(
                  "flex flex-col gap-y-6 md:w-1/2 md:gap-y-8",
                  conditionSectionKey % 2 === 0 ? "md:pr-6" : "md:pl-6"
                )}
              >
                <h2 className="heading-2xl">
                  {t(`section${conditionSectionKey + 1}Heading`)}
                </h2>
                <div className="space-y-4">
                  {tCondition(`section${conditionSectionKey + 1}Description`)
                    .split("\n")
                    .map((paragraphItem, paragraphKey) => (
                      <p
                        className="paragraph"
                        key={`paragraph-${paragraphKey}`}
                      >
                        {paragraphItem}
                      </p>
                    ))}
                </div>
                <PageLink
                  to={
                    conditionPageLinkTo[conditionSectionKey] as PageLinkToProp
                  }
                  variant="link"
                />
              </div>
              <div className="md:w-1/2">
                <Image
                  src={conditionSectionItem.src}
                  alt={conditionSectionItem.alt}
                  width={conditionSectionItem.width}
                  height={conditionSectionItem.height}
                  sizes="(min-width: 1536px) 1536px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px, (min-width: 768px) 768px, (min-width: 640px) 640px, 100vw"
                  loading="lazy"
                  className={cn(
                    "aspect-square h-128 object-cover object-center",
                    conditionSectionKey % 2 === 0 ? "md:pl-6" : "md:pr-6"
                  )}
                />
              </div>
            </div>
          </section>
        )
      )}
      <ContactBanner />
    </>
  )
}
