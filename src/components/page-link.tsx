import { ComponentProps } from "react"
import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"

import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "@/components/ui/button"
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
    Omit<ComponentProps<typeof Link>, "href">,
    Pick<ButtonProps, "size" | "variant"> {
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
    <Button
      asChild
      size={size}
      variant={variant}
      className={cn(
        "uppercase",
        variant === "outline" ? "[&>span]:pt-0.5" : "[&>span]:pt-px",
        className
      )}
    >
      <Link href={pageLink.href} {...props}>
        {size !== "icon" ? (
          <>
            <span>{children || title}</span>
            {withIcon && <pageLink.icon aria-hidden />}
          </>
        ) : (
          <pageLink.icon aria-hidden />
        )}
      </Link>
    </Button>
  )
}
