import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"

import { colors } from "@/constants/colors"

type Store = {
  color: string
  darkModeBgStyle:
    | "black"
    | "gray"
    | "grayish"
    | "slightly-saturated"
    | "saturated"
  lightModeBgStyle:
    | "white"
    | "gray"
    | "grayish"
    | "slightly-saturated"
    | "saturated"

  setField<T extends keyof Store>(field: T, value: Store[T]): void
}

export const useThemeStore = create<Store>()(
  immer(
    persist(
      (set) => ({
        color: "#3b82f6",
        darkModeBgStyle: "slightly-saturated",
        lightModeBgStyle: "white",
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
