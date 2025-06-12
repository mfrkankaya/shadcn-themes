"use client"

import React from "react"
import { IconStack, IconStackFilled } from "@tabler/icons-react"
import { useTheme } from "next-themes"

import { useColorStore } from "@/store/color-store"
import { useMounted } from "@/hooks/use-mounted"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function CardStyleSelect() {
  const { resolvedTheme } = useTheme()
  const mounted = useMounted()
  const cardLight = useColorStore(
    (state) => state.light.isCardsAndBackgroundSameColor
  )
  const cardDark = useColorStore(
    (state) => state.dark.isCardsAndBackgroundSameColor
  )
  const setFieldStore = useColorStore((state) => state.setField)
  const value = mounted && resolvedTheme === "light" ? cardLight : cardDark

  function onValueChange() {
    setFieldStore(
      resolvedTheme === "light"
        ? "light.isCardsAndBackgroundSameColor"
        : "dark.isCardsAndBackgroundSameColor",
      !value
    )
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          onClick={onValueChange}
          size="icon"
          className="size-9 md:size-12 rounded-full"
          variant="ghost"
        >
          {mounted && value ? (
            <IconStack className="size-6" />
          ) : (
            <IconStackFilled className="size-6" />
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Card background style</p>
      </TooltipContent>
    </Tooltip>
  )
}
