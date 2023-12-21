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

export function generateDarkTheme({
  primaryColor: primaryColorString,
  backgroundStyle,
}: ThemeGeneratorParams): ColorVariables {
  const primary = optimizePrimaryColor(Color(primaryColorString))
  const primaryForeground = primary.isDark()
    ? Color("#ffffff")
    : primary.darken(0.8)

  const background =
    backgroundStyle === "black"
      ? primary.saturationl(0).lightness(0)
      : backgroundStyle === "gray"
        ? primary.saturationl(0).lightness(5)
        : backgroundStyle === "grayish"
          ? primary.saturationl(6).lightness(6)
          : backgroundStyle === "slightly-saturated"
            ? primary.saturationl(7.5).lightness(7.5)
            : primary.saturationl(10).lightness(10)

  const foreground = background.lightness(98)
  const card = background
    .saturationl(
      background.saturationl() + (backgroundStyle === "black" ? 6.5 : 4)
    )
    .lightness(background.lightness() + (backgroundStyle === "black" ? 6.5 : 4))
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
