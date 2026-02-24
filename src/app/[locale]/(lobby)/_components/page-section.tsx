import Image from "next/image"
import type { ItemWithImage } from "@/types"

import { cn } from "@/lib/utils"
import { PageLink, type PageLinkTitle } from "@/components/page-link"

interface PageSectionProps extends ItemWithImage {
  children?: React.ReactNode
  className?: string
  link?: {
    to: PageLinkTitle
    label?: string
  }
  rowReverse?: boolean
  colReverse?: boolean
  imageFilled?: boolean
  imageBetween?: boolean
  headingHeight?: boolean
  divider?: boolean
}

export default function PageSection({
  name,
  title,
  description,
  image,
  children,
  className,
  link,
  imageFilled,
  imageBetween,
  headingHeight,
  rowReverse,
  colReverse,
  divider,
}: PageSectionProps) {
  return (
    <section
      className={cn(
        "flex flex-col items-stretch md:flex-row",
        rowReverse && "md:flex-row-reverse",
        colReverse && "flex-col-reverse",
        className
      )}
    >
      <div
        className={cn(
          "flex flex-col pt-16 md:w-1/2 md:pt-8",
          divider && !rowReverse && "lg:border-r"
        )}
      >
        <div
          className={cn(
            "grow px-5 md:relative",
            headingHeight ? "md:h-108" : "grow",
            rowReverse ? "md:pr-[3dvw]" : "md:pl-[3dvw]"
          )}
        >
          <div className="md:sticky md:top-0 md:-mt-20 md:h-fit md:pt-20.25">
            <p className="eyebrow text-muted-foreground pb-3">{name}</p>
            <h2 className="heading-3xl">{title}</h2>
          </div>
        </div>
        {imageBetween && (
          <div className="block pt-8 md:hidden">
            <Image
              {...image}
              alt={image.alt}
              sizes="(min-width: 1536px) 1536px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px, (min-width: 768px) 768px, (min-width: 640px) 640px, 100vw"
              loading="lazy"
              className=""
            />
          </div>
        )}
        <div
          className={cn(
            "px-5 pb-10",
            rowReverse ? "md:pr-[3dvw]" : "md:pl-[3dvw]"
          )}
        >
          <div className="subtitle-md max-w-2xl space-y-4 pt-10">
            {description.split("\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          {link && (
            <div className="w-fit pt-6">
              <PageLink
                to={link.to}
                variant="link"
                className="text-sm font-medium tracking-wide uppercase"
              >
                {link.label}
              </PageLink>
            </div>
          )}
        </div>
        {children}
      </div>
      <div
        className={cn(
          "md:relative md:w-1/2",
          divider && rowReverse && "lg:border-r",
          imageBetween && "hidden md:block"
        )}
      >
        <div
          className={cn(
            "px-5 py-6 md:sticky md:top-0",
            imageFilled
              ? "py-6 md:px-0 md:py-0"
              : `${rowReverse ? "md:pl-[3dvw]" : "md:pr-[3dvw]"}`
          )}
        >
          <Image
            {...image}
            alt={image.alt}
            sizes="(min-width: 1536px) 1536px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px, (min-width: 768px) 768px, (min-width: 640px) 640px, 100vw"
            loading="lazy"
            className={cn(
              "w-full object-cover object-center md:h-dvh",
              imageFilled ? "aspect-square" : "aspect-3/4"
            )}
          />
        </div>
      </div>
    </section>
  )
}
