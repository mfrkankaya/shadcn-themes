"use client"

import React from "react"
import Color from "color"

import { isValidColor } from "@/lib/utils"

import { ClientOnly } from "./client-only"
import { Input } from "./ui/input"

interface Props {
  title: string
  value: string
  onChange: (value: string) => void
}

export function ColorPicker({ title, value, onChange }: Props) {
  const [colorInput, setColorInput] = React.useState(value)

  return (
    <div className="space-y-2">
      <div className="font-medium ml-4 text-muted-foreground text-sm">
        {title}
      </div>
      <div className="relative flex items-center flex-1 w-full">
        <ClientOnly
          fallback={
            <div className="absolute block w-9 h-9 left-3 rounded-full border bg-foreground/10" />
          }
        >
          <label
            className="absolute block w-9 h-9 left-3 rounded-full cursor-pointer overflow-hidden border"
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
        </ClientOnly>

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
    </div>
  )
}
