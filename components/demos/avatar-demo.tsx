import React from "react"

import { Section } from "../section"
import { Avatar, AvatarFallback } from "../ui/avatar"

export function AvatarDemo() {
  return (
    <Section title="Avatar">
      <Avatar>
        <AvatarFallback>FK</AvatarFallback>
      </Avatar>
    </Section>
  )
}
