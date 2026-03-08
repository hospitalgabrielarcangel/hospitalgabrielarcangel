import { type Metadata } from "next"
import { notFound } from "next/navigation"
import { env } from "@/env.mjs"
import { getTranslations } from "next-intl/server"

import { conditionsWeTreatConfig } from "@/config/treatment"
import { toPascalCase } from "@/lib/utils"

import Condition from "../../_components/condition"

export interface DependenciesAndAddictionsConditionPagePsrops {
  readonly params: Promise<{
    conditionId: string
    locale: string
  }>
}

export async function generateMetadata({
  params,
}: DependenciesAndAddictionsConditionPagePsrops): Promise<Metadata> {
  const { conditionId, locale } = await params

  const condition = conditionsWeTreatConfig.find(
    (item) => item.page.name === "DependenciesAndAddictions"
  )

  if (!condition) {
    notFound()
  }

  const conditionItem = condition.conditions.find(
    (item) => item.name === conditionId
  )

  if (!conditionItem) {
    notFound()
  }

  const t = await getTranslations({
    locale: locale,
    namespace: toPascalCase(conditionItem.name),
  })

  return {
    metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
    title: t(conditionItem.title),
    description: t(conditionItem.info.description),
  }
}

export default async function DependenciesAndAddictionsConditionsPage({
  params,
}: DependenciesAndAddictionsConditionPagePsrops) {
  const { conditionId } = await params

  const condition = conditionsWeTreatConfig.find(
    (item) => item.page.name === "DependenciesAndAddictions"
  )

  if (!condition) {
    notFound()
  }

  const conditionItem = condition.conditions.find(
    (item) => item.name === conditionId
  )

  if (!conditionItem) {
    notFound()
  }

  return <Condition condition={conditionItem} />
}
