import { type Metadata } from "next"
import { env } from "@/env.mjs"
import type { LocaleParams } from "@/types"
import { useTranslations } from "next-intl"
import { getTranslations } from "next-intl/server"

import { ApproachSection } from "../../../_components/approach-section"
import { ContactBanner } from "../../../_components/contact-banner"
import { ProgrammesSection } from "../../../_components/programmes-section"
import { TeamSection } from "../../../_components/team-section"

export async function generateMetadata({
  params,
}: LocaleParams): Promise<Metadata> {
  const { locale } = await params

  const t = await getTranslations({
    locale: locale,
    namespace: "FamilyPsychoeducationPage",
  })

  return {
    metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
    title: t("pageHeading"),
    description: t("sectionDescription"),
  }
}

export default function FamilyPsychoeducationPage() {
  const t = useTranslations("FamilyPsychoeducationPage")

  return (
    <>
      <section className="bg-muted -mt-20 border-b bg-[url(/images/family-psychoeducation.webp)] bg-center">
        <div className="container pt-70 pb-12 md:pt-84">
          <div className="max-w-6xl space-y-5">
            <p className="eyebrow text-white">{t("pageEyebrow")}</p>
            <h1 className="heading-4xl text-white">{t("pageHeading")}</h1>
          </div>
        </div>
      </section>
      <section className="bg-muted border-b">
        <div className="container flex flex-col items-stretch md:flex-row">
          <div className="space-y-5 border-b pt-12 pb-12 md:relative md:w-1/2 md:border-r md:border-b-0 md:pt-10 md:pr-8 md:pb-20">
            <div className="max-w-2xl space-y-5 md:sticky md:top-0 md:-mt-24 md:pt-24.25">
              <h2 className="heading-2xl">{t("sectionHeading")}</h2>
              <div className="space-y-4">
                {t("sectionDescription")
                  .split("\n")
                  .map((paragraph, index) => (
                    <p
                      className="paragraph"
                      key={`condition-description-${index}`}
                    >
                      {paragraph}
                    </p>
                  ))}
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:pb-8">
            <article className="space-y-6 border-b py-12 md:pt-10 md:pb-20 md:pl-8">
              <div className="space-y-6">
                <h3 className="subtitle-lg font-medium">
                  {t("whatIsHeading")}
                </h3>
                <div className="paragraph space-y-4">
                  {t("whatIsDescription")
                    .split("\n")
                    .map((paragraph, key) => (
                      <p key={key}>{paragraph}</p>
                    ))}
                </div>
              </div>
            </article>
            <article className="space-y-6 border-b py-12 md:pt-10 md:pb-20 md:pl-8">
              <div className="space-y-6">
                <h3 className="subtitle-lg font-medium">
                  {t("benefistHeading")}
                </h3>
                <div className="paragraph space-y-4">
                  {t("benefistDescription")
                    .split("\n")
                    .map((paragraph, key) => (
                      <p key={key}>{paragraph}</p>
                    ))}
                </div>
              </div>
            </article>
            <article className="space-y-6 py-12 md:pt-10 md:pl-8">
              <div className="space-y-6">
                <h3 className="subtitle-lg font-medium">
                  {t("differenceHeading")}
                </h3>
                <div className="paragraph space-y-4">
                  {t("differenceDescription")
                    .split("\n")
                    .map((paragraph, key) => (
                      <p key={key}>{paragraph}</p>
                    ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <ApproachSection
        image={{
          src: "/images/patience-therapy.webp",
          alt: "",
          width: 1080,
          height: 1350,
        }}
        className="border-b"
      />
      <ProgrammesSection />
      <TeamSection />
      <ContactBanner />
    </>
  )
}
