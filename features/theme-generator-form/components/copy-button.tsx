"use client"

import React from "react"
import { CheckIcon, CopyIcon } from "lucide-react"

import { getCopyableCssVariables } from "@/lib/utils"
import { useGeneratedColors } from "@/hooks/use-generated-colors"
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function CopyButton() {
  const [isCopied, setIsCopied] = React.useState(false)
  const colors = useGeneratedColors()

  function onCopy() {
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)

    navigator.clipboard.writeText(getCopyableCssVariables(colors))
  }

  return (
    <Dialog>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <DialogTrigger asChild>
              <Button size="icon" className="rounded-full">
                <CopyIcon size={16} />
              </Button>
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <span>Copy colors</span>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
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
            {isCopied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
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
