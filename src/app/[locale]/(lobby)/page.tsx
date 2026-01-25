import Image from "next/image"
import { Link } from "@/i18n/routing"
import { ArrowRightIcon } from "lucide-react"
import { useTranslations } from "next-intl"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { InfiniteMovingImages } from "@/components/infinite-moving-images"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Shell } from "@/components/shell"

export default function LobbyPage() {
  const t = useTranslations("LobbyPage")

  const certification = [
    {
      name: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/",
      image: {
        src: "/images/certifications/logo-fda.webp",
        alt: "FDA logotype",
        width: 3840,
        height: 2160,
      },
    },
    {
      name: "Comisión Nacional de Salud Mental y Adicciones",
      url: "https://www.gob.mx/conasama/",
      image: {
        src: "/images/certifications/logo-conasama.webp",
        alt: "CONASAMA logotype",
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
        alt: "COFEPRIS logotype",
        width: 1158,
        height: 282,
      },
    },
    {
      name: "Consejo Estatal Contra las Adicciones",
      url: "https://gobqro.gob.mx/cecaqro/",
      image: {
        src: "/images/certifications/logo-ceca.webp",
        alt: "CECA logotype",
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
        alt: "CNDH logotype",
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
        alt: "Protección Civil logotype",
        width: 800,
        height: 303,
        className: "h-24",
      },
    },
  ]

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
      <Shell className="relative flex flex-col items-center gap-12 pt-20 pb-14 md:pt-36 lg:pt-36 lg:pb-14">
        <div className="bg-muted-foreground absolute inset-x-1/2 -top-4 h-20 w-px lg:-top-5 lg:h-26" />
        <h2 className="heading text-h2 mx-auto max-w-6xl text-center text-balance">
          {t("aboutUs")}
        </h2>
        <Button className="w-fit uppercase" asChild size="lg" variant="outline">
          <Link href="#">
            {t("aboutUsAction")}
            <ArrowRightIcon />
          </Link>
        </Button>
      </Shell>
      <section className="border-t md:border-b">
        <div className="tag pt-4 text-center">{t("certifications")}</div>
        <div className="flex w-full">
          <InfiniteMovingImages items={certification} speed="slow" />
        </div>
      </section>
      <Shell className="flex flex-col md:flex-row">
        <div className="md:w-1/2 md:py-7 md:pr-6 lg:border-r">
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
            <p className="tag py-3">{t("whatWeTreatTitle")}</p>
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
        <Shell className="flex flex-col-reverse pt-6 md:flex-row">
          <div className="px-5 pt-16 pb-14 md:w-1/2 md:pt-4 md:pr-6 md:pl-0 lg:border-r">
            <p className="tag py-3">{t("howWeTreatTitle")}</p>
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
          <div className="md:w-1/2 md:py-6 lg:pl-6">
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
    </div>
  )
}
