import React from "react"

import { generateTheme } from "@/utils/theme-generator"
import { useColorStore } from "@/store/color-store"

export function useGeneratedColors() {
  const lightOptions = useColorStore((state) => state.light)
  const darkOptions = useColorStore((state) => state.dark)
  const colors = React.useMemo(
    () => generateTheme({ lightOptions, darkOptions }),
    [lightOptions, darkOptions]
  )
  return colors
}
