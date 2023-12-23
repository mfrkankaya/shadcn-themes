import React from "react"

import { generateTheme } from "@/utils/theme-generator"
import { useThemeStore } from "@/store/theme-store"

export function useGeneratedColors() {
  const color = useThemeStore((state) => state.color)
  const darkModeBgStyle = useThemeStore((state) => state.darkModeBgStyle)
  const lightModeBgStyle = useThemeStore((state) => state.lightModeBgStyle)
  const lightModeCardSameBg = useThemeStore(
    (state) => state.lightModeCardSameBg
  )
  const darkModeCardSameBg = useThemeStore((state) => state.darkModeCardSameBg)

  const colors = React.useMemo(
    () =>
      generateTheme({
        primaryColor: color,
        darkModeBgStyle,
        lightModeBgStyle,
        lightModeCardSameBg,
        darkModeCardSameBg,
      }),
    [
      color,
      darkModeBgStyle,
      lightModeBgStyle,
      lightModeCardSameBg,
      darkModeCardSameBg,
    ]
  )

  return colors
}
