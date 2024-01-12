import Color from "color"

import { ColorVariables } from "@/types/colors"
import { convertAllHexToCssVar, convertCssVarToHex } from "@/lib/utils"
import { DarkOptions, LightOptions } from "@/store/color-store"

function isWOBG(color: Color) {
  // White Or Black Or Gray
  return (
    color.lightness() === 100 ||
    color.lightness() === 0 ||
    color.saturationl() === 0
  )
}

class LightPalette {
  isWhiteOrBlackOrGray: boolean
  primary: Color
  options: LightOptions

  constructor(options: LightOptions) {
    this.isWhiteOrBlackOrGray = isWOBG(Color(options.color))
    this.primary = Color(options.color)
    this.options = options
  }

  private getSaturation() {
    const bgStyle = this.options.backgroundStyle
    if (isWOBG(Color(this.options.color))) return 0
    if (bgStyle === "white") return 0
    if (bgStyle === "grayish") return 6
    if (bgStyle === "slightly-saturated") return 9
    return 6
  }

  private getLightness() {
    const bgStyle = this.options.backgroundStyle
    if (isWOBG(Color(this.options.color))) return 100
    if (bgStyle === "white") return 100
    if (bgStyle === "grayish") return 98
    if (bgStyle === "slightly-saturated") return 95
    return 100
  }

  getPrimaryForeground() {
    return this.primary
      .saturationl(this.getSaturation())
      .lightness(this.primary.isDark() ? 98 : 2)
  }

  getBackground() {
    return this.getPrimaryForeground().lightness(this.getLightness())
  }

  getForeground() {
    return this.getBackground().lightness(5)
  }

  getCard() {
    if (this.options.isCardsAndBackgroundSameColor) return this.getBackground()
    return this.getBackground().darken(0.007)
  }

  getCardForeground() {
    return this.getForeground()
  }

  getSecondary() {
    return this.getCard().saturate(0.2).darken(0.04)
  }

  getSecondaryForeground() {
    return this.getForeground()
  }

  getMuted() {
    return this.getCard().darken(0.04)
  }

  getMutedForeground() {
    return this.getForeground().lighten(8)
  }

  getAccent() {
    return this.getCard().saturate(0.08).darken(0.04)
  }

  getAccentForeground() {
    return this.getForeground()
  }

  getBorder() {
    return this.getCard().darken(0.08)
  }

  getInput() {
    return this.getBorder().darken(0.08)
  }

  getRing() {
    return this.getInput().saturate(3).darken(0.1)
  }
}

function generateLightTheme(options: LightOptions): ColorVariables {
  const light = new LightPalette(options)
  const primary = light.primary
  const primaryForeground = light.getPrimaryForeground()
  const background = light.getBackground()
  const foreground = light.getForeground()
  const card = light.getCard()
  const cardForeground = light.getCardForeground()
  const secondary = light.getSecondary()
  const secondaryForeground = light.getSecondaryForeground()
  const muted = light.getMuted()
  const mutedForeground = light.getMutedForeground()
  const accent = light.getAccent()
  const accentForeground = light.getAccentForeground()
  const border = light.getBorder()
  const input = light.getInput()
  const ring = light.getRing()

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

class DarkPalette {
  isWhiteOrBlackOrGray: boolean
  primary: Color
  options: DarkOptions

  constructor(options: DarkOptions) {
    this.isWhiteOrBlackOrGray = isWOBG(Color(options.color))
    this.primary = Color(options.color)
    this.options = options
  }

  private getSaturation() {
    const bgStyle = this.options.backgroundStyle
    if (isWOBG(Color(this.options.color))) return 0
    if (bgStyle === "black") return 0
    if (bgStyle === "gray") return 2
    if (bgStyle === "grayish") return 5
    if (bgStyle === "slightly-saturated") return 8
    return 0
  }

  private getLightness() {
    const bgStyle = this.options.backgroundStyle
    if (bgStyle === "black") return 0
    if (bgStyle === "gray") return 5
    if (bgStyle === "grayish") return 6
    if (bgStyle === "slightly-saturated") return 8
    return 5
  }

  getPrimaryForeground() {
    return this.primary
      .saturationl(this.getSaturation())
      .lightness(this.primary.isDark() ? 98 : 2)
  }

  getBackground() {
    return this.primary
      .saturationl(this.getSaturation())
      .lightness(this.getLightness())
  }

  getForeground() {
    return this.getBackground().lightness(98)
  }

  getCard() {
    const background = this.getBackground()
    const isSameBg = this.options.isCardsAndBackgroundSameColor
    if (isSameBg) return background
    return background
      .lightness(
        this.options.backgroundStyle === "black" ? 3 : background.lightness()
      )
      .lighten(this.options.backgroundStyle === "black" ? 0 : 0.2)
  }

  getCardForeground() {
    return this.getForeground()
  }

  getSecondary() {
    return this.getCard().lighten(1)
  }

  getSecondaryForeground() {
    return this.getForeground()
  }

  getMuted() {
    return this.getCard().lighten(2)
  }

  getMutedForeground() {
    return this.getForeground().darken(0.5)
  }

  getAccent() {
    return this.getCard().saturate(8).lighten(1)
  }

  getAccentForeground() {
    return this.getForeground()
  }

  getBorder() {
    return this.getCard().lightness(
      Math.min(12, this.getCard().lightness() + 8)
    )
  }

  getInput() {
    return this.getBorder().lighten(0.5)
  }

  getRing() {
    return this.primary.lightness(40)
  }
}

function generateDarkTheme(options: DarkOptions): ColorVariables {
  const dark = new DarkPalette(options)
  const primary = dark.primary
  const primaryForeground = dark.getPrimaryForeground()
  const background = dark.getBackground()
  const foreground = dark.getForeground()
  const card = dark.getCard()
  const cardForeground = dark.getCardForeground()
  const secondary = dark.getSecondary()
  const secondaryForeground = dark.getSecondaryForeground()
  const muted = dark.getMuted()
  const mutedForeground = dark.getMutedForeground()
  const accent = dark.getAccent()
  const accentForeground = dark.getAccentForeground()
  const border = dark.getBorder()
  const input = dark.getInput()
  const ring = dark.getRing()

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
  lightOptions,
  darkOptions,
}: {
  lightOptions: LightOptions
  darkOptions: DarkOptions
}) {
  return {
    light: convertAllHexToCssVar(generateLightTheme(lightOptions)),
    dark: convertAllHexToCssVar(generateDarkTheme(darkOptions)),
  }
}
