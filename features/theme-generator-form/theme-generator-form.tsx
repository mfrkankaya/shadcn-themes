"use client"

import React from "react"

import { ThemeGeneratorSchema } from "@/types/theme-generator"
import { generateTheme } from "@/utils/theme-generator"
import { useThemeStore } from "@/store/theme-store"
import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form"

export function ThemeGeneratorForm() {
  const setColors = useThemeStore((state) => state.setColors)

  return (
    <div className="mt-8 mb-16">
      <AutoForm
        formSchema={ThemeGeneratorSchema}
        onSubmit={(v) => {
          setColors(generateTheme(v))
        }}
        fieldConfig={{
          primaryColor: {
            inputProps: { placeholder: "HSL, HEX, RGB, etc." },
          },
        }}
      >
        <AutoFormSubmit>Generate palette</AutoFormSubmit>
      </AutoForm>
    </div>
  )
}
