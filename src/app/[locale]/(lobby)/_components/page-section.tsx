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
            headingHeight ? "h-108" : "grow"
          )}
        >
          <div className="md:sticky md:top-0 md:-mt-20 md:h-fit md:pt-20.25">
            <p className="eyebrow text-muted-foreground pb-3">{name}</p>
            <h2 className="heading-3xl">{title}</h2>
          </div>
        </div>
        <div className="px-5 pb-10">
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
          divider && rowReverse && "lg:border-r"
        )}
      >
        <div
          className={cn(
            "px-5 md:sticky md:top-0",
            imageFilled ? "md:px-0" : "py-6"
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
