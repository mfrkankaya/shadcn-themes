import React from "react"

import { Section } from "../section"
import { Badge } from "../ui/badge"

export function BadgeDemo() {
  return (
    <Section title="Badge">
      <div className="flex flex-wrap gap-4">
        <Badge>Badge</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
    </Section>
  )
}
