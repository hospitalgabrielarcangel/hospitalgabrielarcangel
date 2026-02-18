import { createNavigation } from "next-intl/navigation"
import { defineRouting } from "next-intl/routing"

/**
 * Site language configuration. Languages are identified by ISO 639 `set1` language codes.
 * @see {@link https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes} for the list of ISO 639 language codes
 */
export const LOCALE = [
  {
    name: "Español",
    set1: "es",
    set2: "esp",
    nlsLang: "es_ES",
  },
  {
    name: "English",
    set1: "en",
    set2: "eng",
    nlsLang: "en_EU",
  },
] as const

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: LOCALE.map(({ set1 }) => set1),
  // Used when no locale matches
  defaultLocale: "es",
  // Don’t use a locale prefix for the default locale
  localePrefix: "as-needed",
})

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing)
