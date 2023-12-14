"use client"

import React from "react"
import { useTheme } from "next-themes"
import { useUpdateEffect } from "react-use"

import { useThemeStore } from "@/store/theme-store"

export function ThemeSync() {
  const isInitialized = React.useRef(false)
  const { colors, setColors } = useThemeStore()
  const { resolvedTheme } = useTheme()

  React.useEffect(() => {
    if (!isInitialized.current) {
      const lastTheme = localStorage.getItem("LAST_THEME")
      isInitialized.current = true

      if (lastTheme) {
        setColors(JSON.parse(lastTheme))
        return
      }
    }

    const root = document.querySelector(":root") as HTMLElement
    if (!root) return

    const theme = resolvedTheme === "dark" ? "dark" : "light"

    for (const [key, value] of Object.entries(colors[theme])) {
      root.style.setProperty(key, value)
    }
  }, [colors, resolvedTheme, setColors])

  useUpdateEffect(() => {
    localStorage.setItem("LAST_THEME", JSON.stringify(colors))
  }, [colors])

  return null
}
