import Image from "next/image"
import { useTranslations } from "next-intl"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { PageHeader, PageHeaderHeading } from "@/components/page-header"
import { PageLink } from "@/components/page-link"

import { CertificationsCarousel } from "../_components/cerfifications-carousel"

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

export default function Page() {
  const t = useTranslations("AboutUsPage")
  const pageHeaderHeading = t("pageHeaderHeading").split("\n")

  return (
    <>
      <section className="-mt-20 h-166 overflow-hidden bg-[url('/images/about-us-hero.webp')] bg-cover bg-center px-5 md:h-dvh">
        <div className="md:px-5">
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
      <section className="container flex w-full flex-col items-stretch md:flex-row">
        <div className="flex flex-col pt-6 md:w-1/2 md:px-[2.3dvw] md:pt-10 lg:border-r">
          <div className="relative max-w-2xl grow">
            <div className="sticky top-0 -mt-20 h-fit pt-20.25">
              <p className="eyebrow text-muted-foreground py-3">
                {t("whoWeAreEyebrow")}
              </p>
              <h2 className="heading-3xl">{t("whoWeAreHeading")}</h2>
            </div>
          </div>
          <div className="subtitle-md max-w-xl space-y-5 pt-10 pb-14 md:pb-20">
            {t("whoWeAreDescription")
              .split("\n")
              .map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
          </div>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/images/howwetreat-section.webp"
            alt="EMT"
            width={2160}
            height={2880}
            sizes="(min-width: 1536px) 1536px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px, (min-width: 768px) 768px, (min-width: 640px) 640px, 100vw"
            className="aspect-square h-full w-full object-cover object-center"
          />
        </div>
      </section>
      <section
        variant="vertical"
        className="container flex w-full flex-col items-stretch md:flex-row-reverse"
      >
        <div className="flex flex-col pt-24 md:w-1/2 md:px-[2.3dvw] md:pt-10 lg:border-r">
          <div className="relative max-w-2xl grow">
            <div className="sticky top-0 -mt-20 h-fit pt-20.25">
              <p className="eyebrow text-muted-foreground pb-3">
                {t("whoWeTreatEyebrow")}
              </p>
              <h2 className="heading-3xl">{t("whoWeTreatHeading")}</h2>
            </div>
          </div>
          <div className="subtitle-md max-w-xl space-y-5 pt-10 pb-14 md:pb-20">
            {t("whoWeTreatDescription")
              .split("\n")
              .map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
          </div>
        </div>
        <div className="pb-5 md:w-1/2 md:pb-0">
          <Image
            src="/images/about-us-hero.webp"
            alt="EMT"
            width={2160}
            height={2880}
            sizes="(min-width: 1536px) 1536px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px, (min-width: 768px) 768px, (min-width: 640px) 640px, 100vw"
            className="aspect-square h-full w-full object-cover object-center"
          />
        </div>
      </section>
      <section className="bg-muted px-5">
        <div className="mx-auto max-w-4xl space-y-6 pt-20 pb-24 text-center">
          <div className="space-y-4">
            <p className="eyebrow text-muted-foreground">
              {t("ourApproachEyebrow")}
            </p>
            <h2 className="heading-3xl">{t("ourApproachHeading")}</h2>
          </div>
          <div className="subtitle-md space-y-4">
            {t("ourApproachDescription")
              .split("\n")
              .map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
          </div>
        </div>
      </section>
      <section className="flex flex-col px-5 py-20 md:flex-row md:px-0">
        <div className="flex flex-col pb-8 md:w-2/5 md:px-[2.3dvw] md:pb-0">
          <div className="relative max-w-lg grow">
            <div className="sticky top-0 -mt-20 h-fit pt-20.25">
              <p className="eyebrow text-muted-foreground py-3">FAQS</p>
              <h2 className="heading-3xl">{t("faqsHeading")}</h2>
            </div>
          </div>
        </div>
        <div className="md:w-3/5 md:pr-[2.3dvw]">
          <Accordion className="rounded-none border-none">
            {faqsConfig.map((item) => (
              <AccordionItem key={t(item.title)} value={t(item.title)}>
                <AccordionTrigger className="py-8">
                  <h3 className="subtitle-md font-normal">{t(item.title)}</h3>
                </AccordionTrigger>
                <AccordionContent className="sapce-y-4 pb-8">
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
          <div className="py-20">
            <h2 className="heading-xl max-w-sm">{t("faqFooterHeading")}</h2>
            <p className="paragraph pt-10 italic">
              {t("faqFooterDescription")}
            </p>
            <PageLink className="pt-10" to="contact" variant="link" />
          </div>
        </div>
      </section>
    </>
  )
}
