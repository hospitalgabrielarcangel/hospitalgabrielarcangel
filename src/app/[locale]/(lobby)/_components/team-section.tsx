import { useTranslations } from "next-intl"

import { PageSectionHeader } from "./page-section-header"

export function TeamSection() {
  const t = useTranslations("OurTeamSection")

  return (
    <>
      <div className={"relative h-10 w-full border-t"}>
        <div className="bg-border absolute top-0 left-1/2 h-24 w-px" />
      </div>
      <PageSectionHeader
        eyebrow={t("ourTeamEyebrow")}
        heading={t("ourTeamHeading")}
        description={t("ourTeamDescription")}
        // link={{ to: "ourTeam" }}
        size="xl"
        centered
      />
    </>
  )
}
