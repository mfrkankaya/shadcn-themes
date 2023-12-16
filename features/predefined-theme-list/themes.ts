import { convertHexToCssVar, createTheme } from "@/lib/utils"

const example = createTheme({
  light: {
    "--primary": convertHexToCssVar("#2955D9"),
  },
  dark: {},
})

export const THEMES = [
  {
    id: "example",
    name: "Example",
    colors: example,
  },
]
