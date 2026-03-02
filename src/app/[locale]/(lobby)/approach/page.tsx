import Image from "next/image"
import { useTranslations } from "next-intl"

import { cn } from "@/lib/utils"
import { PageLink, type PageLinkToProp } from "@/components/page-link"

import { ContactBanner } from "../_components/contact-banner"
import { PageSectionHeader } from "../_components/page-section"

const ourApproachSctions = [
  {
    title: "assessmentsHeading",
    descripion: "assessmentsDescription",
    href: "assessments",
    image: {
      src: "/images/howwetreat-section.webp",
      alt: "assessmentsImageAlt",
      width: 2160,
      height: 2880,
    },
  },
  {
    title: "programmesHeading",
    descripion: "programmesDescription",
    href: "programmes",
    image: {
      src: "/images/howwetreat-section.webp",
      alt: "programmesImageAlt",
      width: 2160,
      height: 2880,
    },
  },
  {
    title: "techHeading",
    descripion: "techDescription",
    href: "tech",
    image: {
      src: "/images/howwetreat-section.webp",
      alt: "techImageAlt",
      width: 2160,
      height: 2880,
    },
  },
  {
    title: "therapieHeading",
    descripion: "therapieDescription",
    href: "therapies",
    image: {
      src: "/images/howwetreat-section.webp",
      alt: "therapieImageAlt",
      width: 2160,
      height: 2880,
    },
  },
  {
    title: "residenceHeading",
    descripion: "residenceDescription",
    href: "residences",
    image: {
      src: "/images/howwetreat-section.webp",
      alt: "residenceImageAlt",
      width: 2160,
      height: 2880,
    },
  },
]

export default function ApproachPage() {
  const t = useTranslations("ApproachPage")

  return (
    <>
      <section className="bg-muted -mt-20 border-b">
        <div className="container pt-70 pb-12 md:pt-84">
          <div className="max-w-6xl space-y-5">
            <p className="eyebrow text-muted-foreground">
              {t("headerEyebrowPage")}
            </p>
            <h1 className="heading-4xl">{t("headerHeadingPage")}</h1>
          </div>
        </div>
        <Image
          src="/images/howwetreat-section.webp"
          alt={t("headerImageAlt")}
          width={2160}
          height={2880}
          sizes="(min-width: 1536px) 1536px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px, (min-width: 768px) 768px, (min-width: 640px) 640px, 100vw"
          loading="lazy"
          className="h-128 w-full object-cover object-center lg:h-dvh"
        />
      </section>
      <section className="border-b">
        <div className="container flex flex-col-reverse gap-y-10 pt-28 pb-20 md:flex-row md:pt-50 md:pb-40">
          <div className="md:w-1/2 md:pr-8">
            <iframe
              width={1920}
              height={1080}
              src="https://www.youtube.com/embed/ruzJnSyAxV4"
              title={t("videoTitle")}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="aspect-video h-auto w-full"
            />
          </div>
          <div className="flex flex-col justify-center gap-4 md:w-1/2 md:pl-5">
            <p className="eyebrow">{t("videoEyebrow")}</p>
            <h2 className="heading-2xl">{t("videoHeading")}</h2>
            <p className="paragraph">{t("videoDescription")}</p>
          </div>
        </div>
      </section>
      <section className="container flex flex-col gap-y-5 py-20 lg:flex-row">
        <div className="text-muted-foreground lg:w-1/3">
          <p className="eyebrow">{t("methodEyebrow")}</p>
        </div>
        <div className="lg:w-2/3">
          <p className="subtitle-md flex flex-col gap-y-5">
            {t("methodDescription")
              .split("\n")
              .map((paragraph, index) => (
                <span key={index}>{paragraph}</span>
              ))}
          </p>
        </div>
      </section>
      {ourApproachSctions.map((approachSectionItem, approachSectionKey) => (
        <section key={approachSectionKey}>
          <div
            className={cn(
              "container flex flex-col items-center py-32 md:flex-row-reverse",
              approachSectionKey % 2 === 0 && "md:flex-row"
            )}
          >
            <div
              className={cn(
                "flex flex-col gap-y-8 md:w-1/2",
                approachSectionKey % 2 === 0 ? "pr-6" : "pl-6"
              )}
            >
              <h2 className="heading-2xl">{t(approachSectionItem.title)}</h2>
              <div className="space-y-4">
                {t(approachSectionItem.descripion)
                  .split("\n")
                  .map((paragraphItem, paragraphKey) => (
                    <p className="paragraph" key={`paragraph-${paragraphKey}`}>
                      {paragraphItem}
                    </p>
                  ))}
              </div>
              <PageLink
                to={approachSectionItem.href as PageLinkToProp}
                variant="link"
              />
            </div>
            <div className="md:w-1/2">
              <Image
                src={approachSectionItem.image.src}
                alt={approachSectionItem.image.alt}
                width={approachSectionItem.image.width}
                height={approachSectionItem.image.height}
                sizes="(min-width: 1536px) 1536px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px, (min-width: 768px) 768px, (min-width: 640px) 640px, 100vw"
                loading="lazy"
                className={cn(
                  "aspect-square h-128 object-cover object-center",
                  approachSectionKey % 2 === 0 ? "pl-[3dvw]" : "pr-[3dvw]"
                )}
              />
            </div>
          </div>
        </section>
      ))}
      <div className="bg-muted relative h-10 w-full border-t">
        <div className="bg-border absolute top-0 left-1/2 h-24 w-px" />
      </div>
      <PageSectionHeader
        heading="A truly meaningful experience"
        description="We are the only treatment centre in the world to provide a minimum of 15 dedicated professionals to each client. So, throughout your stay, you will be guided by a team of world-renowned doctors, therapists, and specialists.\nHear directly from the minds and hearts of our staff below."
        eyebrow="Expertise"
        link={{ to: "ourTeam" }}
        size="xl"
        centered
        className="bg-muted"
      />
      <ContactBanner muted />
    </>
  )
}
