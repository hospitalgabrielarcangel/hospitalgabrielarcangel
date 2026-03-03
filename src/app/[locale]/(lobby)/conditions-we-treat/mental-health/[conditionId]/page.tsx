// import { type Metadata } from "next"
import { notFound } from "next/navigation"

// import { env } from "@/env.mjs"
// import { LocaleParams } from "@/types"
// import { getTranslations } from "next-intl/server"

import { conditionsWeTreatConfig } from "@/config/treatment"

import Condition from "../../_components/condition"

// export async function generateMetadata({
//   params,
// }: LocaleParams): Promise<Metadata> {
//   const localeParam = await params

//   const condition = conditionsWeTreatConfig.find(
//     (item) => item.page.name === "MentalHealth"
//   )

//   if (!condition) {
//     notFound()
//   }

//   const conditionItem = condition.conditions.find(
//     (item) => item.name === "Depression"
//   )

//   if (!conditionItem) {
//     notFound()
//   }

//   const t = await getTranslations({
//     locale: localeParam.locale,
//     namespace: "Depression",
//   })

//   return {
//     metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
//     title: t(condition.page.title),
//     description: t(condition.page.description),
//   }
// }

export interface DepressionPageProps {
  readonly params: Promise<{
    conditionId: string
  }>
}

export default async function DepressionPage({ params }: DepressionPageProps) {
  const { conditionId } = await params
  const condition = conditionsWeTreatConfig.find(
    (item) => item.page.name === "MentalHealth"
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
