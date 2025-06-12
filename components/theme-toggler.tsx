"use client"

import React from "react"
import { IconMoon, IconSun } from "@tabler/icons-react"
import { useTheme } from "next-themes"

import { useMounted } from "@/hooks/use-mounted"

import { Button } from "./ui/button"

export function ThemeToggler() {
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = useMounted()

  function toggleTheme() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <Button size="icon" variant="ghost" onClick={toggleTheme}>
      {mounted ? (
        resolvedTheme === "dark" ? (
          <IconMoon />
        ) : (
          <IconSun />
        )
      ) : (
        <IconSun />
      )}
    </Button>
  )
}
