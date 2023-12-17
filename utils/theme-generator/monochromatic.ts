import Color from "color"

import { ThemeGeneratorParams } from "@/types/theme-generator"
import { ColorVariables } from "@/constants/colors"
import { convertAllHexToCssVar } from "@/lib/utils"

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
    : primary.darken(0.8)
  const background = primary.saturationl(30).lightness(98)
  const foreground = primary.saturationl(50).lightness(10)
  const card = primary.saturationl(50).lightness(97)
  const cardForeground = primary.saturationl(50).lightness(10)
  const secondary = primary.saturationl(50).lightness(94)
  const secondaryForeground = primary.saturationl(50).lightness(15)
  const muted = primary.saturationl(30).lightness(85)
  const mutedForeground = primary.saturationl(20).lightness(40)
  const accent = primary.saturationl(30).lightness(90)
  const accentForeground = primary.saturationl(50).lightness(15)
  const destructive = primary.hue(0)
  const destructiveForeground = destructive.isDark()
    ? Color("#ffffff")
    : destructive.darken(0.8)
  const border = primary.saturationl(50).lightness(90)
  const input = primary.saturationl(40).lightness(80)
  const ring = primary.saturationl(50).lightness(90)

  return {
    "--background": background.hex(),
    "--foreground": foreground.hex(),
    "--card": card.hex(),
    "--card-foreground": cardForeground.hex(),
    "--popover": card.hex(),
    "--popover-foreground": cardForeground.hex(),
    "--primary": primary.hex(),
    "--primary-foreground": primaryForeground.hex(),
    "--secondary": secondary.hex(),
    "--secondary-foreground": secondaryForeground.hex(),
    "--muted": muted.hex(),
    "--muted-foreground": mutedForeground.hex(),
    "--accent": accent.hex(),
    "--accent-foreground": accentForeground.hex(),
    "--destructive": destructive.hex(),
    "--destructive-foreground": destructiveForeground.hex(),
    "--border": border.hex(),
    "--input": input.hex(),
    "--ring": ring.hex(),
  }
}

function optimizePrimaryColorForDarkMode(color: Color) {
  const saturation = color.saturationl()
  const lightness = color.lightness()

  return color
    .saturationl(saturation > 60 ? 60 : saturation < 40 ? 40 : saturation)
    .lightness(lightness > 60 ? 60 : lightness < 40 ? 40 : lightness)
}

function generateDarkTheme({
  primaryColor: primaryColorString,
}: CommonParams): ColorVariables {
  const primary = optimizePrimaryColorForLightMode(Color(primaryColorString))
  const primaryForeground = primary.isDark()
    ? Color("#ffffff")
    : primary.darken(0.8)
  const background = primary.saturationl(50).lightness(10)
  const foreground = primary.saturationl(50).lightness(98)
  const card = primary.saturationl(50).lightness(13)
  const cardForeground = primary.saturationl(50).lightness(98)
  const secondary = primary.saturationl(50).lightness(15)
  const secondaryForeground = primary.saturationl(50).lightness(98)
  const muted = primary.saturationl(50).lightness(20)
  const mutedForeground = primary.saturationl(50).lightness(98)
  const accent = primary.saturationl(50).lightness(30)
  const accentForeground = primary.saturationl(50).lightness(98)
  const destructive = primary.hue(0)
  const destructiveForeground = destructive.isDark()
    ? Color("#ffffff")
    : destructive.darken(0.8)
  const border = primary.saturationl(50).lightness(20)
  const input = primary.saturationl(50).lightness(25)
  const ring = primary.saturationl(50).lightness(20)

  return {
    "--background": background.hex(),
    "--foreground": foreground.hex(),
    "--card": card.hex(),
    "--card-foreground": cardForeground.hex(),
    "--popover": card.hex(),
    "--popover-foreground": cardForeground.hex(),
    "--primary": primary.hex(),
    "--primary-foreground": primaryForeground.hex(),
    "--secondary": secondary.hex(),
    "--secondary-foreground": secondaryForeground.hex(),
    "--muted": muted.hex(),
    "--muted-foreground": mutedForeground.hex(),
    "--accent": accent.hex(),
    "--accent-foreground": accentForeground.hex(),
    "--destructive": destructive.hex(),
    "--destructive-foreground": destructiveForeground.hex(),
    "--border": border.hex(),
    "--input": input.hex(),
    "--ring": ring.hex(),
  }
}

export function generateMonochromaticTheme(params: CommonParams) {
  return {
    light: convertAllHexToCssVar(generateLightTheme(params)),
    dark: convertAllHexToCssVar(generateDarkTheme(params)),
  }
}
