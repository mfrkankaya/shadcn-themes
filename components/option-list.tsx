"use client"

import React from "react"
import { twc } from "react-twc"
import { createStateContext, useUpdateEffect } from "react-use"

import { cn } from "@/lib/utils"

import { Button } from "./ui/button"

const [useSharedValue, SharedValueProvider] = createStateContext<string | null>(
  null
)

const OptionListItemTitle = twc.div`font-medium text-base`
const OptionListItemDescription = twc.div`text-sm opacity-75`

interface OptionListItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}
const OptionListItem = React.forwardRef<HTMLButtonElement, OptionListItemProps>(
  ({ className, onClick, value, children, ...props }, ref) => {
    const [sharedValue, setSharedValue] = useSharedValue()

    return (
      <Button
        type="button"
        variant={sharedValue === value ? "default" : "outline"}
        className={cn(
          "flex flex-col gap-1 items-start justify-start text-left py-3 rounded-none border-collapse border-x-0 border-t border-b-0 first:border-t-0 h-[unset]",
          className
        )}
        onClick={(e) => {
          onClick?.(e)
          setSharedValue(value)
        }}
        ref={ref}
        {...props}
      >
        <div>{children}</div>
      </Button>
    )
  }
)
OptionListItem.displayName = "OptionListItem"

function HandleOnChange({ onChange }: { onChange?: (value: string) => void }) {
  const [sharedValue] = useSharedValue()

  useUpdateEffect(() => {
    onChange?.(sharedValue!)
  }, [sharedValue, onChange])

  return null
}

interface OptionListProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  value?: string
  onChange?: (value?: string) => void
}
const OptionList = React.forwardRef<HTMLDivElement, OptionListProps>(
  ({ className, value, onChange, ...props }, ref) => {
    return (
      <SharedValueProvider initialValue={value}>
        <HandleOnChange onChange={onChange} />
        <div
          className={cn(
            "border rounded-xl flex flex-col items-stretch overflow-hidden border-collapse",
            className
          )}
          ref={ref}
          {...props}
        />
      </SharedValueProvider>
    )
  }
)
OptionList.displayName = "OptionList"

export {
  OptionListItem,
  OptionList,
  OptionListItemTitle,
  OptionListItemDescription,
}
