import { type Metadata } from "next"
import Image from "next/image"
import { env } from "@/env.mjs"
import { Link } from "@/i18n/routing"
import { type LocaleParams } from "@/types"
import { useTranslations } from "next-intl"
import { getTranslations } from "next-intl/server"

import { typeOfTherapyConfig } from "@/config/treatment"
import { Icons } from "@/components/icons"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"

import { ApproachSection } from "../../_components/approach-section"
import { ContactBanner } from "../../_components/contact-banner"
import { PageSectionHeader } from "../../_components/page-section-header"
import { ProgrammesSection } from "../../_components/programmes-section"
import { TeamSection } from "../../_components/team-section"

export async function generateMetadata({
  params,
}: LocaleParams): Promise<Metadata> {
  const { locale } = await params

  const t = await getTranslations({
    locale: locale,
    namespace: "PsychologyPage",
  })

  return {
    metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
    title: t("pageHeading"),
    description: t("pageDescription"),
  }
}

export default function PsychologyPage() {
  const t = useTranslations("PsychologyPage")
  const tMenu = useTranslations("MenuSidebar")

  const psychologyConfig = typeOfTherapyConfig.find(
    ({ title }) => title === "psychology"
  )!

  return (
    <>
      <section className="flex w-full flex-col items-stretch border-t md:flex-row-reverse">
        <div className="flex flex-col md:w-1/2">
          <PageHeader
            className="container gap-0 md:h-dvh"
            as="article"
            centered
          >
            <PageHeaderHeading className="heading-4xl flex items-center py-20 text-center md:grow md:py-0">
              {t("pageHeading")}
            </PageHeaderHeading>
            <PageHeaderDescription className="subtitle-md text-foreground pb-20 md:h-1/5 md:pb-0">
              {t("pagePhrase")}
            </PageHeaderDescription>
          </PageHeader>
          <div className="md:hidden">
            <Image
              src="/images/counselor.webp"
              alt=""
              width={1920}
              height={1080}
              sizes="(min-width: 1536px) 1536px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px, (min-width: 768px) 768px, (min-width: 640px) 640px, 100vw"
              className="aspect-square w-full object-cover object-center"
            />
          </div>
          <article>
            <div className="space-y-5 px-5 py-10 md:px-[3dvw]">
              {t("pageDescription")
                .split("\n")
                .map((paragraph, index) => (
                  <p className="subtitle-md paragraph" key={index}>
                    {paragraph}
                  </p>
                ))}
            </div>
            <ul>
              {psychologyConfig.items.map((typeOfTherpayItem) => (
                <li
                  key={typeOfTherpayItem.title}
                  className="border-t last:border-b"
                >
                  <Link
                    href={typeOfTherpayItem.href}
                    className="subtitle-md flex items-center justify-between px-5 py-8 md:px-[3dvw]"
                  >
                    {tMenu(typeOfTherpayItem.title)}
                    <Icons.arrowRight />
                  </Link>
                </li>
              ))}
            </ul>
          </article>
          <PageSectionHeader
            heading={t("contactHeading")}
            description={t("contactDescription")}
            link={{ to: "contact" }}
            size="sm"
            centered
          />
        </div>
        <div className="relative hidden md:block md:w-1/2">
          <Image
            src="/images/counselor.webp"
            alt=""
            width={1920}
            height={1080}
            sizes="(min-width: 1536px) 1536px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px, (min-width: 768px) 768px, (min-width: 640px) 640px, 100vw"
            className="sticky top-0 aspect-square h-dvh w-full object-cover object-center"
          />
        </div>
      </section>
      <ApproachSection
        image={{
          src: "/images/types-of-therapy.webp",
          alt: "",
          width: 1080,
          height: 1350,
        }}
        className="border-y"
      />
      <ProgrammesSection />
      <TeamSection />
      <ContactBanner muted />
    </>
  )
}
