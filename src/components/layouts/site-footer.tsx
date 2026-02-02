import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
// import { LocaleSwitcher } from '@/components/layouts/locale-switcher'
// import { ModeToggle } from '@/components/layouts/mode-toggle'
import { Icons } from "@/components/icons"
import { Shell } from "@/components/shell"

export function SiteFooter() {
  return (
    <footer className="bg-background border-t">
      <Shell className="flex items-center justify-between">
        <div className="text-muted-foreground text-sm font-light">
          {new Date().getFullYear()} © {siteConfig.name}
        </div>
        <div className="flex items-center">
          <Link
            href={siteConfig.links.facebook}
            target="_blank"
            rel="noreferrer"
            title="Facebook"
            className={cn(
              buttonVariants({
                size: "icon",
                variant: "ghost",
                className: "group",
              }),
              "xs:flex hidden [&_svg]:size-5"
            )}
          >
            <Icons.facebook
              className="fill-muted-foreground group-hover:fill-foreground"
              aria-hidden
            />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noreferrer"
            title="Instagram"
            className={cn(
              buttonVariants({
                size: "icon",
                variant: "ghost",
                className: "group",
              }),
              "xs:flex hidden [&_svg]:size-5"
            )}
          >
            <Icons.instagram
              className="fill-muted-foreground group-hover:fill-foreground"
              aria-hidden
            />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            href={siteConfig.links.twitter}
            className={cn(
              buttonVariants({
                size: "icon",
                variant: "ghost",
                className: "group",
              }),
              "xs:flex hidden [&_svg]:size-5"
            )}
            title="X"
            target="_blank"
            rel="noreferrer"
          >
            <Icons.twitter
              className="fill-muted-foreground group-hover:fill-foreground"
              aria-hidden
            />
            <span className="sr-only">X</span>
          </Link>
          <Link
            href={siteConfig.links.youtube}
            className={cn(
              buttonVariants({
                size: "icon",
                variant: "ghost",
                className: "group",
              }),
              "xs:flex hidden [&_svg]:size-5"
            )}
            title="Youtube"
            target="_blank"
            rel="noreferrer"
          >
            <Icons.youtube
              className="fill-muted-foreground group-hover:fill-foreground"
              aria-hidden
            />
            <span className="sr-only">Youtube</span>
          </Link>
          <Link
            href={siteConfig.links.tiktok}
            className={cn(
              buttonVariants({
                size: "icon",
                variant: "ghost",
                className: "group",
              }),
              "xs:flex hidden [&_svg]:size-5"
            )}
            title="Tiktok"
            target="_blank"
            rel="noreferrer"
          >
            <Icons.tiktok
              className="fill-muted-foreground group-hover:fill-foreground"
              aria-hidden
            />
            <span className="sr-only">Tiktok</span>
          </Link>
          {/* <ModeToggle /> */}
          {/* <LocaleSwitcher /> */}
        </div>
      </Shell>
    </footer>
  )
}
