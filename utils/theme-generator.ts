import Color from "color"

import { ColorVariables } from "@/types/colors"
import { convertAllHexToCssVar, convertCssVarToHex } from "@/lib/utils"
import { DarkOptions, LightOptions } from "@/store/color-store"

function isWOBG(color: Color) {
  return (
    color.lightness() === 100 ||
    color.lightness() === 0 ||
    color.saturationl() === 0
  )
}

class LightPalette {
  isWhiteOrBlackOrGray: boolean
  primary: Color

  constructor(options: LightOptions) {
    this.isWhiteOrBlackOrGray = isWOBG(Color(options.color))
    this.primary = Color(options.color)
  }

  getPrimaryForeground() {
    return this.primary.isDark()
      ? this.primary
          .saturationl(this.isWhiteOrBlackOrGray ? 0 : 2.5)
          .lightness(98)
      : this.primary
          .saturationl(this.isWhiteOrBlackOrGray ? 0 : 2.5)
          .lightness(2)
  }

  getBackground() {
    return this.primary.saturationl(0).lightness(100)
  }

  getForeground() {
    const background = this.getBackground()
    return background
      .saturationl(
        this.isWhiteOrBlackOrGray ? 0 : background.saturationl() + 2.5
      )
      .lightness(5)
  }

  getCard() {
    const background = this.getBackground()
    return background
  }

  getCardForeground() {
    const foreground = this.getForeground()
    return foreground
  }

  getSecondary() {
    const card = this.getCard()
    return card
      .saturationl(this.isWhiteOrBlackOrGray ? 0 : card.saturationl() + 15)
      .lightness(card.lightness() - 7.5)
  }

  getSecondaryForeground() {
    const foreground = this.getForeground()
    return foreground
  }

  getMuted() {
    const card = this.getCard()
    return card
      .saturationl(this.isWhiteOrBlackOrGray ? 0 : card.saturationl() + 5)
      .lightness(card.lightness() - 3)
  }

  getMutedForeground() {
    const foreground = this.getForeground()
    return foreground.lightness(40)
  }

  getAccent() {
    const card = this.getCard()
    return card
      .saturationl(this.isWhiteOrBlackOrGray ? 0 : card.saturationl() + 7.5)
      .lightness(card.lightness() - 3)
  }

  getAccentForeground() {
    const foreground = this.getForeground()
    return foreground
  }

  getBorder() {
    const card = this.getCard()
    return card
      .saturationl(this.isWhiteOrBlackOrGray ? 0 : card.saturationl() + 10)
      .lightness(card.lightness() - 7.5)
  }

  getInput() {
    const border = this.getBorder()
    return border
      .saturationl(this.isWhiteOrBlackOrGray ? 0 : border.saturationl() + 5)
      .lightness(border.lightness() - 5)
  }

  getRing() {
    const input = this.getInput()
    return input
      .saturationl(this.isWhiteOrBlackOrGray ? 0 : input.saturationl() + 30)
      .lightness(input.lightness() - 15)
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

  constructor(options: DarkOptions) {
    this.isWhiteOrBlackOrGray = isWOBG(Color(options.color))
    this.primary = Color(options.color)
  }

  getPrimaryForeground() {
    return this.primary.isDark()
      ? this.primary
          .saturationl(this.isWhiteOrBlackOrGray ? 0 : 2.5)
          .lightness(98)
      : this.primary
          .saturationl(this.isWhiteOrBlackOrGray ? 0 : 2.5)
          .lightness(2)
  }

  getBackground() {
    return this.primary
      .saturationl(this.isWhiteOrBlackOrGray ? 0 : 7.5)
      .lightness(5)
  }

  getForeground() {
    const background = this.getBackground()
    return background
      .saturationl(this.isWhiteOrBlackOrGray ? 0 : background.saturationl() + 5)
      .lightness(90)
  }

  getCard() {
    const background = this.getBackground()
    return background
      .saturationl(
        this.isWhiteOrBlackOrGray ? 0 : background.saturationl() + 1.5
      )
      .lightness(background.lightness() + 2)
  }

  getCardForeground() {
    const foreground = this.getForeground()
    return foreground
  }

  getSecondary() {
    const card = this.getCard()
    return card
      .saturationl(this.isWhiteOrBlackOrGray ? 0 : card.saturationl() + 15)
      .lightness(card.lightness() + 7)
  }

  getSecondaryForeground() {
    const foreground = this.getForeground()
    return foreground
  }

  getMuted() {
    const card = this.getCard()
    return card
      .saturationl(this.isWhiteOrBlackOrGray ? 0 : card.saturationl() + 7.5)
      .lightness(card.lightness() + 5)
  }

  getMutedForeground() {
    const foreground = this.getForeground()
    return foreground
      .saturationl(this.isWhiteOrBlackOrGray ? 0 : 7.5)
      .lightness(60)
  }

  getAccent() {
    const card = this.getCard()
    return card
      .saturationl(this.isWhiteOrBlackOrGray ? 0 : card.saturationl() + 10)
      .lightness(card.lightness() + 5)
  }

  getAccentForeground() {
    const foreground = this.getForeground()
    return foreground
  }

  getBorder() {
    const card = this.getCard()
    return card
      .saturationl(this.isWhiteOrBlackOrGray ? 0 : card.saturationl() + 6)
      .lightness(card.lightness() + 3)
  }

  getInput() {
    const border = this.getBorder()
    return border
      .saturationl(this.isWhiteOrBlackOrGray ? 0 : border.saturationl() + 3)
      .lightness(border.lightness() + 3)
  }

  getRing() {
    const input = this.getInput()
    return input
      .saturationl(this.isWhiteOrBlackOrGray ? 0 : input.saturationl() + 30)
      .lightness(input.lightness() + 15)
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
