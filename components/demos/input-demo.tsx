import { Input } from "@/components/ui/input"

import { Section } from "../section"

export function InputDemo() {
  return (
    <Section title="Input">
      <Input id="email1" type="email" placeholder="Email" />
    </Section>
  )
}
