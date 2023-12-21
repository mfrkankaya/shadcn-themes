import { ThemeGeneratorParams } from "@/types/theme-generator"
import { convertAllHexToCssVar } from "@/lib/utils"

import { generateDarkTheme } from "./dark-theme"
import { generateLightTheme } from "./light-theme"

export function generateTheme(params: ThemeGeneratorParams) {
  return {
    light: convertAllHexToCssVar(generateLightTheme(params)),
    dark: convertAllHexToCssVar(generateDarkTheme(params)),
  }
}
