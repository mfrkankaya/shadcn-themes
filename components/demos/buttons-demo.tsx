"use client"

import React from "react"

import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"

export function ButtonsDemo() {
  return (
    <Card className="max-w-sm w-full sm:w-fit">
      <CardHeader>
        <CardTitle>Buttons</CardTitle>
        <CardDescription>
          Buttons are used to trigger an action or event.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6 grid-cols-2">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button disabled>Disabled</Button>
      </CardContent>
    </Card>
  )
}
