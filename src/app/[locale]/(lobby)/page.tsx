import Image from "next/image"
import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CallToAction } from "@/components/call-to-action"
import { InfiniteMovingImages } from "@/components/infinite-moving-images"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Shell } from "@/components/shell"

const certification = [
  {
    name: "U.S. Food and Drug Administration",
    url: "https://www.fda.gov/",
    image: {
      src: "/images/certifications/logo-fda.webp",
      alt: "U.S. Food and Drug Administration",
      width: 3840,
      height: 2160,
    },
  },
  {
    name: "Comisión Nacional de Salud Mental y Adicciones",
    url: "https://www.gob.mx/conasama/",
    image: {
      src: "/images/certifications/logo-conasama.webp",
      alt: "Comisión Nacional de Salud Mental y Adicciones",
      width: 512,
      height: 271,
      className: "h-36",
    },
  },
  {
    name: "Comisión Federal para la Protección contra Riesgos Sanitarios",
    url: "https://www.gob.mx/cofepris/",
    image: {
      src: "/images/certifications/logo-cofepris.webp",
      alt: "Comisión Federal para la Protección contra Riesgos Sanitarios",
      width: 1158,
      height: 282,
    },
  },
  {
    name: "Consejo Estatal Contra las Adicciones",
    url: "https://gobqro.gob.mx/cecaqro/",
    image: {
      src: "/images/certifications/logo-ceca.webp",
      alt: "Consejo Estatal Contra las Adicciones",
      width: 540,
      height: 540,
      className: "h-38",
    },
  },
  {
    name: "Comisión Nacional de los Derechos Humanos",
    url: "https://www.cndh.org.mx/",
    image: {
      src: "/images/certifications/logo-cndh.webp",
      alt: "Comisión Nacional de los Derechos Humanos",
      width: 240,
      height: 95,
      className: "h-24",
    },
  },
  {
    name: "Protección Civil",
    url: "https://municipiodequeretaro.gob.mx/entidades/proteccion-civil/",
    image: {
      src: "/images/certifications/logo-proteccioncivil.webp",
      alt: "Protección Civil",
      width: 800,
      height: 303,
      className: "h-24",
    },
  },
]

export default function LobbyPage() {
  const t = useTranslations("LobbyPage")

  const whatWeTreat = [
    {
      title: t("whatWeTreatItem1Title"),
      description: t("whatWeTreatItem1Description"),
      slug: "#",
    },
    {
      title: t("whatWeTreatItem2Title"),
      description: t("whatWeTreatItem2Description"),
      slug: "#",
    },
    {
      title: t("whatWeTreatItem3Title"),
      description: t("whatWeTreatItem3Description"),
      slug: "#",
    },
    {
      title: t("whatWeTreatItem4Title"),
      description: t("whatWeTreatItem4Description"),
      slug: "#",
    },
  ]

  const ourPrograms = [
    {
      title: t("ourProgramsItem1Title"),
      description: t("ourProgramsItem1Description"),
      slug: "#",
    },
    {
      title: t("ourProgramsItem2Title"),
      description: t("ourProgramsItem2Description"),
      slug: "#",
    },
    {
      title: t("ourProgramsItem3Title"),
      description: t("ourProgramsItem3Description"),
      slug: "#",
    },
  ]

  return (
    <div>
      <div className="relative -mt-20 h-dvh overflow-hidden">
        <div className="relative z-10 h-full px-4">
          <PageHeader
            className="flex h-full max-w-full justify-between gap-0 py-8"
            centered
          >
            <PageHeaderDescription
              className="animate-fade-up font-header mx-auto mt-16 text-2xl tracking-tight text-white md:mt-0 md:px-4 md:text-3xl lg:text-3xl"
              style={{ animationDelay: "0.3s", animationFillMode: "both" }}
              size="lg"
            >
              {t("pageHeaderDescription")}
            </PageHeaderDescription>
            <PageHeaderHeading
              className="animate-fade-up w-full text-center text-[14vw] leading-none text-white sm:text-[11vw] md:text-[10vw] lg:mb-8 lg:text-[8vw] xl:text-[7vw]"
              style={{ animationDelay: "0.2s", animationFillMode: "both" }}
              size="lg"
            >
              {t("pageHeaderTitle")}
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
        <h2 className="heading text-h2 mx-auto max-w-6xl text-center text-balance">
          {t("aboutUs")}
        </h2>
        <CallToAction
          to="aboutUs"
          size="lg"
          variant="outline"
          className="mx-auto w-fit"
          withIcon
        />
      </Shell>
      <Shell
        variant="sidebar"
        className="block border-t p-0 md:border-b lg:p-0"
      >
        <div className="tag text-muted-foreground mx-auto w-full pt-4 text-center">
          {t("certificationsTag")}
        </div>
        <div className="flex w-full">
          <InfiniteMovingImages items={certification} speed="slow" />
        </div>
      </Shell>
      <Shell variant="vertical">
        <div className="md:w-1/2 md:py-6 md:pr-6 lg:border-r">
          <Image
            src="/images/whatwetreat-section.webp"
            alt="EMT"
            width={2160}
            height={2880}
            sizes="(min-width: 1536px) 1536px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px, (min-width: 768px) 768px, (min-width: 640px) 640px, 100vw"
            loading="lazy"
          />
        </div>
        <div className="md:w-1/2">
          <div className="pt-12 pb-10 md:pt-7 md:pl-6">
            <p className="tag text-muted-foreground py-3">
              {t("whatWeTreatTitle")}
            </p>
            <h2 className="font-header text-h3 heading">
              {t("whatWeTreatHeading")}
            </h2>
            <div className="hidden h-94 lg:block" />
            <p className="text-md paragraph mt-6 font-extralight text-balance lg:mt-0">
              {t("whatWeTreatDescription")}
            </p>
          </div>
          <Accordion type="single" collapsible className="border-t">
            {whatWeTreat.map((item) => (
              <AccordionItem
                value={item.title}
                key={item.title}
                className="p-0"
              >
                <AccordionTrigger className="px-5 py-8 text-[16px] hover:cursor-pointer md:px-10">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-8 md:px-10">
                  <p className="text-base font-extralight">
                    {item.description}
                  </p>
                  <div className="border-foreground mt-5 w-fit border-b">
                    <Link
                      href={item.slug}
                      className="text-xs tracking-wider uppercase"
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
          <div className="px-5 pt-16 pb-14 md:w-1/2 md:pt-4 md:pr-5 md:pl-0 lg:border-r">
            <p className="tag text-muted-foreground py-3">
              {t("howWeTreatTitle")}
            </p>
            <h2 className="font-header text-h3 heading">
              {t("howWeTreatHeading")}
            </h2>
            <div className="hidden h-94 lg:block" />
            <p className="text-md paragraph mt-6 font-extralight text-balance lg:mt-0">
              {t("howWeTreatDescription1")}
            </p>
            <p className="text-md paragraph mt-4 font-extralight text-balance">
              {t("howWeTreatDescription2")}
            </p>
            <div className="border-foreground mt-5 w-fit border-b">
              <Link href="#" className="text-xs tracking-wider uppercase">
                {t("treatmentPlans")}
              </Link>
            </div>
          </div>
          <div className="pt-6 md:w-1/2 md:py-6 lg:pl-6">
            <Image
              src="/images/howwetreat-section.webp"
              alt="Dental"
              width={2160}
              height={2700}
              sizes="(min-width: 1536px) 1536px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px, (min-width: 768px) 768px, (min-width: 640px) 640px, 100vw"
              loading="lazy"
            />
          </div>
        </Shell>
      </div>
      <div className="bg-muted border-t pt-10 pb-16">
        <Shell className="gap-0 pt-0 lg:py-0">
          <div className="space-y-5 text-center md:hidden">
            <p className="tag uppercase">{t("ourProgramsTag")}</p>
            <h2 className="font-header heading text-h3 text-balance">
              {t("ourProgramsTitle")}
            </h2>
          </div>
          <div className="relative mt-10 flex aspect-353/380 items-center justify-center overflow-hidden md:mt-0 md:aspect-1360/616">
            <Image
              src="/images/ourprograms-section.webp"
              alt="Dental"
              width={1536}
              height={1024}
              sizes="(min-width: 1536px) 1536px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px, (min-width: 768px) 768px, (min-width: 640px) 640px, 100vw"
              loading="lazy"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 hidden flex-col items-center justify-center gap-y-6 md:flex lg:px-18">
              <p className="tag text-white uppercase">{t("ourProgramsTag")}</p>
              <h2 className="font-header heading text-h3 text-center text-balance text-white">
                {t("ourProgramsTitle")}
              </h2>
            </div>
          </div>
          <ul className="no-scrollbar flex justify-between overflow-x-scroll pt-18 md:overflow-x-auto">
            {ourPrograms.map((item) => (
              <li
                key={item.title}
                className="flex-[0_0_80%] pl-8 first:pl-0 md:flex-[0_0_31.33%] md:pl-0"
              >
                <div className="border-foreground space-y-4 border-t-2 pt-8">
                  <h2 className="paragraph font-extralight text-balance">
                    {item.title}
                  </h2>
                  <p className="paragraph font-extralight text-balance">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <CallToAction
            to="ourPrograms"
            size="lg"
            variant="outline"
            className="mx-auto mt-12 w-fit"
            withIcon
          />
        </Shell>
      </div>
    </div>
  )
}
