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
          <div className="mt-12 mb-8 sm:mb-20 flex flex-col items-center">
            <div className="mx-auto mb-8 text-center">
              <h1 className="font-bold text-4xl max-w-xs mx-auto">
                Shadcn/UI Theme Generator
              </h1>
              <p className="max-w-md mx-auto mt-2 text-muted-foreground">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
                cupiditate autem, aperiam ea, aliquid similique.
              </p>
            </div>
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
