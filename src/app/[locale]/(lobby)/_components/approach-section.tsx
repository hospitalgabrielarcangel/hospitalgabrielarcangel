import { ImageProps } from "next/image"
import { useTranslations } from "next-intl"

import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { PageSection } from "./page-section-header"

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

export function ApproachSection({
  className,
  image = {
    src: "/images/meditation.webp",
    alt: "Dental",
    width: 1920,
    height: 1080,
  },
  colReverse,
  rowReverse,
}: {
  className?: string
  image?: ImageProps
  colReverse?: boolean
  rowReverse?: boolean
}) {
  const t = useTranslations("ApproachSection")

  return (
    <PageSection
      eyebrow={t("approachEyebrow")}
      heading={t("approachHeading")}
      description={t("approachDescription")}
      image={image}
      link={{
        to: "approach",
      }}
      className={className}
      colReverse={colReverse}
      rowReverse={rowReverse}
      divider
    >
      <Accordion className="rounded-none border-r-0 border-b-0 border-l-0">
        {ourApproachConfig.map((item) => (
          <AccordionItem
            key={t(item.title)}
            value={t(item.title)}
            className="p-0"
          >
            <AccordionTrigger
              className={cn(
                "px-5 py-8",
                rowReverse ? "md:pr-[3dvw]" : "md:pl-[3dvw]"
              )}
            >
              <span className="subtitle-md font-normal">{t(item.title)}</span>
            </AccordionTrigger>
            <AccordionContent
              className={cn(
                "px-5 pb-8",
                rowReverse ? "md:pr-[3dvw]" : "md:pl-[3dvw]"
              )}
            >
              <p className="paragraph text-base">{t(item.description)}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </PageSection>
  )
}
