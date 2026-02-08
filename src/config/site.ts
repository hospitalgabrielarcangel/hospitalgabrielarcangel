import type { Author } from "next/dist/lib/metadata/types/metadata-types"
import { env } from "@/env.mjs"
import type { FooterItem, MainNavItem } from "@/types"

import "@/lib/utils"

import { createCallUrl, createEmailUrl, createWhatsappUrl } from "@/lib/utils"

const phoneNumbers = {
  male: env.NEXT_PUBLIC_PHONE_NUMBER_MALE,
  female: env.NEXT_PUBLIC_PHONE_NUMBER_FEMALE,
} as const

const emails = {
  contact: env.NEXT_PUBLIC_CONTACT_EMAIL,
} as const

const links = {
  facebook: "https://www.facebook.com/ClinicaGabrielArcangelAC",
  instagram: "https://www.instagram.com/clinicagabrielarcangel",
  youtube: "https://www.youtube.com/@hospitalgabrielarcangel",
  twitter: "https://x.com/GArcangelH",
  tiktok: "https://www.tiktok.com/@hospitalgabrielarcangel",
  whatsapp: createWhatsappUrl(phoneNumbers.male),
  facebookFemale: "https://www.facebook.com/hospitalgabrielarcangelfemenill",
  instagramFemale: "https://www.instagram.com/clinica.arcangel.femenil",
  twitterFemale: "https://x.com/GArcangelHFem",
  tiktokFemale: "https://www.tiktok.com/@gabrielarcangelfemenil",
  whatsappFemale: createWhatsappUrl(phoneNumbers.female),
  email: createEmailUrl(emails.contact),
} as const

export const siteConfig = {
  name: "El Camino a Gabriel Arcángel",
  description:
    "Un enfoque médico, integral y personalizado en cada etapa de la recuperación física, mental y emocional — ayudando a sanar dependencias a sustancias y adicciones",
  url: env.NEXT_PUBLIC_APP_URL,
  links,
  phoneNumbers,
  emails,
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
          href: links.facebook,
          icon: "facebook",
          external: true,
        },
        {
          title: "Instagram",
          href: links.instagram,
          icon: "instagram",
          external: true,
        },
        {
          title: "YouTube",
          href: links.youtube,
          icon: "youtube",
          external: true,
        },
        {
          title: "X",
          href: links.twitter,
          icon: "twitter",
          external: true,
        },
        {
          title: "TikTok",
          href: links.tiktok,
          icon: "tiktok",
          external: true,
        },
        {
          title: "Whatsapp",
          href: links.whatsapp,
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
          href: createEmailUrl(emails.contact),
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
