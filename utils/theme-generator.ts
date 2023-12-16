import Color from "color"

import { ThemeGeneratorParams } from "@/types/theme-generator"
import { convertHexToCssVar } from "@/lib/utils"

export function generateTheme({
  colorTheory,
  ...params
}: ThemeGeneratorParams) {
  return generateMonochromaticTheme(params)
  // if (colorTheory === "monochromatic") return generateMonochromaticTheme(params)
  // if (colorTheory === "analogous") return generateAnalogousTheme(params)
  // if (colorTheory === "triad") return generateTriadTheme(params)
  // if (colorTheory === "complementary") return generateComplementaryTheme(params)
}

function getPrimaryColorAsColorObject({
  primaryColor,
}: Omit<ThemeGeneratorParams, "colorTheory">): {
  light: Color
  dark: Color
} {
  return {
    light: Color(primaryColor),
    dark: Color(primaryColor),
  }
}

function generateMonochromaticTheme({
  primaryColor,
  ...params
}: Omit<ThemeGeneratorParams, "colorTheory">) {
  const primary = getPrimaryColorAsColorObject({ primaryColor, ...params })

  return {
    light: {
      "--background": convertHexToCssVar(primary.light.lightness(95).hex()),
      "--foreground": convertHexToCssVar(primary.light.lightness(15).hex()),
      "--card": convertHexToCssVar(primary.light.lightness(92).hex()),
      "--card-foreground": convertHexToCssVar(
        primary.light.lightness(15).hex()
      ),
      "--popover": convertHexToCssVar(primary.light.lightness(94).hex()),
      "--popover-foreground": convertHexToCssVar(
        primary.light.lightness(15).hex()
      ),
      "--primary": convertHexToCssVar(primary.light.hex()),
      "--primary-foreground": convertHexToCssVar(
        primary.light.isDark() ? "#ffffff" : primary.light.darken(0.8).hex()
      ),
      "--secondary": "240 4.8% 95.9%",
      "--secondary-foreground": "240 5.9% 10%",
      "--muted": "240 4.8% 95.9%",
      "--muted-foreground": "240 3.8% 46.1%",
      "--accent": "240 4.8% 95.9%",
      "--accent-foreground": "240 5.9% 10%",
      "--destructive": "0 84.2% 60.2%",
      "--destructive-foreground": "0 0% 98%",
      "--border": "240 5.9% 90%",
      "--input": "240 5.9% 90%",
      "--ring": "240 5.9% 10%",
    },
    dark: {
      "--background": convertHexToCssVar(primary.dark.lightness(5).hex()),
      "--foreground": "0 0% 98%",
      "--card": "240 10% 3.9%",
      "--card-foreground": "0 0% 98%",
      "--popover": "240 10% 3.9%",
      "--popover-foreground": "0 0% 98%",
      "--primary": convertHexToCssVar(primary.dark.hex()),
      "--primary-foreground": convertHexToCssVar(
        primary.dark.isDark() ? "#ffffff" : primary.dark.darken(0.8).hex()
      ),
      "--secondary": "240 3.7% 15.9%",
      "--secondary-foreground": "0 0% 98%",
      "--muted": "240 3.7% 15.9%",
      "--muted-foreground": "240 5% 64.9%",
      "--accent": "240 3.7% 15.9%",
      "--accent-foreground": "0 0% 98%",
      "--destructive": "0 62.8% 30.6%",
      "--destructive-foreground": "0 0% 98%",
      "--border": "240 3.7% 15.9%",
      "--input": "240 3.7% 15.9%",
      "--ring": "240 4.9% 83.9%",
    },
  } as const
}

function generateAnalogousTheme({
  primaryColor,
  ...params
}: Omit<ThemeGeneratorParams, "colorTheory">) {}

function generateTriadTheme({
  primaryColor,
  ...params
}: Omit<ThemeGeneratorParams, "colorTheory">) {}

function generateComplementaryTheme({
  primaryColor,
  ...params
}: Omit<ThemeGeneratorParams, "colorTheory">) {}
