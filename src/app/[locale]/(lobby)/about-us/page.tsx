import { useTranslations } from "next-intl"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { PageHeader, PageHeaderHeading } from "@/components/page-header"

import { CertificationsCarousel } from "../_components/cerfifications-carousel"
import { ContactBanner } from "../_components/contact-banner"
import { PageSection, PageSectionHeader } from "../_components/page-section"

const faqsConfig = [
  {
    title: "faqItem1Title",
    description: "faqItem1Description",
  },
  {
    title: "faqItem2Title",
    description: "faqItem2Description",
  },
  {
    title: "faqItem3Title",
    description: "faqItem3Description",
  },
  {
    title: "faqItem4Title",
    description: "faqItem4Description",
  },
  {
    title: "faqItem5Title",
    description: "faqItem5Description",
  },
  {
    title: "faqItem6Title",
    description: "faqItem6Description",
  },
  {
    title: "faqItem7Title",
    description: "faqItem7Description",
  },
  {
    title: "faqItem8Title",
    description: "faqItem8Description",
  },
]

export default function AboutUsPage() {
  const t = useTranslations("AboutUsPage")
  const pageHeaderHeading = t("pageHeaderHeading").split("\n")

  return (
    <>
      <section className="-mt-20 h-166 overflow-hidden bg-[url('/images/about-us-hero.webp')] bg-cover bg-center md:h-dvh">
        <div className="container">
          <PageHeader
            className="flex max-w-full flex-col gap-y-6 pt-20 pb-8 md:h-dvh"
            as="div"
          >
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
      </section>
      <CertificationsCarousel className="border-b" />
      <PageSection
        eyebrow={t("whoWeAreEyebrow")}
        heading={t("whoWeAreHeading")}
        description={t("whoWeAreDescription")}
        image={{
          src: "/images/howwetreat-section.webp",
          alt: "EMT",
          width: 2160,
          height: 2880,
        }}
        imageFilled
      />
      <PageSection
        eyebrow={t("whoWeTreatEyebrow")}
        heading={t("whoWeTreatHeading")}
        description={t("whoWeTreatDescription")}
        image={{
          src: "/images/howwetreat-section.webp",
          alt: "EMT",
          width: 2160,
          height: 2880,
        }}
        imageFilled
        rowReverse
      />
      <PageSectionHeader
        heading={t("ourApproachHeading")}
        description={t("ourApproachDescription")}
        eyebrow={t("ourApproachEyebrow")}
        className="bg-muted pb-24"
        size="lg"
        centered
      />
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
