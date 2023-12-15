import { clsx, type ClassValue } from "clsx"
import convert from "color-convert"
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

export function convertCssVarToHex(cssVar: string) {
  const [h, s, l] = convertCssVarToHSLNumbers(cssVar)
  return `#${convert.hsl.hex([h, s, l])}`
}

export function convertHexToCssVar(hex: string) {
  const [h, s, l] = convert.hex.hsl(hex)
  return `${h} ${s}% ${l}%`
}

export function camelToDash(inputString: string) {
  // Replace uppercase letters with '-'+lowercase equivalent
  const result = inputString.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()

  // If the string starts with a capital letter, convert the first character to lowercase
  return result.charAt(0) === "-" ? result.slice(1) : result
}
