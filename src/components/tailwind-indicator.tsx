import { IS_ENV_PRODUCTION } from "@/lib/constants"

export function TailwindIndicator() {
  if (IS_ENV_PRODUCTION) return null

  return (
    <div className="text-muted-foreground fixed bottom-px left-0.5 z-50 grid place-content-center font-mono text-[0.625rem] font-bold">
      <span className="xs:hidden block">2xs</span>
      <span className="xs:block hidden sm:hidden">xs</span>
      <span className="hidden sm:block md:hidden">sm</span>
      <span className="hidden md:block lg:hidden">md</span>
      <span className="hidden lg:block xl:hidden">lg</span>
      <span className="hidden xl:block 2xl:hidden">xl</span>
      <span className="3xl:hidden hidden 2xl:block">2xl</span>
      <span className="3xl:block hidden">3xl</span>
    </div>
  )
}
