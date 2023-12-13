"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"

import { Card } from "../ui/card"

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Card className="w-full sm:w-fit">
      <Calendar mode="single" selected={date} onSelect={setDate} className="mx-auto flex items-center justify-center" />
    </Card>
  )
}
