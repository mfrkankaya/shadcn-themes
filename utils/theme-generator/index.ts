import { ThemeGeneratorParams } from "@/types/theme-generator"

import { generateMonochromaticTheme } from "./monochromatic"

export function generateTheme({
  colorTheory,
  ...params
}: ThemeGeneratorParams) {
  return generateMonochromaticTheme(params)
  // if (colorTheory === "monochromatic") return generateMonochromaticTheme(params)
  // if (colorTheory === "analogous") return generateAnalogousTheme(params)
  // if (colorTheory === "triad") return generateTriadTheme(params)
  // if (colorTheory === "complementary") return generateComplementaryTheme(params)
}
