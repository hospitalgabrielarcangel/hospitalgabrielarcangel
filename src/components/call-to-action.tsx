"use client"

import { useTranslations } from "next-intl"

import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { useContactSidebarStore } from "@/components/layouts/contact-sidebar"

interface CallToActionProps extends Omit<
  ButtonProps,
  "children" | "size" | "variant"
> {
  variant?: Exclude<ButtonProps["variant"], "link">
  withIcon?: boolean
}

export function CallToAction({
  className,
  variant,
  withIcon,
  ...props
}: CallToActionProps) {
  const t = useTranslations("CallToAction")
  const { openContactSidebar } = useContactSidebarStore()

  return (
    <Button
      className={cn(
        "uppercase",
        variant === "outline" ? "[&>span]:pt-0.5" : "[&>span]:pt-px",
        className
      )}
      onClick={() => openContactSidebar()}
      size="lg"
      {...props}
    >
      <span>{t("contact")}</span>
      {withIcon && <Icons.arrowRight aria-hidden />}
    </Button>
  )
}
