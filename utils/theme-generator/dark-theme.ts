import Color from "color"

import { ThemeGeneratorParams } from "@/types/theme-generator"
import { ColorVariables } from "@/constants/colors"
import { convertCssVarToHex } from "@/lib/utils"

function optimizePrimaryColor(color: Color, shouldOptimize: boolean) {
  const hue = color.hue()
  const saturation = color.saturationl()
  const lightness = color.lightness()

  let myColor = color
    .saturationl(50 + (saturation - 50) / 2)
    .lightness(50 + (lightness - 50) / 2)

  if (shouldOptimize) {
    if (myColor.lightness() < 60 && myColor.lightness() > 40) {
      myColor = myColor.lightness(40)
    }

    if (myColor.isLight()) {
      myColor.saturationl(myColor.saturationl() - 10)
    }
  }

  return myColor
}

export function generateDarkTheme({
  color,
  darkModeBgStyle,
  darkModeCardSameBg,
  darkModePrimaryForeground,
  darkModeOptimizePrimaryColor,
}: ThemeGeneratorParams): ColorVariables {
  const primary = optimizePrimaryColor(
    Color(color),
    darkModeOptimizePrimaryColor
  )
  const primaryForeground =
    darkModePrimaryForeground === "auto"
      ? primary.isDark()
        ? Color("#ffffff")
        : primary.darken(0.9)
      : darkModePrimaryForeground === "white"
        ? Color("#ffffff")
        : primary.darken(0.9)

  const background =
    darkModeBgStyle === "black"
      ? primary.saturationl(0).lightness(0)
      : darkModeBgStyle === "gray"
        ? primary.saturationl(0).lightness(5)
        : darkModeBgStyle === "grayish"
          ? primary.saturationl(6).lightness(6)
          : darkModeBgStyle === "slightly-saturated"
            ? primary.saturationl(7.5).lightness(7.5)
            : primary.saturationl(10).lightness(10)

  const foreground = background.lightness(98)
  const card = darkModeCardSameBg
    ? background
    : background
        .saturationl(
          background.saturationl() + (darkModeBgStyle === "black" ? 6.5 : 4)
        )
        .lightness(
          background.lightness() + (darkModeBgStyle === "black" ? 6.5 : 4)
        )
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
    "--destructive": convertCssVarToHex("0 62.8% 30.6%"),
    "--destructive-foreground": convertCssVarToHex("0 0% 98%"),
    "--border": border.hex(),
    "--input": input.hex(),
    "--ring": ring.hex(),
  }
}
