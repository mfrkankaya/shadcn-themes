import { FontBoldIcon } from "@radix-ui/react-icons"

import { Toggle } from "@/components/ui/toggle"

import { Section } from "../section"

export function ToggleDemo() {
  return (
    <Section title="Toggle">
      <Toggle aria-label="Toggle italic">
        <FontBoldIcon className="h-4 w-4" />
      </Toggle>
    </Section>
  )
}
