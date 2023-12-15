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
    <Card>
      <CardHeader>
        <CardTitle>When is your birthday? 🎂</CardTitle>
        <CardDescription>
          Party will be on {date ? date?.toLocaleDateString() : "???"}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-row gap-4">
        <Card>
          <Calendar mode="single" selected={date} onSelect={setDate} />
        </Card>
        <div className="flex flex-1 relative min-h-full">
          <Image
            src="https://picsum.photos/500"
            alt=""
            className="object-cover h-full w-full rounded-xl grayscale dark:opacity-50"
            fill
          />
        </div>
      </CardContent>
    </Card>
  )
}
