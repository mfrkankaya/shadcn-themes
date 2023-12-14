"use client"

import React from "react"

import { colors } from "@/constants/colors"
import { convertToTitleCase } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { CssVarColorPicker } from "./css-var-color-picker"

interface Props {
  theme: "light" | "dark"
}

export function ThemeModifiers({ theme }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{convertToTitleCase(theme)}</CardTitle>
      </CardHeader>

      <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-1">
        {Object.keys(colors.light).map((currentKey) => (
          <CssVarColorPicker
            key={currentKey}
            theme={theme}
            varKey={currentKey as keyof typeof colors.light}
          />
        ))}
      </CardContent>
    </Card>
  )
}
