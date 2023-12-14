"use client"

import React from "react"

import { cn } from "@/lib/utils"

interface ColorPickerProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {}

const ColorPicker = React.forwardRef<HTMLInputElement, ColorPickerProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        {...props}
        className={cn("w-8 h-8 rounded-sm bg-background border p-1", className)}
        ref={ref}
        type="color"
      />
    )
  }
)
ColorPicker.displayName = "ColorPicker"

export { ColorPicker }
