import React from "react"

import { Section } from "../section"
import { Checkbox } from "../ui/checkbox"
import { Label } from "../ui/label"

export function CheckboxDemo() {
  return (
    <Section title="Checkbox">
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </Section>
  )
}
