import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertToTitleCase(inputString: string) {
  // Remove leading "--" if present
  const cleanedString = inputString.replace(/^--/, "")

  // Split the string into words using "-"
  const words = cleanedString.split("-")

  // Capitalize each word and join them with a space
  const titleCaseString = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return titleCaseString
}

export function convertCssVarToHSLNumbers(
  cssVar: string
): [number, number, number] {
  const [h, s, l] = cssVar.split(" ") // 0 0% 0%
  return [+h.replace("%", ""), +s.replace("%", ""), +l.replace("%", "")]
}
