import Image, { type ImageProps } from "next/image"
import type { ContainerElementType, HeadingElementType } from "@/types"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { PageLink, type PageLinkToProp } from "@/components/page-link"

interface SectionHeader {
  heading: string
  description: string
  eyebrow?: string
}

interface PageSectionProps extends SectionHeader {
  children?: React.ReactNode
  className?: string
  link?: {
    to: PageLinkToProp
    label?: string
  }
  image: ImageProps
  rowReverse?: boolean
  colReverse?: boolean
  imageFilled?: boolean
  imageBetween?: boolean
  headingHeight?: boolean
  divider?: boolean
}

function PageSection({
  children,
  className,
  heading,
  description,
  eyebrow,
  image,
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
          <div className="space-y-3 md:sticky md:top-0 md:-mt-24 md:h-fit md:pt-24.25">
            {eyebrow && (
              <p className="eyebrow text-muted-foreground">{eyebrow}</p>
            )}
            <h2 className="heading-3xl grid">
              {heading.split("\n").map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h2>
          </div>
        </div>
        {imageBetween && (
          <div className="block h-128 pt-8 md:hidden">
            <Image
              {...image}
              alt={image.alt}
              sizes="(min-width: 1536px) 1536px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px, (min-width: 768px) 768px, (min-width: 640px) 640px, 100vw"
              loading="lazy"
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
              "h-128 w-full object-cover object-center md:h-dvh",
              imageFilled ? "aspect-square" : "aspect-3/4"
            )}
          />
        </div>
      </div>
    </section>
  )
}

const pageSectionHeaderVariants = cva("grid", {
  variants: {
    size: {
      default: "heading-2xl",
      sm: "heading-xl",
      lg: "heading-3xl",
      xl: "heading-4xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
})

interface PageSectionHeaderProps
  extends SectionHeader, VariantProps<typeof pageSectionHeaderVariants> {
  className?: string
  as?: ContainerElementType
  headingAs?: HeadingElementType
  link?: {
    to: PageLinkToProp
    label?: string
  }
  centered?: boolean
}

function PageSectionHeader({
  className,
  as: Comp = "section",
  headingAs: HeadingComp = "h2",
  heading,
  description,
  eyebrow,
  link,
  size,
  centered = false,
}: PageSectionHeaderProps) {
  return (
    <Comp className={cn("py-20", className)}>
      <div className="container">
        <div
          className={cn(
            "max-w-3xl space-y-10",
            centered && "mx-auto text-center"
          )}
        >
          <div className="space-y-4">
            {eyebrow && (
              <p className="eyebrow text-muted-foreground">{eyebrow}</p>
            )}
            <HeadingComp className={pageSectionHeaderVariants({ size })}>
              {heading.split("\n").map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </HeadingComp>
          </div>
          <div
            className={`space-y-4 ${size === "sm" ? "paragraph" : "subtitle-md"}`}
          >
            {description.split("\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          {link && (
            <PageLink
              to={link.to}
              variant="link"
              className="text-sm font-medium tracking-wide uppercase"
            >
              {link.label}
            </PageLink>
          )}
        </div>
      </div>
    </Comp>
  )
}

interface PageSectionImageProps extends Omit<SectionHeader, "description"> {
  className?: string
  items: {
    title: string
    description: string
  }[]
  link?: {
    to: PageLinkToProp
    label?: string
  }
}

function PageSectionImage({
  className,
  heading,
  eyebrow,
  items,
  link,
}: PageSectionImageProps) {
  return (
    <section className={cn("pt-10 pb-16", className)}>
      <div className="container">
        <div className="space-y-4 pb-10 text-center md:hidden">
          <p className="eyebrow uppercase">{eyebrow}</p>
          <h2 className="heading-3xl">{heading}</h2>
        </div>
        <div className="relative flex items-center justify-center overflow-hidden">
          <Image
            src="/images/ourprograms-section.webp"
            alt="Dental"
            width={1536}
            height={1024}
            sizes="(min-width: 1536px) 1536px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px, (min-width: 768px) 768px, (min-width: 640px) 640px, 100vw"
            loading="lazy"
            className="aspect-353/380 h-full w-full object-cover object-center sm:aspect-1360/616"
          />
          <div className="absolute inset-0 hidden flex-col items-center justify-center gap-y-6 md:flex lg:px-18">
            <p className="eyebrow text-white uppercase">{eyebrow}</p>
            <h2 className="heading-3xl text-center text-white">{heading}</h2>
          </div>
        </div>
      </div>
      <ul className="no-scrollbar flex justify-between overflow-x-scroll px-5 pt-18 md:overflow-x-auto md:px-[3dvw]">
        {items.map((item) => (
          <li
            key={item.title}
            className="flex-[0_0_90%] pl-8 first:pl-0 md:flex-[0_0_31.33%] md:pl-0"
          >
            <div className="border-foreground space-y-4 border-t-2 pt-8">
              <h2 className="paragraph">{item.title}</h2>
              <p className="paragraph">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
      {link && (
        <div className="mt-10 flex justify-center px-5">
          <PageLink
            to={link.to}
            size="lg"
            variant="outline"
            className="w-fit"
            withIcon
          >
            {link.label}
          </PageLink>
        </div>
      )}
    </section>
  )
}

export { PageSection, PageSectionHeader, PageSectionImage }
