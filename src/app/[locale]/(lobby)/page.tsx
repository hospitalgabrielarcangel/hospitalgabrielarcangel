// import Image from "next/image"
import { Link } from "@/i18n/routing"
import { ArrowRightIcon } from "lucide-react"
import { useTranslations } from "next-intl"

import { Button } from "@/components/ui/button"
import { CallToAction } from "@/components/call-to-action"
import { InfiniteMovingImages } from "@/components/infinite-moving-images"
import {
  PageActions,
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
      className: "h-36",
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

export default function LobbyPage() {
  const t = useTranslations("LobbyPage")

  return (
    <div>
      <div className="relative -mt-20 h-dvh overflow-hidden">
        <Shell className="relative z-10 h-full">
          <PageHeader className="max-w-4xl gap-4 sm:gap-5 lg:gap-6" withPadding>
            <PageHeaderHeading
              className="animate-fade-up mt-16 text-white"
              style={{ animationDelay: "0.2s", animationFillMode: "both" }}
              size="lg"
            >
              {t("pageHeaderTitle")}
            </PageHeaderHeading>
            <PageHeaderDescription
              className="animate-fade-up text-white"
              style={{ animationDelay: "0.3s", animationFillMode: "both" }}
              size="lg"
            >
              {t("pageHeaderDescription")}
            </PageHeaderDescription>
            <PageActions
              className="animate-fade-up justify-start"
              style={{ animationDelay: "0.4s", animationFillMode: "both" }}
            >
              <CallToAction
                className="font-semibold uppercase"
                to="contact"
                size="lg"
              />
            </PageActions>
          </PageHeader>
        </Shell>
        <div className="absolute inset-0 right-0 z-0 overflow-hidden pt-20">
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
          <div className="absolute inset-0 z-10 mt-20 bg-black/25" />
        </div>
      </div>
      <Shell>
        <section className="flex flex-col items-center gap-12 pt-20 pb-14 md:pt-36">
          <h2 className="heading text-h2 mx-auto max-w-6xl text-center text-balance">
            {t("aboutUs")}
          </h2>
          <Button
            className="w-fit uppercase"
            asChild
            size="lg"
            variant="outline"
          >
            <Link href="#">
              {t("aboutUsAction")}
              <ArrowRightIcon />
            </Link>
          </Button>
        </section>
      </Shell>
      <section className="border-y">
        <div className="text-muted-foreground pt-4 text-center text-sm font-semibold tracking-wide uppercase">
          {t("certifications")}
        </div>
        <div className="flex w-full">
          <InfiniteMovingImages items={certification} speed="slow" />
        </div>
      </section>
      {/* <Shell>
        <section className="flex">
          <div className="w-1/2">
            <h2 className="font-header text-h3 heading text-balance">
              Lorem ipsum dolor sit amet consetratum
            </h2>
            <p className="text-md paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              similique qui, quisquam iure et at omnis nihil deleniti eum
              exercitationem iusto ut temporibus vel architecto soluta vitae
              labore, ipsa accusantium!
            </p>
          </div>
          <div className="w-1/2">
            <Image
              src=""
              alt=""
              width={1024}
              height={1024}
              sizes="(max-width: 744px) 100vw, (max-width: 1280px) 50vw, 500px"
              loading="lazy"
            />
          </div>
        </section>
      </Shell> */}
    </div>
  )
}
