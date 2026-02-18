import Link from "next/link"
import type { NavItem } from "@/types"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/lib/variants"
import { Icons } from "@/components/icons"

interface IconMenuProps {
  orientation?: "horizontal" | "vertical"
  className?: string
  items: NavItem[]
}

export function IconMenu({
  className,
  orientation = "horizontal",
  items,
}: IconMenuProps) {
  return (
    <div
      className={cn(
        "flex",
        orientation === "vertical" && "flex-col",
        className
      )}
    >
      {items.map((item) => {
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
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
          >
            <Icon className="fill-muted-foreground group-hover:fill-foreground size-6" />
            <span className="sr-only">{item.title}</span>
          </Link>
        )
      })}
    </div>
  )
}
