"use client"

import React from "react"
import { ResetIcon } from "@radix-ui/react-icons"

import { colors } from "@/constants/colors"
import { useThemeStore } from "@/store/theme-store"
import { Button } from "@/components/ui/button"

export function ResetButton() {
  const setColors = useThemeStore((state) => state.setColors)

  return (
    <Button size="icon" variant="ghost" onClick={() => setColors(colors)}>
      <ResetIcon />
    </Button>
  )
}
