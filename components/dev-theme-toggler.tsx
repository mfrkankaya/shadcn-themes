"use client"

import React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "./ui/button"

export function DevThemeToggler() {
  const { resolvedTheme, setTheme } = useTheme()

  function toggleTheme() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  if (process.env.NODE_ENV !== "development") return null

  return (
    <Button
      size="icon"
      onClick={toggleTheme}
      className="fixed bottom-4 left-4 z-50"
    >
      {resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}
