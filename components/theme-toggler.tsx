"use client"

import React from "react"
import { useTheme } from "next-themes"
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs"

import { Button } from "./ui/button"

export function ThemeToggler() {
  const { resolvedTheme, setTheme } = useTheme()

  function toggleTheme() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <Button size="icon" variant="ghost" onClick={toggleTheme}>
      {resolvedTheme === "dark" ? <BsSunFill /> : <BsMoonStarsFill />}
    </Button>
  )
}
