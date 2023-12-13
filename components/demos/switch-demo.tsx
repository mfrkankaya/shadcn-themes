import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

import { Section } from "../section"

export function SwitchDemo() {
  return (
    <Section title="Switch">
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
    </Section>
  )
}
