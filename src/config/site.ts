import type { Author } from "next/dist/lib/metadata/types/metadata-types"
import { env } from "@/env.mjs"
import type { FooterItem, MainNavItem } from "@/types"

import "@/lib/utils"

import { createCallUrl, createEmailUrl, createWhatsappUrl } from "@/lib/utils"

const clinicGender = ["male", "female"] as const

const phoneNumbers = {
  male: env.NEXT_PUBLIC_PHONE_NUMBER_MALE,
  female: env.NEXT_PUBLIC_PHONE_NUMBER_FEMALE,
} as const

const emails = {
  male: env.NEXT_PUBLIC_CONTACT_EMAIL_MALE,
  female: env.NEXT_PUBLIC_CONTACT_EMAIL_FEMALE,
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

const links = {
  male: {
    facebook: "https://www.facebook.com/ClinicaGabrielArcangelAC",
    instagram: "https://www.instagram.com/clinicagabrielarcangel",
    youtube: "https://www.youtube.com/@hospitalgabrielarcangel",
    twitter: "https://x.com/GArcangelH",
    tiktok: "https://www.tiktok.com/@hospitalgabrielarcangel",
  },
  female: {
    facebook: "https://www.facebook.com/hospitalgabrielarcangelfemenill",
    instagram: "https://www.instagram.com/clinica.arcangel.femenil",
    twitter: "https://x.com/GArcangelHFem",
    tiktok: "https://www.tiktok.com/@gabrielarcangelfemenil",
  },
} as const

export const siteConfig = {
  name: "El Camino a Gabriel Arcángel",
  description:
    "Un enfoque médico, integral y personalizado en cada etapa de la recuperación física, mental y emocional — ayudando a sanar dependencias a sustancias y adicciones",
  url: env.NEXT_PUBLIC_APP_URL,
  clinicGender,
  links,
  phoneNumbers,
  emails,
  addresses,
  mainNav: [
    {
      title: "home",
      href: "/",
    },
    {
      title: "aboutUs",
      href: "/about-us",
    },
    {
      title: "whatWeTreat",
      href: "/what-we-treat",
    },
    {
      title: "ourPrograms",
      href: "/our-programs",
    },
    {
      title: "certifications",
      href: "/certifications",
    },
  ] satisfies MainNavItem[],
  footerNav: {
    male: [
      {
        title: "treatmentNavTitle",
        items: [
          {
            title: "approachNavItem",
            href: "#",
          },
          {
            title: "conditionsNavItem",
            href: "#",
          },
          {
            title: "assessmentsNavItem",
            href: "#",
          },
          {
            title: "programmesNavItem",
            href: "#",
          },
          {
            title: "therapiesNavItem",
            href: "#",
          },
          {
            title: "pricesNavItem",
            href: "#",
          },
          {
            title: "techNavItem",
            href: "#",
          },
        ],
      },
      {
        title: "informationNavTitle",
        items: [
          {
            title: "teamNavItem",
            href: "#",
          },
          {
            title: "blogNavItem",
            href: "#",
          },
          {
            title: "storiesNavItem",
            href: "#",
          },
          {
            title: "contactNavItem",
            href: "#",
          },
          {
            title: "termsNavItem",
            href: "#",
          },
          {
            title: "privacyNavItem",
            href: "#",
          },
        ],
      },
      {
        title: "socialNavTitle",
        items: [
          {
            title: "Facebook",
            href: links.male.facebook,
            external: true,
          },
          {
            title: "Instagram",
            href: links.male.instagram,
            external: true,
          },
          {
            title: "YouTube",
            href: links.male.youtube,
            external: true,
          },
          {
            title: "TikTok",
            href: links.male.tiktok,
            external: true,
          },
          {
            title: "Whatsapp",
            href: createWhatsappUrl(phoneNumbers.male),
            external: true,
          },
        ],
      },
    ] satisfies FooterItem[],
    female: [
      {
        title: "socialTitle",
        items: [
          {
            title: "Facebook",
            href: links.female.facebook,
            icon: "facebook",
            external: true,
          },
          {
            title: "Instagram",
            href: links.female.instagram,
            icon: "instagram",
            external: true,
          },
          {
            title: "X",
            href: links.female.twitter,
            icon: "twitter",
            external: true,
          },
          {
            title: "TikTok",
            href: links.female.tiktok,
            icon: "tiktok",
            external: true,
          },
          {
            title: "Whatsapp",
            href: createWhatsappUrl(phoneNumbers.female),
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
            href: createEmailUrl(emails.female),
            icon: "mail",
            external: true,
          },
          {
            title: "whatsappTitle",
            href: createWhatsappUrl(phoneNumbers.female),
            icon: "whatsapp",
            external: true,
          },
          {
            title: "callUsTitle",
            href: createCallUrl(phoneNumbers.female),
            icon: "call",
            external: true,
          },
        ],
      },
    ] satisfies FooterItem[],
  },
  author: {
    name: "Saufth",
    url: "https://x.com/saufth",
  } satisfies Required<Author>,
} as const

export type SiteConfig = typeof siteConfig
