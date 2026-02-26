import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"

import { siteConfig } from "@/config/site"
import {
  createCallUrl,
  createEmailUrl,
  formatPhoneNumber,
  slugify,
} from "@/lib/utils"

import { Logomark } from "../logotype"

export function SiteFooter() {
  const t = useTranslations("SiteFooter")

  return (
    <footer className="bg-foreground">
      <section className="container space-y-20 pt-20 md:pt-54 lg:pt-64 2xl:px-[7dvw]">
        <div className="flex flex-col-reverse justify-between gap-10 md:flex-row">
          <h5 className="heading-lg text-secondary max-w-2xl">
            {t("footerHeading")}
          </h5>
          <Logomark className="size-14" />
        </div>
        <nav className="flex w-full flex-col justify-between gap-20 lg:flex-row xl:gap-0">
          <div className="flex flex-col gap-y-6 lg:w-180 xl:w-1/2">
            <div className="text-secondary flex max-w-74 flex-col gap-y-6 font-semibold">
              <Link
                href={siteConfig.addresses.male.href}
                target="_blank"
                rel="noreferrer"
              >
                <span>{siteConfig.addresses.male.description}</span>
              </Link>
              <Link
                href={createCallUrl(siteConfig.phoneNumbers.male)}
                target="_blank"
                rel="noreferrer"
              >
                <span>{formatPhoneNumber(siteConfig.phoneNumbers.male)}</span>
              </Link>
              <Link
                href={createEmailUrl(siteConfig.emails.male)}
                target="_blank"
                rel="noreferrer"
              >
                <span>{siteConfig.emails.male}</span>
              </Link>
            </div>
          </div>
          <div className="w-full xl:w-1/2">
            <ul className="paragraph text-secondary flex flex-wrap gap-y-20 lg:gap-x-24">
              {siteConfig.footerNav.male.map((footerNavItem) => (
                <li
                  className="xs:w-1/2 w-full space-y-6 md:w-1/3 lg:w-auto"
                  key={slugify(footerNavItem.title)}
                >
                  <div className="font-medium">{t(footerNavItem.title)}</div>
                  <ul className="space-y-3.5 text-sm">
                    {footerNavItem.items.map((footerNavListItem) => (
                      <li key={slugify(footerNavListItem.title)}>
                        <Link href={footerNavListItem.href}>
                          {footerNavItem.title === "socialNavTitle"
                            ? footerNavListItem.title
                            : t(footerNavListItem.title)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <div className="text-muted-foreground pt-6 pb-8 text-sm font-light">
          {new Date().getFullYear()} © {siteConfig.name}
        </div>
      </section>
    </footer>
  )
}
