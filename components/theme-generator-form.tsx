"use client"

import React from "react"
import { useTheme } from "next-themes"

import { useColorStore, useColorStoreSetter } from "@/store/color-store"

import { ColorPicker } from "./color-picker"
import CopyButton from "./copy-button"

export default function ThemeGeneratorForm() {
  const setFieldStore = useColorStoreSetter()
  const lightColor = useColorStore((state) => state.lightColor)
  const darkColor = useColorStore((state) => state.darkColor)
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <div className="w-full max-w-xl flex flex-col items-center space-y-6">
      <div className="grid grid-cols-1 gap-4 w-full sm:grid-cols-2">
        <ColorPicker
          title="Light Color"
          value={lightColor}
          onChange={(v) => {
            if (resolvedTheme !== "light") setTheme("light")
            setFieldStore("lightColor", v)
          }}
        />
        <ColorPicker
          title="Dark Color"
          value={darkColor}
          onChange={(v) => {
            if (resolvedTheme !== "dark") setTheme("dark")
            setFieldStore("darkColor", v)
          }}
        />
      </div>

      <div className="mx-auto">
        <CopyButton />
      </div>
    </div>
  )
}
