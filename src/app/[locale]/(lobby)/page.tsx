import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"

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
import { PageLink } from "@/components/page-link"

import { CertificationsCarousel } from "./_components/cerfifications-carousel"
import { ContactBanner } from "./_components/contact-banner"
import { PageSection } from "./_components/page-section"
import { ProgrammesSection } from "./_components/programmes-section"
import { TeamSection } from "./_components/team-section"

const whatWeTreatConfig = [
  {
    title: "dependenciesAndAddictionsTitle",
    description: "dependenciesAndAddictionsDescription",
    href: "/conditions-we-treat/dependencies-and-addictions",
  },
  {
    title: "mentalHealthConditionsTitle",
    description: "mentalHealthConditionsDescription",
    href: "/conditions-we-treat/mental-health",
  },
  {
    title: "eatingDisordersTitle",
    description: "eatingDisordersDescription",
    href: "/conditions-we-treat/eating-disorder",
  },
]

export default function Page() {
  const t = useTranslations("LobbyPage")

  return (
    <>
      <section className="relative -mt-20 h-dvh overflow-hidden">
        <div className="relative z-10 container h-full">
          <PageHeader
            className="h-full max-w-full justify-between gap-0 py-8"
            centered
            as="div"
          >
            <PageHeaderDescription
              className="heading-xl animate-fade-up mx-auto mt-16 text-white lg:mt-0"
              style={{ animationDelay: "0.3s", animationFillMode: "both" }}
            >
              {t("pageHeaderDescription")}
            </PageHeaderDescription>
            <PageHeaderHeading
              className="animate-fade-up font-heading w-full text-center text-[14vw] leading-none font-medium tracking-tight text-white sm:text-[9vw] lg:mb-8 lg:text-[8vw] xl:text-[7vw]"
              style={{ animationDelay: "0.2s", animationFillMode: "both" }}
            >
              {t("pageHeaderHeading")}
            </PageHeaderHeading>
          </PageHeader>
        </div>
        <div className="absolute inset-0 right-0 z-0 overflow-hidden">
          <video
            className="relative size-full object-cover"
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
      </section>
      <section className="relative container grid items-center gap-12 pt-20 pb-14 md:pt-36">
        <div className="bg-muted-foreground absolute inset-x-1/2 -top-4 h-20 w-px lg:-top-5 lg:h-26" />
        <h2 className="heading-2xl mx-auto max-w-6xl text-center">
          {t("aboutUs")}
        </h2>
        <PageLink
          to="aboutUs"
          size="lg"
          variant="outline"
          className="mx-auto w-fit"
          withIcon
        />
      </section>
      <CertificationsCarousel className="border-t md:border-b" />
      <PageSection
        eyebrow={t("whatWeTreatEyebrow")}
        heading={t("whatWeTreatHeading")}
        description={t("whatWeTreatDescription")}
        image={{
          src: "/images/ceo.webp",
          alt: t("whatWeTreatImageAlt"),
          width: 2160,
          height: 2880,
        }}
        link={{
          to: "conditionsWeTreat",
        }}
        rowReverse
        colReverse
        divider
      >
        <Accordion className="rounded-none border-r-0 border-b-0 border-l-0">
          {whatWeTreatConfig.map((item) => (
            <AccordionItem
              key={t(item.title)}
              value={t(item.title)}
              className="p-0"
            >
              <AccordionTrigger className="px-5 py-8 md:pr-[3dvw]">
                <span className="subtitle-md font-normal">{t(item.title)}</span>
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-8 md:pr-[3dvw]">
                <p className="paragraph text-base">{t(item.description)}</p>
                <div className="mt-5 w-fit">
                  <Link
                    href={item.href}
                    className="text-sm font-medium tracking-wide uppercase"
                  >
                    {t("readMore")}
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </PageSection>
      <PageSection
        eyebrow={t("howWeTreatEyebrow")}
        heading={t("howWeTreatHeading")}
        description={t("howWeTreatDescription")}
        image={{
          src: "/images/vsm_4-5.webp",
          alt: "Dental",
          width: 2160,
          height: 2700,
        }}
        link={{
          to: "approach",
        }}
        className="border-y"
        colReverse
        divider
      />
      <ProgrammesSection />
      <TeamSection />
      <ContactBanner />
    </>
  )
}
