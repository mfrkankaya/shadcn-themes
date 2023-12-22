"use client"

import React from "react"

import { useThemeStore } from "@/store/theme-store"

import ColorPicker from "./components/color-picker"

export function ThemeGeneratorForm() {
  const color = useThemeStore((state) => state.color)
  const setFieldStore = useThemeStore((state) => state.setField)

  return (
    <div className="max-w-md w-full">
      <ColorPicker value={color!} onChange={(v) => setFieldStore("color", v)} />
    </div>
  )
}
