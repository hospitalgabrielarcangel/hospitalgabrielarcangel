import { CallToAction } from "@/components/call-to-action"
import { LocaleSwitcher } from "@/components/layouts/locale-switcher"
import { Logomark } from "@/components/logotype"
import { Shell } from "@/components/shell"

import { SiteHeaderContainer } from "./site-header-container"

export function SiteHeaderContent() {
  return (
    <SiteHeaderContainer>
      <header>
        <Shell className="py-0 lg:py-0">
          <div className="flex h-20 w-full items-center lg:pr-4">
            <div className="flex items-center gap-x-2">
              <Logomark className="h-14 md:h-16" />
            </div>
            <div className="flex flex-1 items-center justify-end gap-x-2">
              <div className="flex items-center gap-x-1">
                <LocaleSwitcher
                  className="animate-fade-down hidden gap-0.5 p-2 lg:flex [&>.icon]:size-5"
                  style={{ animationDelay: "0.30s", animationFillMode: "both" }}
                  withSet="1"
                />
              </div>
              <CallToAction
                className="animate-fade-down uppercase"
                style={{ animationDelay: "0.20s", animationFillMode: "both" }}
                to="contact"
              />
            </div>
          </div>
        </Shell>
      </header>
    </SiteHeaderContainer>
  )
}
