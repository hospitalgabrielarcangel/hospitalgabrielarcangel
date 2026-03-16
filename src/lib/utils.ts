import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { siteConfig } from "@/config/site"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function absoluteUrl(path: string = "/") {
  return `${siteConfig.url}${path}`
}

export function formatPhoneNumber(phoneNumber: string | number) {
  const cleanedNumber = String(phoneNumber).replace(/\D/g, "")

  if (cleanedNumber.length < 10 || cleanedNumber.length > 14) {
    return cleanedNumber
  } else if (cleanedNumber.length === 10) {
    const numberSections = cleanedNumber.match(/^(\d{3})(\d{3})(\d{4})$/)
    return numberSections
      ? `(${numberSections[1]}) ${numberSections[2]}-${numberSections[3]}`
      : cleanedNumber
  }

  const dialCode = cleanedNumber.slice(0, cleanedNumber.length - 10)
  const number = cleanedNumber.slice(-10)
  const numberSections = number.match(/^(\d{3})(\d{3})(\d{4})$/)

  return numberSections
    ? `+${dialCode} (${numberSections[1]}) ${numberSections[2]}-${numberSections[3]}`
    : cleanedNumber
}

export function createEmailUrl(email: string, subject?: string, body?: string) {
  return `mailto:${email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}${body ? `&body=${encodeURIComponent(body)}` : ""}`
}

export function createCallUrl(phoneNumber: string) {
  return `tel:${phoneNumber}`
}

export function createWhatsappUrl(phoneNumber: string, message?: string) {
  return `https://wa.me/${phoneNumber}${message ? `?text=${message.replaceAll(" ", "+")}` : ""}`
}

export function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
}

export function unslugify(str: string) {
  return str.replace(/-/g, " ")
}

export function toTitleCase(str: string) {
  return str
    .replace(
      /\w\-\_\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase()
    )
    .replace(/[-\s]/g, "")
}

export function toPascalCase(str: string) {
  const words = str
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(" ")
  return words
    .map((word) => {
      if (!word) return ""
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })
    .join("")
}

export function toCamelCase(str: string) {
  const words = str
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(" ")
  return words
    .map((word, index) => {
      if (!word) return ""
      return index === 0
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })
    .join("")
}
