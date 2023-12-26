import update from "lodash/update"
import { create } from "zustand"
import { persist } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"

import { GetPathValueType, Leaves } from "@/types/helpers"

export type ColorStore = {
  lightColor: string
  darkColor: string
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
        lightColor: "#9a16ca",
        darkColor: "#3348e6",

        setField: (field, value) => {
          set((state) => {
            update(state, field, () => value)
          })
        },
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
