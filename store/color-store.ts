import update from "lodash/update"
import { create } from "zustand"
import { persist } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"

import { GetPathValueType, Leaves } from "@/types/helpers"

export type ColorStore = {
  light: {
    color: string
    isCardsAndBackgroundSameColor: boolean
    backgroundStyle: "white" | "grayish" | "slightly-saturated"
  }
  dark: {
    color: string
    isCardsAndBackgroundSameColor: boolean
    backgroundStyle: "black" | "gray" | "grayish" | "slightly-saturated"
  }

  isOptionsExpanded: boolean
}

type Actions = {
  setField: <T extends Leaves<ColorStore>>(
    field: T,
    value: GetPathValueType<ColorStore, T>
  ) => void
}

type Store = ColorStore & Actions

export const useColorStore = create<Store>()(
  immer(
    persist(
      (set) => ({
        light: {
          color: "#9a16ca",
          isCardsAndBackgroundSameColor: true,
          backgroundStyle: "white",
        },
        dark: {
          color: "#3348e6",
          isCardsAndBackgroundSameColor: false,
          backgroundStyle: "grayish",
        },

        setField: (field, value) => {
          set((state) => {
            update(state, field, () => value)
          })
        },

        isOptionsExpanded: false,
      }),
      {
        name: "color-storage",
      }
    )
  )
)

export function useColorStoreSetter() {
  return useColorStore((state) => state.setField)
}
