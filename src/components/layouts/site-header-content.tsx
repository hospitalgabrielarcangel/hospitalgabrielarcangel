import { CallToAction } from "@/components/call-to-action"
import { LocaleSwitcher } from "@/components/layouts/locale-switcher"
import { Logomark } from "@/components/logotype"
import { MenuButton } from "@/components/menu-button"

import { SiteHeaderContainer } from "./site-header-container"

export function SiteHeaderContent() {
  return (
    <SiteHeaderContainer>
      <header>
        <div className="py-0">
          <div className="flex h-20 w-full items-center px-5 lg:pr-4">
            <div className="flex items-center gap-x-2">
              <Logomark className="h-12 md:h-14" />
            </div>
            <div className="flex flex-1 items-center justify-end gap-x-2 lg:pr-5">
              <div className="flex items-center gap-x-2">
                <MenuButton
                  className="animate-fade-down"
                  style={{ animationDelay: "0.40s", animationFillMode: "both" }}
                />
                <LocaleSwitcher
                  className="animate-fade-down hidden gap-0.5 p-2 md:flex [&>.icon]:size-5"
                  style={{ animationDelay: "0.30s", animationFillMode: "both" }}
                  withSet="1"
                  withChevron
                />
                <CallToAction
                  className="animate-fade-down"
                  style={{ animationDelay: "0.20s", animationFillMode: "both" }}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </SiteHeaderContainer>
  )
}
