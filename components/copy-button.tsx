"use client"

import React from "react"
import { IconCheck, IconClipboardTextFilled } from "@tabler/icons-react"

import {
  getCopyableCssVariablesV3,
  getCopyableCssVariablesV4,
} from "@/lib/utils"
import {
  useGeneratedColorsV3,
  useGeneratedColorsV4,
} from "@/hooks/use-generated-colors"
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
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"

export default function CopyButton() {
  const [isCopied, setIsCopied] = React.useState(false)
  const [themeVersion, setThemeVersion] = React.useState<"v3" | "v4">("v4")
  const colorsV3 = useGeneratedColorsV3()
  const colorsV4 = useGeneratedColorsV4()

  function onCopy() {
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)

    navigator.clipboard.writeText(
      themeVersion === "v3"
        ? getCopyableCssVariablesV3(colorsV3)
        : getCopyableCssVariablesV4(colorsV4)
    )
  }

  return (
    <Dialog>
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <Button
              size="icon"
              className="size-9 md:size-12 rounded-full"
              variant="ghost"
            >
              <IconClipboardTextFilled className="size-6" />
            </Button>
          </DialogTrigger>
        </TooltipTrigger>
        <TooltipContent>
          <p>Copy CSS variables</p>
        </TooltipContent>
      </Tooltip>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Theme</DialogTitle>
          <DialogDescription>
            Copy and paste the following code into your CSS file. (Chart colors
            are static for now. I&apos;ll add dynamic colors in the future.)
          </DialogDescription>
        </DialogHeader>
        <Tabs onValueChange={(value: any) => setThemeVersion(value)}>
          <div className="flex items-center justify-between mb-2">
            <TabsList>
              <TabsTrigger value="v4">Tailwind v4</TabsTrigger>
              <TabsTrigger value="v3">Tailwind v3</TabsTrigger>
            </TabsList>
            <Button
              onClick={onCopy}
              className="gap-2"
              variant="secondary"
              size="sm"
            >
              {isCopied ? <IconCheck /> : <IconClipboardTextFilled />}
              <span>Copy</span>
            </Button>
          </div>
          <TabsContent value="v3">
            <div className="bg-card rounded-lg border max-h-[50vh] relative overflow-auto max-w-[calc(100vw-5rem)]">
              <pre className="text-sm p-4 leading-normal">
                {getCopyableCssVariablesV3(colorsV3)}
              </pre>
            </div>
          </TabsContent>
          <TabsContent value="v4">
            <div className="bg-card rounded-lg border max-h-[50vh] relative overflow-auto max-w-[calc(100vw-5rem)]">
              <pre className="text-sm p-4 leading-normal">
                {getCopyableCssVariablesV4(colorsV4)}
              </pre>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
