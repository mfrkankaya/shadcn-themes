"use client"

import React from "react"
import { CheckIcon, CopyIcon } from "lucide-react"

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
  TooltipProvider,
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

    switch (themeVersion) {
      case "v3":
        navigator.clipboard.writeText(getCopyableCssVariablesV3(colorsV3))
        break
      case "v4":
        navigator.clipboard.writeText(getCopyableCssVariablesV4(colorsV4))
        break
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full gap-2">
          <CopyIcon size={16} />
          <span>Copy colors</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Theme</DialogTitle>
          <DialogDescription>
            Copy and paste the following code into your CSS file. (Chart colors
            are static for now. I'll add dynamic colors in the future.)
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
              {isCopied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
              <span>Copy</span>
            </Button>
          </div>
          <TabsContent value="v3">
            <ScrollArea className="bg-card rounded-lg border max-h-[50vh] relative overflow-auto">
              <pre className="text-sm p-4 leading-normal">
                {getCopyableCssVariablesV3(colorsV3)}
              </pre>
            </ScrollArea>
          </TabsContent>
          <TabsContent value="v4">
            <ScrollArea className="bg-card rounded-lg border max-h-[50vh] relative overflow-auto">
              <pre className="text-sm p-4 leading-normal">
                {getCopyableCssVariablesV4(colorsV4)}
              </pre>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
