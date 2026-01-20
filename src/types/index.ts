import { type PropsWithChildren } from "react"

import { type Locale } from "@/lib/constants"
import type { Icons } from "@/components/icons"

export type ContainerElementType = "div" | "section" | "article"

export type HeadingElementType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

export type LayoutProps = Readonly<PropsWithChildren>

export interface LocaleParams {
  readonly params: Promise<{
    locale: Locale
  }>
}

export interface LayoutWithLocaleProps extends LayoutProps, LocaleParams {}

export type Icon = keyof typeof Icons

export interface NavItem {
  title: string
  href?: string
  active?: boolean
  disabled?: boolean
  external?: boolean
  icon?: Icon
  label?: string
  description?: string
}

export interface NavItemWithChildren extends NavItem {
  items?: NavItemWithChildren[]
}

export interface FooterItem {
  title: string
  items: {
    title: string
    href: string
    external?: boolean
  }[]
}

export type MainNavItem = NavItemWithChildren
