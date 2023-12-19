import React from "react"

import { COMPONENT_DEMOS } from "@/constants/component-demos"
import Masonry, { ResponsiveMasonry } from "@/lib/masonry"
import { ClientOnly } from "@/components/client-only"
import { ThemeGeneratorForm } from "@/features/theme-generator-form"

export default function HomePage() {
  return (
    <>
      <div className="container pt-16 pb-32">
        <ClientOnly>
          <div className="mt-4 mb-12">
            <ThemeGeneratorForm />
          </div>

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
