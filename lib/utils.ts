import { clsx, type ClassValue } from "clsx"
import Color from "color"
import convert from "color-convert"
import { twMerge } from "tailwind-merge"

import { ColorVariables } from "@/types/colors"

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
    if (key !== "--radius") result[key] = convertHexToCssVar(result[key])
  }

  return result
}

export function convertHexToCssHslVar(hex: string) {
  const [h, s, l] = convert.hex.hsl(hex)
  return `hsl(${h}, ${s}%, ${l}%)`
}

export function convertAllHexToCssHslVar(obj: ColorVariables) {
  const result = { ...obj }

  for (const k in obj) {
    const key = k as keyof ColorVariables
    result[key] = convertHexToCssHslVar(result[key])
  }

  return result
}

export function isValidColor(color: string) {
  try {
    Color(color)
    return true
  } catch (error) {}
}

export function getCopyableCssVariablesV3({
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

    --sidebar: ${light["--sidebar"]};
    --sidebar-foreground: ${light["--sidebar-foreground"]};
    --sidebar-primary: ${light["--sidebar-primary"]};
    --sidebar-primary-foreground: ${light["--sidebar-primary-foreground"]};
    --sidebar-accent: ${light["--sidebar-accent"]};
    --sidebar-accent-foreground: ${light["--sidebar-accent-foreground"]};
    --sidebar-border: ${light["--sidebar-border"]};
    --sidebar-ring: ${light["--sidebar-ring"]};

    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;

    --radius: ${light["--radius"]};
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

    --sidebar: ${dark["--sidebar"]};
    --sidebar-foreground: ${dark["--sidebar-foreground"]};
    --sidebar-primary: ${dark["--sidebar-primary"]};
    --sidebar-primary-foreground: ${dark["--sidebar-primary-foreground"]};
    --sidebar-accent: ${dark["--sidebar-accent"]};
    --sidebar-accent-foreground: ${dark["--sidebar-accent-foreground"]};
    --sidebar-border: ${dark["--sidebar-border"]};
    --sidebar-ring: ${dark["--sidebar-ring"]};

    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;

    --radius: ${dark["--radius"]};
  }
}`
}

export function getCopyableCssVariablesV4({
  light,
  dark,
}: {
  light: ColorVariables
  dark: ColorVariables
}) {
  return `:root {
  --radius: ${light["--radius"]};

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

  --sidebar: ${light["--sidebar"]};
  --sidebar-foreground: ${light["--sidebar-foreground"]};
  --sidebar-primary: ${light["--sidebar-primary"]};
  --sidebar-primary-foreground: ${light["--sidebar-primary-foreground"]};
  --sidebar-accent: ${light["--sidebar-accent"]};
  --sidebar-accent-foreground: ${light["--sidebar-accent-foreground"]};
  --sidebar-border: ${light["--sidebar-border"]};
  --sidebar-ring: ${light["--sidebar-ring"]};

  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
}

.dark {
  --radius: ${dark["--radius"]};

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

  --sidebar: ${dark["--sidebar"]};
  --sidebar-foreground: ${dark["--sidebar-foreground"]};
  --sidebar-primary: ${dark["--sidebar-primary"]};
  --sidebar-primary-foreground: ${dark["--sidebar-primary-foreground"]};
  --sidebar-accent: ${dark["--sidebar-accent"]};
  --sidebar-accent-foreground: ${dark["--sidebar-accent-foreground"]};
  --sidebar-border: ${dark["--sidebar-border"]};
  --sidebar-ring: ${dark["--sidebar-ring"]};

  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
}`
}

export function oklabToOklch(l: number, a: number, b: number) {
  const c = Math.sqrt(a * a + b * b)
  const h = Math.atan2(b, a) * (180 / Math.PI)
  return {
    l,
    c,
    h: (h + 360) % 360,
  }
}

export function rgbToOklab([r, g, b]: number[]) {
  // Normalize
  r /= 255
  g /= 255
  b /= 255

  // sRGB → linear RGB
  const srgbToLinear = (c: number) =>
    c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)

  r = srgbToLinear(r)
  g = srgbToLinear(g)
  b = srgbToLinear(b)

  // Linear RGB → LMS
  const l = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b
  const m = 0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b
  const s = 0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b

  const l_ = Math.cbrt(l)
  const m_ = Math.cbrt(m)
  const s_ = Math.cbrt(s)

  const L = 0.2104542553 * l_ + 0.793617785 * m_ - 0.0040720468 * s_
  const A = 1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_
  const B = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_

  return { L, A, B }
}

export function hexToOklchString(hex: string) {
  const [r, g, b] = convert.hex.rgb(hex)
  const { L, A, B } = rgbToOklab([r, g, b])
  const { l, c, h } = oklabToOklch(L, A, B)
  return `oklch(${l.toFixed(3)} ${c.toFixed(3)} ${h.toFixed(3)})`
}

export function convertAllHexToOklchString(obj: ColorVariables) {
  const result = { ...obj }

  for (const k in obj) {
    const key = k as keyof ColorVariables
    if (key !== "--radius") result[key] = hexToOklchString(result[key])
  }

  return result
}
