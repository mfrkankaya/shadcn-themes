"use client"

import React from "react"
import Color from "color"
import { HexColorPicker } from "react-colorful"
import { useLocalStorage } from "react-use"

import { isValidColor } from "@/lib/utils"
import { Input } from "@/components/ui/input"

interface Props {
  value: string
  onChange: (value: string) => void
}

export default function ColorPicker({ value, onChange }: Props) {
  const [colorInput, setColorInput] = useLocalStorage(
    "PRIMARY_COLOR",
    "#3b82f6"
  )

  return (
    <div className="flex flex-col gap-2">
      <HexColorPicker
        color={value}
        onChange={(value) => {
          onChange(value)
          setColorInput(value)
        }}
      />
      <Input
        placeholder="Color"
        value={colorInput}
        onChange={(e) => {
          setColorInput(e.target.value)
          if (isValidColor(e.target.value))
            onChange(Color(e.target.value).hex())
        }}
      />
    </div>
  )
}
