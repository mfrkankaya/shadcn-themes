import Color from "color"

import { ThemeGeneratorParams } from "@/types/theme-generator"
import { ColorVariables } from "@/constants/colors"
import { convertCssVarToHex } from "@/lib/utils"

function optimizePrimaryColor(color: Color, shouldOptimize: boolean) {
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

export function generateLightTheme({
  color,
  lightModeBgStyle,
  lightModeCardSameBg,
  lightModePrimaryForeground,
  lightModeOptimizePrimaryColor,
}: ThemeGeneratorParams): ColorVariables {
  const primary = optimizePrimaryColor(
    Color(color),
    lightModeOptimizePrimaryColor
  )
  const primaryForeground =
    lightModePrimaryForeground === "auto"
      ? primary.isDark()
        ? Color("#ffffff")
        : primary.darken(0.9)
      : lightModePrimaryForeground === "white"
        ? Color("#ffffff")
        : primary.darken(0.9)
  const background =
    lightModeBgStyle === "white"
      ? primary.saturationl(25).lightness(100)
      : lightModeBgStyle === "grayish"
        ? primary.saturationl(50).lightness(99)
        : primary.saturationl(75).lightness(98)
  const foreground = primary.saturationl(20).lightness(10)
  const card = lightModeCardSameBg
    ? background
    : background
        .saturationl(background.saturationl() + 7.5)
        .lightness(background.lightness() - 1.5)
  const cardForeground = foreground
  const secondary = card
    .saturationl(card.saturationl() + (lightModeCardSameBg ? 20 : 15))
    .lightness(card.lightness() - (lightModeCardSameBg ? 10 : 7.5))
  const secondaryForeground = foreground
  const muted = card
    .saturationl(card.saturationl() + (lightModeCardSameBg ? 7.5 : 5))
    .lightness(card.lightness() - (lightModeCardSameBg ? 5 : 2.5))
  const mutedForeground = foreground.lightness(40)
  const accent = card
    .saturationl(card.saturationl() + (lightModeCardSameBg ? 20 : 15))
    .lightness(card.lightness() - (lightModeCardSameBg ? 10 : 7.5))
  const accentForeground = foreground
  const border = card
    .saturationl(card.saturationl() + (lightModeCardSameBg ? 10 : 5))
    .lightness(card.lightness() - (lightModeCardSameBg ? 5 : 2.5))
  const input = card
    .saturationl(card.saturationl() + (lightModeCardSameBg ? 15 : 10))
    .lightness(card.lightness() - (lightModeCardSameBg ? 7.5 : 5))
  const ring = input
    .saturationl(input.saturationl() + (lightModeCardSameBg ? 15 : 10))
    .lightness(input.lightness() - (lightModeCardSameBg ? 7.5 : 5))

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
