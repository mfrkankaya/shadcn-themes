import React from "react"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import { BsTerminal } from "react-icons/bs"

import { Section } from "../section"
import { Alert, AlertDescription, AlertTitle } from "../ui/alert"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

export function AlertDemo() {
  return (
    <Section title="Alert">
      <div className="space-y-4">
        <Alert>
          <BsTerminal className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
        </Alert>

        <Alert variant="destructive">
          <ExclamationTriangleIcon className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Your session has expired. Please log in again.
          </AlertDescription>
        </Alert>
      </div>
    </Section>
  )
}
