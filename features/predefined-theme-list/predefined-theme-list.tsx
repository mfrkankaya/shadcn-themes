"use client"

import React from "react"
import { useTheme } from "next-themes"

import { convertCssVarToHex, createRandomThemeByHue } from "@/lib/utils"
import { useThemeStore } from "@/store/theme-store"

import { THEMES } from "./themes"

export function PredefinedThemeList() {
  return (
    <div className="flex flex-row flex-wrap gap-4 mb-4">
      {THEMES.map((theme) => (
        <PredefinedThemeItem key={theme.id} {...theme} />
      ))}
    </div>
  )
}

function PredefinedThemeItem({ colors }: (typeof THEMES)[0]) {
  const { resolvedTheme } = useTheme()
  const { setColors } = useThemeStore()

  const currentTheme = resolvedTheme as "light" | "dark"

  if (!currentTheme) return null

  const primary = convertCssVarToHex(colors[currentTheme]?.["--primary"])
  const secondary = convertCssVarToHex(colors[currentTheme]?.["--secondary"])
  const accent = convertCssVarToHex(colors[currentTheme]?.["--accent"])
  const card = convertCssVarToHex(colors[currentTheme]?.["--card"])

  return (
    <button
      onClick={() => setColors(createRandomThemeByHue())}
      className="w-16 h-16 flex flex-wrap overflow-hidden rounded-lg"
    >
      <div className="w-8 h-8" style={{ backgroundColor: primary }} />
      <div className="w-8 h-8" style={{ backgroundColor: secondary }} />
      <div className="w-8 h-8" style={{ backgroundColor: accent }} />
      <div className="w-8 h-8" style={{ backgroundColor: card }} />
    </button>
  )
}
