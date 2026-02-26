import * as React from "react"
import { Link } from "@/i18n/routing"
import { type VariantProps } from "class-variance-authority"
import { useTranslations } from "next-intl"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/lib/variants"
import { Icons } from "@/components/icons"

const PAGE_LINK_CONFIG = [
  {
    title: "home",
    href: "/",
  },
  {
    title: "aboutUs",
    href: "about-us",
  },
  {
    title: "ourPrograms",
    href: "#",
  },
  {
    title: "conditionsWeTreat",
    href: "/conditions-we-treat",
  },
  {
    title: "mentalHealth",
    href: "/conditions-we-treat/mental-health",
  },
  {
    title: "dependenciesAndAddictions",
    href: "/conditions-we-treat/dependencies-and-addictions",
  },
  {
    title: "eatingDisorder",
    href: "/conditions-we-treat/eating-disorder",
  },
  {
    title: "contact",
    href: "#",
  },
] as const

export type PageLinkToProp = (typeof PAGE_LINK_CONFIG)[number]["title"]

export interface PageLinkProps
  extends
    Omit<React.ComponentProps<typeof Link>, "href">,
    Omit<
      VariantProps<typeof buttonVariants>,
      "icon" | "icon-xs" | "icon-sm" | "icon-lg"
    > {
  to: PageLinkToProp
  withIcon?: boolean
}

export function PageLink({
  children,
  className,
  to,
  size,
  variant,
  withIcon,
  ...props
}: PageLinkProps) {
  const pageLink = PAGE_LINK_CONFIG.find(
    (pageLinkItem) => pageLinkItem.title === to
  )!
  const title = useTranslations("PageLink")(pageLink.title)

  return (
    <Link
      className={cn(
        "w-fit uppercase",
        buttonVariants({
          size,
          variant,
        }),
        variant === "link" && "px-0 underline underline-offset-4",
        className
      )}
      href={pageLink.href}
      {...props}
    >
      <span>{children || title}</span>
      {withIcon && <Icons.arrowRight aria-hidden />}
    </Link>
  )
}
