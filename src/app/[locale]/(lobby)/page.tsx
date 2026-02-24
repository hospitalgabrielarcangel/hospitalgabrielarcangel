import Image from "next/image"
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
import PageSection from "./_components/page-section"

const whatWeTreatConfig = [
  {
    title: "whatWeTreatItem1Title",
    description: "whatWeTreatItem1Description",
    href: "/treatment/mental-health-conditions",
  },
  {
    title: "whatWeTreatItem2Title",
    description: "whatWeTreatItem2Description",
    href: "/treatment/dependencies-and-addictions",
  },
  {
    title: "whatWeTreatItem3Title",
    description: "whatWeTreatItem3Description",
    href: "/treatment/eating-disorder",
  },
]

const ourProgramsConfig = [
  {
    title: "ourProgramsItem1Title",
    description: "ourProgramsItem1Description",
    href: "#",
  },
  {
    title: "ourProgramsItem2Title",
    description: "ourProgramsItem2Description",
    href: "#",
  },
  {
    title: "ourProgramsItem3Title",
    description: "ourProgramsItem3Description",
    href: "#",
  },
]

export default function Page() {
  const t = useTranslations("LobbyPage")

  return (
    <>
      <section className="relative -mt-20 h-dvh overflow-hidden">
        <div className="relative z-10 h-full px-4">
          <PageHeader
            className="flex h-full max-w-full justify-between gap-0 py-8"
            centered
            as="div"
          >
            <PageHeaderDescription
              className="heading-xl animate-fade-up mx-auto mt-16 text-white md:px-4 lg:mt-0"
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
      <section className="relative grid items-center gap-12 px-5 pt-20 pb-14 md:pt-36">
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
        name={t("whatWeTreatEyebrow")}
        title={t("whatWeTreatHeading")}
        description={t("whatWeTreatDescription")}
        image={{
          src: "/images/about-us-hero.webp",
          alt: "EMT",
          width: 2160,
          height: 2880,
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
              <AccordionTrigger className="py-8 md:px-6">
                <span className="subtitle-md font-normal">{t(item.title)}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-8 md:px-4">
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
        name={t("howWeTreatEyebrow")}
        title={t("howWeTreatHeading")}
        description={t("howWeTreatDescription")}
        image={{
          src: "/images/howwetreat-section.webp",
          alt: "Dental",
          width: 2160,
          height: 2700,
        }}
        link={{
          to: "treatmentPlans",
        }}
        className="border-t"
        colReverse
        divider
      />
      <section className="bg-muted border-t pt-10 pb-16">
        <div className="px-5">
          <div className="space-y-4 pb-10 text-center md:hidden">
            <p className="eyebrow uppercase">{t("ourProgramsEyebrow")}</p>
            <h2 className="heading-3xl">{t("ourProgramsTitle")}</h2>
          </div>
          <div className="relative flex items-center justify-center overflow-hidden">
            <Image
              src="/images/ourprograms-section.webp"
              alt="Dental"
              width={1536}
              height={1024}
              sizes="(min-width: 1536px) 1536px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px, (min-width: 768px) 768px, (min-width: 640px) 640px, 100vw"
              loading="lazy"
              className="aspect-353/380 h-full w-full object-cover object-center sm:aspect-1360/616"
            />
            <div className="absolute inset-0 hidden flex-col items-center justify-center gap-y-6 md:flex lg:px-18">
              <p className="eyebrow text-white uppercase">
                {t("ourProgramsEyebrow")}
              </p>
              <h2 className="heading-3xl text-center text-white">
                {t("ourProgramsTitle")}
              </h2>
            </div>
          </div>
        </div>
        <ul className="no-scrollbar flex justify-between overflow-x-scroll px-5 pt-18 md:overflow-x-auto">
          {ourProgramsConfig.map((item) => (
            <li
              key={t(item.title)}
              className="flex-[0_0_90%] pl-8 first:pl-0 md:flex-[0_0_31.33%] md:pl-0"
            >
              <div className="border-foreground space-y-4 border-t-2 pt-8">
                <h2 className="paragraph">{t(item.title)}</h2>
                <p className="paragraph">{t(item.description)}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex justify-center px-5">
          <PageLink
            to="ourPrograms"
            size="lg"
            variant="outline"
            className="w-fit"
            withIcon
          />
        </div>
      </section>
    </>
  )
}
