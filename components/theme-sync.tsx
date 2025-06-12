"use client"

import React from "react"
import { useTheme } from "next-themes"

import { generateTheme } from "@/utils/theme-generator"
import { useColorStore } from "@/store/color-store"
import { useMounted } from "@/hooks/use-mounted"

export function ThemeSync() {
  const { resolvedTheme } = useTheme()
  const lightOptions = useColorStore((state) => state.light)
  const darkOptions = useColorStore((state) => state.dark)
  const mounted = useMounted()

  React.useEffect(() => {
    if (!mounted) return
    const root = document.querySelector(":root") as HTMLElement
    if (!root) return

    const { light, dark } = generateTheme({ lightOptions, darkOptions })
    const theme = resolvedTheme === "dark" ? dark : light

    for (const [key, value] of Object.entries(theme)) {
      root.style.setProperty(key, value)
    }
  }, [mounted, resolvedTheme, lightOptions, darkOptions])

  return null
}
