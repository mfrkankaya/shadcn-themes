import { create } from "zustand"
import { persist } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"

import { ThemeGeneratorParams } from "@/types/theme-generator"

type Store = {
  color: string
  lightModeCardSameBg: boolean
  darkModeBgStyle: ThemeGeneratorParams["darkModeBgStyle"]
  lightModeBgStyle: ThemeGeneratorParams["lightModeBgStyle"]
  setField<T extends keyof Store>(field: T, value: Store[T]): void
}

export const useThemeStore = create<Store>()(
  immer(
    persist(
      (set) => ({
        color: "#3b82f6",
        lightModeCardSameBg: true,
        darkModeBgStyle: "slightly-saturated",
        lightModeBgStyle: "grayish",
        setField: (field, value) => {
          set((state) => {
            state[field] = value
          })
        },
      }),
      {
        name: "theme-storage",
      }
    )
  )
)
