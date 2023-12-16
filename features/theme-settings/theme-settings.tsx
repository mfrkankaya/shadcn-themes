"use client"

import React from "react"
import Link from "next/link"
import { MixerHorizontalIcon } from "@radix-ui/react-icons"
import { useToggle } from "react-use"

import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible"
import { ThemeToggler } from "@/components/theme-toggler"

import { ResetButton } from "./components/reset-button"
import { ThemeModifiers } from "./components/theme-modifiers"

export function ThemeSettings() {
  const [isExpanded, toggleExpanded] = useToggle(false)

  return (
    <Collapsible
      open={isExpanded}
      className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-sm border-b"
    >
      <div className="container flex items-center justify-between py-2">
        <Link href="/" className="font-bold">
          shadcn/ui themes
        </Link>

        <div className="flex items-center gap-1">
          <ThemeToggler />
          <ResetButton />
          <Button onClick={toggleExpanded} size="icon">
            <MixerHorizontalIcon />
          </Button>
        </div>
      </div>

      <CollapsibleContent className="pb-4">
        <div className="container">
          <ThemeModifiers />
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
