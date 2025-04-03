import React from "react"

import { generateThemeV3, generateThemeV4 } from "@/utils/theme-generator"
import { useColorStore } from "@/store/color-store"

export function useGeneratedColorsV3() {
  const lightOptions = useColorStore((state) => state.light)
  const darkOptions = useColorStore((state) => state.dark)
  const colors = React.useMemo(
    () => generateThemeV3({ lightOptions, darkOptions }),
    [lightOptions, darkOptions]
  )
  return colors
}

export function useGeneratedColorsV4() {
  const lightOptions = useColorStore((state) => state.light)
  const darkOptions = useColorStore((state) => state.dark)
  const colors = React.useMemo(
    () => generateThemeV4({ lightOptions, darkOptions }),
    [lightOptions, darkOptions]
  )
  return colors
}
