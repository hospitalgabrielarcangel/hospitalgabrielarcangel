import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/lib/variants"
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
          {siteConfig.footerNav
            .find((items) => items.title === "socialTitle")
            ?.items.map((item) => {
              const Icon = item.icon ? Icons[item.icon] : Icons.imageNotFound

              return (
                <Link
                  key={item.title}
                  className={cn(
                    "group xs:flex hidden",
                    buttonVariants({
                      size: "icon",
                      variant: "ghost",
                    })
                  )}
                  href={item.href}
                  title={item.title}
                  target={item.external ? "_blank" : ""}
                  rel={item.external ? "noopener noreferrer" : ""}
                >
                  <Icon className="fill-muted-foreground group-hover:fill-foreground size-5 md:size-6" />
                  <span className="sr-only">{item.title}</span>
                </Link>
              )
            })}
        </div>
      </Shell>
    </footer>
  )
}
