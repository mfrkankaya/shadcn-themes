"use client"

import React from "react"

import { useThemeStore } from "@/store/theme-store"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const DARK_MODE_BG_STYLE_OPTIONS = [
  {
    value: "black",
    title: "Black",
  },
  {
    value: "gray",
    title: "Gray",
  },
  {
    value: "grayish",
    title: "Grayish",
  },
  {
    value: "slightly-saturated",
    title: "Slightly Saturated",
  },
  {
    value: "saturated",
    title: "Saturated",
  },
]

const LIGHT_MODE_BG_STYLE_OPTIONS = [
  {
    value: "white",
    title: "White",
  },
  {
    value: "grayish",
    title: "Grayish",
  },
  {
    value: "slightly-saturated",
    title: "Slightly Saturated",
  },
]

export function FineTuneSheetContent() {
  const darkModeBgStyle = useThemeStore((state) => state.darkModeBgStyle)
  const lightModeBgStyle = useThemeStore((state) => state.lightModeBgStyle)
  const setFieldStore = useThemeStore((state) => state.setField)

  return (
    <>
      <div className="flex flex-col space-y-2">
        <Label className="block">Dark mode background style</Label>
        <Select
          value={darkModeBgStyle}
          onValueChange={(v) =>
            setFieldStore("darkModeBgStyle", v as typeof darkModeBgStyle)
          }
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Background style" />
          </SelectTrigger>
          <SelectContent>
            {DARK_MODE_BG_STYLE_OPTIONS.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col space-y-2">
        <Label className="block">Light mode background style</Label>
        <Select
          value={lightModeBgStyle}
          onValueChange={(v) =>
            setFieldStore("lightModeBgStyle", v as typeof lightModeBgStyle)
          }
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Background style" />
          </SelectTrigger>
          <SelectContent>
            {LIGHT_MODE_BG_STYLE_OPTIONS.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </>
  )
}
