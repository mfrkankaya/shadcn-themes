"use client"

import React from "react"
import { useTheme } from "next-themes"

import { generateTheme } from "@/utils/theme-generator"
import { useThemeStore } from "@/store/theme-store"

export function ThemeSync() {
  const { lightModeBgStyle, darkModeBgStyle, setField, color } = useThemeStore()
  const { resolvedTheme } = useTheme()

  React.useEffect(() => {
    const root = document.querySelector(":root") as HTMLElement
    if (!root) return

    const theme = resolvedTheme === "dark" ? "dark" : "light"
    const generatedColors = generateTheme({
      primaryColor: color,
      darkModeBgStyle,
    })

    for (const [key, value] of Object.entries(generatedColors[theme])) {
      root.style.setProperty(key, value)
    }
  }, [resolvedTheme, darkModeBgStyle, lightModeBgStyle, setField, color])

  return null
}
