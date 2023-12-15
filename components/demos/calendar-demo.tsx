"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"

import { Section } from "../section"
import { Card } from "../ui/card"

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>()

  return (
    <Section title="Calendar">
      <Card>
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </Card>
    </Section>
  )
}
