import { createRandomThemeByHue } from "@/lib/utils"

const example = createRandomThemeByHue()

export const THEMES = [
  {
    id: "example",
    name: "Example",
    colors: example,
  },
]
