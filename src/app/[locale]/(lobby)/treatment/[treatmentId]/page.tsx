import { type Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { env } from "@/env.mjs"
import { Link } from "@/i18n/routing"
import { getTranslations } from "next-intl/server"

import { toTitleCase } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Icons } from "@/components/icons"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { PageLink } from "@/components/page-link"

import PageSection from "../../_components/page-section"

interface ConditionsWeTreatProps {
  params: Promise<{
    treatmentId: string
    locale: string
  }>
}

const treatmentsConfig: {
  name: string
  title: string
  description: string
  image: {
    src: string
    alt: string
    width: number
    height: number
  }
  items: {
    title: string
    href: string
  }[]
  approach: {
    name: string
    title: string
    description: string
    image: {
      src: string
      alt: string
      width: number
      height: number
    }
  }
}[] = [
  {
    name: "MentalHealthConditions",
    title: "treatmentHeading",
    description: "treatmentDescription",
    image: {
      src: "/images/howwetreat-section.webp",
      alt: "EMT",
      width: 2160,
      height: 2880,
    },
    items: [
      { title: "treatmentItem1Title", href: "#" },
      { title: "treatmentItem2Title", href: "#" },
      { title: "treatmentItem3Title", href: "#" },
      { title: "treatmentItem4Title", href: "#" },
      { title: "treatmentItem5Title", href: "#" },
      { title: "treatmentItem6Title", href: "#" },
      { title: "treatmentItem7Title", href: "#" },
      { title: "treatmentItem8Title", href: "#" },
      { title: "treatmentItem9Title", href: "#" },
      { title: "treatmentItem10Title", href: "#" },
      { title: "treatmentItem11Title", href: "#" },
      { title: "treatmentItem12Title", href: "#" },
      { title: "treatmentItem13Title", href: "#" },
      { title: "treatmentItem14Title", href: "#" },
    ],
    approach: {
      name: "approachEyebrow",
      title: "approachHeading",
      description: "approachDescription",
      image: {
        src: "/images/howwetreat-section.webp",
        alt: "EMT",
        width: 2160,
        height: 2880,
      },
    },
  },
  {
    name: "DependenciesAndAddictions",
    title: "treatmentHeading",
    description: "treatmentDescription",
    image: {
      src: "/images/howwetreat-section.webp",
      alt: "EMT",
      width: 2160,
      height: 2880,
    },
    items: [
      { title: "treatmentItem1Title", href: "#" },
      { title: "treatmentItem2Title", href: "#" },
      { title: "treatmentItem3Title", href: "#" },
      { title: "treatmentItem4Title", href: "#" },
    ],
    approach: {
      name: "approachEyebrow",
      title: "approachHeading",
      description: "approachDescription",
      image: {
        src: "/images/howwetreat-section.webp",
        alt: "EMT",
        width: 2160,
        height: 2880,
      },
    },
  },
  {
    name: "EatingDisorder",
    title: "treatmentHeading",
    description: "treatmentDescription",
    image: {
      src: "/images/howwetreat-section.webp",
      alt: "EMT",
      width: 2160,
      height: 2880,
    },
    items: [
      { title: "treatmentItem1Title", href: "#" },
      { title: "treatmentItem2Title", href: "#" },
      { title: "treatmentItem3Title", href: "#" },
      { title: "treatmentItem4Title", href: "#" },
      { title: "treatmentItem5Title", href: "#" },
      { title: "treatmentItem6Title", href: "#" },
    ],
    approach: {
      name: "approachEyebrow",
      title: "approachHeading",
      description: "approachDescription",
      image: {
        src: "/images/howwetreat-section.webp",
        alt: "EMT",
        width: 2160,
        height: 2880,
      },
    },
  },
]

const howWeTreatConfig = [
  {
    title: "howWeTreatItem1Title",
    description: "howWeTreatItem1Description",
    link: "howWeTreatItem1Link",
    slug: "#",
  },
  {
    title: "howWeTreatItem2Title",
    description: "howWeTreatItem2Description",
    link: "howWeTreatItem2Link",
    slug: "#",
  },
  {
    title: "howWeTreatItem3Title",
    description: "howWeTreatItem3Description",
    link: "howWeTreatItem3Link",
    slug: "#",
  },
  {
    title: "howWeTreatItem4Title",
    description: "howWeTreatItem4Description",
    link: "howWeTreatItem4Link",
    slug: "#",
  },
  {
    title: "howWeTreatItem5Title",
    description: "howWeTreatItem5Description",
    link: "howWeTreatItem5Link",
    slug: "#",
  },
  {
    title: "howWeTreatItem6Title",
    description: "howWeTreatItem6Description",
    link: "howWeTreatItem6Link",
    slug: "#",
  },
  {
    title: "howWeTreatItem7Title",
    description: "howWeTreatItem7Description",
    link: "howWeTreatItem7Link",
    slug: "#",
  },
  {
    title: "howWeTreatItem8Title",
    description: "howWeTreatItem8Description",
    link: "howWeTreatItem8Link",
    slug: "#",
  },
  {
    title: "howWeTreatItem9Title",
    description: "howWeTreatItem9Description",
    link: "howWeTreatItem9Link",
    slug: "#",
  },
  {
    title: "howWeTreatItem10Title",
    description: "howWeTreatItem10Description",
    link: "howWeTreatItem10Link",
    slug: "#",
  },
  {
    title: "howWeTreatItem11Title",
    description: "howWeTreatItem11Description",
    link: "howWeTreatItem11Link",
    slug: "#",
  },
] as const

export async function generateMetadata({
  params,
}: ConditionsWeTreatProps): Promise<Metadata> {
  const treatmentParams = await params

  const treatmentId = toTitleCase(
    decodeURIComponent(treatmentParams.treatmentId).replaceAll("-", " ")
  ).replaceAll(" ", "")

  const treatment = treatmentsConfig.find((item) => item.name === treatmentId)

  if (!treatment) {
    return {}
  }

  const t = await getTranslations({
    locale: treatmentParams.locale,
    namespace: treatmentId,
  })

  return {
    metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
    title: t(treatment.title),
    description: t(treatment.description),
  }
}

export default async function ConditionsWeTreat({
  params,
}: ConditionsWeTreatProps) {
  const treatmentParams = await params
  const treatmentId = toTitleCase(
    decodeURIComponent(treatmentParams.treatmentId).replaceAll("-", " ")
  ).replaceAll(" ", "")

  const treatment = treatmentsConfig.find((item) => item.name === treatmentId)

  if (!treatment) {
    notFound()
  }

  const tConditionsWeTreat = await getTranslations({
    locale: treatmentParams.locale,
    namespace: "ConditionsWeTreat",
  })

  const tTreatment = await getTranslations({
    locale: treatmentParams.locale,
    namespace: treatmentId,
  })

  return (
    <>
      <section className="flex w-full flex-col items-stretch md:flex-row">
        <div className="flex flex-col md:w-1/2">
          <PageHeader
            className="container gap-0 md:h-dvh"
            as="article"
            centered
          >
            <PageHeaderHeading className="heading-4xl flex items-center py-20 text-center md:grow md:py-0">
              {tTreatment(treatment.title)}
            </PageHeaderHeading>
            <PageHeaderDescription className="subtitle-md text-foreground pb-20 md:h-1/5 md:pb-0">
              {tConditionsWeTreat("pagePhrase")}
            </PageHeaderDescription>
          </PageHeader>
          <div className="md:hidden">
            <Image
              src={treatment.image.src}
              alt={treatment.image.alt}
              width={treatment.image.width}
              height={treatment.image.height}
              sizes="(min-width: 1536px) 1536px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px, (min-width: 768px) 768px, (min-width: 640px) 640px, 100vw"
              className="aspect-square w-full object-cover object-center"
            />
          </div>
          <article>
            <p className="subtitle-md px-5 py-10 md:px-[3dvw]">
              {tTreatment(treatment.description)}
            </p>
            <ul>
              {treatment.items.map((treatmentItem, index) => (
                <li key={index} className="border-t last:border-b">
                  <Link
                    href={treatmentItem.href}
                    className="subtitle-md flex items-center justify-between px-5 py-8 md:px-[3dvw]"
                  >
                    {tTreatment(treatmentItem.title)}
                    <Icons.arrowRight />
                  </Link>
                </li>
              ))}
            </ul>
          </article>
          <article className="container flex flex-col gap-10 px-5 py-20 text-center md:px-[3dvw]">
            <h2 className="heading-xl grid">
              {tConditionsWeTreat("contactHeading")
                .split("\n")
                .map((item, index) => (
                  <span key={index}>{item}</span>
                ))}
            </h2>
            <p className="paragraph">
              {tConditionsWeTreat("contactDescription")}
            </p>
            <PageLink to="contact" variant="link" />
          </article>
        </div>
        <div className="relative hidden md:block md:w-1/2">
          <Image
            src={treatment.image.src}
            alt={treatment.image.alt}
            width={treatment.image.width}
            height={treatment.image.height}
            sizes="(min-width: 1536px) 1536px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px, (min-width: 768px) 768px, (min-width: 640px) 640px, 100vw"
            className="sticky top-0 aspect-square h-dvh w-full object-cover object-center"
          />
        </div>
      </section>
      <PageSection
        name={tTreatment(treatment.approach.name)}
        title={tTreatment(treatment.approach.title)}
        description={tTreatment(treatment.approach.description)}
        image={{
          src: treatment.approach.image.src,
          alt: treatment.approach.image.alt,
          width: treatment.approach.image.width,
          height: treatment.approach.image.height,
        }}
        className="bg-muted lg:border-t"
        headingHeight
        imageBetween
        rowReverse
        divider
      >
        <Accordion className="rounded-none border-none">
          {howWeTreatConfig.map((item) => (
            <AccordionItem
              key={tConditionsWeTreat(item.title)}
              value={tConditionsWeTreat(item.title)}
              className="p-0"
            >
              <AccordionTrigger className="py-8 md:px-5 md:pr-[3dvw]">
                <span className="subtitle-md font-normal">
                  {tConditionsWeTreat(item.title)}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-8 md:px-6">
                <p className="paragraph text-base">
                  {tConditionsWeTreat(item.description)}
                </p>
                <div className="mt-5 w-fit">
                  <Link
                    href={item.slug}
                    className="text-sm font-medium tracking-wide uppercase"
                  >
                    {tConditionsWeTreat(item.link)}
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </PageSection>
    </>
  )
}
