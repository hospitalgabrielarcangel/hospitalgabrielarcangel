import { useTranslations } from "next-intl"

import { InfiniteMovingImages } from "@/components/layouts/infinite-moving-images"
import { Shell } from "@/components/shell"

const certificationConfig = [
  {
    name: "U.S. Food and Drug Administration",
    url: "https://www.fda.gov/",
    external: true,
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
    external: true,
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
    external: true,
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
    external: true,
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
    external: true,
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
    external: true,
    image: {
      src: "/images/certifications/logo-proteccioncivil.webp",
      alt: "Protección Civil",
      width: 800,
      height: 303,
      className: "h-24",
    },
  },
]

export function CertificationsCarousel() {
  const t = useTranslations("CertificationsCarousel")
  return (
    <Shell variant="sidebar" className="block border-t p-0 md:border-b lg:p-0">
      <div className="eyebrow text-muted-foreground mx-auto w-full pt-4 text-center">
        {t("certificationsEyebrow")}
      </div>
      <div className="flex w-full">
        <InfiniteMovingImages items={certificationConfig} speed="slow" />
      </div>
    </Shell>
  )
}
