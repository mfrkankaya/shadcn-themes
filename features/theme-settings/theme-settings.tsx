import React from "react"

import { ThemeToggler } from "@/components/theme-toggler"

import { ResetButton } from "./components/reset-button"
import { ThemeModifiers } from "./components/theme-modifiers"

export function ThemeSettings() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <ThemeToggler />
        <ResetButton />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ThemeModifiers theme="light" />
        <ThemeModifiers theme="dark" />
      </div>
    </div>
  )
}
