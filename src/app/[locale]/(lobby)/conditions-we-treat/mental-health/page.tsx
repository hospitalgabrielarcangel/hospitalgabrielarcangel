import { type Metadata } from "next"
import { notFound } from "next/navigation"
import { env } from "@/env.mjs"
import { LocaleParams } from "@/types"
import { getTranslations } from "next-intl/server"

import { conditionsWeTreatConfig } from "@/config/treatment"

import ConditionsWeTreat from "../_components/conditions-we-treat"

export async function generateMetadata({
  params,
}: LocaleParams): Promise<Metadata> {
  const localeParam = await params

  const condition = conditionsWeTreatConfig.find(
    (item) => item.page.name === "MentalHealth"
  )

  if (!condition) {
    notFound()
  }

  const t = await getTranslations({
    locale: localeParam.locale,
    namespace: "MentalHealth",
  })

  return {
    metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
    title: t(condition.page.title),
    description: t(condition.page.description),
  }
}

export default function MentalHealthPage() {
  const condition = conditionsWeTreatConfig.find(
    (item) => item.page.name === "MentalHealth"
  )

  if (!condition) {
    notFound()
  }

  return <ConditionsWeTreat condition={condition.page} />
}
