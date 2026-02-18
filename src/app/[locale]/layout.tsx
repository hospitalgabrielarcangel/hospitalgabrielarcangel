import type { Metadata, Viewport } from "next"
import { notFound } from "next/navigation"
import { env } from "@/env.mjs"
import { LOCALE, routing } from "@/i18n/routing"
import type { LayoutWithLocaleProps, LocaleParams } from "@/types"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, getTranslations } from "next-intl/server"

import { siteConfig } from "@/config/site"
import { figtree, geistMono, geistSans, recklessNeue } from "@/lib/fonts"
import { Toaster } from "@/components/ui/sonner"
import GoogleSearchScript from "@/components/layouts/google-seacrch-script"
import { TailwindIndicator } from "@/components/tailwind-indicator"

import "@/app/globals.css"

export async function generateMetadata({
  params,
}: LocaleParams): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "SiteMeta" })
  const defaultLocale =
    LOCALE.find((localeItem) => localeItem.set1 === locale) || LOCALE[0]

  return {
    metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
    title: {
      default: siteConfig.name,
      template: `${siteConfig.name} — %s`,
    },
    description: t("description"),
    keywords: [
      "hospital el camino a gabriel arcangel",
      "clinica hospitalizada contra adicciones",
    ],
    authors: siteConfig.author,
    creator: siteConfig.author.name,
    publisher: siteConfig.author.name,
    applicationName: siteConfig.name,
    generator: "Next.js",
    robots: "index, follow",
    openGraph: {
      type: "website",
      locale: defaultLocale.nlsLang,
      alternateLocale: LOCALE.map((localeItem) => localeItem.nlsLang).filter(
        (nlsLangItem) => nlsLangItem !== defaultLocale.nlsLang
      ),
      url: siteConfig.url,
      title: siteConfig.name,
      description: t("description"),
      images: [`${siteConfig.url}/opengraph-image.jpg`],
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description: t("description"),
      images: [`${siteConfig.url}/opengraph-image.jpg`],
      creator: "@saufth",
    },
  } satisfies Metadata
}

export const viewport: Viewport = {
  width: "device-width",
  userScalable: true,
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
}

export default async function RootLayout({
  children,
  params,
}: LayoutWithLocaleProps) {
  const { locale } = await params
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound()
  }
  // Providing all messages to the client
  const messages = await getMessages()

  return (
    <html lang={locale} className={figtree.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${recklessNeue.variable} bg-background text-foreground min-h-screen scroll-smooth!`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
          <Toaster />
          <TailwindIndicator />
        </NextIntlClientProvider>
        <GoogleSearchScript />
      </body>
    </html>
  )
}
