import { clsx, type ClassValue } from "clsx"
import Color from "color"
import convert from "color-convert"
import { twMerge } from "tailwind-merge"

import { colors, ColorVariables } from "@/constants/colors"

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

export function convertAllHexToCssVar(obj: ColorVariables) {
  const result = { ...obj }

  for (const k in obj) {
    const key = k as keyof ColorVariables
    result[key] = convertHexToCssVar(result[key])
  }

  return result
}

export function camelToDash(inputString: string) {
  // Replace uppercase letters with '-'+lowercase equivalent
  const result = inputString.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()

  // If the string starts with a capital letter, convert the first character to lowercase
  return result.charAt(0) === "-" ? result.slice(1) : result
}

export function createTheme({
  light,
  dark,
}: {
  light: Partial<typeof colors.light>
  dark: Partial<typeof colors.dark>
}) {
  return {
    light: { ...colors.light, ...light },
    dark: { ...colors.dark, ...dark },
  } as const
}

function darkenOrLightenColor(theme: "light" | "dark", color: Color): Color {
  const RATIO = 0.05

  if (theme === "light") {
    return color.isLight()
      ? darkenOrLightenColor(theme, color.darken(RATIO))
      : color
  }

  return color.isDark()
    ? darkenOrLightenColor(theme, color.lighten(RATIO))
    : color
}

function getSecondaryColor(color: Color) {
  // return color.rotate(180)
  const rand = Math.random()

  if (rand < 0.5) return color.rotate(180)
  if (rand < 0.2) return color.rotate(90)
  if (rand < 0.3) return color.rotate(-90)
  if (rand < 0.4) return color.rotate(45)
  if (rand < 0.5) return color.rotate(-45)
  if (rand < 0.6) return color.rotate(135)
  if (rand < 0.7) return color.rotate(-135)
  if (rand < 0.8) return color.rotate(30)
  if (rand < 0.9) return color.rotate(-30)
  return color.rotate(60)
}

function createLightThemeByColor(color: Color, secondaryColor: Color) {
  const primaryColor = darkenOrLightenColor("light", color)
  const destructive = primaryColor.hue(0)

  return createTheme({
    light: {
      "--primary": convertHexToCssVar(primaryColor.hex()),
      "--primary-foreground": convertHexToCssVar(
        primaryColor.isDark() ? "#ffffff" : "#000000"
      ),
      "--secondary": convertHexToCssVar(secondaryColor.hex()),
      "--secondary-foreground": convertHexToCssVar(
        secondaryColor.isDark() ? "#ffffff" : "#000000"
      ),
      "--destructive": convertHexToCssVar(destructive.hex()),
      "--destructive-foreground": convertHexToCssVar(
        destructive.isDark() ? "#ffffff" : "#000000"
      ),
    },
    dark: {},
  }).light
}

function createDarkThemeByColor(color: Color, secondaryColor: Color) {
  const primaryColor = color
  const destructive = primaryColor.hue(0)

  return createTheme({
    light: {},
    dark: {
      "--primary": convertHexToCssVar(primaryColor.hex()),
      "--primary-foreground": convertHexToCssVar(
        color.isDark() ? "#ffffff" : "#000000"
      ),
      "--secondary": convertHexToCssVar(secondaryColor.hex()),
      "--secondary-foreground": convertHexToCssVar(
        secondaryColor.isDark() ? "#ffffff" : "#000000"
      ),
      "--destructive": convertHexToCssVar(destructive.hex()),
      "--destructive-foreground": convertHexToCssVar(
        destructive.isDark() ? "#ffffff" : "#000000"
      ),
    },
  }).dark
}

export function createThemeByHue(hue: number, s: number, l: number) {
  const color = Color(`hsl(${hue}, ${s}%, ${l}%)`)
  const secondaryColor = getSecondaryColor(color)

  return createTheme({
    light: createLightThemeByColor(color, secondaryColor),
    dark: createDarkThemeByColor(color, secondaryColor),
  })
}

export function createRandomTheme() {
  const hue = Math.floor(Math.random() * 360)
  const s = Math.random() < 0.5 ? 100 : Math.floor(40 + Math.random() * 40)
  const l = Math.random() < 0.5 ? 50 : Math.floor(40 + Math.random() * 20)

  return createThemeByHue(hue, s, 50)
}

export function isValidColor(color: string) {
  try {
    Color(color)
    return true
  } catch (error) {}
}
