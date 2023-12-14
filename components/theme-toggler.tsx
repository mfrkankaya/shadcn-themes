"use client"

import React from "react"
import { useTheme } from "next-themes"
import { BsMoonFill, BsSunFill } from "react-icons/bs"

import { Button } from "./ui/button"

export function ThemeToggler() {
  const { resolvedTheme, setTheme } = useTheme()

  function toggleTheme() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <Button size="icon" onClick={toggleTheme}>
      {resolvedTheme === "dark" ? <BsSunFill /> : <BsMoonFill />}
    </Button>
  )
}
