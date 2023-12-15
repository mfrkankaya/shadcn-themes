"use client"

import * as React from "react"
import Image from "next/image"

import { Calendar } from "@/components/ui/calendar"

import { Section } from "../section"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card"

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
