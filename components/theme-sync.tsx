"use client"

import React from "react"
import { useTheme } from "next-themes"

import { useGeneratedColors } from "@/hooks/use-generated-colors"

export function ThemeSync() {
  const generatedColors = useGeneratedColors()
  const { resolvedTheme } = useTheme()

  React.useEffect(() => {
    const root = document.querySelector(":root") as HTMLElement
    if (!root) return

    const theme = resolvedTheme === "dark" ? "dark" : "light"

    for (const [key, value] of Object.entries(generatedColors[theme])) {
      root.style.setProperty(key, value)
    }
  }, [resolvedTheme, generatedColors])

  return null
}
