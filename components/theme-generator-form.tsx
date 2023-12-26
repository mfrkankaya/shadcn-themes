"use client"

import React from "react"
import { useTheme } from "next-themes"

import { useColorStore, useColorStoreSetter } from "@/store/color-store"

import { ClientOnly } from "./client-only"
import { ColorPicker } from "./color-picker"
import CopyButton from "./copy-button"

export default function ThemeGeneratorForm() {
  const setFieldStore = useColorStoreSetter()
  const lightColor = useColorStore((state) => state.light.color)
  const darkColor = useColorStore((state) => state.dark.color)
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <div className="w-full max-w-xl flex flex-col items-center space-y-6">
      <div className="grid grid-cols-1 gap-4 w-full sm:grid-cols-2">
        <ClientOnly fallback={<div className="h-[5.25rem]" />}>
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
        </ClientOnly>
      </div>

      <div className="mx-auto">
        <CopyButton />
      </div>
    </div>
  )
}
