import { create } from "zustand"
import { persist } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"

import { ThemeGeneratorParams } from "@/types/theme-generator"

type Store = ThemeGeneratorParams & {
  setField<T extends keyof Store>(field: T, value: Store[T]): void
}

export const useThemeStore = create<Store>()(
  immer(
    persist(
      (set) => ({
        color: "#3b82f6",

        setField: (field, value) => {
          set((state) => {
            state[field] = value
          })
        },

        lightModeCardSameBg: true,
        lightModeBgStyle: "white",
        lightModePrimaryForeground: "auto",
        lightModeOptimizePrimaryColor: true,

        darkModeCardSameBg: false,
        darkModeBgStyle: "slightly-saturated",
        darkModePrimaryForeground: "auto",
        darkModeOptimizePrimaryColor: true,
      }),
      {
        name: "theme-storage",
      }
    )
  )
)
