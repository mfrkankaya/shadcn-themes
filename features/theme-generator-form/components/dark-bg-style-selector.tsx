"use client"

import React from "react"
import { cva } from "class-variance-authority"

import { ThemeGeneratorParams } from "@/types/theme-generator"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"

interface Props {
  value: ThemeGeneratorParams["backgroundStyle"]
  onValueChange: (value: ThemeGeneratorParams["backgroundStyle"]) => void
}

const buttonVariants = cva(
  "inline-flex items-center justify-center text-center flex-1 p-2 rounded-none border-collapse text-sm font-medium transition-colors whitespace-nowrap",
  {
    variants: {
      active: {
        true: "bg-primary text-primary-foreground hover:bg-primary/90 border border-primary",
        false: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      active: false,
    },
  }
)

export function DarkBgStyleSelector({ value, onValueChange }: Props) {
  return (
    <Card className="overflow-hidden shadow-none border-collapse">
      <div className="grid grid-cols-1 sm:grid-cols-3">
        <button
          className={cn(buttonVariants({ active: value === "black" }))}
          onClick={() => onValueChange("black")}
        >
          Black
        </button>

        <button
          className={cn(buttonVariants({ active: value === "gray" }))}
          onClick={() => onValueChange("gray")}
        >
          Gray
        </button>

        <button
          className={cn(buttonVariants({ active: value === "grayish" }))}
          onClick={() => onValueChange("grayish")}
        >
          Grayish
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2">
        <button
          className={cn(
            buttonVariants({ active: value === "slightly-saturated" })
          )}
          onClick={() => onValueChange("slightly-saturated")}
        >
          Slighly Saturated
        </button>

        <button
          className={cn(buttonVariants({ active: value === "saturated" }))}
          onClick={() => onValueChange("saturated")}
        >
          Saturated
        </button>
      </div>
    </Card>
  )
}
