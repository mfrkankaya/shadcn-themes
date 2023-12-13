"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"

import { Card } from "../ui/card"

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Card className="h-fit">
      <Calendar mode="single" selected={date} onSelect={setDate} />
    </Card>
  )
}
