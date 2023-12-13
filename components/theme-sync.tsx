"use client"

import React from "react"
import { useTheme } from "next-themes"

import { useThemeStore } from "@/store/theme-store"

export default function ThemeSync() {
  const colors = useThemeStore((state) => state.colors)
  const { resolvedTheme } = useTheme()

  React.useEffect(() => {
    const root = document.querySelector(":root") as HTMLElement
    if (!root) return

    const theme = resolvedTheme === "dark" ? "dark" : "light"

    for (const [key, value] of Object.entries(colors[theme])) {
      root.style.setProperty(key, value)
    }
  }, [colors, resolvedTheme])

  return null
}
