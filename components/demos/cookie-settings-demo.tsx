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
import { Label } from "../ui/label"
import { Switch } from "../ui/switch"

function CookieItem({
  title,
  description,
  id,
}: {
  title: string
  description: string
  id: string
}) {
  return (
    <div className="flex items-center space-x-4">
      <Label htmlFor={id} className="flex flex-col space-y-1">
        <span>{title}</span>
        <span className="text-xs font-normal leading-snug text-muted-foreground">
          {description}
        </span>
      </Label>
      <Switch id={id} />
    </div>
  )
}

export function CookieSettingsDemo() {
  return (
    <Card className="h-fit max-w-sm w-full">
      <CardHeader>
        <CardTitle>Cookie Settings</CardTitle>
        <CardDescription>Manage your cookie settings here.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <CookieItem
          id="sw1"
          title="Strictly Necessary"
          description="These cookies are essential in order to use the website and use its features."
        />
        <CookieItem
          id="sw2"
          title="Functional Cookies"
          description="These cookies allow the website to provide personalized functionality."
        />
        <CookieItem
          id="sw2"
          title="Performance Cookies"
          description="These cookies help to improve the performance of the website."
        />
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Save preferences
        </Button>
      </CardFooter>
    </Card>
  )
}
