import Color from "color"

import { ThemeGeneratorParams } from "@/types/theme-generator"
import { ColorVariables } from "@/constants/colors"
import { convertCssVarToHex } from "@/lib/utils"

function optimizePrimaryColor(color: Color) {
  const saturation = color.saturationl()
  const lightness = color.lightness()

  return color
    .saturationl(50 + (saturation - 50) / 2)
    .lightness(50 + (lightness - 50) / 2)
}

export function generateLightTheme({
  primaryColor: primaryColorString,
  lightModeBgStyle,
}: ThemeGeneratorParams): ColorVariables {
  const primary = optimizePrimaryColor(Color(primaryColorString))
  const primaryForeground = primary.isDark()
    ? Color("#ffffff")
    : primary.darken(0.9)
  const background =
    lightModeBgStyle === "white"
      ? primary.saturationl(25).lightness(100)
      : lightModeBgStyle === "grayish"
        ? primary.saturationl(50).lightness(99)
        : primary.saturationl(75).lightness(98)
  const foreground = primary.saturationl(20).lightness(10)
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
