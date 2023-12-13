"use client"

import React from "react"
import { useTheme } from "next-themes"
import { BsMoonFill, BsSunFill } from "react-icons/bs"

import { Button } from "./ui/button"

export default function DevThemeToggler() {
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
      {resolvedTheme === "dark" ? <BsSunFill /> : <BsMoonFill />}
    </Button>
  )
}
