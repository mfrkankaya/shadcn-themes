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
    radius: string
  }
  dark: {
    color: string
    isCardsAndBackgroundSameColor: boolean
    backgroundStyle: "black" | "gray" | "grayish" | "slightly-saturated"
    radius: string
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
          radius: "0.625rem",
        },
        dark: {
          color: "#3348e6",
          isCardsAndBackgroundSameColor: false,
          backgroundStyle: "grayish",
          radius: "0.625rem",
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

export type LightOptions = ColorStore["light"]
export type DarkOptions = ColorStore["dark"]
