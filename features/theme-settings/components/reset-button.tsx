"use client"

import React from "react"

import { colors } from "@/constants/colors"
import { useThemeStore } from "@/store/theme-store"
import { Button } from "@/components/ui/button"

export function ResetButton() {
  const setColors = useThemeStore((state) => state.setColors)

  return <Button onClick={() => setColors(colors)}>Reset theme</Button>
}
