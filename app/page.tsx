import React, { Fragment } from "react"

import { COMPONENT_DEMOS } from "@/constants/component-demos"
import { ThemeSettings } from "@/features/theme-settings/theme-settings"

export default function HomePage() {
  return (
    <>
      <ThemeSettings />

      <div className="container py-32 flex flex-col gap-16">
        {COMPONENT_DEMOS.map(({ name, component }) => (
          <Fragment key={name}>{component}</Fragment>
        ))}
      </div>
    </>
  )
}
