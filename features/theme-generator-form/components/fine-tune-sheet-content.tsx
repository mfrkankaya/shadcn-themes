"use client"

import React from "react"

import { useThemeStore } from "@/store/theme-store"
import { Label } from "@/components/ui/label"
import {
  OptionList,
  OptionListItem,
  OptionListItemDescription,
  OptionListItemTitle,
} from "@/components/option-list"

const DARK_MODE_BG_STYLE_OPTIONS = [
  {
    value: "black",
    title: "Black",
    description: "Pure black",
  },
  {
    value: "gray",
    title: "Gray",
    description: "Almost black",
  },
  {
    value: "grayish",
    title: "Grayish",
    description: "Gray with a little primary color",
  },
  {
    value: "slightly-saturated",
    title: "Slightly Saturated",
    description: "Primary color slightly visible on background",
  },
  {
    value: "saturated",
    title: "Saturated",
    description: "Primary color visible on background",
  },
]

export function FineTuneSheetContent() {
  const darkModeBgStyle = useThemeStore((state) => state.darkModeBgStyle)
  const setFieldStore = useThemeStore((state) => state.setField)

  return (
    <>
      <div>
        <Label className="mb-2 ml-1 block">Dark mode background style</Label>
        <OptionList
          value={darkModeBgStyle}
          onChange={(v) =>
            setFieldStore("darkModeBgStyle", v as typeof darkModeBgStyle)
          }
        >
          {DARK_MODE_BG_STYLE_OPTIONS.map((option) => (
            <OptionListItem key={option.value} value={option.value}>
              <OptionListItemTitle>{option.title}</OptionListItemTitle>
              <OptionListItemDescription>
                {option.description}
              </OptionListItemDescription>
            </OptionListItem>
          ))}
        </OptionList>
      </div>
    </>
  )
}
