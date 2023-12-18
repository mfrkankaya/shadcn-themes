"use client"

import React from "react"
import { Check, Copy } from "lucide-react"

import { getCopyableCssVariables } from "@/lib/utils"
import { useThemeStore } from "@/store/theme-store"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function CopyButton() {
  const [isCopied, setIsCopied] = React.useState(false)
  const colors = useThemeStore((state) => state.colors)

  function onCopy() {
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)

    navigator.clipboard.writeText(getCopyableCssVariables(colors))
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Copy code</Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Theme</DialogTitle>
          <DialogDescription>
            Copy and paste the following code into your CSS file.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="bg-card rounded-lg border max-h-[50vh] relative">
          <Button
            onClick={onCopy}
            className="absolute right-4 top-4 gap-2"
            variant="secondary"
          >
            {isCopied ? (
              <Check width={16} height={16} />
            ) : (
              <Copy width={16} height={16} />
            )}
            <span>Copy</span>
          </Button>
          <pre className="text-sm p-4 leading-normal">
            {getCopyableCssVariables(colors)}
          </pre>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
