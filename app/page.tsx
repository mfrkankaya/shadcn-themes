"use client"

import React from "react"

import { useThemeStore } from "@/store/theme-store"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const updateColor = useThemeStore((state) => state.updateColor)

  updateColor("light.--primary", "5 50% 50%")

  return (
    <div>
      <Button>Hello there!</Button>
    </div>
  )
}
