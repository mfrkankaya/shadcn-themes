import React from "react"

import Masonry, { ResponsiveMasonry } from "@/lib/masonry"
import { ClientOnly } from "@/components/client-only"
import { AuthForm } from "@/components/demos/auth-form"
import { CalendarDemo } from "@/components/demos/calendar-demo"
import { PredefinedThemeList } from "@/features/predefined-theme-list"
import { ThemeSettings } from "@/features/theme-settings/theme-settings"

export default function HomePage() {
  return (
    <>
      <ThemeSettings />

      <div className="container py-32">
        <PredefinedThemeList />

        <ClientOnly>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 0: 1, 768: 2, 1280: 3 }}
          >
            <Masonry gutter="2rem">
              <AuthForm />
              <CalendarDemo />
            </Masonry>
          </ResponsiveMasonry>
        </ClientOnly>
      </div>
    </>
  )
}
