"use client"

import React from "react"
import { useTheme } from "next-themes"

import { colors } from "@/constants/colors"

import { CssVarColorPicker } from "./css-var-color-picker"

export function ThemeModifiers() {
  const { resolvedTheme } = useTheme()
  const theme = resolvedTheme === "dark" ? "dark" : "light"

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 gap-y-2">
      {Object.keys(colors.light).map((currentKey) => (
        <CssVarColorPicker
          key={currentKey}
          theme={theme}
          varKey={currentKey as keyof typeof colors.light}
        />
      ))}
    </div>
  )
}
