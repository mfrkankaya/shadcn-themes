"use client"

import React from "react"
import Color from "color"
import { HexColorPicker } from "react-colorful"
import { useLocalStorage, useUpdateEffect } from "react-use"

import { ThemeGeneratorParams } from "@/types/theme-generator"
import { isValidColor } from "@/lib/utils"
import { generateTheme } from "@/utils/theme-generator"
import { useThemeStore } from "@/store/theme-store"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import CopyButton from "./components/copy-button"
import { DarkBgStyleSelector } from "./components/dark-bg-style-selector"

export function ThemeGeneratorForm() {
  const [color, setColor] = useLocalStorage("PRIMARY_COLOR", "#0003ff")
  const [colorInput, setColorInput] = useLocalStorage(
    "PRIMARY_COLOR_INPUT",
    "#0003ff"
  )
  const [backgroundStyle, setBackgroundStyle] = useLocalStorage<
    ThemeGeneratorParams["backgroundStyle"]
  >("BACKGROUND_STYLE", "slightly-saturated")
  const setColors = useThemeStore((state) => state.setColors)

  useUpdateEffect(() => {
    if (!color || !backgroundStyle) return
    setColors(generateTheme({ primaryColor: color, backgroundStyle }))
  }, [color, setColors, backgroundStyle])

  return (
    <div className="mt-8 mb-16 flex flex-wrap gap-8 items-end justify-between">
      <div className="flex items-end flex-wrap gap-8">
        <div className="flex flex-col w-fit gap-2">
          <HexColorPicker
            color={color}
            onChange={(value) => {
              setColor(value)
              setColorInput(value)
            }}
          />
          <Input
            placeholder="Color"
            value={colorInput}
            onChange={(e) => {
              setColorInput(e.target.value)
              if (isValidColor(e.target.value))
                setColor(Color(e.target.value).hex())
            }}
          />
        </div>

        <div className="w-fit">
          <div className="font-semibold mb-2">Dark mode background style</div>
          <DarkBgStyleSelector
            value={backgroundStyle!}
            onValueChange={setBackgroundStyle}
          />
        </div>
      </div>

      <CopyButton />
    </div>
  )
}
