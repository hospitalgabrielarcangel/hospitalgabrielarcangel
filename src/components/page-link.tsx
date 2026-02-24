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
    icon: Icons.home,
  },
  {
    title: "aboutUs",
    href: "about-us",
    icon: Icons.arrowRight,
  },
  {
    title: "ourPrograms",
    href: "#",
    icon: Icons.arrowRight,
  },
  {
    title: "treatmentPlans",
    href: "#",
    icon: Icons.arrowRight,
  },
  {
    title: "mentalHealthConditions",
    href: "/treatment/mental-health-conditions",
    icon: Icons.arrowRight,
  },
  {
    title: "dependenciesAndAddictions",
    href: "/treatment/dependencies-and-addictions",
    icon: Icons.arrowRight,
  },
  {
    title: "eatingDisorder",
    href: "/treatment/eating-disorder",
    icon: Icons.arrowRight,
  },
  {
    title: "contact",
    href: "#",
    icon: Icons.arrowRight,
  },
] as const

export type PageLinkTitle = (typeof PAGE_LINK_CONFIG)[number]["title"]

export interface PageLinkProps
  extends
    Omit<React.ComponentProps<typeof Link>, "href">,
    VariantProps<typeof buttonVariants> {
  to: PageLinkTitle
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
        "uppercase",
        buttonVariants({
          size,
          variant,
        }),
        variant === "link" ? "px-0 underline underline-offset-4" : "",
        className
      )}
      href={pageLink.href}
      {...props}
    >
      {size !== "icon" ? (
        <>
          <span>{children || title}</span>
          {withIcon && <pageLink.icon aria-hidden />}
        </>
      ) : (
        <pageLink.icon aria-hidden />
      )}
    </Link>
  )
}
