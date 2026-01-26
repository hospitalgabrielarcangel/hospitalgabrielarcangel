import { ComponentProps } from "react"
import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"

import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "@/components/ui/button"
import { Icons } from "@/components/icons"

const CALL_TO_ACTIONS = [
  {
    title: "home",
    href: "/",
    icon: Icons.home,
  },
  {
    title: "contact",
    href: "#",
    icon: Icons.arrowright,
  },
  {
    title: "aboutUs",
    href: "#",
    icon: Icons.arrowright,
  },
  {
    title: "ourPrograms",
    href: "#",
    icon: Icons.arrowright,
  },
] as const

interface CallToActionProps
  extends
    Omit<ComponentProps<typeof Link>, "href">,
    Pick<ButtonProps, "size" | "variant"> {
  to: (typeof CALL_TO_ACTIONS)[number]["title"]
  withIcon?: boolean
}

export function CallToAction({
  children,
  className,
  to,
  size,
  variant,
  withIcon,
  ...props
}: CallToActionProps) {
  const callToAction = CALL_TO_ACTIONS.find(
    (callToActionItem) => callToActionItem.title === to
  )!
  const title = useTranslations("CallToAction")(callToAction.title)

  return (
    <Button
      asChild
      size={size}
      variant={variant}
      className={cn("uppercase", className)}
    >
      <Link href={callToAction.href} {...props}>
        {size !== "icon" ? (
          <>
            <span className="pt-px">{children || title}</span>
            {withIcon && <callToAction.icon aria-hidden />}
          </>
        ) : (
          <callToAction.icon aria-hidden />
        )}
      </Link>
    </Button>
  )
}
