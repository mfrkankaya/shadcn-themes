import Color from "color"

import { ColorVariables } from "@/types/colors"
import { convertAllHexToCssVar, convertCssVarToHex } from "@/lib/utils"

function generateLightTheme({ color }: { color: string }): ColorVariables {
  const primary = Color(color)
  const primaryForeground = primary.isDark()
    ? primary.saturationl(2.5).lightness(98)
    : primary.saturationl(2.5).lightness(2)
  const background = primary.saturationl(0).lightness(100)
  const foreground = background
    .saturationl(background.saturationl() + 2.5)
    .lightness(5)
  const card = background
  const cardForeground = foreground
  const secondary = card
    .saturationl(card.saturationl() + 15)
    .lightness(card.lightness() - 7.5)
  const secondaryForeground = foreground
  const muted = card
    .saturationl(card.saturationl() + 5)
    .lightness(card.lightness() - 3)
  const mutedForeground = foreground.lightness(40)
  const accent = card
    .saturationl(card.saturationl() + 7.5)
    .lightness(card.lightness() - 3)
  const accentForeground = foreground
  const border = card
    .saturationl(card.saturationl() + 10)
    .lightness(card.lightness() - 7.5)
  const input = border
    .saturationl(border.saturationl() + 5)
    .lightness(border.lightness() - 5)
  const ring = input
    .saturationl(input.saturationl() + 30)
    .lightness(input.lightness() - 15)

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
    "--destructive": convertCssVarToHex("0 84.2% 60.2%"),
    "--destructive-foreground": convertCssVarToHex("0 0% 98%"),
    "--border": border.hex(),
    "--input": input.hex(),
    "--ring": ring.hex(),
  }
}

function generateDarkTheme({ color }: { color: string }): ColorVariables {
  const primary = Color(color)
  const primaryForeground = primary.isDark()
    ? primary.saturationl(2.5).lightness(98)
    : primary.saturationl(2.5).lightness(2)
  const background = primary.saturationl(7.5).lightness(5)
  const foreground = background
    .saturationl(background.saturationl() + 5)
    .lightness(90)
  const card = background
    .saturationl(background.saturationl() + 1.5)
    .lightness(background.lightness() + 2)
  const cardForeground = foreground
  const secondary = card
    .saturationl(card.saturationl() + 20)
    .lightness(card.lightness() + 10)
  const secondaryForeground = foreground
  const muted = card
    .saturationl(card.saturationl() + 7.5)
    .lightness(card.lightness() + 5)
  const mutedForeground = foreground.saturationl(7.5).lightness(60)
  const accent = card
    .saturationl(card.saturationl() + 10)
    .lightness(card.lightness() + 5)
  const accentForeground = foreground
  const border = card
    .saturationl(card.saturationl() + 6)
    .lightness(card.lightness() + 3)
  const input = border
    .saturationl(border.saturationl() + 3)
    .lightness(border.lightness() + 3)
  const ring = input
    .saturationl(input.saturationl() + 30)
    .lightness(input.lightness() + 15)

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
    "--destructive": convertCssVarToHex("0 84.2% 60.2%"),
    "--destructive-foreground": convertCssVarToHex("0 0% 98%"),
    "--border": border.hex(),
    "--input": input.hex(),
    "--ring": ring.hex(),
  }
}

export function generateTheme({
  lightColor,
  darkColor,
}: {
  lightColor: string
  darkColor: string
}) {
  return {
    light: convertAllHexToCssVar(generateLightTheme({ color: lightColor })),
    dark: convertAllHexToCssVar(generateDarkTheme({ color: darkColor })),
  }
}
