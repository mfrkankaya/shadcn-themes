"use client"

import React from "react"
import { useLocalStorage, useUpdateEffect } from "react-use"

import { ThemeGeneratorParams } from "@/types/theme-generator"
import { generateTheme } from "@/utils/theme-generator"
import { useThemeStore } from "@/store/theme-store"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import ColorPicker from "./components/color-picker"
import CopyButton from "./components/copy-button"
import { DarkBgStyleSelector } from "./components/dark-bg-style-selector"

export function ThemeGeneratorForm() {
  const [color, setColor] = useLocalStorage("PRIMARY_COLOR", "#0003ff")

  const [backgroundStyle, setBackgroundStyle] = useLocalStorage<
    ThemeGeneratorParams["backgroundStyle"]
  >("BACKGROUND_STYLE", "slightly-saturated")
  const setColors = useThemeStore((state) => state.setColors)

  useUpdateEffect(() => {
    if (!color || !backgroundStyle) return
    setColors(generateTheme({ primaryColor: color, backgroundStyle }))
  }, [color, setColors, backgroundStyle])

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <div className="space-y-1.5">
            <CardTitle>Theme Settings</CardTitle>
            <CardDescription>
              Adjust the theme settings to your liking and generate a theme
              file.
            </CardDescription>
          </div>
          <div>
            <CopyButton />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-8 items-center sm:flex-row sm:flex-wrap sm:items-end">
          <div className="w-fit mx-auto sm:mx-[unset]">
            <ColorPicker value={color!} onChange={setColor} />
          </div>

          <div className="max-w-xs sm:w-fit">
            <div className="font-semibold mb-2">Dark mode background style</div>
            <DarkBgStyleSelector
              value={backgroundStyle!}
              onValueChange={setBackgroundStyle}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
