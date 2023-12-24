"use client"

import React from "react"
import { ResetIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs"

import { useThemeStore } from "@/store/theme-store"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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

function DarkModeSettings() {
  const darkModeCardSameBg = useThemeStore((state) => state.darkModeCardSameBg)
  const darkModeBgStyle = useThemeStore((state) => state.darkModeBgStyle)
  const darkModePrimaryForeground = useThemeStore(
    (state) => state.darkModePrimaryForeground
  )
  const darkModeOptimizePrimaryColor = useThemeStore(
    (state) => state.darkModeOptimizePrimaryColor
  )
  const setFieldStore = useThemeStore((state) => state.setField)

  return (
    <TabsContent value="dark" className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="darkModeBgStyle" className="block">
          Background style
        </Label>
        <Select
          value={darkModeBgStyle}
          onValueChange={(v) =>
            setFieldStore("darkModeBgStyle", v as typeof darkModeBgStyle)
          }
        >
          <SelectTrigger id="darkModeBgStyle" className="w-full">
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

      <div className="space-y-2">
        <Label htmlFor="darkModePrimaryForeground" className="block">
          Primary foreground color
        </Label>
        <Select
          value={darkModePrimaryForeground}
          onValueChange={(v) =>
            setFieldStore(
              "darkModePrimaryForeground",
              v as typeof darkModePrimaryForeground
            )
          }
        >
          <SelectTrigger id="darkModePrimaryForeground" className="w-full">
            <SelectValue placeholder="Primary foreground color" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="auto">Auto</SelectItem>
            <SelectItem value="white">White</SelectItem>
            <SelectItem value="black">Black</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center justify-between gap-4">
        <Label htmlFor="darkModeCardsBg">Use background color for cards</Label>
        <Switch
          id="darkModeCardsBg"
          checked={darkModeCardSameBg}
          onCheckedChange={(v) => setFieldStore("darkModeCardSameBg", v)}
        />
      </div>

      {/* <div className="flex items-center justify-between gap-4">
        <Label htmlFor="darkModeOptimizePrimaryColor">
          Optimize primary color
        </Label>
        <Switch
          id="darkModeOptimizePrimaryColor"
          checked={darkModeOptimizePrimaryColor}
          onCheckedChange={(v) =>
            setFieldStore("darkModeOptimizePrimaryColor", v)
          }
        />
      </div> */}

      <Button
        onClick={() => {
          setFieldStore("darkModeBgStyle", "grayish")
          setFieldStore("darkModePrimaryForeground", "auto")
          setFieldStore("darkModeCardSameBg", false)
          setFieldStore("darkModeOptimizePrimaryColor", true)
        }}
        className="ml-auto flex"
        variant="ghost"
        size="icon"
      >
        <ResetIcon />
      </Button>
    </TabsContent>
  )
}

function LightModeSettings() {
  const lightModeCardSameBg = useThemeStore(
    (state) => state.lightModeCardSameBg
  )
  const lightModeBgStyle = useThemeStore((state) => state.lightModeBgStyle)
  const lightModePrimaryForeground = useThemeStore(
    (state) => state.lightModePrimaryForeground
  )
  const lightModeOptimizePrimaryColor = useThemeStore(
    (state) => state.lightModeOptimizePrimaryColor
  )
  const setFieldStore = useThemeStore((state) => state.setField)

  return (
    <TabsContent value="light" className="space-y-6">
      <div className="space-y-2">
        <Label className="block">Background style</Label>
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

      <div className="space-y-2">
        <Label htmlFor="lightModePrimaryForeground" className="block">
          Primary foreground color
        </Label>
        <Select
          value={lightModePrimaryForeground}
          onValueChange={(v) =>
            setFieldStore(
              "lightModePrimaryForeground",
              v as typeof lightModePrimaryForeground
            )
          }
        >
          <SelectTrigger id="lightModePrimaryForeground" className="w-full">
            <SelectValue placeholder="Primary foreground color" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="auto">Auto</SelectItem>
            <SelectItem value="white">White</SelectItem>
            <SelectItem value="black">Black</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center justify-between gap-4">
        <Label htmlFor="lightModeCardsBg">Use background color for cards</Label>
        <Switch
          id="lightModeCardsBg"
          checked={lightModeCardSameBg}
          onCheckedChange={(v) => setFieldStore("lightModeCardSameBg", v)}
        />
      </div>

      {/* <div className="flex items-center justify-between gap-4">
        <Label htmlFor="lightModeOptimizePrimaryColor">
          Optimize primary color
        </Label>
        <Switch
          id="lightModeOptimizePrimaryColor"
          checked={lightModeOptimizePrimaryColor}
          onCheckedChange={(v) =>
            setFieldStore("lightModeOptimizePrimaryColor", v)
          }
        />
      </div> */}

      <Button
        onClick={() => {
          setFieldStore("lightModeBgStyle", "white")
          setFieldStore("lightModePrimaryForeground", "auto")
          setFieldStore("lightModeCardSameBg", true)
          setFieldStore("lightModeOptimizePrimaryColor", true)
        }}
        className="ml-auto flex"
        variant="ghost"
        size="icon"
      >
        <ResetIcon />
      </Button>
    </TabsContent>
  )
}

export function FineTuneSheetContent() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <>
      <Tabs
        defaultValue={resolvedTheme === "dark" ? "dark" : "light"}
        className="w-full space-y-6"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger
            onClick={() => setTheme("dark")}
            value="dark"
            className="flex items-center gap-1.5"
          >
            <BsMoonStarsFill />
            <span>Dark</span>
          </TabsTrigger>
          <TabsTrigger
            onClick={() => setTheme("light")}
            value="light"
            className="flex items-center gap-1.5"
          >
            <BsSunFill />
            <span>Light</span>
          </TabsTrigger>
        </TabsList>
        <DarkModeSettings />
        <LightModeSettings />
      </Tabs>
    </>
  )
}
