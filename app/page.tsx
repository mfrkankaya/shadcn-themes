import React from "react"

import { ButtonsDemo } from "@/components/demos/buttons-demo"
import { CalendarDemo } from "@/components/demos/calendar-demo"
import { CookieSettingsDemo } from "@/components/demos/cookie-settings-demo"
import { TeamMembersDemo } from "@/components/demos/team-members-demo"

export default function HomePage() {
  return (
    <div className="container py-8 flex flex-row flex-wrap gap-6">
      <TeamMembersDemo />
      <CalendarDemo />
      <CookieSettingsDemo />
      <ButtonsDemo />
    </div>
  )
}
