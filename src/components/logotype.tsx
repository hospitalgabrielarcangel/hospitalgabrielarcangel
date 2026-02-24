import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons, type IconProps } from "@/components/icons"

export function Logomark({ className, ...props }: IconProps) {
  const title = useTranslations("PageLink")("home")

  return (
    <Link href="/">
      <Icons.logomark
        className={cn("h-7 w-auto md:h-9", className)}
        title={title}
        {...props}
      />
      <div className="sr-only">{title}</div>
    </Link>
  )
}

export function Logotype({ className, ...props }: IconProps) {
  const title = useTranslations("PageLink")("home")

  return (
    <Link href="/">
      <Icons.logotype
        className={cn("h-9 w-auto", className)}
        title={title}
        {...props}
      />
      <div className="sr-only">{title}</div>
    </Link>
  )
}

export function AuthorLogo({ className, ...props }: IconProps) {
  return (
    <Link href={siteConfig.author.url}>
      <Icons.saufth
        className={cn("size-8", className)}
        title={siteConfig.author.name}
        {...props}
      />
      <div className="sr-only">{siteConfig.author.name}</div>
    </Link>
  )
}
