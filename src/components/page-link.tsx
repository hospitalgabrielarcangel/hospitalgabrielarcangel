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
    href: "#",
    icon: Icons.arrowRight,
  },
  {
    title: "ourPrograms",
    href: "#",
    icon: Icons.arrowRight,
  },
] as const

interface PageLinkProps
  extends
    Omit<React.ComponentProps<typeof Link>, "href">,
    VariantProps<typeof buttonVariants> {
  to: (typeof PAGE_LINK_CONFIG)[number]["title"]
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
