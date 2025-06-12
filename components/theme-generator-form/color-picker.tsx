"use client"

import React from "react"

interface Props {
  title: string
  value: string
  onChange: (value: string) => void
}

export function ColorPicker({ title, value, onChange }: Props) {
  return (
    <label
      className="block size-9 md:size-12 rounded-full cursor-pointer overflow-hidden border"
      style={{ backgroundColor: value }}
    >
      <input
        type="color"
        className="opacity-0 cursor-pointer"
        value={value}
        onChange={(e) => {
          onChange(e.target.value)
        }}
      />
    </label>
  )
}
