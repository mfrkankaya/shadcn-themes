"use client"

import React from "react"
import Color from "color"
import { SlidersHorizontal } from "lucide-react"
import { useLocalStorage } from "react-use"

import { isValidColor } from "@/lib/utils"
// import { useThemeStore } from "@/store/theme-store"
import useBreakpoint from "@/hooks/use-breakpoint"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import CopyButton from "./copy-button"
import { FineTuneSheetContent } from "./fine-tune-sheet-content"

interface Props {
  value: string
  onChange: (value: string) => void
}

export default function ColorPicker({ value, onChange }: Props) {
  // const setFieldStore = useThemeStore((state) => state.setField)
  const isMobile = useBreakpoint("sm", "down")
  const [colorInput, setColorInput] = useLocalStorage(
    "PRIMARY_COLOR_INPUT",
    value || "#3b82f6"
  )

  return (
    <div className="fixed bottom-8 inset-x-6 z-40 sm:w-full sm:relative sm:bottom-[unset] sm:inset-x-[unset] flex items-center">
      <label
        className="absolute block w-9 h-9 left-3 rounded-full cursor-pointer overflow-hidden border"
        style={{ backgroundColor: value }}
      >
        <input
          type="color"
          className="opacity-0 cursor-pointer"
          value={value}
          onChange={(e) => {
            onChange(e.target.value)
            setColorInput(e.target.value)
            // setFieldStore("darkModePrimaryForeground", "auto")
            // setFieldStore("lightModePrimaryForeground", "auto")
          }}
        />
      </label>

      <Input
        className="bg-background w-full h-14 pl-14 rounded-full font-medium text-base"
        placeholder="Color"
        value={colorInput}
        onChange={(e) => {
          setColorInput(e.target.value)
          // setFieldStore("darkModePrimaryForeground", "auto")
          // setFieldStore("lightModePrimaryForeground", "auto")
          if (isValidColor(e.target.value))
            onChange(Color(e.target.value).hex())
        }}
      />

      <div className="absolute right-3 flex items-center gap-1">
        <Sheet>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <SlidersHorizontal size={16} />
                  </Button>
                </SheetTrigger>
              </TooltipTrigger>
              <TooltipContent>
                <span>Detailed options</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <SheetContent
            className="gap-6"
            side={isMobile ? "bottom" : "right"}
            disableBlur
            transparentOverlay
          >
            <SheetHeader>
              <SheetTitle>Magic touches</SheetTitle>
              <SheetDescription>
                Adjust options for a more personalized theme
              </SheetDescription>
            </SheetHeader>

            <FineTuneSheetContent />
          </SheetContent>
        </Sheet>
        <CopyButton />
      </div>
    </div>
  )
}
