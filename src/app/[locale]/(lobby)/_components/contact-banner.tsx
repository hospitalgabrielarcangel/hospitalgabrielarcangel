import { useTranslations } from "next-intl"

import { cn } from "@/lib/utils"
import { PageLink } from "@/components/page-link"

function ContactBanner({ muted }: { muted?: boolean }) {
  const t = useTranslations("Banners")
  return (
    <section className={cn("relative md:py-24", muted && "bg-muted")}>
      <div className="relative z-10 mx-auto grid w-full gap-y-12 bg-[url('/images/banner-bg.webp')] bg-cover bg-center px-5 py-24 md:w-[80dvw] md:rounded-md md:px-20">
        <h2 className="heading-4xl max-w-4xl text-center text-white md:text-left">
          {t("contactBanner")}
        </h2>
        <PageLink
          className="mx-auto h-11 pt-0.25 md:mx-0"
          to="contact"
          variant="secondary"
          size="lg"
          withIcon
        />
      </div>
      <div className="bg-foreground absolute bottom-0 hidden h-2/5 w-full md:block" />
    </section>
  )
}

export { ContactBanner }
