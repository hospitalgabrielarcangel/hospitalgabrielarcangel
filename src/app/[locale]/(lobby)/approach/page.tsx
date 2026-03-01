import Image from "next/image"
import { useTranslations } from "next-intl"

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
              src="https://www.youtube.com/embed/FH9mMdbj5C8"
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
    </>
  )
}
