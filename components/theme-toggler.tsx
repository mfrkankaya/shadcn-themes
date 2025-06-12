"use client"

import React from "react"
import { IconMoon, IconSun } from "@tabler/icons-react"
import { useTheme } from "next-themes"

import { Button } from "./ui/button"

export function ThemeToggler() {
  const { resolvedTheme, setTheme } = useTheme()

  function toggleTheme() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <Button size="icon" variant="ghost" onClick={toggleTheme}>
      {resolvedTheme === "dark" ? <IconMoon /> : <IconSun />}
    </Button>
  )
}
