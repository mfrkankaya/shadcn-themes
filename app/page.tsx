import React from "react"

import { COMPONENT_DEMOS } from "@/constants/component-demos"
import Masonry, { ResponsiveMasonry } from "@/lib/masonry"
import { ClientOnly } from "@/components/client-only"
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
              {COMPONENT_DEMOS.map((demo) => (
                <React.Fragment key={demo.name}>
                  {demo.component}
                </React.Fragment>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </ClientOnly>
      </div>
    </>
  )
}
