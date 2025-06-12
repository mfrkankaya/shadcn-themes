"use client"

import React from "react"
import { IconSquares, IconSquaresFilled } from "@tabler/icons-react"
import { useTheme } from "next-themes"

import { useColorStore } from "@/store/color-store"
import { Button } from "@/components/ui/button"

export default function CardStyleSelect() {
  const { resolvedTheme } = useTheme()
  const cardLight = useColorStore(
    (state) => state.light.isCardsAndBackgroundSameColor
  )
  const cardDark = useColorStore(
    (state) => state.dark.isCardsAndBackgroundSameColor
  )
  const setFieldStore = useColorStore((state) => state.setField)
  const value = resolvedTheme === "light" ? cardLight : cardDark

  function onValueChange() {
    setFieldStore(
      resolvedTheme === "light"
        ? "light.isCardsAndBackgroundSameColor"
        : "dark.isCardsAndBackgroundSameColor",
      !value
    )
  }

  return (
    <Button
      onClick={onValueChange}
      size="icon"
      className="size-9 md:size-12 rounded-full"
      variant="ghost"
    >
      {value ? (
        <IconSquares className="size-6" />
      ) : (
        <IconSquaresFilled className="size-6" />
      )}
    </Button>
  )
}
