import Color from "color"

import { ThemeGeneratorParams } from "@/types/theme-generator"
import { ColorVariables } from "@/constants/colors"
import { convertAllHexToCssVar, convertCssVarToHex } from "@/lib/utils"

type CommonParams = Omit<ThemeGeneratorParams, "colorTheory">

function optimizePrimaryColorForLightMode(color: Color) {
  const saturation = color.saturationl()
  const lightness = color.lightness()

  return color
    .saturationl(saturation > 60 ? 60 : saturation < 40 ? 40 : saturation)
    .lightness(lightness > 60 ? 60 : lightness < 40 ? 40 : lightness)
}

function generateLightTheme({
  primaryColor: primaryColorString,
}: CommonParams): ColorVariables {
  const primary = optimizePrimaryColorForLightMode(Color(primaryColorString))
  const primaryForeground = primary.isDark()
    ? Color("#ffffff")
    : primary.darken(0.9)
  const secondary = primary.rotate(180)
  const secondaryForeground = secondary.isDark()
    ? Color("#ffffff")
    : secondary.darken(0.9)

  return {
    "--primary": primary.hex(),
    "--primary-foreground": primaryForeground.hex(),
    "--secondary": secondary.hex(),
    "--secondary-foreground": secondaryForeground.hex(),
    "--background": convertCssVarToHex("0 0% 100%"),
    "--foreground": convertCssVarToHex("240 10% 3.9%"),
    "--card": convertCssVarToHex("0 0% 100%"),
    "--card-foreground": convertCssVarToHex("240 10% 3.9%"),
    "--popover": convertCssVarToHex("0 0% 100%"),
    "--popover-foreground": convertCssVarToHex("240 10% 3.9%"),
    "--muted": convertCssVarToHex("240 4.8% 95.9%"),
    "--muted-foreground": convertCssVarToHex("240 3.8% 46.1%"),
    "--accent": convertCssVarToHex("240 4.8% 95.9%"),
    "--accent-foreground": convertCssVarToHex("240 5.9% 10%"),
    "--destructive": convertCssVarToHex("0 84.2% 60.2%"),
    "--destructive-foreground": convertCssVarToHex("0 0% 98%"),
    "--border": convertCssVarToHex("240 5.9% 90%"),
    "--input": convertCssVarToHex("240 5.9% 90%"),
    "--ring": convertCssVarToHex("240 5.9% 10%"),
  }
}

function optimizePrimaryColorForDarkMode(color: Color) {
  const saturation = color.saturationl()
  const lightness = color.lightness()

  return color
    .saturationl(saturation > 50 ? 50 : saturation < 30 ? 30 : saturation)
    .lightness(lightness > 50 ? 50 : lightness < 30 ? 30 : lightness)
}

function generateDarkTheme({
  primaryColor: primaryColorString,
}: CommonParams): ColorVariables {
  const primary = optimizePrimaryColorForDarkMode(Color(primaryColorString))
  const primaryForeground = primary.isDark()
    ? Color("#ffffff")
    : primary.darken(0.9)
  const secondary = primary.rotate(180)
  const secondaryForeground = secondary.isDark()
    ? Color("#ffffff")
    : secondary.darken(0.9)

  return {
    "--primary": primary.hex(),
    "--primary-foreground": primaryForeground.hex(),
    "--secondary": secondary.hex(),
    "--secondary-foreground": secondaryForeground.hex(),
    "--background": convertCssVarToHex("240 10% 3.9%"),
    "--foreground": convertCssVarToHex("0 0% 98%"),
    "--card": convertCssVarToHex("240 10% 3.9%"),
    "--card-foreground": convertCssVarToHex("0 0% 98%"),
    "--popover": convertCssVarToHex("240 10% 3.9%"),
    "--popover-foreground": convertCssVarToHex("0 0% 98%"),
    "--muted": convertCssVarToHex("240 3.7% 15.9%"),
    "--muted-foreground": convertCssVarToHex("240 5% 64.9%"),
    "--accent": convertCssVarToHex("240 3.7% 15.9%"),
    "--accent-foreground": convertCssVarToHex("0 0% 98%"),
    "--destructive": convertCssVarToHex("0 62.8% 30.6%"),
    "--destructive-foreground": convertCssVarToHex("0 0% 98%"),
    "--border": convertCssVarToHex("240 3.7% 15.9%"),
    "--input": convertCssVarToHex("240 3.7% 15.9%"),
    "--ring": convertCssVarToHex("240 4.9% 83.9%"),
  }
}

export function generateComplementaryTheme(params: CommonParams) {
  console.log(convertAllHexToCssVar(generateLightTheme(params)))

  return {
    light: convertAllHexToCssVar(generateLightTheme(params)),
    dark: convertAllHexToCssVar(generateDarkTheme(params)),
  }
}
