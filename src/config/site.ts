import type { Author } from "next/dist/lib/metadata/types/metadata-types"
import { env } from "@/env.mjs"
import type { FooterItem, MainNavItem } from "@/types"

import "@/lib/utils"

import { createCallUrl, createEmailUrl, createWhatsappUrl } from "@/lib/utils"

const links = {
  facebook: "https://www.facebook.com/ClinicaGabrielArcangelAC",
  instagram: "https://www.instagram.com/clinicagabrielarcangel",
  youtube: "https://www.youtube.com/@hospitalgabrielarcangel",
  twitter: "https://x.com/GArcangelH",
  tiktok: "https://www.tiktok.com/@hospitalgabrielarcangel",
  facebookFemale: "https://www.facebook.com/hospitalgabrielarcangelfemenill",
  instagramFemale: "https://www.instagram.com/clinica.arcangel.femenil",
  twitterFemale: "https://x.com/GArcangelHFem",
  tiktokFemale: "https://www.tiktok.com/@gabrielarcangelfemenil",
}

const phoneNumbers = {
  male: env.NEXT_PUBLIC_PHONE_NUMBER_MALE,
  female: env.NEXT_PUBLIC_PHONE_NUMBER_FEMALE,
}

const emails = {
  contact: env.NEXT_PUBLIC_CONTACT_EMAIL,
}

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
          title: "X",
          href: links.twitter,
          external: true,
        },
        {
          title: "TikTok",
          href: links.tiktok,
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
          external: true,
        },
        {
          title: "whatsappTitle",
          href: createWhatsappUrl(phoneNumbers.male),
          external: true,
        },
        {
          title: "callUsTitle",
          href: createCallUrl(phoneNumbers.male),
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
