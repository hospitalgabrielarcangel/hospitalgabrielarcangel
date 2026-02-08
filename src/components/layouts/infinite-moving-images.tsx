"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

export const InfiniteMovingImages = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    name: string
    url: string
    external?: boolean
    image?: {
      src: string
      alt: string
      width?: number
      height?: number
      className?: string
    }
  }[]
  direction?: "left" | "right"
  speed?: "fast" | "normal" | "slow"
  pauseOnHover?: boolean
  className?: string
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLUListElement>(null)

  const [start, setStart] = React.useState(false)

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        )
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        )
      }
    }
  }

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "50s")
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "100s")
      } else {
        containerRef.current.style.setProperty("--animation-duration", "150s")
      }
    }
  }

  const addAnimation = React.useEffectEvent(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  })

  React.useEffect(() => {
    addAnimation()
  })

  return (
    <div
      ref={containerRef}
      className={cn("scroller relative z-20 overflow-hidden", className)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "pointer-events-none flex w-max min-w-full shrink-0 flex-nowrap items-center gap-x-28 gap-y-4 py-12",
          start && "animate-scroll",
          pauseOnHover && "hover:paused"
        )}
      >
        {items.map((item) => (
          <li key={item.name} className="pointer-events-auto">
            <Link
              href={item.url}
              target={item.external ? "_blank" : ""}
              rel={item.external ? "noopener noreferrer" : ""}
            >
              <div className="relative max-w-full shrink-0 rounded-2xl">
                {item.image && (
                  <span className="relative z-20">
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      width={item.image.width}
                      height={item.image.height}
                      loading="lazy"
                      className={cn("h-20 w-auto", item.image.className)}
                    />
                  </span>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
