import React from "react"

import { generateTheme } from "@/utils/theme-generator"
import { useColorStore } from "@/store/color-store"

export function useGeneratedColors() {
  const lightColor = useColorStore((state) => state.light.color)
  const darkColor = useColorStore((state) => state.dark.color)
  const colors = React.useMemo(
    () => generateTheme({ lightColor, darkColor }),
    [lightColor, darkColor]
  )
  return colors
}
