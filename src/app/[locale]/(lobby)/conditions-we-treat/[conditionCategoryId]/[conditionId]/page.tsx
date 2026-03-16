import { type Metadata } from "next"
import { notFound } from "next/navigation"
import { env } from "@/env.mjs"
import { getTranslations } from "next-intl/server"

import { conditionsCategories } from "@/config/treatment"
import { toPascalCase } from "@/lib/utils"

import Condition from "./_components/Condition"

export interface ConditionPageMetadataProps {
  readonly params: Promise<{
    conditionId: string
    locale: string
  }>
}

export async function generateMetadata({
  params,
}: ConditionPageMetadataProps): Promise<Metadata> {
  const { conditionId, locale } = await params

  const [conditionTreatment] = conditionsCategories
    .map((conditionCategory) => {
      const conditionTreatmentItem = conditionCategory.conditions.find(
        (item) => item.name === conditionId
      )
      if (!!conditionTreatmentItem) {
        return conditionTreatmentItem
      }
    })
    .filter(Boolean)

  if (!conditionTreatment) {
    notFound()
  }

  const t = await getTranslations({
    locale: locale,
    namespace: toPascalCase(conditionTreatment.name),
  })

  return {
    metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
    title: t("pageHeading"),
    description: t("conditionDescription"),
  }
}

export interface ConditionPageProps {
  readonly params: Promise<{
    conditionId: string
  }>
}

export default async function ConditionPage({ params }: ConditionPageProps) {
  const { conditionId } = await params

  const [conditionTreatment] = conditionsCategories
    .map((conditionCategory) => {
      const conditionTreatmentItem = conditionCategory.conditions.find(
        (item) => item.name === conditionId
      )
      if (!!conditionTreatmentItem) {
        return conditionTreatmentItem
      }
    })
    .filter(Boolean)

  if (!conditionTreatment) {
    notFound()
  }

  return <Condition {...conditionTreatment} />
}
