"use client"

import React from "react"
import convert from "color-convert"

import { colors } from "@/constants/colors"
import { convertCssVarToHex, convertToTitleCase } from "@/lib/utils"
import { useThemeStore } from "@/store/theme-store"
import { ColorPicker } from "@/components/ui/color-picker"
import { Label } from "@/components/ui/label"

interface Props {
  theme: "light" | "dark"
  varKey: keyof typeof colors.light
}

export function CssVarColorPicker({ theme, varKey }: Props) {
  const { colors, updateColor } = useThemeStore()

  const hex = React.useMemo(
    () => convertCssVarToHex(colors[theme][varKey]),
    [colors, theme, varKey]
  )

  return (
    <div className="flex items-center gap-4">
      <ColorPicker
        id={`${theme}-${varKey}`}
        value={hex}
        onChange={(e) => {
          const hsl = convert.hex.hsl(e.target.value)
          updateColor(`${theme}.${varKey}`, `${hsl[0]} ${hsl[1]}% ${hsl[2]}%`)
        }}
      />
      <Label className="flex-1" htmlFor={`${theme}-${varKey}`}>
        {convertToTitleCase(varKey)}
      </Label>
    </div>
  )
}
