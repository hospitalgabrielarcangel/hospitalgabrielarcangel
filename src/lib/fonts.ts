import localFont from "next/font/local"

export const fontHeader = localFont({
  src: [
    {
      path: "../assets/fonts/reckless-neue/RecklessNeue-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/reckless-neue/RecklessNeue-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/reckless-neue/RecklessNeue-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/reckless-neue/RecklessNeue-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/reckless-neue/RecklessNeue-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/reckless-neue/RecklessNeue-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/reckless-neue/RecklessNeue-Heavy.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-header",
})

export const fontSans = localFont({
  src: [
    {
      path: "../assets/fonts/twk-lausanne-pan/TWKLausannePan-250.woff2",
      weight: "250",
      style: "normal",
    },
    {
      path: "../assets/fonts/twk-lausanne-pan/TWKLausannePan-300.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/twk-lausanne-pan/TWKLausannePan-450.woff2",
      weight: "450",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-sans",
})

// export const fontSans = localFont({
//   src: [
//     {
//       path: "../assets/fonts/onest/Onest-Thin.woff2",
//       weight: "100",
//       style: "normal",
//     },
//     {
//       path: "../assets/fonts/onest/Onest-ExtraLight.woff2",
//       weight: "200",
//       style: "normal",
//     },
//     {
//       path: "../assets/fonts/onest/Onest-Light.woff2",
//       weight: "300",
//       style: "normal",
//     },
//     {
//       path: "../assets/fonts/onest/Onest-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../assets/fonts/onest/Onest-Medium.woff2",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "../assets/fonts/onest/Onest-SemiBold.woff2",
//       weight: "600",
//       style: "normal",
//     },
//     {
//       path: "../assets/fonts/onest/Onest-Bold.woff2",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path: "../assets/fonts/onest/Onest-ExtraBold.woff2",
//       weight: "800",
//       style: "normal",
//     },
//     {
//       path: "../assets/fonts/onest/Onest-Black.woff2",
//       weight: "900",
//       style: "normal",
//     },
//   ],
//   display: "swap",
//   variable: "--font-sans",
// })
