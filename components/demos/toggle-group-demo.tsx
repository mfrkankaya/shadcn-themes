import {
  FontBoldIcon,
  FontItalicIcon,
  UnderlineIcon,
} from "@radix-ui/react-icons"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

import { Section } from "../section"

export function ToggleGroupDemo() {
  return (
    <Section title="Toggle Group">
      <ToggleGroup type="multiple" className="w-fit">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <FontBoldIcon className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <FontItalicIcon className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="strikethrough"
          aria-label="Toggle strikethrough"
        >
          <UnderlineIcon className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </Section>
  )
}
