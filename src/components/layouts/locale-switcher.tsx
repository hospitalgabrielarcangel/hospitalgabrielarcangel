"use client"

import * as React from "react"
import { LOCALE, usePathname, useRouter } from "@/i18n/routing"
import { useTranslations } from "next-intl"

import { cn } from "@/lib/utils"
import { useLocale } from "@/hooks/use-locale"
import { Button, type ButtonProps } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/icons"
import { LedIndicator } from "@/components/status-indicator"

interface LocalSwitcherProps {
  className?: string
  style?: React.CSSProperties
  variant?: Exclude<ButtonProps["variant"], "destructive">
  withSet?: "1" | "2"
  withChevron?: boolean
}

export function LocaleSwitcher({
  className,
  style,
  variant = "secondary",
  withSet,
  withChevron,
}: LocalSwitcherProps) {
  const pathname = usePathname()
  const router = useRouter()
  const locale = useLocale()
  const t = useTranslations("Locale")

  const title = t("title")

  const handleLanguageChange = (nextLocale: string) => {
    router.replace({ pathname }, { locale: nextLocale })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        openOnHover
        render={
          <Button
            className={className}
            style={style}
            size={withSet || withChevron ? "default" : "icon"}
            variant={variant}
            title={title}
          />
        }
      >
        <Icons.languages className="icon" aria-hidden />
        {withSet && (
          <span className="title text-sm tracking-wide uppercase" aria-hidden>
            {withSet === "1"
              ? LOCALE.find((localeItem) => localeItem.set1 === locale)!.set1
              : LOCALE.find((localeItem) => localeItem.set1 === locale)!.set2}
          </span>
        )}
        {withChevron && <Icons.chevronDown aria-hidden />}
        <span className="sr-only">{title}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-fit">
        {LOCALE.map((localeItem) => {
          const isActive = localeItem.set1 === locale
          return (
            <DropdownMenuItem
              key={`locale-${localeItem.name}`}
              onClick={() => handleLanguageChange(localeItem.set1)}
            >
              <>
                <div className="flex items-center gap-2">
                  <div
                    className={cn(
                      "bg-muted flex size-5 items-center justify-center rounded-md border",
                      isActive && "[&>span]:text-foreground"
                    )}
                  >
                    <span
                      className="text-muted-foreground pt-[0.15em] text-[0.6875em] leading-none font-semibold uppercase"
                      aria-hidden
                    >
                      {localeItem.set1}
                    </span>
                  </div>
                  <span className="text-base font-medium">
                    {localeItem.name}
                  </span>
                </div>
                <div className="flex w-3 items-center justify-center">
                  {isActive && <LedIndicator />}
                </div>
              </>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
