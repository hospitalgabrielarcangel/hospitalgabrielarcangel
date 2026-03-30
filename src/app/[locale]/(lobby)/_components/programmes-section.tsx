import { useTranslations } from "next-intl"

import { PageSectionImage } from "./page-section"

export const ourProgrammesConfig = [
  {
    title: "ourProgrammesItem1Title",
    description: "ourProgrammesItem1Description",
  },
  {
    title: "ourProgrammesItem2Title",
    description: "ourProgrammesItem2Description",
  },
  {
    title: "ourProgrammesItem3Title",
    description: "ourProgrammesItem3Description",
  },
]

export function ProgrammesSection() {
  const t = useTranslations("OurProgrammes")

  return (
    <PageSectionImage
      className="bg-muted"
      heading={t("ourProgrammesHeading")}
      eyebrow={t("ourProgrammesEyebrow")}
      image={{
        src: "/images/ourprogrammes-section.webp",
        alt: "Dental",
        width: 1536,
        height: 1024,
      }}
      items={ourProgrammesConfig.map((item) => ({
        title: t(item.title),
        description: t(item.description),
      }))}
      link={{
        to: "programmes",
      }}
    />
  )
}
