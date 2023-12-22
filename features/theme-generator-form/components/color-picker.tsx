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
    <div className="relative w-full flex items-center">
      <label
        className="absolute block w-7 h-7 left-4 rounded-full cursor-pointer overflow-hidden"
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
        className="bg-background w-full h-14 pl-14 rounded-full"
        placeholder="Color"
        value={colorInput}
        onChange={(e) => {
          setColorInput(e.target.value)
          if (isValidColor(e.target.value))
            onChange(Color(e.target.value).hex())
        }}
      />
    </div>
    // <div className="flex flex-col gap-2">
    //   <HexColorPicker
    //     color={value}
    //     onChange={(value) => {
    //       onChange(value)
    //       setColorInput(value)
    //     }}
    //   />
    //   <Input
    //     placeholder="Color"
    //     value={colorInput}
    //     onChange={(e) => {
    //       setColorInput(e.target.value)
    //       if (isValidColor(e.target.value))
    //         onChange(Color(e.target.value).hex())
    //     }}
    //   />
    // </div>
  )
}
