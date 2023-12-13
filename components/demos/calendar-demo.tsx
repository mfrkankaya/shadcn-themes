"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"

import { Section } from "../section"
import { Card } from "../ui/card"

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Section title="Calendar">
      <Card className="w-fit">
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </Card>
    </Section>
  )
}
