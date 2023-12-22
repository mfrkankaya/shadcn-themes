"use client"

import React from "react"
import { useDebounce, useLocalStorage } from "react-use"

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
  const color = useThemeStore((state) => state.color)
  const darkModeBgStyle = useThemeStore((state) => state.darkModeBgStyle)
  const setFieldStore = useThemeStore((state) => state.setField)

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
            <ColorPicker
              value={color!}
              onChange={(v) => setFieldStore("color", v)}
            />
          </div>

          <div className="max-w-xs sm:w-fit">
            <div className="font-semibold mb-2">Dark mode background style</div>
            <DarkBgStyleSelector
              value={darkModeBgStyle}
              onValueChange={(val) => setFieldStore("darkModeBgStyle", val)}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
