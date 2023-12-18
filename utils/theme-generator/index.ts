import { ThemeGeneratorParams } from "@/types/theme-generator"

import { generateMonochromaticTheme } from "./monochromatic"

export function generateTheme(params: ThemeGeneratorParams) {
  return generateMonochromaticTheme(params)
}
