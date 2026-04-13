import { useTranslations } from "next-intl"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { PageSectionHeader } from "../../_components/page-section-header"

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

export default function ProgrammesFAQs({ className }: { className?: string }) {
  const t = useTranslations("ProgrammesPage")

  return (
    <section className={className}>
      <div className="container flex flex-col py-20 md:flex-row">
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
      </div>
    </section>
  )
}
