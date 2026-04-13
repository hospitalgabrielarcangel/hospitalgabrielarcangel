"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { create } from "zustand"

import { conditionsCategories } from "@/config/treatment"
import { toCamelCase } from "@/lib/utils"

import { Icons } from "../icons"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"
import { Button } from "../ui/button"
import { LocaleSwitcher } from "./locale-switcher"
import Sidebar from "./sidebar"

interface MenuSidebarStore {
  isMenuSidebarOpen: boolean
  setIsMenuSidebarOpen: (isMenuSidebarOpen: boolean) => void
  openSidebarMenu: () => void
  closeSidebarMenu: () => void
  toggleSidebarMenu: () => void
}

const useMenuSidebarStore = create<MenuSidebarStore>((set) => ({
  isMenuSidebarOpen: false,
  setIsMenuSidebarOpen: (isMenuSidebarOpen: boolean) =>
    set({ isMenuSidebarOpen }),
  openSidebarMenu: () => set({ isMenuSidebarOpen: true }),
  closeSidebarMenu: () => set({ isMenuSidebarOpen: false }),
  toggleSidebarMenu: () =>
    set((state) => ({ isMenuSidebarOpen: !state.isMenuSidebarOpen })),
}))

const navConfig = [
  {
    title: "programmes",
    href: "/programmes",
    items: [
      {
        title: "residentialRehab",
        href: "/programmes/residential-rehab-treatment",
        items: [],
      },
      {
        title: "aftercareServices",
        href: "/programmes/aftercare",
        items: [],
      },
    ],
  },
  {
    title: "conditionsWeTreat",
    href: "/conditions-we-treat",
    items: conditionsCategories.map((conditionCategoryItem) => ({
      title: toCamelCase(conditionCategoryItem.page.id),
      href: `/conditions-we-treat/${conditionCategoryItem.page.id}`,
      items: conditionCategoryItem.conditions.map((conditionItem) => ({
        title: toCamelCase(conditionItem.name),
        href: `/conditions-we-treat/${conditionCategoryItem.page.id}/${conditionItem.name}`,
      })),
    })),
  },
  {
    title: "approach",
    href: "/approach",
    items: [],
  },
  {
    title: "aboutUs",
    href: "/about-us",
    items: [],
  },
  {
    title: "assessments",
    href: "/assessments",
    items: [],
  },
  {
    title: "tech",
    href: "/tech",
    items: [],
  },
  {
    title: "contact",
    href: "/contact",
    items: [],
  },
]

function MenuSidebar() {
  const { closeSidebarMenu, isMenuSidebarOpen } = useMenuSidebarStore()
  const t = useTranslations("MenuSidebar")

  return (
    <Sidebar
      position="left"
      size="sm"
      status={isMenuSidebarOpen}
      onClickOutside={closeSidebarMenu}
      containerClassName="z-50"
    >
      <div className="flex h-dvh w-full flex-col">
        <div className="bg-background flex items-center justify-between border-b p-5">
          <LocaleSwitcher
            className="gap-0.5 p-2 [&>.icon]:size-5"
            withSet="1"
            withChevron
          />
          <Button
            size="icon-sm"
            variant="outline"
            className="text-muted-foreground text-lg"
            onClick={() => closeSidebarMenu()}
          >
            <Icons.close className="size-5" aria-label="Close" />
          </Button>
        </div>
        <nav className="grow overflow-y-auto py-4">
          <ul>
            {navConfig.map((navItem) => {
              if (navItem.items.length > 0) {
                return (
                  <Accordion
                    className="h-fit rounded-none border-none p-0"
                    render={<li />}
                    key={navItem.title}
                  >
                    <AccordionItem value={navItem.title}>
                      <AccordionTrigger className="heading px-5 py-4 text-3xl font-normal">
                        {t(navItem.title)}
                      </AccordionTrigger>
                      <AccordionContent
                        className="sapce-y-0 p-0 [&_a]:no-underline"
                        render={<ul />}
                      >
                        <li className="px-5 py-4">
                          <Link
                            href={navItem.href}
                            className="heading text-[1.625rem] font-normal hover:underline"
                            onClick={() => closeSidebarMenu()}
                          >
                            {t("overview")}
                          </Link>
                        </li>
                        {navItem.items.map((subNavItem) => {
                          if (subNavItem.items.length > 0) {
                            return (
                              <Accordion
                                className="h-fit rounded-none border-none p-0"
                                render={<li />}
                                key={subNavItem.title}
                              >
                                <AccordionItem value={subNavItem.title}>
                                  <AccordionTrigger className="heading px-7 py-4 text-[1.625rem] font-normal">
                                    {t(subNavItem.title)}
                                  </AccordionTrigger>
                                  <AccordionContent
                                    className="sapce-y-0 p-0 [&_a]:no-underline"
                                    render={<ul />}
                                  >
                                    <li className="px-7 py-4">
                                      <Link
                                        href={subNavItem.href}
                                        className="heading text-2xl font-normal hover:underline"
                                        onClick={() => closeSidebarMenu()}
                                      >
                                        {t("overview")}
                                      </Link>
                                    </li>
                                    {subNavItem.items.map((subNavLinkItem) => (
                                      <li
                                        key={`${subNavItem.title}-${subNavLinkItem.title}`}
                                        className="px-9 py-4"
                                      >
                                        <Link
                                          href={subNavLinkItem.href}
                                          className="heading text-2xl font-normal hover:underline"
                                          onClick={() => closeSidebarMenu()}
                                        >
                                          {t(subNavLinkItem.title)}
                                        </Link>
                                      </li>
                                    ))}
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                            )
                          }
                          return (
                            <li key={subNavItem.title} className="px-9 py-4">
                              <Link
                                href={subNavItem.href}
                                className="heading text-[1.625rem] font-normal hover:underline"
                                onClick={() => closeSidebarMenu()}
                              >
                                {t(subNavItem.title)}
                              </Link>
                            </li>
                          )
                        })}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                )
              }
              return (
                <li key={navItem.title} className="px-5 py-4">
                  <Link
                    href={navItem.href}
                    className="heading text-3xl font-normal hover:underline"
                    onClick={() => closeSidebarMenu()}
                  >
                    {t(navItem.title)}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </Sidebar>
  )
}

export { type MenuSidebarStore, useMenuSidebarStore, MenuSidebar }
