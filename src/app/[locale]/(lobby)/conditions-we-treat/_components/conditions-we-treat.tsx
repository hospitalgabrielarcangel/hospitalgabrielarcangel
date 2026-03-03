import Image from "next/image"
import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"

import { conditionsWeTreatConfig, howWeTreatConfig } from "@/config/treatment"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Icons } from "@/components/icons"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"

import { ContactBanner } from "../../_components/contact-banner"
import { PageSection, PageSectionHeader } from "../../_components/page-section"

interface ConditionsWeTreatProps {
  condition: (typeof conditionsWeTreatConfig)[0]["page"]
}

export default function ConditionsWeTreat({
  condition,
}: ConditionsWeTreatProps) {
  const t = useTranslations("ConditionPage")
  const tCondition = useTranslations(condition.name)

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
              {tCondition(condition.title)}
            </PageHeaderHeading>
            <PageHeaderDescription className="subtitle-md text-foreground pb-20 md:h-1/5 md:pb-0">
              {t("pagePhrase")}
            </PageHeaderDescription>
          </PageHeader>
          <div className="md:hidden">
            <Image
              src={condition.image.src}
              alt={condition.image.alt}
              width={condition.image.width}
              height={condition.image.height}
              sizes="(min-width: 1536px) 1536px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px, (min-width: 768px) 768px, (min-width: 640px) 640px, 100vw"
              className="aspect-square w-full object-cover object-center"
            />
          </div>
          <article>
            <p className="subtitle-md px-5 py-10 md:px-[3dvw]">
              {tCondition(condition.description)}
            </p>
            <ul>
              {condition.items.map((conditionItem, index) => (
                <li key={index} className="border-t last:border-b">
                  <Link
                    href={conditionItem.href}
                    className="subtitle-md flex items-center justify-between px-5 py-8 md:px-[3dvw]"
                  >
                    {tCondition(conditionItem.title)}
                    <Icons.arrowRight />
                  </Link>
                </li>
              ))}
            </ul>
          </article>
          <PageSectionHeader
            heading={t("contactHeading")}
            description={t("contactDescription")}
            link={{ to: "contact" }}
            size="sm"
            centered
          />
        </div>
        <div className="relative hidden md:block md:w-1/2">
          <Image
            src={condition.image.src}
            alt={condition.image.alt}
            width={condition.image.width}
            height={condition.image.height}
            sizes="(min-width: 1536px) 1536px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px, (min-width: 768px) 768px, (min-width: 640px) 640px, 100vw"
            className="sticky top-0 aspect-square h-dvh w-full object-cover object-center"
          />
        </div>
      </section>
      <PageSection
        eyebrow={tCondition(condition.approach.name)}
        heading={tCondition(condition.approach.title)}
        description={tCondition(condition.approach.description)}
        image={{
          src: condition.approach.image.src,
          alt: condition.approach.image.alt,
          width: condition.approach.image.width,
          height: condition.approach.image.height,
        }}
        className="bg-muted border-b lg:border-t"
        headingHeight
        imageBetween
        rowReverse
        divider
      >
        <Accordion className="rounded-none border-none">
          {howWeTreatConfig.map((item) => (
            <AccordionItem
              key={t(item.title)}
              value={t(item.title)}
              className="p-0"
            >
              <AccordionTrigger className="py-8 md:px-5 md:pr-[3dvw]">
                <span className="subtitle-md font-normal">{t(item.title)}</span>
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-8 md:pr-[3dvw]">
                <p className="paragraph text-base">{t(item.description)}</p>
                <div className="mt-5 w-fit">
                  <Link
                    href={item.slug}
                    className="text-sm font-medium tracking-wide uppercase"
                  >
                    {t(item.link)}
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </PageSection>
      <PageSection
        eyebrow={t("ourTeamEyebrow")}
        heading={t("ourTeamHeading")}
        description={t("ourTeamDescription")}
        link={{
          to: "ourTeam",
        }}
        image={{
          src: "/images/howwetreat-section.webp",
          alt: "EMT",
          width: 2160,
          height: 2880,
        }}
        divider
        className="border-b"
      />
      <ContactBanner />
    </>
  )
}
