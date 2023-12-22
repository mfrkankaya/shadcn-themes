"use client"

import React from "react"

import { useThemeStore } from "@/store/theme-store"

import ColorPicker from "./components/color-picker"
import { DarkBgStyleSelector } from "./components/dark-bg-style-selector"

export function ThemeGeneratorForm() {
  const color = useThemeStore((state) => state.color)
  const darkModeBgStyle = useThemeStore((state) => state.darkModeBgStyle)
  const setFieldStore = useThemeStore((state) => state.setField)

  return (
    <div className="max-w-md w-full">
      <ColorPicker value={color!} onChange={(v) => setFieldStore("color", v)} />
    </div>
    // <div className="flex flex-col gap-8 items-center sm:flex-row sm:flex-wrap sm:items-end">
    //   <div className="w-fit mx-auto sm:mx-[unset]">
    //     <ColorPicker
    //       value={color!}
    //       onChange={(v) => setFieldStore("color", v)}
    //     />
    //   </div>

    //   <div className="max-w-xs sm:w-fit">
    //     <div className="font-semibold mb-2">Dark mode background style</div>
    //     <DarkBgStyleSelector
    //       value={darkModeBgStyle}
    //       onValueChange={(val) => setFieldStore("darkModeBgStyle", val)}
    //     />
    //   </div>
    // </div>
  )
}
