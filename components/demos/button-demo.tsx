import React from "react"

import { Section } from "../section"
import { Button } from "../ui/button"

export function ButtonDemo() {
  return (
    <Section title="Button">
      <div className="flex flex-wrap gap-4">
        <Button>Button</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button disabled>Disabled</Button>
        <Button variant="secondary" disabled>
          Secondary Disabled
        </Button>
        <Button variant="destructive" disabled>
          Destructive Disabled
        </Button>
        <Button variant="outline" disabled>
          Outline Disabled
        </Button>
        <Button variant="ghost" disabled>
          Ghost Disabled
        </Button>
        <Button variant="link" disabled>
          Link Disabled
        </Button>
      </div>
    </Section>
  )
}
