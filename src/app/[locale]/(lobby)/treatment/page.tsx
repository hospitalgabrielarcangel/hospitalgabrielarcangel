import Image from "next/image"
import type { Item } from "@/types"
import { useTranslations } from "next-intl"

import { PageLink, PageLinkTitle } from "@/components/page-link"

const conditionsWeTreatConfig: (Omit<Item, "name"> & {
  href: PageLinkTitle
})[] = [
  {
    title: "Mental health conditions",
    description:
      "While each mental health condition will be unique, there is one constant throughout them all: loneliness. Mental ill-health isolates us, especially when we mistake our condition for our identity, as it leads to misguided beliefs about personal weakness. In reality, mental illness, like physical illness, can impact anyone. At Paracelsus Recovery, we understand the profound physical, psychological, or neurobiological pain that accompanies this alienation. Our team is here to help you process that pain and overcome your mental health issues.",
    href: "mentalHealthConditions",
  },
  {
    title: "Addictions and dependencies",
    description:
      "There are few states of being as terrifying as realising you have completely lost control over your substance abuse. Addiction and dependencies serve as coping mechanisms for underlying emotional pain, stress, or mental health challenges until that coping mechanism becomes your main source of pain. Whether it’s substance abuse, behavioural addictions, or reliance on prescription medications, our team can help you regain a sense of autonomy and live a life free of that fear and shame that the addiction thrives on.",
    href: "dependenciesAndAddictions",
  },
  {
    title: "Eating disorders",
    description:
      "Eating disorders can take over our lives before we’ve even come to terms with the fact we are struggling with one. They are complex and multifaceted conditions with psychological, emotional, and societal root causes. At Paracelsus Recovery, we can help you overcome that fear of losing control. The multidisciplinary approach we take at our eating disorder rehabilitation centre targets the underlying issues at work in your relationship to food, such as trauma, anxiety, or perfectionism.",
    href: "eatingDisorder",
  },
]

export default function TreatmentPage() {
  const t = useTranslations("TreatmentPage")

  return (
    <>
      <section className="bg-muted -mt-20 border-b">
        <div className="container pt-70 pb-12 md:pt-84">
          <div className="max-w-6xl space-y-5">
            <p className="eyebrow text-muted-foreground">{t("eyebrowPage")}</p>
            <h1 className="heading-4xl">{t("headingPage")}</h1>
          </div>
        </div>
        <Image
          src="/images/about-us-hero.webp"
          alt="EMT"
          width={2160}
          height={2880}
          sizes="(min-width: 1536px) 1536px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px, (min-width: 768px) 768px, (min-width: 640px) 640px, 100vw"
          loading="lazy"
          className="h-96 w-full object-cover object-center lg:h-dvh"
        />
        <div className="container flex flex-col gap-y-5 py-20 lg:flex-row">
          <div className="text-muted-foreground lg:w-1/3">
            <p className="eyebrow">{t("phrasePage")}</p>
          </div>
          <div className="lg:w-2/3">
            <p className="subtitle-md flex flex-col gap-y-5">
              {t("descriptionPage")
                .split("\n")
                .map((paragraph, index) => (
                  <span key={index}>{paragraph}</span>
                ))}
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-stretch md:flex-row-reverse">
        <div className="flex flex-col md:w-1/2 md:px-[3dvw]">
          {conditionsWeTreatConfig.map((item, index) => (
            <article
              key={index}
              className="flex flex-col items-start gap-y-10 border-b py-20 last:border-b-0"
            >
              <h2 className="heading-xl">{item.title}</h2>
              <p className="paragraph">{item.description}</p>
              <PageLink to={item.href} variant="link">
                Saber más
              </PageLink>
            </article>
          ))}
        </div>
        <div className="py-6 md:relative md:w-1/2">
          <div className="px-5 md:sticky md:top-0 md:pl-[3dvw]">
            <Image
              src="/images/about-us-hero.webp"
              alt="EMT"
              width={2160}
              height={2880}
              sizes="(min-width: 1536px) 1536px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px, (min-width: 768px) 768px, (min-width: 640px) 640px, 100vw"
              loading="lazy"
              className="aspect-3/4 w-full object-cover object-center md:h-dvh"
            />
          </div>
        </div>
      </section>
    </>
  )
}
