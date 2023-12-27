"use client"

import React from "react"
import { useTheme } from "next-themes"

import {
  useColorStore,
  useColorStoreSetter,
  type DarkOptions,
  type LightOptions,
} from "@/store/color-store"

import { Card, CardContent } from "./ui/card"
import { Label } from "./ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { Switch } from "./ui/switch"

export function ExtraOptions() {
  const { resolvedTheme } = useTheme()
  const isExpanded = useColorStore((state) => state.isOptionsExpanded)

  if (!isExpanded) return null
  if (resolvedTheme === "light") return <LightOptions />
  if (resolvedTheme === "dark") return <DarkOptions />
  return null
}

const LIGHT_BACKGROUND_STYLES: {
  value: LightOptions["backgroundStyle"]
  title: string
}[] = [
  { value: "white", title: "White" },
  { value: "grayish", title: "Grayish" },
  { value: "slightly-saturated", title: "Slightly Saturated" },
]

function LightOptions() {
  const options = useColorStore((state) => state.light)
  const setFieldStore = useColorStoreSetter()

  return (
    <Card className="w-full max-w-sm">
      <CardContent className="grid gap-6 pt-5">
        <div className="space-y-1">
          <Label htmlFor="lightBgStyle">Background style</Label>
          <Select
            value={options.backgroundStyle}
            onValueChange={(v) => setFieldStore("light.backgroundStyle", v)}
          >
            <SelectTrigger id="lightBgStyle" className="w-full">
              <SelectValue placeholder="Background style" />
            </SelectTrigger>
            <SelectContent>
              {LIGHT_BACKGROUND_STYLES.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  onClick={() =>
                    setFieldStore("light.backgroundStyle", option.value)
                  }
                >
                  {option.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center">
          <Label htmlFor="lightSameBgCards" className="flex-1 pr-4">
            Use background color for cards
          </Label>
          <Switch
            id="lightSameBgCards"
            checked={options.isCardsAndBackgroundSameColor}
            onCheckedChange={(v) =>
              setFieldStore("light.isCardsAndBackgroundSameColor", v)
            }
          />
        </div>
      </CardContent>
    </Card>
  )
}

const DARK_BACKGROUND_STYLES: {
  value: DarkOptions["backgroundStyle"]
  title: string
}[] = [
  { value: "black", title: "Black" },
  { value: "gray", title: "Gray" },
  { value: "grayish", title: "Grayish" },
  { value: "slightly-saturated", title: "Slightly Saturated" },
]

function DarkOptions() {
  const options = useColorStore((state) => state.dark)
  const setFieldStore = useColorStoreSetter()

  return (
    <Card className="w-full max-w-sm">
      <CardContent className="grid gap-6 pt-5">
        <div className="space-y-1">
          <Label htmlFor="darkBgStyle">Background style</Label>
          <Select
            value={options.backgroundStyle}
            onValueChange={(v) => setFieldStore("dark.backgroundStyle", v)}
          >
            <SelectTrigger id="darkBgStyle" className="w-full">
              <SelectValue placeholder="Background style" />
            </SelectTrigger>
            <SelectContent>
              {DARK_BACKGROUND_STYLES.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  onClick={() =>
                    setFieldStore("dark.backgroundStyle", option.value)
                  }
                >
                  {option.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center">
          <Label htmlFor="darkSameBgCards" className="flex-1 pr-4">
            Use background color for cards
          </Label>
          <Switch
            id="darkSameBgCards"
            checked={options.isCardsAndBackgroundSameColor}
            onCheckedChange={(v) =>
              setFieldStore("dark.isCardsAndBackgroundSameColor", v)
            }
          />
        </div>
      </CardContent>
    </Card>
  )
}
