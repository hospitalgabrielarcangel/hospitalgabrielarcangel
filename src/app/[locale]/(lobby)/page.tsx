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
import { Shell } from "@/components/shell"

import { CertificationsCarousel } from "./_components/cerfifications-carousel"

const whatWeTreatConfig = [
  {
    title: "whatWeTreatItem1Title",
    description: "whatWeTreatItem1Description",
    slug: "#",
  },
  {
    title: "whatWeTreatItem2Title",
    description: "whatWeTreatItem2Description",
    slug: "#",
  },
  {
    title: "whatWeTreatItem3Title",
    description: "whatWeTreatItem3Description",
    slug: "#",
  },
  {
    title: "whatWeTreatItem4Title",
    description: "whatWeTreatItem4Description",
    slug: "#",
  },
]

const ourProgramsConfig = [
  {
    title: "ourProgramsItem1Title",
    description: "ourProgramsItem1Description",
    slug: "#",
  },
  {
    title: "ourProgramsItem2Title",
    description: "ourProgramsItem2Description",
    slug: "#",
  },
  {
    title: "ourProgramsItem3Title",
    description: "ourProgramsItem3Description",
    slug: "#",
  },
]

export default function Page() {
  const t = useTranslations("LobbyPage")

  return (
    <>
      <div className="relative -mt-20 h-dvh overflow-hidden">
        <div className="relative z-10 h-full px-4">
          <PageHeader
            className="flex h-full max-w-full justify-between gap-0 py-8"
            centered
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
      </div>
      <Shell className="relative gap-12 px-5 pt-20 pb-14 md:pt-36">
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
      </Shell>
      <CertificationsCarousel className="border-t md:border-b" />
      <Shell variant="vertical">
        <div className="md:relative md:w-1/2 md:py-6 md:pr-6 lg:border-r">
          <div className="md:sticky md:top-0 md:-mt-20 md:h-fit md:pt-20.25">
            <Image
              src="/images/about-us-hero.webp"
              alt="EMT"
              width={2160}
              height={2880}
              sizes="(min-width: 1536px) 1536px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px, (min-width: 768px) 768px, (min-width: 640px) 640px, 100vw"
              loading="lazy"
              className="aspect-3/4 h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="pt-16 md:pt-8 md:pl-6">
            <div className="md:relative md:h-164">
              <div className="md:sticky md:top-0 md:-mt-20 md:h-fit md:pt-20.25">
                <p className="eyebrow text-muted-foreground pb-3">
                  {t("whatWeTreatEyebrow")}
                </p>
                <h2 className="heading-3xl">{t("whatWeTreatHeading")}</h2>
              </div>
            </div>
            <p className="subtitle-md py-10">{t("whatWeTreatDescription")}</p>
          </div>
          <Accordion className="rounded-none border-none">
            {whatWeTreatConfig.map((item) => (
              <AccordionItem
                key={t(item.title)}
                value={t(item.title)}
                className="p-0"
              >
                <AccordionTrigger className="py-8 md:px-10">
                  <span className="subtitle-md font-normal">
                    {t(item.title)}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-8 md:px-6">
                  <p className="paragraph text-base">{t(item.description)}</p>
                  <div className="mt-5 w-fit">
                    <Link
                      href={item.slug}
                      className="text-sm font-medium tracking-wide uppercase"
                    >
                      {t("readMore")}
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Shell>
      <div className="border-t">
        <Shell variant="vertical" className="flex-col-reverse">
          <div className="pt-16 pb-14 md:w-1/2 md:pt-8 md:pr-5 lg:border-r">
            <div className="md:relative md:h-164">
              <div className="md:sticky md:top-0 md:-mt-20 md:h-fit md:pt-20.25">
                <p className="eyebrow text-muted-foreground pb-3">
                  {t("howWeTreatEyebrow")}
                </p>
                <h2 className="heading-3xl">{t("howWeTreatHeading")}</h2>
              </div>
            </div>
            <div className="subtitle-md max-w-lg space-y-5 py-10">
              {t("howWeTreatDescription")
                .split("\n")
                .map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
            </div>
            <div className="border-foreground mt-5 w-fit border-b">
              <Link
                href="#"
                className="text-sm font-medium tracking-wide uppercase"
              >
                {t("treatmentPlans")}
              </Link>
            </div>
          </div>
          <div className="pt-5 md:relative md:w-1/2 md:py-6 md:pl-6">
            <div className="md:sticky md:top-0 md:-mt-20 md:h-fit md:pt-20.25">
              <Image
                src="/images/howwetreat-section.webp"
                alt="Dental"
                width={2160}
                height={2700}
                sizes="(min-width: 1536px) 1536px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px, (min-width: 768px) 768px, (min-width: 640px) 640px, 100vw"
                loading="lazy"
                className="aspect-3/4 h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </Shell>
      </div>
      <div className="bg-muted border-t">
        <Shell className="gap-0 pt-10 pb-16">
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
          <ul className="no-scrollbar flex justify-between overflow-x-scroll pt-18 md:overflow-x-auto">
            {ourProgramsConfig.map((item) => (
              <li
                key={t(item.title)}
                className="flex-[0_0_80%] pl-8 first:pl-0 md:flex-[0_0_31.33%] md:pl-0"
              >
                <div className="border-foreground space-y-4 border-t-2 pt-8">
                  <h2 className="paragraph">{t(item.title)}</h2>
                  <p className="paragraph">{t(item.description)}</p>
                </div>
              </li>
            ))}
          </ul>
          <PageLink
            to="ourPrograms"
            size="lg"
            variant="outline"
            className="mx-auto mt-10 w-fit"
            withIcon
          />
        </Shell>
      </div>
    </>
  )
}
