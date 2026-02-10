import type { Author } from "next/dist/lib/metadata/types/metadata-types"
import { env } from "@/env.mjs"
import type { FooterItem, MainNavItem } from "@/types"

import "@/lib/utils"

import { createCallUrl, createEmailUrl, createWhatsappUrl } from "@/lib/utils"

const genres = ["male", "female"] as const

const phoneNumbers = {
  male: env.NEXT_PUBLIC_PHONE_NUMBER_MALE,
  female: env.NEXT_PUBLIC_PHONE_NUMBER_FEMALE,
} as const

const emails = {
  male: env.NEXT_PUBLIC_CONTACT_EMAIL_MALE,
  female: env.NEXT_PUBLIC_CONTACT_EMAIL_FEMALE,
} as const

const linksMale = {
  facebook: "https://www.facebook.com/ClinicaGabrielArcangelAC",
  instagram: "https://www.instagram.com/clinicagabrielarcangel",
  youtube: "https://www.youtube.com/@hospitalgabrielarcangel",
  twitter: "https://x.com/GArcangelH",
  tiktok: "https://www.tiktok.com/@hospitalgabrielarcangel",
} as const

const linksFemale = {
  facebook: "https://www.facebook.com/hospitalgabrielarcangelfemenill",
  instagram: "https://www.instagram.com/clinica.arcangel.femenil",
  twitter: "https://x.com/GArcangelHFem",
  tiktok: "https://www.tiktok.com/@gabrielarcangelfemenil",
} as const

const addresses = {
  male: {
    title: "male",
    description: env.NEXT_PUBLIC_ADDRESS_MALE,
    href: env.NEXT_PUBLIC_ADDRESS_LINK_MALE,
  },
  female: {
    title: "female",
    description: env.NEXT_PUBLIC_ADDRESS_FEMALE,
    href: env.NEXT_PUBLIC_ADDRESS_LINK_FEMALE,
  },
} as const

export const siteConfig = {
  name: "El Camino a Gabriel Arcángel",
  description:
    "Un enfoque médico, integral y personalizado en cada etapa de la recuperación física, mental y emocional — ayudando a sanar dependencias a sustancias y adicciones",
  url: env.NEXT_PUBLIC_APP_URL,
  genres,
  linksMale,
  linksFemale,
  phoneNumbers,
  emails,
  addresses,
  mainNav: [
    {
      title: "Inicio",
      href: "/",
    },
  ] satisfies MainNavItem[],
  footerNav: [
    {
      title: "socialTitle",
      items: [
        {
          title: "Facebook",
          href: linksMale.facebook,
          icon: "facebook",
          external: true,
        },
        {
          title: "Instagram",
          href: linksMale.instagram,
          icon: "instagram",
          external: true,
        },
        {
          title: "YouTube",
          href: linksMale.youtube,
          icon: "youtube",
          external: true,
        },
        {
          title: "X",
          href: linksMale.twitter,
          icon: "twitter",
          external: true,
        },
        {
          title: "TikTok",
          href: linksMale.tiktok,
          icon: "tiktok",
          external: true,
        },
        {
          title: "Whatsapp",
          href: createWhatsappUrl(phoneNumbers.male),
          icon: "whatsapp",
          external: true,
        },
      ],
    },
    {
      title: "contactTitle",
      items: [
        {
          title: "emailTitle",
          href: createEmailUrl(emails.male),
          icon: "mail",
          external: true,
        },
        {
          title: "whatsappTitle",
          href: createWhatsappUrl(phoneNumbers.male),
          icon: "whatsapp",
          external: true,
        },
        {
          title: "callUsTitle",
          href: createCallUrl(phoneNumbers.male),
          icon: "call",
          external: true,
        },
      ],
    },
  ] satisfies FooterItem[],
  author: {
    name: "Saufth",
    url: "https://x.com/saufth",
  } satisfies Required<Author>,
} as const

export type SiteConfig = typeof siteConfig
