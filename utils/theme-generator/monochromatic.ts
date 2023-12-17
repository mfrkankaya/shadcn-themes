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
  const background = primary.saturationl(20).lightness(99)
  const foreground = background.lightness(10)
  const card = background.lightness(background.lightness() - 2.5)
  const cardForeground = foreground
  const secondary = primary.saturationl(30).lightness(93)
  const secondaryForeground = foreground
  const muted = card.lightness(card.lightness() - 5)
  const mutedForeground = foreground.lightness(40)
  const accent = card.lightness(card.lightness() - 5)
  const accentForeground = foreground
  const destructive = primary.hue(0)
  const destructiveForeground = destructive.isDark()
    ? Color("#ffffff")
    : destructive.darken(0.8)
  const border = card.lightness(card.lightness() - 4)
  const input = background.lightness(card.lightness() - 5)
  const ring = input.lightness(input.lightness() - 5)

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
    .saturationl(saturation > 50 ? 50 : saturation < 30 ? 30 : saturation)
    .lightness(lightness > 50 ? 50 : lightness < 30 ? 30 : lightness)
}

function generateDarkTheme({
  primaryColor: primaryColorString,
}: CommonParams): ColorVariables {
  const primary = optimizePrimaryColorForDarkMode(Color(primaryColorString))
  const primaryForeground = primary.isDark()
    ? Color("#ffffff")
    : primary.darken(0.8)

  const background = primary.saturationl(20).lightness(10)
  const foreground = background.lightness(98)
  const card = background
    .saturationl(background.saturationl() + 3)
    .lightness(background.lightness() + 3)
  const cardForeground = foreground
  const secondary = primary.saturationl(40).lightness(20)
  const secondaryForeground = foreground
  const muted = card
    .saturationl(card.saturationl() + 5)
    .lightness(card.lightness() + 5)
  const mutedForeground = foreground.lightness(65)
  const accent = card.lightness(card.lightness() + 15)
  const accentForeground = foreground
  const destructive = primary.hue(0)
  const destructiveForeground = destructive.isDark()
    ? Color("#ffffff")
    : destructive.darken(0.8)
  const border = card.lightness(card.lightness() + 5)
  const input = background.lightness(card.lightness() + 10)
  const ring = input.lightness(input.lightness() + 10)

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
