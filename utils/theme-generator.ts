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
      "--background": convertHexToCssVar(primary.light.lightness(98).hex()),
      "--foreground": convertHexToCssVar(primary.light.lightness(10).hex()),
      "--card": convertHexToCssVar(primary.light.lightness(95).hex()),
      "--card-foreground": convertHexToCssVar(
        primary.light.lightness(10).hex()
      ),
      "--popover": convertHexToCssVar(primary.light.lightness(95).hex()),
      "--popover-foreground": convertHexToCssVar(
        primary.light.lightness(10).hex()
      ),
      "--primary": convertHexToCssVar(primary.light.hex()),
      "--primary-foreground": convertHexToCssVar(
        primary.light.isDark() ? "#ffffff" : primary.light.darken(0.8).hex()
      ),
      "--secondary": convertHexToCssVar(primary.light.lightness(93).hex()),
      "--secondary-foreground": convertHexToCssVar(
        primary.light.lightness(15).hex()
      ),
      "--muted": convertHexToCssVar(
        primary.light.saturationl(20).lightness(80).hex()
      ),
      "--muted-foreground": convertHexToCssVar(
        primary.light.lightness(15).hex()
      ),
      "--accent": convertHexToCssVar(
        primary.light.saturationl(30).lightness(90).hex()
      ),
      "--accent-foreground": convertHexToCssVar(
        primary.light.lightness(15).hex()
      ),
      "--destructive": "0 84.2% 60.2%",
      "--destructive-foreground": "0 0% 98%",
      "--border": convertHexToCssVar(
        primary.light.saturationl(50).lightness(90).hex()
      ),
      "--input": convertHexToCssVar(
        primary.light.saturationl(100).lightness(80).hex()
      ),
      "--ring": convertHexToCssVar(
        primary.light.saturationl(50).lightness(90).hex()
      ),
    },
    dark: {
      "--background": convertHexToCssVar(
        primary.dark.saturationl(50).lightness(10).hex()
      ),
      "--foreground": convertHexToCssVar(
        primary.dark.saturationl(50).lightness(98).hex()
      ),
      "--card": convertHexToCssVar(
        primary.dark.saturationl(50).lightness(13).hex()
      ),
      "--card-foreground": convertHexToCssVar(
        primary.dark.saturationl(50).lightness(98).hex()
      ),
      "--popover": convertHexToCssVar(
        primary.dark.saturationl(50).lightness(13).hex()
      ),
      "--popover-foreground": convertHexToCssVar(
        primary.dark.saturationl(50).lightness(98).hex()
      ),
      "--primary": convertHexToCssVar(primary.dark.hex()),
      "--primary-foreground": convertHexToCssVar(
        primary.dark.isDark() ? "#ffffff" : primary.dark.darken(0.8).hex()
      ),
      "--secondary": convertHexToCssVar(
        primary.dark.saturationl(50).lightness(15).hex()
      ),
      "--secondary-foreground": convertHexToCssVar(
        primary.dark.saturationl(50).lightness(98).hex()
      ),
      "--muted": convertHexToCssVar(
        primary.dark.saturationl(50).lightness(20).hex()
      ),
      "--muted-foreground": convertHexToCssVar(
        primary.dark.saturationl(50).lightness(98).hex()
      ),
      "--accent": convertHexToCssVar(
        primary.dark.saturationl(50).lightness(30).hex()
      ),
      "--accent-foreground": convertHexToCssVar(
        primary.dark.saturationl(50).lightness(98).hex()
      ),
      "--destructive": "0 84.2% 60.2%",
      "--destructive-foreground": "0 0% 98%",
      "--border": convertHexToCssVar(
        primary.dark.saturationl(50).lightness(20).hex()
      ),
      "--input": convertHexToCssVar(
        primary.dark.saturationl(50).lightness(25).hex()
      ),
      "--ring": convertHexToCssVar(
        primary.dark.saturationl(50).lightness(20).hex()
      ),
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
