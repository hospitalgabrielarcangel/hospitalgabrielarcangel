import { type Metadata } from "next"
import { notFound } from "next/navigation"
import { env } from "@/env.mjs"
import { getTranslations } from "next-intl/server"

import { dependenciesAndAddictions } from "@/config/treatment"
import { toPascalCase } from "@/lib/utils"

import Condition from "../_components/Condition"

export interface ConditionPageMetadataProps {
  readonly params: Promise<{
    dependenciesAndAddictionsId: string
    locale: string
  }>
}

export async function generateMetadata({
  params,
}: ConditionPageMetadataProps): Promise<Metadata> {
  const { dependenciesAndAddictionsId, locale } = await params

  const dependency = dependenciesAndAddictions.find(
    (dependenciesAndAddictionsItem) =>
      dependenciesAndAddictionsItem.name === dependenciesAndAddictionsId
  )

  if (!dependency) {
    notFound()
  }

  const t = await getTranslations({
    locale: locale,
    namespace: toPascalCase(dependency.name),
  })

  return {
    metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
    title: t("pageHeading"),
    description: t("conditionDescription"),
  }
}

export interface ConditionPageProps {
  readonly params: Promise<{
    dependenciesAndAddictionsId: string
  }>
}

export default async function DependenciesAndAddictionsPage({
  params,
}: ConditionPageProps) {
  const { dependenciesAndAddictionsId } = await params

  const dependency = dependenciesAndAddictions.find(
    (dependenciesAndAddictionsItem) =>
      dependenciesAndAddictionsItem.name === dependenciesAndAddictionsId
  )

  if (!dependency) {
    notFound()
  }

  return <Condition {...dependency} />
}
