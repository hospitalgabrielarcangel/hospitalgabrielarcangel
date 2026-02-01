import type { Author } from "next/dist/lib/metadata/types/metadata-types"
import { env } from "@/env.mjs"
import type { FooterItem, MainNavItem } from "@/types"

import { createWhatsappUrl, formatPhoneNumber } from "@/lib/utils"

const links = {
  twitter: "https://x.com/clinicarcangel",
  facebook: "https://www.facebook.com/hospitalgabrielarcangel",
  instagram: "https://www.instagram.com/hospitalgabrielarcangel",
  youtube: "https://www.youtube.com/@hospitalgabrielarcangel",
  tiktok: "https://www.tiktok.com/@hospitalgabrielarcangel",
}

const phoneNumbers = {
  male: env.NEXT_PUBLIC_PHONE_NUMBER_MALE,
  female: env.NEXT_PUBLIC_PHONE_NUMBER_FEMALE,
}

export const siteConfig = {
  name: "El Camino a Gabriel Arcángel",
  description:
    "Un enfoque médico, integral y personalizado en cada etapa de la recuperación física, mental y emocional — ayudando a sanar dependencias a sustancias y adicciones",
  url: env.NEXT_PUBLIC_APP_URL,
  links,
  phoneNumbers: Object.entries(phoneNumbers).map(([key, number]) => ({
    title: key,
    displayNumber: formatPhoneNumber(number),
    callUrl: `tel:${number}`,
    whatsappUrl: createWhatsappUrl(number),
  })),
  mainNav: [
    {
      title: "Inicio",
      href: "/",
    },
  ] satisfies MainNavItem[],
  footerNav: [
    {
      title: "Social",
      items: [
        {
          title: "Facebook",
          href: links.facebook,
          external: true,
        },
        {
          title: "Instagram",
          href: links.instagram,
          external: true,
        },
        {
          title: "YouTube",
          href: links.youtube,
          external: true,
        },
        {
          title: "Twitter",
          href: links.twitter,
          external: true,
        },
      ],
    },
  ] satisfies FooterItem[],
  author: {
    name: "Saufth",
    url: "https://x.com/saufth",
  } satisfies Required<Author>,
}

export type SiteConfig = typeof siteConfig
