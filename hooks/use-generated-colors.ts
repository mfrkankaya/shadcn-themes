import React from "react"

import { generateTheme } from "@/utils/theme-generator"
import { useThemeStore } from "@/store/theme-store"

export function useGeneratedColors() {
  const {
    color,
    darkModeBgStyle,
    darkModeCardSameBg,
    darkModePrimaryForeground,
    darkModeOptimizePrimaryColor,
    lightModeBgStyle,
    lightModeCardSameBg,
    lightModePrimaryForeground,
    lightModeOptimizePrimaryColor,
  } = useThemeStore()

  const colors = React.useMemo(
    () =>
      generateTheme({
        color,
        darkModeBgStyle,
        darkModeCardSameBg,
        darkModePrimaryForeground,
        darkModeOptimizePrimaryColor,
        lightModeBgStyle,
        lightModeCardSameBg,
        lightModePrimaryForeground,
        lightModeOptimizePrimaryColor,
      }),
    [
      color,
      darkModeBgStyle,
      darkModeCardSameBg,
      darkModePrimaryForeground,
      darkModeOptimizePrimaryColor,
      lightModeBgStyle,
      lightModeCardSameBg,
      lightModePrimaryForeground,
      lightModeOptimizePrimaryColor,
    ]
  )

  return colors
}
