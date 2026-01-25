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
      <Shell>
        <section className="flex items-center justify-between">
          <div className="text-muted-foreground text-sm font-light">
            {siteConfig.name} © 2017
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
              <Icons.facebooksq
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
              <Icons.instagramsq
                className="fill-muted-foreground group-hover:fill-foreground"
                aria-hidden
              />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
              title="Twitter"
              className={cn(
                buttonVariants({
                  size: "icon",
                  variant: "ghost",
                  className: "group",
                }),
                "xs:flex hidden [&_svg]:size-5"
              )}
            >
              <Icons.twittersq
                className="fill-muted-foreground group-hover:fill-foreground"
                aria-hidden
              />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href={siteConfig.links.youtube}
              target="_blank"
              rel="noreferrer"
              title="Youtube"
              className={cn(
                buttonVariants({
                  size: "icon",
                  variant: "ghost",
                  className: "group",
                }),
                "xs:flex hidden [&_svg]:size-5"
              )}
            >
              <Icons.youtubesq
                className="fill-muted-foreground group-hover:fill-foreground"
                aria-hidden
              />
              <span className="sr-only">Youtube</span>
            </Link>
            <Link
              href={siteConfig.links.tiktok}
              target="_blank"
              rel="noreferrer"
              title="Tiktok"
              className={cn(
                buttonVariants({
                  size: "icon",
                  variant: "ghost",
                  className: "group",
                }),
                "xs:flex hidden [&_svg]:size-5"
              )}
            >
              <Icons.tiktoksq
                className="fill-muted-foreground group-hover:fill-foreground"
                aria-hidden
              />
              <span className="sr-only">Tiktok</span>
            </Link>
            {/* <ModeToggle /> */}
            {/* <LocaleSwitcher /> */}
          </div>
        </section>
      </Shell>
    </footer>
  )
}
