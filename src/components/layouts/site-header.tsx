// import { ModeToggle } from '@/components/layouts/mode-toggle'
import { CallToAction } from "@/components/call-to-action"
import { LocaleSwitcher } from "@/components/layouts/locale-switcher"
import { Logomark, Logotype } from "@/components/logotype"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#fcf7f11a] backdrop-blur-xl">
      <div className="container flex h-20 items-center">
        <div className="flex items-center gap-x-2">
          <div className="-ml-1.5">
            <Logotype className="xs:block hidden h-12" />
            <Logomark className="xs:hidden block h-16" />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-2">
          <div className="flex items-center gap-x-1">
            {/* <ModeToggle
              className='animate-fade-down [&>.icon]:size-5'
              style={{ animationDelay: '0.40s', animationFillMode: 'both' }}
            /> */}
            <LocaleSwitcher
              className="animate-fade-down gap-0.5 p-2 [&>.icon]:size-5"
              style={{ animationDelay: "0.30s", animationFillMode: "both" }}
              withSet="1"
            />
          </div>
          <CallToAction
            className="animate-fade-down uppercase"
            style={{ animationDelay: "0.20s", animationFillMode: "both" }}
            to="contact"
          />
        </div>
        {/* <div className='flex flex-1 sm:hidden items-center justify-end gap-x-1'>
          <ModeToggle className='[&>.icon]:size-5' />
          <LocaleSwitcher
            className='px-2 gap-0.5 [&>.icon]:size-5'
            withSet='1'
          />
        </div> */}
      </div>
    </header>
  )
}
