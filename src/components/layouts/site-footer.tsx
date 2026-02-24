import { siteConfig } from "@/config/site"
import { IconMenu } from "@/components/icon-menu"

export function SiteFooter() {
  return (
    <footer className="bg-background border-t">
      <div className="flex items-center justify-between px-5 pt-6 pb-8">
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
      </div>
    </footer>
  )
}
