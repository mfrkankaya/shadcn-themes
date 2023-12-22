"use client"

import React from "react"
import Color from "color"
import { useLocalStorage } from "react-use"

import { isValidColor } from "@/lib/utils"
import { Input } from "@/components/ui/input"

interface Props {
  value: string
  onChange: (value: string) => void
}

export default function ColorPicker({ value, onChange }: Props) {
  const [colorInput, setColorInput] = useLocalStorage(
    "PRIMARY_COLOR_INPUT",
    value || "#3b82f6"
  )

  return (
    <div className="fixed bottom-4 inset-x-6 z-40 sm:w-full sm:relative sm:bottom-[unset] sm:inset-x-[unset] flex items-center">
      <label
        className="absolute block w-7 h-7 left-4 rounded-full cursor-pointer overflow-hidden border"
        style={{ backgroundColor: value }}
      >
        <input
          type="color"
          className="opacity-0 cursor-pointer"
          value={value}
          onChange={(e) => {
            onChange(e.target.value)
            setColorInput(e.target.value)
          }}
        />
      </label>

      <Input
        className="bg-background w-full h-14 pl-14 rounded-full font-medium text-base"
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
