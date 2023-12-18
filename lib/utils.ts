import { clsx, type ClassValue } from "clsx"
import Color from "color"
import convert from "color-convert"
import { twMerge } from "tailwind-merge"

import { ColorVariables } from "@/constants/colors"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
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

export function isValidColor(color: string) {
  try {
    Color(color)
    return true
  } catch (error) {}
}

export function getCopyableCssVariables({
  light,
  dark,
}: {
  light: ColorVariables
  dark: ColorVariables
}) {
  return `@layer base {
  :root {
    --background: ${light["--background"]};
    --foreground: ${light["--foreground"]};
    --card: ${light["--card"]};
    --card-foreground: ${light["--card-foreground"]};
    --popover: ${light["--popover"]};
    --popover-foreground: ${light["--popover-foreground"]};
    --primary: ${light["--primary"]};
    --primary-foreground: ${light["--primary-foreground"]};
    --secondary: ${light["--secondary"]};
    --secondary-foreground: ${light["--secondary-foreground"]};
    --muted: ${light["--muted"]};
    --muted-foreground: ${light["--muted-foreground"]};
    --accent: ${light["--accent"]};
    --accent-foreground: ${light["--accent-foreground"]};
    --destructive: ${light["--destructive"]};
    --destructive-foreground: ${light["--destructive-foreground"]};
    --border: ${light["--border"]};
    --input: ${light["--input"]};
    --ring: ${light["--ring"]};
    --radius: 0.5rem;
  }
  
  .dark {
    --background: ${dark["--background"]};
    --foreground: ${dark["--foreground"]};
    --card: ${dark["--card"]};
    --card-foreground: ${dark["--card-foreground"]};
    --popover: ${dark["--popover"]};
    --popover-foreground: ${dark["--popover-foreground"]};
    --primary: ${dark["--primary"]};
    --primary-foreground: ${dark["--primary-foreground"]};
    --secondary: ${dark["--secondary"]};
    --secondary-foreground: ${dark["--secondary-foreground"]};
    --muted: ${dark["--muted"]};
    --muted-foreground: ${dark["--muted-foreground"]};
    --accent: ${dark["--accent"]};
    --accent-foreground: ${dark["--accent-foreground"]};
    --destructive: ${dark["--destructive"]};
    --destructive-foreground: ${dark["--destructive-foreground"]};
    --border: ${dark["--border"]};
    --input: ${dark["--input"]};
    --ring: ${dark["--ring"]};
  }
}`
}
