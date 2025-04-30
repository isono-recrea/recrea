import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date)
}

export function truncateText(text: string, maxLength = 150): string {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + "..."
}

export function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

