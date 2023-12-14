import { create } from "zustand"
import { immer } from "zustand/middleware/immer"

import { colors } from "@/constants/colors"

type Store = {
  colors: {
    light: typeof colors.light
    dark: typeof colors.dark
  }
  setColors: (data: typeof colors) => void
  updateColor: (
    key: `${"light" | "dark"}.${keyof Store["colors"]["light"]}`,
    value: string
  ) => void
}

export const useThemeStore = create<Store>()(
  immer((set) => ({
    colors,
    setColors: (data) => {
      set((state) => {
        state.colors = data
      })
    },
    updateColor: (key, value) => {
      const [theme, color] = key.split(".") as [
        keyof Store["colors"],
        keyof Store["colors"]["light"],
      ]
      set((state) => {
        state.colors[theme][color] = value
      })
    },
  }))
)
