import { siteConfig } from "@/config/site"
import { IconMenu } from "@/components/icon-menu"
import { Shell } from "@/components/shell"

export function SiteFooter() {
  return (
    <footer className="bg-background border-t">
      <Shell className="flex items-center justify-between">
        <div className="text-muted-foreground text-sm font-light">
          {new Date().getFullYear()} © {siteConfig.name}
        </div>
        <IconMenu
          items={
            siteConfig.footerNav.male.find(
              (item) => item.title === "socialTitle"
            )?.items || []
          }
        />
      </Shell>
    </footer>
  )
}
