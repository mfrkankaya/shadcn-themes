"use client"

import React from "react"
import { useTheme } from "next-themes"

import { useColorStore, useColorStoreSetter } from "@/store/color-store"
import BgStyleSelect from "@/components/theme-generator-form/bg-style-select"
import CardStyleSelect from "@/components/theme-generator-form/card-style-select"
import RadiusSelect from "@/components/theme-generator-form/radius-select"

import { ColorPicker } from "./color-picker"

export default function ThemeGeneratorForm() {
  const setFieldStore = useColorStoreSetter()
  const lightColor = useColorStore((state) => state.light.color)
  const darkColor = useColorStore((state) => state.dark.color)
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <div className="rounded-full p-1 md:p-2 flex w-fit max-w-lg bg-card/80 backdrop-blur-md border sticky bottom-12 mx-auto items-center divide-x shadow-lg mt-12">
      <div className="flex gap-1 md:gap-2 pr-3 md:pr-4">
        <ColorPicker
          title="Light Color"
          value={lightColor}
          onChange={(v) => {
            if (resolvedTheme !== "light") setTheme("light")
            setFieldStore("light.color", v)
          }}
        />

        <ColorPicker
          title="Dark Color"
          value={darkColor}
          onChange={(v) => {
            if (resolvedTheme !== "dark") setTheme("dark")
            setFieldStore("dark.color", v)
          }}
        />
      </div>
      <div className="px-3 md:px-4">
        <RadiusSelect />
      </div>
      <div className="px-3 md:px-4">
        <CardStyleSelect />
      </div>
      <div className="px-3 md:px-4">
        <BgStyleSelect />
      </div>
    </div>
  )
}
