import Image from "next/image"
import { useTranslations } from "next-intl"

import { conditionsWeTreatConfig } from "@/config/treatment"
import { cn, toPascalCase } from "@/lib/utils"
import { PageLink, type PageLinkToProp } from "@/components/page-link"

import { ContactBanner } from "../../_components/contact-banner"
import { PageSectionHeader } from "../../_components/page-section"

export interface ConditionProps {
  condition: (typeof conditionsWeTreatConfig)[0]["conditions"][0]
}

export default function Condition({ condition }: ConditionProps) {
  const t = useTranslations("ConditionTreatmentPage")
  const tCondition = useTranslations(toPascalCase(condition.name))

  return (
    <>
      <section className="bg-muted -mt-20 border-b">
        <div className="container pt-70 pb-12 md:pt-84">
          <div className="max-w-6xl space-y-5">
            <p className="eyebrow text-muted-foreground">{t("pageEyerbrow")}</p>
            <h1 className="heading-4xl">{tCondition(condition.title)}</h1>
          </div>
        </div>
      </section>
      <section className="bg-muted border-b">
        <div className="container flex flex-col items-stretch md:flex-row">
          <div className="space-y-5 border-b pt-12 pb-12 md:relative md:w-1/2 md:border-r md:border-b-0 md:pt-10 md:pr-8 md:pb-20">
            <div className="max-w-2xl space-y-5 md:sticky md:top-0 md:-mt-24 md:pt-24.25">
              <h2 className="heading-2xl">
                {tCondition(condition.info.title)}
              </h2>
              <div className="space-y-4">
                {tCondition(condition.info.description)
                  .split("\n")
                  .map((paragraph, index) => (
                    <p
                      className="paragraph"
                      key={`${condition.info.description}-${index}`}
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
                {tCondition(condition.info.whatIs.title)}
              </h3>
              <div className="paragraph space-y-4">
                {tCondition(condition.info.whatIs.description)
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
                {condition.info.signs.symptoms.map((symptoms) => (
                  <li className="space-y-4" key={symptoms.title}>
                    <h4 className="subtitle-md">
                      {tCondition(symptoms.title)}
                    </h4>
                    <ul className="text-muted-foreground list-disc space-y-3 pl-10 text-sm">
                      {symptoms.items.map((symptomItem) => (
                        <li key={symptomItem}>
                          <p>{tCondition(symptomItem)}</p>
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
      <PageSectionHeader
        eyebrow={t("howWeTreatEyebrow")}
        heading={tCondition(condition.howWeTreat.title)}
        description={tCondition(condition.howWeTreat.description)}
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
      {condition.sections.map((conditionSectionItem, conditionSectionKey) => (
        <section key={conditionSectionKey}>
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
                {tCondition(conditionSectionItem.title)}
              </h2>
              <div className="space-y-4">
                {tCondition(conditionSectionItem.description)
                  .split("\n")
                  .map((paragraphItem, paragraphKey) => (
                    <p className="paragraph" key={`paragraph-${paragraphKey}`}>
                      {paragraphItem}
                    </p>
                  ))}
              </div>
              <PageLink
                to={conditionSectionItem.href as PageLinkToProp}
                variant="link"
              />
            </div>
            <div className="md:w-1/2">
              <Image
                src={conditionSectionItem.image.src}
                alt={conditionSectionItem.image.alt}
                width={conditionSectionItem.image.width}
                height={conditionSectionItem.image.height}
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
      ))}
      <ContactBanner />
    </>
  )
}
