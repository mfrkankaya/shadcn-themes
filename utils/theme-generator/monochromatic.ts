import Color from "color"

import { ThemeGeneratorParams } from "@/types/theme-generator"
import { ColorVariables } from "@/constants/colors"
import { convertAllHexToCssVar, convertCssVarToHex } from "@/lib/utils"

function optimizePrimaryColorForLightMode(color: Color) {
  const saturation = color.saturationl()
  const lightness = color.lightness()

  return color
    .saturationl(saturation > 60 ? 60 : saturation < 40 ? 40 : saturation)
    .lightness(lightness > 60 ? 60 : lightness < 40 ? 40 : lightness)
}

function generateLightTheme({
  primaryColor: primaryColorString,
}: ThemeGeneratorParams): ColorVariables {
  const primary = optimizePrimaryColorForLightMode(Color(primaryColorString))
  const primaryForeground = primary.isDark()
    ? Color("#ffffff")
    : primary.darken(0.9)
  const background = primary.saturationl(10).lightness(100)
  const foreground = background.lightness(10)
  const card = background
    .saturationl(background.saturationl() + 5)
    .lightness(background.lightness() - 2.5)
  const cardForeground = foreground
  const secondary = card
    .saturationl(card.saturationl() + 15)
    .lightness(card.lightness() - 7.5)
  const secondaryForeground = foreground
  const muted = card
    .saturationl(card.saturationl() + 5)
    .lightness(card.lightness() - 2.5)
  const mutedForeground = foreground.lightness(40)
  const accent = card
    .saturationl(card.saturationl() + 15)
    .lightness(card.lightness() - 7.5)
  const accentForeground = foreground
  // const destructive = primary.hue(0)
  // const destructiveForeground = destructive.isDark()
  //   ? Color("#ffffff")
  //   : destructive.darken(0.8)
  const border = card
    .saturationl(card.saturationl() + 5)
    .lightness(card.lightness() - 2.5)
  const input = card
    .saturationl(card.saturationl() + 10)
    .lightness(card.lightness() - 5)
  const ring = input
    .saturationl(input.saturationl() + 10)
    .lightness(input.lightness() - 5)

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
    // "--destructive": destructive.hex(),
    // "--destructive-foreground": destructiveForeground.hex(),
    "--destructive": convertCssVarToHex("0 84.2% 60.2%"),
    "--destructive-foreground": convertCssVarToHex("0 0% 98%"),
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
  backgroundStyle,
}: ThemeGeneratorParams): ColorVariables {
  const primary = optimizePrimaryColorForDarkMode(Color(primaryColorString))
  const primaryForeground = primary.isDark()
    ? Color("#ffffff")
    : primary.darken(0.8)

  const background =
    backgroundStyle === "black"
      ? Color("#000000")
      : backgroundStyle === "gray"
        ? primary.saturationl(0).lightness(5)
        : backgroundStyle === "grayish"
          ? primary.saturationl(5).lightness(5)
          : backgroundStyle === "slightly-saturated"
            ? primary.saturationl(7.5).lightness(7.5)
            : primary.saturationl(10).lightness(10)

  const foreground = background.lightness(98)
  const card = background
    .saturationl(background.saturationl() + 4)
    .lightness(background.lightness() + 4)
  const cardForeground = foreground
  const secondary = primary.saturationl(20).lightness(20)
  const secondaryForeground = foreground
  const muted = card
    .saturationl(card.saturationl() + 4)
    .lightness(card.lightness() + 4)
  const mutedForeground = foreground.lightness(60)
  const accent = card
    .saturationl(card.saturationl() + 10)
    .lightness(card.lightness() + 10)
  const accentForeground = foreground
  // const destructive = primary.hue(0)
  // const destructiveForeground = destructive.isDark()
  //   ? Color("#ffffff")
  //   : destructive.darken(0.8)
  const border = card
    .saturationl(card.saturationl() + 5)
    .lightness(card.lightness() + 5)
  const input = card
    .saturationl(card.saturationl() + 5)
    .lightness(card.lightness() + 5)
  const ring = input
    .saturationl(input.saturationl() + 5)
    .lightness(input.lightness() + 5)

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
    // "--destructive": destructive.hex(),
    // "--destructive-foreground": destructiveForeground.hex(),
    "--destructive": convertCssVarToHex("0 62.8% 30.6%"),
    "--destructive-foreground": convertCssVarToHex("0 0% 98%"),
    "--border": border.hex(),
    "--input": input.hex(),
    "--ring": ring.hex(),
  }
}

export function generateMonochromaticTheme(params: ThemeGeneratorParams) {
  return {
    light: convertAllHexToCssVar(generateLightTheme(params)),
    dark: convertAllHexToCssVar(generateDarkTheme(params)),
  }
}
